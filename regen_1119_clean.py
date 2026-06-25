import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")

SOURCE_JSON_URL = "https://www.yckceo.com/yuedu/shuyuans/json/id/1119.json"

GITHUB_USER = "Haohang-CN"
GITHUB_REPO = "venera-yuedu-source"
BRANCH = "main"

RAW_BASE = f"https://raw.githubusercontent.com/{GITHUB_USER}/{GITHUB_REPO}/{BRANCH}"

PLACEHOLDER_BASE64 = "iVBORw0KGgoAAAANSUhEUgAAASwAAAGQCAIAAADkZkOrAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4G8BvAABeN6XXwAAAABJRU5ErkJggg=="


def download_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        raw = resp.read()
    return json.loads(raw.decode("utf-8-sig", errors="replace"))


def pick_sources(data):
    if isinstance(data, list):
        return data

    if isinstance(data, dict):
        for k in ["data", "sources", "source", "list", "items"]:
            v = data.get(k)
            if isinstance(v, list):
                return v
            if isinstance(v, dict):
                return list(v.values())

    raise RuntimeError("无法识别 1119.json")


def field(src, *keys):
    for k in keys:
        v = src.get(k)
        if v is not None and str(v).strip():
            return str(v)
    return ""


def js_str(s):
    return json.dumps(str(s or ""), ensure_ascii=True)


def rule_to_css(rule, fallback_selector, fallback_attr):
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
        s, a = one_rule_to_css(p, fallback_selector, fallback_attr)
        if s:
            selectors.append(s)
        if a:
            attr = a

    selectors = list(dict.fromkeys(selectors))

    if not selectors:
        return fallback_selector, attr

    return ", ".join(selectors), attr


def one_rule_to_css(rule, fallback_selector, fallback_attr):
    tokens = [x.strip() for x in str(rule or "").split("@") if x.strip()]
    attr = fallback_attr

    if tokens:
        last = tokens[-1]
        if last in ["href", "src", "data-src", "data-original", "data-url", "text", "html"]:
            attr = "text" if last == "text" else last
            tokens = tokens[:-1]
        elif last in ["ownText", "textNodes"]:
            attr = "text"
            tokens = tokens[:-1]

    css = []

    i = 0
    while i < len(tokens):
        t = tokens[i]

        if t.startswith("class."):
            cls = t[6:].strip()
            if i + 1 < len(tokens) and tokens[i + 1].startswith("tag."):
                tag = tokens[i + 1][4:].strip()
                css.append(f"{tag}.{cls}")
                i += 2
                continue
            css.append(f".{cls}")

        elif t.startswith("id."):
            idv = t[3:].strip()
            css.append(f"#{idv}")

        elif t.startswith("tag."):
            css.append(t[4:].strip())

        elif t.startswith("text.") or t.startswith("/") or t.startswith("$"):
            pass

        else:
            css.append(t)

        i += 1

    selector = " ".join([x for x in css if x]).strip()

    return selector or fallback_selector, attr


