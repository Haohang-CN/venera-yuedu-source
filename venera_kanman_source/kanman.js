class KanmanCustom extends ComicSource {
    name = "看漫网"
    key = "kanman_custom"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://cdn.jsdelivr.net/gh/Haohang-CN/venera-yuedu-source@main/kanman.js"

    baseUrl = "https://www.kanman.com"
    placeholder = "https://cdn.jsdelivr.net/gh/Haohang-CN/venera-yuedu-source@main/placeholder.png"

    headers(ref) {
        return {
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
            "Referer": ref || this.baseUrl + "/"
        }
    }

    absUrl(u, base) {
        if (!u) return ""
        u = String(u).trim()
        if (!u) return ""
        let lower = u.toLowerCase()
        if (lower === "#" || lower.startsWith("#") || lower.startsWith("javascript:") || lower.startsWith("mailto:") || lower.startsWith("tel:")) return ""
        if (lower.startsWith("http://") || lower.startsWith("https://")) return u
        if (u.startsWith("//")) return "https:" + u
        let b = base || this.baseUrl
        if (u.startsWith("/")) {
            let m = b.match(/^(https?:\/\/[^\/]+)/)
            return (m ? m[1] : this.baseUrl) + u
        }
        return b.replace(/\/[^\/]*$/, "/") + u
    }

    async getHtml(url, ref) {
        let res = await Network.get(url, this.headers(ref))
        if (res.status !== 200) throw `Invalid status code: ${res.status}`
        return res.body
    }

    qs(root, selector) {
        try { return root.querySelector(selector) } catch(e) { return null }
    }

    qsa(root, selector) {
        try { return root.querySelectorAll(selector) || [] } catch(e) { return [] }
    }

    text(el) {
        if (!el) return ""
        return String(el.text || "").replace(/\s+/g, " ").trim()
    }

    attr(el, name) {
        if (!el) return ""
        let a = el.attributes || {}
        return a[name] || a["data-" + name] || ""
    }

    imageFrom(el, base) {
        if (!el) return ""
        let img = el.localName === "img" ? el : this.qs(el, "img")
        let u = this.attr(img, "src") || this.attr(img, "data-src") || this.attr(img, "data-original") || this.attr(img, "data-url")
        return this.absUrl(u, base)
    }

    comicIdFromUrl(url) {
        if (!url) return ""
        let m = String(url).match(/kanman\.com\/(\d+)\/?/) || String(url).match(/^\/?(\d+)\/?$/)
        return m ? m[1] : ""
    }

    makeComicFromAnchor(a, base) {
        let href = this.absUrl(this.attr(a, "href"), base)
        let id = this.comicIdFromUrl(href)
        if (!id) return null
        let title = this.text(a)
        let parent = a.parent
        if (!title && parent) title = this.text(this.qs(parent, "h3, .title, .comic-title, .txtA, a"))
        if (!title) title = this.attr(this.qs(parent || a, "img"), "alt")
        if (!title) return null
        let cover = this.imageFrom(parent || a, base) || this.placeholder
        return new Comic({ id: id, title: title, subTitle: "", cover: cover, tags: [], description: "" })
    }

    parseComicList(doc, base) {
        let map = {}
        let result = []
        let anchors = this.qsa(doc, "a[href]")
        for (let a of anchors) {
            let href = this.attr(a, "href")
            if (!/\/\d+\/?$/.test(href) && !/^https?:\/\/www\.kanman\.com\/\d+\/?$/.test(href)) continue
            let c = this.makeComicFromAnchor(a, base)
            if (c && !map[c.id]) {
                map[c.id] = true
                result.push(c)
            }
        }
        return result
    }

    explore = [{
        title: "首页",
        type: "singlePageWithMultiPart",
        load: async () => {
            let html = await this.getHtml(this.baseUrl + "/", this.baseUrl + "/")
            let doc = new HtmlDocument(html)
            let comics = this.parseComicList(doc, this.baseUrl + "/")
            doc.dispose()
            return { "首页推荐": comics.slice(0, 60) }
        }
    }]

    search = {
        load: async (keyword, options, page) => {
            let q = encodeURIComponent(keyword || "")
            let urls = [
                `${this.baseUrl}/search?keyword=${q}`,
                `${this.baseUrl}/search/?keyword=${q}`,
                `${this.baseUrl}/search?keywords=${q}`,
                `${this.baseUrl}/search/?keywords=${q}`,
                `${this.baseUrl}/s/${q}/`
            ]
            for (let url of urls) {
                try {
                    let html = await this.getHtml(url, this.baseUrl + "/")
                    let doc = new HtmlDocument(html)
                    let comics = this.parseComicList(doc, url)
                    doc.dispose()
                    if (comics.length > 0) return { comics: comics, maxPage: 1 }
                } catch(e) {}
            }
            return { comics: [], maxPage: 1 }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            id = this.comicIdFromUrl(id) || id
            let url = `${this.baseUrl}/${id}/`
            let html = await this.getHtml(url, this.baseUrl + "/")
            let doc = new HtmlDocument(html)

            let title = this.text(this.qs(doc, "h1")) || this.text(this.qs(doc, ".title, .comic-title")) || id
            let cover = this.imageFrom(this.qs(doc, ".comic-cover, .cover, .pic, .detail, .info") || doc, url) || this.placeholder
            let desc = this.text(this.qs(doc, "#full-des, .intro, .comic-intro, .detail-intro, .summary, .desc"))
            let chapters = {}
            let as = this.qsa(doc, "a[href]")
            for (let a of as) {
                let href = this.attr(a, "href")
                if (!href) continue
                if (href.toLowerCase().startsWith("javascript:")) continue
                let abs = this.absUrl(href, url)
                if (!abs) continue
                if (abs.indexOf(`/${id}/`) < 0 || abs.indexOf(".html") < 0) continue
                let name = this.text(a)
                if (!name) continue
                chapters[abs] = name
            }
            doc.dispose()
            return new ComicDetails({
                title: title,
                cover: cover,
                description: desc,
                tags: {},
                chapters: chapters,
                url: url
            })
        },

        loadEp: async (comicId, epId) => {
            let url = this.absUrl(epId, this.baseUrl + "/")
            let html = await this.getHtml(url, comicId ? `${this.baseUrl}/${comicId}/` : this.baseUrl + "/")
            let images = []

            // 1. 常见 JS 变量：chapterImages + chapterPath
            let m1 = html.match(/chapterImages\s*=\s*(\[[\s\S]*?\])\s*;/)
            let m2 = html.match(/chapterPath\s*=\s*["']([^"']*)["']/)
            if (m1) {
                try {
                    let arr = JSON.parse(m1[1].replace(/'/g, '"'))
                    let path = m2 ? m2[1] : ""
                    for (let img of arr) {
                        images.push(this.absUrl(path + String(img).replace(/\\/g, ""), url))
                    }
                } catch(e) {}
            }

            // 2. HTML img 标签
            if (images.length === 0) {
                let doc = new HtmlDocument(html)
                for (let img of this.qsa(doc, "img")) {
                    let u = this.attr(img, "data-src") || this.attr(img, "data-original") || this.attr(img, "src")
                    u = this.absUrl(u, url)
                    if (this.isImage(u)) images.push(u)
                }
                doc.dispose()
            }

            // 3. 从脚本里兜底提取所有图片 URL
            if (images.length === 0) {
                let reg = /https?:\\?\/\\?\/[^"'<>\s]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'<>\s]*)?/ig
                let m
                while ((m = reg.exec(html)) !== null) {
                    let u = m[0].replace(/\\\//g, "/")
                    if (this.isImage(u)) images.push(u)
                }
            }

            images = Array.from(new Set(images)).filter(x => this.isImage(x) && x.indexOf("javascript:") < 0)
            if (images.length === 0) throw "没有解析到图片，可能该章节需要 App 接口或加密参数"
            return { images: images }
        },

        onImageLoad: (url, comicId, epId) => {
            return { headers: this.headers(epId || `${this.baseUrl}/${comicId}/`) }
        },

        onThumbnailLoad: (url) => {
            return { headers: this.headers(this.baseUrl + "/") }
        }
    }

    isImage(u) {
        if (!u) return false
        let x = String(u).toLowerCase()
        return x.indexOf(".jpg") > 0 || x.indexOf(".jpeg") > 0 || x.indexOf(".png") > 0 || x.indexOf(".webp") > 0
    }
}
