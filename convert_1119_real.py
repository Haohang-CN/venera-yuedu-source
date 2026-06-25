import json
import re
import shutil
import urllib.request
from pathlib import Path

SOURCE_JSON_URL = "https://www.yckceo.com/yuedu/shuyuans/json/id/1119.json"

GITHUB_USER = "Haohang-CN"
GITHUB_REPO = "venera-yuedu-source"
BRANCH = "main"

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")
RAW_BASE = f"https://raw.githubusercontent.com/{GITHUB_USER}/{GITHUB_REPO}/{BRANCH}"


def download_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        raw = resp.read()
    return json.loads(raw.decode("utf-8-sig", errors="replace"))


def pick_sources(data):
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        for key in ["data", "sources", "source", "list", "items"]:
            value = data.get(key)
            if isinstance(value, list):
                return value
            if isinstance(value, dict):
                return list(value.values())
    raise RuntimeError("无法识别 JSON 结构")


def get(src, *keys):
    for key in keys:
        value = src.get(key)
        if value is not None and str(value).strip():
            return str(value)
    return ""


def js_str(value):
    return json.dumps(str(value or ""), ensure_ascii=True)


def clean_name(name):
    name = re.sub(r"[^\w\u4e00-\u9fff.-]+", "_", name)
    return name[:40] or "source"


def convert_rule(rule, fallback_selector="", fallback_attr="text"):
    rule = str(rule or "").strip()
    if not rule:
        return fallback_selector, fallback_attr

    if rule.startswith("@js") or rule.startswith("<js") or "java." in rule:
        return fallback_selector, fallback_attr

    rule = rule.split("##", 1)[0].strip()

    parts = []
    for sep in ["||", "|"]:
        if sep in rule:
            parts = [x.strip() for x in rule.split(sep) if x.strip()]
            break
    if not parts:
        parts = [rule]

    selectors = []
    attr = fallback_attr

    for p in parts:
        s, a = convert_one_rule(p, fallback_selector, fallback_attr)
        if s:
            selectors.append(s)
        if a and a != "text":
            attr = a

    selectors = list(dict.fromkeys(selectors))
    selector = ", ".join(selectors) if selectors else fallback_selector
    return selector, attr


def convert_one_rule(rule, fallback_selector="", fallback_attr="text"):
    rule = str(rule or "").strip()
    if not rule:
        return fallback_selector, fallback_attr

    tokens = [x.strip() for x in rule.split("@") if x.strip()]
    attr = fallback_attr

    attr_words = {
        "href": "href",
        "src": "src",
        "data-src": "data-src",
        "data-original": "data-original",
        "data-url": "data-url",
        "text": "text",
        "ownText": "text",
        "textNodes": "text",
        "html": "html",
    }

    if tokens and tokens[-1] in attr_words:
        attr = attr_words[tokens[-1]]
        tokens = tokens[:-1]

    css_parts = []
    alt = []

    i = 0
    while i < len(tokens):
        t = tokens[i]

        if t.startswith("class."):
            cls = t[6:].strip()
            if i + 1 < len(tokens) and tokens[i + 1].startswith("tag."):
                tag = tokens[i + 1][4:].strip()
                alt.append(f"{tag}.{cls}")
                alt.append(f".{cls} {tag}")
                i += 2
                continue
            css_parts.append(f".{cls}")

        elif t.startswith("id."):
            idv = t[3:].strip()
            if i + 1 < len(tokens) and tokens[i + 1].startswith("tag."):
                tag = tokens[i + 1][4:].strip()
                alt.append(f"{tag}#{idv}")
                alt.append(f"#{idv} {tag}")
                i += 2
                continue
            css_parts.append(f"#{idv}")

        elif t.startswith("tag."):
            css_parts.append(t[4:].strip())

        elif t.startswith("text."):
            pass

        elif t.startswith("/") or t.startswith("$"):
            return fallback_selector, attr

        else:
            css_parts.append(t)

        i += 1

    if alt:
        return ", ".join(alt), attr

    selector = " ".join([x for x in css_parts if x]).strip()
    return selector or fallback_selector, attr