def make_js(index, src):
    name = field(src, "bookSourceName", "sourceName", "name") or f"源{index}"
    base_url = field(src, "bookSourceUrl", "sourceUrl", "url")
    search_url = field(src, "ruleSearchUrl") or base_url

    key = f"ydok_{index:04d}"
    cls = f"YDOK{index:04d}"
    file_name = f"{key}.js"
    update_url = f"{RAW_BASE}/{file_name}"

    placeholder = f"{RAW_BASE}/placeholder.png"

    search_item, _ = rule_to_css(field(src, "ruleSearchList"), ".book-list li, .novel-list li, .list li, li", "text")
    search_name, search_name_attr = rule_to_css(field(src, "ruleSearchName"), "a, .name, .title, h3", "text")
    search_link, search_link_attr = rule_to_css(field(src, "ruleSearchNoteUrl"), "a", "href")
    search_author, search_author_attr = rule_to_css(field(src, "ruleSearchAuthor"), ".author, .writer", "text")
    search_last, search_last_attr = rule_to_css(field(src, "ruleSearchLastChapter"), ".last, .chapter", "text")

    detail_name, detail_name_attr = rule_to_css(field(src, "ruleBookName"), "h1, .title, .bookname, .book-title", "text")
    detail_author, detail_author_attr = rule_to_css(field(src, "ruleBookAuthor"), ".author, .writer", "text")
    detail_intro, detail_intro_attr = rule_to_css(field(src, "ruleIntroduce"), ".intro, .description, .book-intro, .desc, p", "text")

    chapter_item, _ = rule_to_css(field(src, "ruleChapterList"), ".chapter-list a, .chapter a, .list a, a", "text")
    chapter_name, chapter_name_attr = rule_to_css(field(src, "ruleChapterName"), ":root", "text")
    chapter_link, chapter_link_attr = rule_to_css(field(src, "ruleChapterUrl"), ":root", "href")

    content_sel, content_attr = rule_to_css(
        field(src, "ruleBookContent", "ruleContent", "ruleContentUrl"),
        "#content, .content, .chapter-content, .read-content, p, img",
        "text"
    )

    code = f'''class {cls} extends ComicSource {{
    name = {js_str(name)}
    key = {js_str(key)}
    version = "2.0.0"
    minAppVersion = "1.6.0"
    url = {js_str(update_url)}

    baseUrl = {js_str(base_url)}
    searchUrl = {js_str(search_url)}
    placeholder = {js_str(placeholder)}

    searchItemSelector = {js_str(search_item)}
    searchNameSelector = {js_str(search_name)}
    searchNameAttr = {js_str(search_name_attr)}
    searchLinkSelector = {js_str(search_link)}
    searchLinkAttr = {js_str(search_link_attr)}
    searchAuthorSelector = {js_str(search_author)}
    searchAuthorAttr = {js_str(search_author_attr)}
    searchLastSelector = {js_str(search_last)}
    searchLastAttr = {js_str(search_last_attr)}

    detailNameSelector = {js_str(detail_name)}
    detailNameAttr = {js_str(detail_name_attr)}
    detailAuthorSelector = {js_str(detail_author)}
    detailAuthorAttr = {js_str(detail_author_attr)}
    detailIntroSelector = {js_str(detail_intro)}
    detailIntroAttr = {js_str(detail_intro_attr)}

    chapterItemSelector = {js_str(chapter_item)}
    chapterNameSelector = {js_str(chapter_name)}
    chapterNameAttr = {js_str(chapter_name_attr)}
    chapterLinkSelector = {js_str(chapter_link)}
    chapterLinkAttr = {js_str(chapter_link_attr)}

    contentSelector = {js_str(content_sel)}
    contentAttr = {js_str(content_attr)}

    absUrl(u, base) {{
        if (!u) return ""
        u = String(u).trim()
        if (u.startsWith("http://") || u.startsWith("https://")) return u
        if (u.startsWith("//")) return "https:" + u
        let b = base || this.baseUrl
        if (u.startsWith("/")) return b.replace(/\\/$/, "") + u
        return b.replace(/\\/$/, "") + "/" + u
    }}

    buildSearchUrl(keyword, page) {{
        let u = this.searchUrl || this.baseUrl
        let k = encodeURIComponent(keyword || "")
        let p = String(page || 1)

        u = u.split("{{{{key}}}}").join(k)
        u = u.split("{{key}}").join(k)
        u = u.split("{{{{searchKey}}}}").join(k)
        u = u.split("{{searchKey}}").join(k)
        u = u.split("searchKey").join(k)

        u = u.split("{{{{page}}}}").join(p)
        u = u.split("{{page}}").join(p)
        u = u.split("{{{{pageNum}}}}").join(p)
        u = u.split("{{pageNum}}").join(p)
        u = u.split("{{{{searchPage}}}}").join(p)
        u = u.split("{{searchPage}}").join(p)
        u = u.split("searchPage").join(p)

        return this.absUrl(u, this.baseUrl)
    }}

    async getHtml(u, ref) {{
        let res = await Network.get(u, {{
            "User-Agent": "Mozilla/5.0",
            "Referer": ref || this.baseUrl
        }})
        if (res.status !== 200) {{
            throw "Invalid status code: " + res.status
        }}
        return res.body
    }}

    doc(html) {{
        return new HtmlDocument(html)
    }}

    qsa(root, selector) {{
        try {{
            if (!selector) return []
            return root.querySelectorAll(selector) || []
        }} catch (e) {{
            return []
        }}
    }}

    qs(root, selector) {{
        try {{
            if (!selector || selector === ":root") return root
            return root.querySelector(selector)
        }} catch (e) {{
            return null
        }}
    }}

    pick(root, selector, attr, base) {{
        let el = this.qs(root, selector)
        if (!el) return ""

        if (!attr || attr === "text") {{
            return String(el.text || "").trim()
        }}

        if (attr === "html") {{
            return String(el.innerHtml || "").trim()
        }}

        let attrs = el.attributes || {{}}
        let v = attrs[attr] || ""

        if (!v && attr === "src") {{
            v = attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
        }}

        if (attr === "href" || attr === "src" || attr === "data-src" || attr === "data-original" || attr === "data-url") {{
            return this.absUrl(v, base)
        }}

        return String(v || "").trim()
    }}

    makeComic(item, pageUrl) {{
        let title = this.pick(item, this.searchNameSelector, this.searchNameAttr, pageUrl)
        let href = this.pick(item, this.searchLinkSelector, this.searchLinkAttr, pageUrl)
        let author = this.pick(item, this.searchAuthorSelector, this.searchAuthorAttr, pageUrl)
        let last = this.pick(item, this.searchLastSelector, this.searchLastAttr, pageUrl)

        if (!href) href = pageUrl
        if (!title) title = href

        return new Comic({{
            id: this.absUrl(href, pageUrl),
            title: title,
            subTitle: [author, last].filter(x => x).join(" / "),
            cover: this.placeholder,
            tags: [],
            description: ""
        }})
    }}

    search = {{
        load: async (keyword, options, page) => {{
            let url = this.buildSearchUrl(keyword, page || 1)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.doc(html)

            let items = this.qsa(doc, this.searchItemSelector)
            if (items.length === 0) {{
                items = this.qsa(doc, "li, .item, .book, .bookbox, .book-list li, .novel-list li, .list li")
            }}

            let comics = []
            for (let item of items) {{
                let c = this.makeComic(item, url)
                if (c.title && c.id) comics.push(c)
            }}

            return {{
                comics: comics,
                maxPage: comics.length > 0 ? (page || 1) + 1 : 1
            }}
        }},
        optionList: []
    }}

    comic = {{
        loadInfo: async (id) => {{
            let url = this.absUrl(id, this.baseUrl)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.doc(html)

            let title = this.pick(doc, this.detailNameSelector, this.detailNameAttr, url)
            let author = this.pick(doc, this.detailAuthorSelector, this.detailAuthorAttr, url)
            let intro = this.pick(doc, this.detailIntroSelector, this.detailIntroAttr, url)

            if (!title) title = this.pick(doc, "h1, .title, .bookname, .book-title", "text", url)
            if (!title) title = this.name

            let chapters = {{}}
            let chapterItems = this.qsa(doc, this.chapterItemSelector)

            if (chapterItems.length === 0) {{
                chapterItems = this.qsa(doc, ".chapter-list a, .chapter a, .list a, .volume a, .ml_list a, a")
            }}

            for (let item of chapterItems) {{
                let cname = this.pick(item, this.chapterNameSelector, this.chapterNameAttr, url)
                let curl = this.pick(item, this.chapterLinkSelector, this.chapterLinkAttr, url)

                if (!cname) cname = String(item.text || "").trim()

                if (!curl) {{
                    let attrs = item.attributes || {{}}
                    curl = attrs.href || ""
                }}

                curl = this.absUrl(curl, url)

                if (cname && curl) {{
                    chapters[curl] = cname
                }}
            }}

            return new ComicDetails({{
                title: title,
                subTitle: author,
                cover: this.placeholder,
                description: intro,
                tags: author ? {{ "作者": [author] }} : {{}},
                chapters: chapters,
                url: url
            }})
        }},

        loadEp: async (comicId, epId) => {{
            let url = this.absUrl(epId, comicId || this.baseUrl)
            let html = await this.getHtml(url, comicId || this.baseUrl)
            let doc = this.doc(html)

            let images = []
            let nodes = this.qsa(doc, this.contentSelector)

            if (nodes.length === 0) {{
                nodes = this.qsa(doc, "img")
            }}

            for (let node of nodes) {{
                let v = this.pick(node, ":root", this.contentAttr, url)

                if (!v) {{
                    let attrs = node.attributes || {{}}
                    v = attrs.src || attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
                }}

                v = this.absUrl(v, url)

                if (this.isImage(v)) {{
                    images.push(v)
                }}
            }}

            if (images.length === 0) {{
                images = this.findImages(html, url)
            }}

            if (images.length === 0) {{
                images = [this.placeholder]
            }}

            return {{ images: images }}
        }},

        onImageLoad: (url, comicId, epId) => {{
            return {{
                headers: {{
                    "User-Agent": "Mozilla/5.0",
                    "Referer": epId || comicId || this.baseUrl
                }}
            }}
        }},

        onThumbnailLoad: (url) => {{
            return {{
                headers: {{
                    "User-Agent": "Mozilla/5.0",
                    "Referer": this.baseUrl
                }}
            }}
        }}
    }}

    isImage(u) {{
        u = String(u || "").toLowerCase()
        return u.indexOf(".jpg") > 0 || u.indexOf(".jpeg") > 0 || u.indexOf(".png") > 0 || u.indexOf(".webp") > 0 || u.indexOf(".gif") > 0
    }}

    findImages(html, base) {{
        let out = []
        let parts = String(html || "").split(/["'<>\\s]+/)

        for (let p of parts) {{
            if (this.isImage(p)) {{
                out.push(this.absUrl(p, base))
            }}
        }}

        return Array.from(new Set(out))
    }}
}}
'''
    return file_name, key, name, code


def main():
    import base64

    # 删除旧生成文件，保留 git 仓库本身
    for p in ROOT.glob("yuedu_*.js"):
        p.unlink()
    for p in ROOT.glob("ydok_*.js"):
        p.unlink()
    for p in ROOT.glob("index*.json"):
        p.unlink()

    (ROOT / "placeholder.png").write_bytes(base64.b64decode(PLACEHOLDER_BASE64))

    data = download_json(SOURCE_JSON_URL)
    sources = pick_sources(data)

    index = []

    for i, src in enumerate(sources, 1):
        file_name, key, name, code = make_js(i, src)
        (ROOT / file_name).write_text(code, encoding="utf-8")

        index.append({
            "name": name,
            "url": f"{RAW_BASE}/{file_name}?v=clean2",
            "key": key,
            "version": "2.0.0",
            "description": "1119书源转换，干净版"
        })

        print(f"[{i}/{len(sources)}] {name} -> {file_name}")

    # 重点：这里必须 ensure_ascii=True，避免中文变成 ????
    (ROOT / "index_fixed.json").write_text(
        json.dumps(index, ensure_ascii=True, separators=(",", ":")),
        encoding="ascii"
    )

    print("完成：index_fixed.json")


if __name__ == "__main__":
    main()