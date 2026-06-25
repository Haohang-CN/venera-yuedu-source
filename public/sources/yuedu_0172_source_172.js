class YueduConvertedSource extends ComicSource {
    name = "🔰 漫香阁"
    key = "yuedu_0172_source_172"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://xn--ksp-mxgmxgcom-yp8ve33bkpevz1kpxq.mxgmh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🔰 漫香阁",
  "bookSourceType": 0,
  "bookSourceUrl": "https://xn--ksp-mxgmxgcom-yp8ve33bkpevz1kpxq.mxgmh.com",
  "customOrder": 3229,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "单行本::/list-2-0-{{page}}.html\n同人志::/list-4-0-{{page}}.html\ncosplay::/list-3-0-{{page}}.html",
  "lastUpdateTime": 0,
  "respondTime": 2586,
  "ruleBookInfo": {
    "kind": "",
    "wordCount": ""
  },
  "ruleContent": {
    "content": ".contentmh@html"
  },
  "ruleExplore": {
    "bookList": "a",
    "bookUrl": "href",
    "coverUrl": ".contentmh.0@html",
    "intro": ".topgrid-desc@p@text",
    "kind": "tag.span.0@text",
    "lastChapter": ".dstate@text##更新",
    "name": ".topgrid-desc@h3@text",
    "wordCount": ""
  },
  "ruleSearch": {
    "bookList": "a",
    "bookUrl": "href",
    "intro": ".topgrid-desc@p@text",
    "kind": "tag.span.0@text",
    "name": ".topgrid-desc@h3@text"
  },
  "ruleToc": {
    "chapterList": "tag.html",
    "chapterName": "tag.title@text## - 漫香阁.com",
    "chapterUrl": ""
  },
  "searchUrl": "/search.php?key={{key}}&typeid=0&p={{page}}",
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