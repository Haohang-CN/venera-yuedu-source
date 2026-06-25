class YueduConvertedSource extends ComicSource {
    name = "酷看漫画"
    key = "yuedu_0008_source_8"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.kukk.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "酷看漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.kukk.net",
  "customOrder": 105,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "连载::/booklist/?end=0&page={{page}}\n完结::/booklist?end=1&page={{page}}\n更新::/update?page={{page}}",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044807 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1750215001119,
  "respondTime": 12804,
  "ruleBookInfo": {
    "author": "class.detail-main-info-author.1@a@text",
    "coverUrl": "tag.img@data-original",
    "intro": "class.detail-desc@text",
    "kind": "class.detail-main-info-class@a@text",
    "lastChapter": "class.detail-list-select@tag.li.-1@tag.a@text",
    "name": "class.normal-top-title@text",
    "wordCount": "class.detail-main-info-author.2@a@text"
  },
  "ruleContent": {
    "content": ".lazy@html##src=.*\\\"@js:result.replace(/data-original/g,\"src\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "author": "class.book-list-info-bottom-item@text",
    "bookList": "class.manga-list-2@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@data-original",
    "intro": "class.book-list-info-des@text",
    "kind": "tag.span.1@text",
    "lastChapter": "tag.p.1@text",
    "name": "tag.a.1@text"
  },
  "ruleSearch": {
    "bookList": "class.book-list@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@data-original",
    "intro": "tag.p.1@text",
    "name": "tag.p.0@text"
  },
  "ruleToc": {
    "chapterList": "#detail-list-select a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.kukk.net/search,{\n\"charset\": \"\",\n\"method\": \"POST\",\n\"body\": \"keyword={{key}}\"\n}",
  "weight": 0
}

    search = {
        load: async (keyword, options, page) => {
            throw new Error("这是由阅读书源 JSON 自动转换的占位源。Venera 是漫画阅读器，阅读书源不能直接使用，需要手工改写 search.load。")
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            throw new Error("这是阅读书源占位源，需要手工把小说目录规则改写成 Venera comic.loadInfo。")
        },

        loadEp: async (comicId, epId) => {
            throw new Error("Venera 的 loadEp 需要返回图片数组 images；阅读书源返回的是小说文本，不能直接通用转换。")
        }
    }
}