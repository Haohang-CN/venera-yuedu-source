class YDOK0196 extends ComicSource {
    name = "\ud83c\udf10\u6f2b\u5ba2\u6808\ud83c\udf35"
    key = "ydok_0196"
    version = "2.0.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/ydok_0196.js"

    baseUrl = "https://www.mkzhan.com/"
    searchUrl = "https://www.mkzhan.com/"
    placeholder = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png"

    searchItemSelector = ".book-list li, .novel-list li, .list li, li"
    searchNameSelector = "a, .name, .title, h3"
    searchNameAttr = "text"
    searchLinkSelector = "a"
    searchLinkAttr = "href"
    searchAuthorSelector = ".author, .writer"
    searchAuthorAttr = "text"
    searchLastSelector = ".last, .chapter"
    searchLastAttr = "text"

    detailNameSelector = "h1, .title, .bookname, .book-title"
    detailNameAttr = "text"
    detailAuthorSelector = ".author, .writer"
    detailAuthorAttr = "text"
    detailIntroSelector = ".intro, .description, .book-intro, .desc, p"
    detailIntroAttr = "text"

    chapterItemSelector = ".chapter-list a, .chapter a, .list a, a"
    chapterNameSelector = ":root"
    chapterNameAttr = "text"
    chapterLinkSelector = ":root"
    chapterLinkAttr = "href"

    contentSelector = "{'content': '$..image js:result.split(\"\\\\n\").map(x=>\\'<img src=\\\\\"\\'+x+\\'\\\\\">\\').join(\"\\\\n\")', 'imageStyle': 'FULL'}"
    contentAttr = "text"

    absUrl(u, base) {
        if (!u) return ""
        u = String(u).trim()
        if (u.startsWith("http://") || u.startsWith("https://")) return u
        if (u.startsWith("//")) return "https:" + u
        let b = base || this.baseUrl
        if (u.startsWith("/")) return b.replace(/\/$/, "") + u
        return b.replace(/\/$/, "") + "/" + u
    }

    buildSearchUrl(keyword, page) {
        let u = this.searchUrl || this.baseUrl
        let k = encodeURIComponent(keyword || "")
        let p = String(page || 1)

        u = u.split("{{key}}").join(k)
        u = u.split("{key}").join(k)
        u = u.split("{{searchKey}}").join(k)
        u = u.split("{searchKey}").join(k)
        u = u.split("searchKey").join(k)

        u = u.split("{{page}}").join(p)
        u = u.split("{page}").join(p)
        u = u.split("{{pageNum}}").join(p)
        u = u.split("{pageNum}").join(p)
        u = u.split("{{searchPage}}").join(p)
        u = u.split("{searchPage}").join(p)
        u = u.split("searchPage").join(p)

        return this.absUrl(u, this.baseUrl)
    }

    async getHtml(u, ref) {
        let res = await Network.get(u, {
            "User-Agent": "Mozilla/5.0",
            "Referer": ref || this.baseUrl
        })
        if (res.status !== 200) {
            throw "Invalid status code: " + res.status
        }
        return res.body
    }

    doc(html) {
        return new HtmlDocument(html)
    }

    qsa(root, selector) {
        try {
            if (!selector) return []
            return root.querySelectorAll(selector) || []
        } catch (e) {
            return []
        }
    }

    qs(root, selector) {
        try {
            if (!selector || selector === ":root") return root
            return root.querySelector(selector)
        } catch (e) {
            return null
        }
    }

    pick(root, selector, attr, base) {
        let el = this.qs(root, selector)
        if (!el) return ""

        if (!attr || attr === "text") {
            return String(el.text || "").trim()
        }

        if (attr === "html") {
            return String(el.innerHtml || "").trim()
        }

        let attrs = el.attributes || {}
        let v = attrs[attr] || ""

        if (!v && attr === "src") {
            v = attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
        }

        if (attr === "href" || attr === "src" || attr === "data-src" || attr === "data-original" || attr === "data-url") {
            return this.absUrl(v, base)
        }

        return String(v || "").trim()
    }

    makeComic(item, pageUrl) {
        let title = this.pick(item, this.searchNameSelector, this.searchNameAttr, pageUrl)
        let href = this.pick(item, this.searchLinkSelector, this.searchLinkAttr, pageUrl)
        let author = this.pick(item, this.searchAuthorSelector, this.searchAuthorAttr, pageUrl)
        let last = this.pick(item, this.searchLastSelector, this.searchLastAttr, pageUrl)

        if (!href) href = pageUrl
        if (!title) title = href

        return new Comic({
            id: this.absUrl(href, pageUrl),
            title: title,
            subTitle: [author, last].filter(x => x).join(" / "),
            cover: this.placeholder,
            tags: [],
            description: ""
        })
    }

    search = {
        load: async (keyword, options, page) => {
            let url = this.buildSearchUrl(keyword, page || 1)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.doc(html)

            let items = this.qsa(doc, this.searchItemSelector)
            if (items.length === 0) {
                items = this.qsa(doc, "li, .item, .book, .bookbox, .book-list li, .novel-list li, .list li")
            }

            let comics = []
            for (let item of items) {
                let c = this.makeComic(item, url)
                if (c.title && c.id) comics.push(c)
            }

            return {
                comics: comics,
                maxPage: comics.length > 0 ? (page || 1) + 1 : 1
            }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            let url = this.absUrl(id, this.baseUrl)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.doc(html)

            let title = this.pick(doc, this.detailNameSelector, this.detailNameAttr, url)
            let author = this.pick(doc, this.detailAuthorSelector, this.detailAuthorAttr, url)
            let intro = this.pick(doc, this.detailIntroSelector, this.detailIntroAttr, url)

            if (!title) title = this.pick(doc, "h1, .title, .bookname, .book-title", "text", url)
            if (!title) title = this.name

            let chapters = {}
            let chapterItems = this.qsa(doc, this.chapterItemSelector)

            if (chapterItems.length === 0) {
                chapterItems = this.qsa(doc, ".chapter-list a, .chapter a, .list a, .volume a, .ml_list a, a")
            }

            for (let item of chapterItems) {
                let cname = this.pick(item, this.chapterNameSelector, this.chapterNameAttr, url)
                let curl = this.pick(item, this.chapterLinkSelector, this.chapterLinkAttr, url)

                if (!cname) cname = String(item.text || "").trim()

                if (!curl) {
                    let attrs = item.attributes || {}
                    curl = attrs.href || ""
                }

                curl = this.absUrl(curl, url)

                if (cname && curl) {
                    chapters[curl] = cname
                }
            }

            return new ComicDetails({
                title: title,
                subTitle: author,
                cover: this.placeholder,
                description: intro,
                tags: author ? { "作者": [author] } : {},
                chapters: chapters,
                url: url
            })
        },

        loadEp: async (comicId, epId) => {
            let url = this.absUrl(epId, comicId || this.baseUrl)
            let html = await this.getHtml(url, comicId || this.baseUrl)
            let doc = this.doc(html)

            let images = []
            let nodes = this.qsa(doc, this.contentSelector)

            if (nodes.length === 0) {
                nodes = this.qsa(doc, "img")
            }

            for (let node of nodes) {
                let v = this.pick(node, ":root", this.contentAttr, url)

                if (!v) {
                    let attrs = node.attributes || {}
                    v = attrs.src || attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
                }

                v = this.absUrl(v, url)

                if (this.isImage(v)) {
                    images.push(v)
                }
            }

            if (images.length === 0) {
                images = this.findImages(html, url)
            }

            if (images.length === 0) {
                images = [this.placeholder]
            }

            return { images: images }
        },

        onImageLoad: (url, comicId, epId) => {
            return {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Referer": epId || comicId || this.baseUrl
                }
            }
        },

        onThumbnailLoad: (url) => {
            return {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Referer": this.baseUrl
                }
            }
        }
    }

    isImage(u) {
        u = String(u || "").toLowerCase()
        return u.indexOf(".jpg") > 0 || u.indexOf(".jpeg") > 0 || u.indexOf(".png") > 0 || u.indexOf(".webp") > 0 || u.indexOf(".gif") > 0
    }

    findImages(html, base) {
        let out = []
        let parts = String(html || "").split(/["'<>\s]+/)

        for (let p of parts) {
            if (this.isImage(p)) {
                out.push(this.absUrl(p, base))
            }
        }

        return Array.from(new Set(out))
    }
}