JS_TEMPLATE = r'''
class __CLASS_NAME__ extends ComicSource {
    name = __NAME__
    key = __KEY__
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = __UPDATE_URL__

    baseUrl = __BASE_URL__
    searchUrl = __SEARCH_URL__

    searchItemSelector = __SEARCH_ITEM_SELECTOR__
    searchNameSelector = __SEARCH_NAME_SELECTOR__
    searchNameAttr = __SEARCH_NAME_ATTR__
    searchAuthorSelector = __SEARCH_AUTHOR_SELECTOR__
    searchAuthorAttr = __SEARCH_AUTHOR_ATTR__
    searchCoverSelector = __SEARCH_COVER_SELECTOR__
    searchCoverAttr = __SEARCH_COVER_ATTR__
    searchLinkSelector = __SEARCH_LINK_SELECTOR__
    searchLinkAttr = __SEARCH_LINK_ATTR__
    searchLastSelector = __SEARCH_LAST_SELECTOR__
    searchLastAttr = __SEARCH_LAST_ATTR__

    detailNameSelector = __DETAIL_NAME_SELECTOR__
    detailNameAttr = __DETAIL_NAME_ATTR__
    detailAuthorSelector = __DETAIL_AUTHOR_SELECTOR__
    detailAuthorAttr = __DETAIL_AUTHOR_ATTR__
    detailCoverSelector = __DETAIL_COVER_SELECTOR__
    detailCoverAttr = __DETAIL_COVER_ATTR__
    detailIntroSelector = __DETAIL_INTRO_SELECTOR__
    detailIntroAttr = __DETAIL_INTRO_ATTR__
    chapterItemSelector = __CHAPTER_ITEM_SELECTOR__
    chapterNameSelector = __CHAPTER_NAME_SELECTOR__
    chapterNameAttr = __CHAPTER_NAME_ATTR__
    chapterLinkSelector = __CHAPTER_LINK_SELECTOR__
    chapterLinkAttr = __CHAPTER_LINK_ATTR__

    contentSelector = __CONTENT_SELECTOR__
    contentAttr = __CONTENT_ATTR__

    headers(ref) {
        return {
            "User-Agent": "Mozilla/5.0",
            "Referer": ref || this.baseUrl
        }
    }

    absUrl(url, base) {
        if (!url) return ""
        url = String(url).trim()
        if (url.startsWith("http://") || url.startsWith("https://")) return url
        if (url.startsWith("//")) return "https:" + url
        let b = base || this.baseUrl
        if (url.startsWith("/")) return b.replace(/\/$/, "") + url
        return b.replace(/\/$/, "") + "/" + url
    }

    buildSearchUrl(keyword, page) {
        let u = this.searchUrl || this.baseUrl
        let k = encodeURIComponent(keyword)
        let p = String(page || 1)

        u = u.replace(/\{\{key\}\}/g, k)
             .replace(/\{key\}/g, k)
             .replace(/\{\{searchKey\}\}/g, k)
             .replace(/\{searchKey\}/g, k)
             .replace(/searchKey/g, k)
             .replace(/\{\{page\}\}/g, p)
             .replace(/\{page\}/g, p)
             .replace(/\{\{pageNum\}\}/g, p)
             .replace(/\{pageNum\}/g, p)
             .replace(/\{\{searchPage\}\}/g, p)
             .replace(/\{searchPage\}/g, p)
             .replace(/searchPage/g, p)

        return this.absUrl(u, this.baseUrl)
    }

    async getHtml(url, ref) {
        let res = await Network.get(url, this.headers(ref))
        if (res.status < 200 || res.status >= 400) {
            throw "HTTP " + res.status + ": " + url
        }
        return res.body
    }

    qsa(root, selector) {
        if (!selector) return []
        try {
            return Array.from(root.querySelectorAll(selector))
        } catch (e) {
            return []
        }
    }

    qs(root, selector) {
        if (!selector || selector === ":root") return root
        try {
            return root.querySelector(selector)
        } catch (e) {
            return null
        }
    }

    pick(root, selector, attr, base) {
        let el = this.qs(root, selector)
        if (!el) return ""

        if (!attr || attr === "text") return (el.text || "").trim()
        if (attr === "html") return (el.innerHtml || "").trim()

        let attrs = el.attributes || {}
        let v = attrs[attr] || ""

        if (!v && attr === "src") {
            v = attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
        }

        if (["href", "src", "data-src", "data-original", "data-url"].includes(attr)) {
            return this.absUrl(v, base)
        }

        return String(v || "").trim()
    }

    parseDoc(html) {
        return new HtmlDocument(html)
    }

    makeComicFromItem(item, pageUrl) {
        let title = this.pick(item, this.searchNameSelector, this.searchNameAttr, pageUrl)
        let href = this.pick(item, this.searchLinkSelector, this.searchLinkAttr, pageUrl)
        let cover = this.pick(item, this.searchCoverSelector, this.searchCoverAttr, pageUrl)
        let author = this.pick(item, this.searchAuthorSelector, this.searchAuthorAttr, pageUrl)
        let last = this.pick(item, this.searchLastSelector, this.searchLastAttr, pageUrl)

        if (!href) href = pageUrl
        if (!title) title = href

        return new Comic({
            id: this.absUrl(href, pageUrl),
            title: title,
            subTitle: [author, last].filter(x => x).join(" / "),
            cover: cover,
            tags: [],
            description: ""
        })
    }

    search = {
        load: async (keyword, options, page) => {
            let url = this.buildSearchUrl(keyword, page || 1)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.parseDoc(html)

            let items = this.qsa(doc, this.searchItemSelector)
            if (items.length === 0) {
                items = this.qsa(doc, "li, .item, .book, .bookbox, .book-list li, .novel-list li, .list li")
            }

            let comics = []
            for (let item of items) {
                let c = this.makeComicFromItem(item, url)
                if (c.title && c.id) comics.push(c)
            }

            doc.dispose()
            return { comics: comics, maxPage: comics.length > 0 ? (page || 1) + 1 : 1 }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            let url = this.absUrl(id, this.baseUrl)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.parseDoc(html)

            let title = this.pick(doc, this.detailNameSelector, this.detailNameAttr, url)
            let author = this.pick(doc, this.detailAuthorSelector, this.detailAuthorAttr, url)
            let cover = this.pick(doc, this.detailCoverSelector, this.detailCoverAttr, url)
            let intro = this.pick(doc, this.detailIntroSelector, this.detailIntroAttr, url)

            if (!title) title = this.pick(doc, "h1, .title, .bookname, .book-title", "text", url)

            let chapters = {}
            let chapterItems = this.qsa(doc, this.chapterItemSelector)
            if (chapterItems.length === 0) {
                chapterItems = this.qsa(doc, ".chapter-list a, .chapter a, .list a, .volume a, .ml_list a, a")
            }

            for (let item of chapterItems) {
                let cname = this.pick(item, this.chapterNameSelector, this.chapterNameAttr, url)
                let curl = this.pick(item, this.chapterLinkSelector, this.chapterLinkAttr, url)

                if (!cname) cname = (item.text || "").trim()
                if (!curl) {
                    let attrs = item.attributes || {}
                    curl = attrs.href || ""
                }

                curl = this.absUrl(curl, url)

                if (cname && curl && !chapters[curl]) {
                    chapters[curl] = cname
                }
            }

            doc.dispose()

            return new ComicDetails({
                title: title || this.name,
                subTitle: author,
                cover: cover,
                description: intro,
                tags: author ? { "作者": [author] } : {},
                chapters: chapters,
                url: url
            })
        },

        loadEp: async (comicId, epId) => {
            let url = this.absUrl(epId, comicId || this.baseUrl)
            let html = await this.getHtml(url, comicId || this.baseUrl)
            let doc = this.parseDoc(html)

            let images = []
            let texts = []

            let nodes = this.qsa(doc, this.contentSelector)
            if (nodes.length === 0) {
                nodes = this.qsa(doc, "#content, .content, .chapter-content, .read-content, .book-content, .novelcontent, article, p, img")
            }

            for (let node of nodes) {
                let val = this.pick(node, ":root", this.contentAttr, url)

                if (!val && node.localName === "img") {
                    let attrs = node.attributes || {}
                    val = attrs.src || attrs["data-src"] || attrs["data-original"] || ""
                    val = this.absUrl(val, url)
                }

                if (!val) val = (node.text || "").trim()

                if (this.looksLikeImage(val)) {
                    images.push(this.absUrl(val, url))
                } else if (val && val.length > 3) {
                    texts.push(val)
                }
            }

            if (images.length === 0) {
                let found = this.extractImageUrls(html)
                images = images.concat(found.map(x => this.absUrl(x, url)))
            }

            if (images.length > 0) {
                doc.dispose()
                return { images: images }
            }

            let text = texts.join("\n\n").replace(/\n{3,}/g, "\n\n").trim()
            if (!text) {
                text = "未能解析正文内容。\n\n当前章节地址：\n" + url
            }

            doc.dispose()
            return { images: this.textToSvgPages(text) }
        },

        onImageLoad: (url, comicId, epId) => {
            return {
                headers: this.headers(epId || comicId || this.baseUrl)
            }
        }
    }

    looksLikeImage(s) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(String(s || ""))
    }

    extractImageUrls(html) {
        let out = []
        let reg = /https?:\/\/[^"'<> ]+\.(?:jpg|jpeg|png|webp|gif)(?:\?[^"'<> ]*)?/ig
        let m
        while ((m = reg.exec(html)) !== null) {
            if (!out.includes(m[0])) out.push(m[0])
        }
        return out
    }

    textToSvgPages(text) {
        let lines = []
        let clean = String(text || "").replace(/\r/g, "").split("\n")

        for (let para of clean) {
            para = para.trim()
            if (!para) {
                lines.push("")
                continue
            }

            let max = 24
            for (let i = 0; i < para.length; i += max) {
                lines.push(para.slice(i, i + max))
            }
        }

        let pages = []
        let perPage = 28

        for (let i = 0; i < lines.length; i += perPage) {
            let part = lines.slice(i, i + perPage)
            let tspans = part.map((line, idx) => {
                let y = 70 + idx * 34
                return `<text x="40" y="${y}" font-size="26" fill="#222">${this.escapeXml(line)}</text>`
            }).join("")

            let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200">
<rect width="100%" height="100%" fill="#f7f3e8"/>
${tspans}
</svg>`

            pages.push("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg))
        }

        return pages.length ? pages : ["data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200"><text x="40" y="80" font-size="28">空内容</text></svg>')]
    }

    escapeXml(s) {
        return String(s || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
    }
}
'''


