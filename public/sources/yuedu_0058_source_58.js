class YueduConvertedSource extends ComicSource {
    name = "漫画看"
    key = "yuedu_0058_source_58"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.mhkan.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫画看",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.mhkan.com",
  "customOrder": 1297,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "连载::https://m.mhkan.com/list/lianzai/{{page}}/\n已完结::https://m.mhkan.com/list/wanjie/{{page}}/",
  "lastUpdateTime": 1656933574380,
  "respondTime": 3484,
  "ruleBookInfo": {
    "author": ".pic_zi.1@.left.-1@text",
    "init": "",
    "intro": ".txtDesc@text",
    "kind": ".pic_zi.2@.left.-1@text",
    "lastChapter": ".list@ul@li.-1@a@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": "<js>\nresult.match(/chapterImages = (\\[.*?\\]);/)[1];\n</js>\n$.[*]@js:result.split(\"\\n\").map(x=>'<img src=\\\"'+x+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": ".txtItme.0@text",
    "bookList": "#update_list@.itemBox||.list-comic",
    "bookUrl": "a@href",
    "checkKeyWord": "",
    "coverUrl": "mip-img@src",
    "kind": ".pd@text",
    "lastChapter": ".coll@text||.info@text",
    "name": ".title@text||.txtA@text"
  },
  "ruleToc": {
    "chapterList": ".list@ul@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.mhkan.com/search/?keywords={{key}}",
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