class YueduConvertedSource extends ComicSource {
    name = "必应漫画"
    key = "yuedu_0099_source_99"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.biyingmh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//2025.3.6@ys4568",
  "bookSourceGroup": "漫画",
  "bookSourceName": "必应漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.biyingmh.com",
  "customOrder": 2211,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"韩国漫画\",\"url\":\"/category/list/1\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"少女漫画\",\"url\":\"/category/list/2\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"青年漫画\",\"url\":\"/category/list/3\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"日本漫画\",\"url\":\"/category/list/4\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"写真\",\"url\":\"/category/list/5\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"最新更新\",\"url\":\"/custom/update\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"漫画热榜\",\"url\":\"/custom/top\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "",
  "lastUpdateTime": 1741283833360,
  "respondTime": 3576,
  "ruleBookInfo": {
    "author": ".module-info-item-content.0@text",
    "coverUrl": "",
    "intro": ".module-info-introduction-content@text",
    "kind": ".module-info-tag-link@text&&.module-info-item-content.1@text&&.module-info-item.-1@text##\\：##\\:",
    "lastChapter": "",
    "name": "",
    "tocUrl": ""
  },
  "ruleContent": {
    "content": ".img@img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.module-poster-item module-item",
    "bookUrl": ".module-poster-item@href",
    "checkKeyWord": "姐姐",
    "coverUrl": ".lazyload@src",
    "lastChapter": ".module-item-note@text",
    "name": "class.module-poster-item-title@text##《备》"
  },
  "ruleToc": {
    "chapterList": ".module-play-list-link",
    "chapterName": ".module-play-list-link@span@text",
    "chapterUrl": ".module-play-list-link@href"
  },
  "searchUrl": "/search?key={{key}}",
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