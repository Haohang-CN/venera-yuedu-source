class YueduConvertedSource extends ComicSource {
    name = "🗂🙈就漫画"
    key = "yuedu_0093_source_93"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.jiumanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "@chaogei",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🗂🙈就漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.jiumanhua.com",
  "customOrder": 2101,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"热门推荐\",\"url\":\"/tag?keyword=热门推荐\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.3}},\n{\"title\":\"最近更新 \",\"url\":\"/tag?keyword=最近更新\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.3}}\n]",
  "lastUpdateTime": 1691329784196,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": ".article@.author@text",
    "coverUrl": "",
    "intro": ".article@.body@text",
    "kind": ".label@.item@text",
    "lastChapter": ".ch@.title@text",
    "name": "img@title"
  },
  "ruleContent": {
    "content": ".read-article@.item@img@html",
    "imageStyle": "FULL",
    "replaceRegex": "##http##https",
    "sourceRegex": ""
  },
  "ruleExplore": {
    "author": ".author@text",
    "bookList": ".item",
    "bookUrl": "a@href",
    "coverUrl": ".cover@img@data-original",
    "intro": ".text@text",
    "name": ".title@text"
  },
  "ruleSearch": {
    "author": ".author@text",
    "bookList": ".item",
    "bookUrl": "a@href",
    "checkKeyWord": "姐姐",
    "coverUrl": ".cover@img@data-original##http##https",
    "intro": ".text@text",
    "name": ".title@text"
  },
  "ruleToc": {
    "chapterList": "#html_box@.item",
    "chapterName": "a@title",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://www.jiumanhua.com/tag?keyword={{key}}",
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