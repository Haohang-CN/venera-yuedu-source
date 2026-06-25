class KanmanCustomV2 extends ComicSource {
    name = "看漫网"
    key = "kanman_custom_v2"
    version = "1.1.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/kanman_v2.js"

    baseUrl = "https://www.kanman.com"
    placeholder = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png"

    headers(ref) {
        return {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Referer": ref || this.baseUrl
        }
    }

    async getHtml(url, ref) {
        let res = await Network.get(url, this.headers(ref || this.baseUrl))
        if (res.status < 200 || res.status >= 400) {
            throw "Invalid status code: " + res.status + " " + url
        }
        return res.body
    }

    doc(html) {
        return new HtmlDocument(html)
    }

    absUrl(u, base) {
        if (!u) return ""
        u = String(u).trim()
        if (!u) return ""
        let low = u.toLowerCase()
        if (low === "#" || low.startsWith("javascript:") || low.startsWith("mailto:") || low.startsWith("tel:")) return ""
        if (low.startsWith("http://") || low.startsWith("https://")) return u
        if (u.startsWith("//")) return "https:" + u
        let b = base || this.baseUrl
        if (!b) b = this.baseUrl
        if (u.startsWith("/")) {
            let m = b.match(/^(https?:\/\/[^\/]+)/)
            return (m ? m[1] : this.baseUrl) + u
        }
        b = b.split("?")[0]
        if (!b.endsWith("/")) b = b.replace(/\/[^\/]*$/, "/")
        return b + u
    }

    text(el) {
        if (!el) return ""
        return String(el.text || "").replace(/\s+/g, " ").trim()
    }

    attr(el, name) {
        if (!el) return ""
        let a = el.attributes || {}
        return a[name] || ""
    }

    validComicUrl(u) {
        return /^https?:\/\/www\.kanman\.com\/\d+\/?$/.test(String(u || ""))
    }

    validChapterUrl(u, comicId) {
        let s = String(u || "")
        if (!/^https?:\/\/www\.kanman\.com\/\d+\/\d+\.html$/.test(s)) return false
        if (!comicId) return true
        let m = String(comicId).match(/kanman\.com\/(\d+)\/?/)
        return !m || s.indexOf("/" + m[1] + "/") >= 0
    }

    makeComic(id, title, subTitle) {
        return new Comic({
            id: id,
            title: title || id,
            subTitle: subTitle || "看漫网",
            cover: this.placeholder,
            tags: [],
            description: ""
        })
    }

    parseComicLinks(html, pageUrl, keyword, strictFilter) {
        let doc = this.doc(html)
        let anchors = doc.querySelectorAll("a")
        let seen = {}
        let comics = []
        let kw = String(keyword || "").trim()

        for (let a of anchors) {
            let href = this.absUrl(this.attr(a, "href"), pageUrl)
            if (!this.validComicUrl(href)) continue

            let title = this.text(a)
            if (!title || title.length < 2) continue
            if (/^(首页|更新|排行|分类|更多|全部|连载|完结)$/.test(title)) continue
            if (strictFilter && kw && title.indexOf(kw) < 0) continue
            if (seen[href]) continue

            seen[href] = true
            comics.push(this.makeComic(href, title, pageUrl.indexOf("/sort/") >= 0 ? "分类结果" : "首页/搜索结果"))
        }

        doc.dispose()
        return comics
    }

    async loadPageComics(url, keyword, strictFilter) {
        let html = await this.getHtml(url, this.baseUrl)
        return this.parseComicLinks(html, url, keyword, strictFilter)
    }

    categoryMap = {
        "穿越": "https://www.kanman.com/sort/chuanyue.html",
        "恋爱": "https://www.kanman.com/sort/lianai.html",
        "热血": "https://www.kanman.com/sort/rexue.html",
        "玄幻": "https://www.kanman.com/sort/xuanhuan.html",
        "都市": "https://www.kanman.com/sort/dushi.html",
        "霸总": "https://www.kanman.com/sort/bazong.html",
        "古风": "https://www.kanman.com/sort/gufeng.html",
        "冒险": "https://www.kanman.com/sort/maoxian.html",
        "搞笑": "https://www.kanman.com/sort/gaoxiao.html"
    }

    explore = [
        {
            title: "首页",
            type: "multiPartPage",
            load: async (page) => {
                let hot = []
                let chuanyue = []
                try { hot = await this.loadPageComics(this.baseUrl + "/", "", false) } catch (e) { }
                try { chuanyue = await this.loadPageComics(this.categoryMap["穿越"], "", false) } catch (e) { }
                return [
                    { title: "首页推荐", comics: hot.slice(0, 20) },
                    { title: "穿越漫画", comics: chuanyue.slice(0, 30) }
                ]
            }
        }
    ]

    category = {
        title: "分类",
        parts: [
            {
                name: "题材",
                type: "fixed",
                categories: ["穿越", "恋爱", "热血", "玄幻", "都市", "霸总", "古风", "冒险", "搞笑"],
                itemType: "category"
            }
        ],
        enableRankingPage: false
    }

    categoryComics = {
        load: async (category, param, options, page) => {
            let url = this.categoryMap[category] || this.baseUrl + "/"
            if (page && page > 1) {
                url = url.replace(/\.html$/, "-p" + page + ".html")
            }
            let comics = await this.loadPageComics(url, "", false)
            return { comics: comics, maxPage: comics.length > 0 ? 6 : 1 }
        },
        optionList: []
    }

    search = {
        load: async (keyword, options, page) => {
            let kw = String(keyword || "").trim()
            let all = []
            let seen = {}

            async function add(list) {
                for (let c of list) {
                    if (!seen[c.id]) {
                        seen[c.id] = true
                        all.push(c)
                    }
                }
            }

            if (this.categoryMap[kw]) {
                await add(await this.loadPageComics(this.categoryMap[kw], "", false))
            } else {
                let pages = [
                    this.baseUrl + "/",
                    this.categoryMap["穿越"],
                    this.categoryMap["恋爱"],
                    this.categoryMap["热血"],
                    this.categoryMap["玄幻"],
                    this.categoryMap["都市"]
                ]

                for (let u of pages) {
                    try { await add(await this.loadPageComics(u, kw, !!kw)) } catch (e) { }
                }

                if (all.length === 0 && kw) {
                    // 看漫网网页端搜索接口经常不给静态 HTML，这里兜底返回穿越分类，避免页面空白。
                    try { await add(await this.loadPageComics(this.categoryMap["穿越"], "", false)) } catch (e) { }
                }
            }

            return { comics: all.slice(0, 60), maxPage: 1 }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            let url = this.absUrl(id, this.baseUrl)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.doc(html)

            let title = ""
            let h1 = doc.querySelector("h1")
            if (h1) title = this.text(h1)
            if (!title) title = "看漫网漫画"

            let desc = ""
            let possibleDesc = doc.querySelector("meta[name=description]")
            if (possibleDesc) desc = this.attr(possibleDesc, "content")

            let chapters = {}
            let anchors = doc.querySelectorAll("a")
            for (let a of anchors) {
                let href = this.absUrl(this.attr(a, "href"), url)
                if (!this.validChapterUrl(href, url)) continue
                let t = this.text(a)
                if (!t || t.length < 2) continue
                if (/^(开始阅读|继续阅读|文字|图文|最新20话)$/.test(t)) continue
                if (!chapters[href]) chapters[href] = t
            }

            doc.dispose()

            return new ComicDetails({
                title: title,
                subTitle: "看漫网",
                cover: this.placeholder,
                description: desc || title,
                tags: { "来源": ["看漫网"] },
                chapters: chapters,
                url: url
            })
        },

        loadEp: async (comicId, epId) => {
            let url = this.absUrl(epId, comicId || this.baseUrl)
            let html = await this.getHtml(url, comicId || this.baseUrl)
            let images = this.extractImageUrls(html, url)
            if (images.length === 0) images = [this.placeholder]
            return { images: images }
        },

        onImageLoad: (url, comicId, epId) => {
            return {
                headers: this.headers(epId || comicId || this.baseUrl)
            }
        },

        onThumbnailLoad: (url) => {
            return {
                headers: this.headers(this.baseUrl)
            }
        },

        idMatch: "^https?://www\\.kanman\\.com/\\d+/?$",
        link: {
            domains: ["www.kanman.com", "kanman.com"],
            linkToId: (url) => {
                let m = String(url || "").match(/https?:\/\/www\.kanman\.com\/\d+\/?/)
                return m ? m[0] : null
            }
        }
    }

    extractImageUrls(html, base) {
        let s = String(html || "")
            .replace(/\\\//g, "/")
            .replace(/&amp;/g, "&")
            .replace(/\\u002F/g, "/")

        let out = []
        let seen = {}
        let regs = [
            /https?:\/\/[^"'<>\s]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'<>\s]*)?/ig,
            /(?:src|data-src|data-original)=["']([^"']+?\.(?:jpg|jpeg|png|webp)(?:\?[^"']*)?)["']/ig
        ]

        for (let reg of regs) {
            let m
            while ((m = reg.exec(s)) !== null) {
                let u = m[1] || m[0]
                u = this.absUrl(u, base)
                let low = u.toLowerCase()
                if (!u) continue
                if (low.indexOf("logo") >= 0 || low.indexOf("favicon") >= 0 || low.indexOf("loading") >= 0 || low.indexOf("avatar") >= 0) continue
                if (seen[u]) continue
                seen[u] = true
                out.push(u)
            }
        }
        return out
    }
}
