
class Yuedu0025 extends ComicSource {
    name = "\u6f2b\u753b\u642c\u8fd0\uff08\u4f18+\uff09"
    key = "yuedu_0025"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/yuedu_0025.js"

    baseUrl = "https://www.antbyw.com"
    searchUrl = "https://www.antbyw.com"

    searchItemSelector = ".book-list li, .novel-list li, .list li, li"
    searchNameSelector = "a, .name, .title, h3"
    searchNameAttr = "text"
    searchAuthorSelector = ".author, .writer"
    searchAuthorAttr = "text"
    searchCoverSelector = "img"
    searchCoverAttr = "src"
    searchLinkSelector = "a"
    searchLinkAttr = "href"
    searchLastSelector = ".last, .chapter"
    searchLastAttr = "text"

    detailNameSelector = "h1, .title, .bookname, .book-title"
    detailNameAttr = "text"
    detailAuthorSelector = ".author, .writer"
    detailAuthorAttr = "text"
    detailCoverSelector = "img"
    detailCoverAttr = "src"
    detailIntroSelector = ".intro, .description, .book-intro, .desc, p"
    detailIntroAttr = "text"
    chapterItemSelector = ".chapter-list a, .chapter a, .list a, a"
    chapterNameSelector = ":root"
    chapterNameAttr = "text"
    chapterLinkSelector = ":root"
    chapterLinkAttr = "href"

    contentSelector = "{'content': '<js>\\nresult=String(src).trim().replace(/\\\\s+/g,\\'\\').match(/(let, var, const)+urls=(\\\\[.*?\\\\])/g)[0].replace(/(let, const)+urls=/g,\"\")\\n\\nresult=JSON.parse(result).map(n=>`<img src=\"${n}\" />`).join(\"\")\\n</js>'}"
    contentAttr = "text"

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
            cover: "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png",
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
                cover: "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png",
                description: intro,
                tags: author ? { "浣滆€?: [author] } : {},
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
                text = "鏈兘瑙ｆ瀽姝ｆ枃鍐呭銆俓n\n褰撳墠绔犺妭鍦板潃锛歕n" + url
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

        return pages.length ? pages : ["data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200"><text x="40" y="80" font-size="28">绌哄唴瀹?/text></svg>')]
    }

    escapeXml(s) {
        return String(s || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
    }
}

