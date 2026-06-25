class YueduConvertedSource extends ComicSource {
    name = "每日色漫"
    key = "yuedu_0087_source_87"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://xn--oiji-k32hr15anv9f.155comic25.icu"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "每日色漫",
  "bookSourceType": 0,
  "bookSourceUrl": "https://xn--oiji-k32hr15anv9f.155comic25.icu",
  "customOrder": 1975,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "最新::/new/page/{{page}}\n热门::/hot/page/{{page}}\n汉化::/category/hanhua/page/{{page}}\n长篇彩漫::/category/long/page/{{page}}\n精品::/category/rm/page/{{page}}\n同人::/category/doujin/page/{{page}}\n单行本::/category/everyday/page/{{page}}",
  "lastUpdateTime": 1722098903844,
  "respondTime": 2797,
  "ruleBookInfo": {
    "coverUrl": ".contents-ad.1@src",
    "kind": ".post-tag@text",
    "name": ".post-data@text"
  },
  "ruleContent": {
    "content": ".contents-ad@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ".post-list@a",
    "bookUrl": "href",
    "coverUrl": "tag.img@src",
    "name": "tag.span@text"
  },
  "ruleSearch": {
    "bookList": ".post-list@a",
    "bookUrl": "href",
    "checkKeyWord": "cos",
    "coverUrl": "tag.img@src",
    "name": "tag.span@text"
  },
  "ruleToc": {
    "chapterList": "tag.html",
    "chapterName": "tag.title@text"
  },
  "searchUrl": "/?s={{key}}",
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