def make_js(index, src):
    name = get(src, "bookSourceName", "sourceName", "name") or f"源{index}"
    base_url = get(src, "bookSourceUrl", "sourceUrl", "url")
    key = f"yuedu_{index:04d}"
    class_name = f"Yuedu{index:04d}"
    file_name = f"{key}.js"
    update_url = f"{RAW_BASE}/{file_name}"

    search_url = get(src, "ruleSearchUrl") or base_url

    search_item, _ = convert_rule(get(src, "ruleSearchList"), ".book-list li, .novel-list li, .list li, li", "text")
    search_name, search_name_attr = convert_rule(get(src, "ruleSearchName"), "a, .name, .title, h3", "text")
    search_author, search_author_attr = convert_rule(get(src, "ruleSearchAuthor"), ".author, .writer", "text")
    search_cover, search_cover_attr = convert_rule(get(src, "ruleSearchCoverUrl"), "img", "src")
    search_link, search_link_attr = convert_rule(get(src, "ruleSearchNoteUrl"), "a", "href")
    search_last, search_last_attr = convert_rule(get(src, "ruleSearchLastChapter"), ".last, .chapter", "text")

    detail_name, detail_name_attr = convert_rule(get(src, "ruleBookName"), "h1, .title, .bookname, .book-title", "text")
    detail_author, detail_author_attr = convert_rule(get(src, "ruleBookAuthor"), ".author, .writer", "text")
    detail_cover, detail_cover_attr = convert_rule(get(src, "ruleCoverUrl"), "img", "src")
    detail_intro, detail_intro_attr = convert_rule(get(src, "ruleIntroduce"), ".intro, .description, .book-intro, .desc, p", "text")

    chapter_item, _ = convert_rule(get(src, "ruleChapterList"), ".chapter-list a, .chapter a, .list a, a", "text")
    chapter_name, chapter_name_attr = convert_rule(get(src, "ruleChapterName"), ":root", "text")
    chapter_link, chapter_link_attr = convert_rule(get(src, "ruleChapterUrl"), ":root", "href")

    content_sel, content_attr = convert_rule(get(src, "ruleBookContent", "ruleContent", "ruleContentUrl"), "#content, .content, .chapter-content, .read-content, p, img", "text")

    replacements = {
        "__CLASS_NAME__": class_name,
        "__NAME__": js_str(name),
        "__KEY__": js_str(key),
        "__UPDATE_URL__": js_str(update_url),
        "__BASE_URL__": js_str(base_url),
        "__SEARCH_URL__": js_str(search_url),

        "__SEARCH_ITEM_SELECTOR__": js_str(search_item),
        "__SEARCH_NAME_SELECTOR__": js_str(search_name),
        "__SEARCH_NAME_ATTR__": js_str(search_name_attr),
        "__SEARCH_AUTHOR_SELECTOR__": js_str(search_author),
        "__SEARCH_AUTHOR_ATTR__": js_str(search_author_attr),
        "__SEARCH_COVER_SELECTOR__": js_str(search_cover),
        "__SEARCH_COVER_ATTR__": js_str(search_cover_attr),
        "__SEARCH_LINK_SELECTOR__": js_str(search_link),
        "__SEARCH_LINK_ATTR__": js_str(search_link_attr),
        "__SEARCH_LAST_SELECTOR__": js_str(search_last),
        "__SEARCH_LAST_ATTR__": js_str(search_last_attr),

        "__DETAIL_NAME_SELECTOR__": js_str(detail_name),
        "__DETAIL_NAME_ATTR__": js_str(detail_name_attr),
        "__DETAIL_AUTHOR_SELECTOR__": js_str(detail_author),
        "__DETAIL_AUTHOR_ATTR__": js_str(detail_author_attr),
        "__DETAIL_COVER_SELECTOR__": js_str(detail_cover),
        "__DETAIL_COVER_ATTR__": js_str(detail_cover_attr),
        "__DETAIL_INTRO_SELECTOR__": js_str(detail_intro),
        "__DETAIL_INTRO_ATTR__": js_str(detail_intro_attr),
        "__CHAPTER_ITEM_SELECTOR__": js_str(chapter_item),
        "__CHAPTER_NAME_SELECTOR__": js_str(chapter_name),
        "__CHAPTER_NAME_ATTR__": js_str(chapter_name_attr),
        "__CHAPTER_LINK_SELECTOR__": js_str(chapter_link),
        "__CHAPTER_LINK_ATTR__": js_str(chapter_link_attr),

        "__CONTENT_SELECTOR__": js_str(content_sel),
        "__CONTENT_ATTR__": js_str(content_attr),
    }

    code = JS_TEMPLATE
    for k, v in replacements.items():
        code = code.replace(k, v)

    return file_name, key, name, code


def main():
    for f in ROOT.glob("yuedu_*.js"):
        f.unlink()

    data = download_json(SOURCE_JSON_URL)
    sources = pick_sources(data)

    index = []

    for i, src in enumerate(sources, 1):
        file_name, key, name, code = make_js(i, src)
        (ROOT / file_name).write_text(code, encoding="utf-8")

        index.append({
            "name": name,
            "url": f"{RAW_BASE}/{file_name}",
            "key": key,
            "version": "1.0.0",
            "description": "由阅读书源转换，支持图片正文或文字转SVG阅读"
        })

        print(f"[{i}/{len(sources)}] {name} -> {file_name}")

    (ROOT / "index.json").write_text(
        json.dumps(index, ensure_ascii=True, separators=(",", ":")),
        encoding="ascii"
    )

    print("完成，生成源数量:", len(index))


if __name__ == "__main__":
    main()