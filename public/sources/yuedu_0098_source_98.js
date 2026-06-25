class YueduConvertedSource extends ComicSource {
    name = "乐成漫画"
    key = "yuedu_0098_source_98"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.lcmhx.cc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//5.12@ys4568",
  "bookSourceGroup": "漫画",
  "bookSourceName": "乐成漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.lcmhx.cc",
  "customOrder": 2206,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"韩漫\",\"url\":\"/mctype/1<,-{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"单行本\",\"url\":\"/mctype/2<,-{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"同人志\",\"url\":\"/mctype/3<,-{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"Cosplay\",\"url\":\"/mctype/4<,-{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}}]",
  "jsLib": "function change(src){\n\treturn this.java.t2s(src)}",
  "lastUpdateTime": 1747713974265,
  "respondTime": 4095,
  "ruleBookInfo": {
    "init": "<js>change(src)</js>",
    "intro": "&nbsp;\n📖 书名：{{@@.page-location-text@text}}\n{{@@text.简介@text}}"
  },
  "ruleContent": {
    "content": ".page@img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "<js>change(src)</js>\n.item@a",
    "bookUrl": "href",
    "coverUrl": "img@src",
    "name": ".hv-title@text"
  },
  "ruleSearch": {
    "bookList": "<js>change(src)</js>\n.search-result@a",
    "bookUrl": "href",
    "checkKeyWord": "姐姐",
    "coverUrl": "img@src",
    "name": ".search-result__item__title@text"
  },
  "ruleToc": {
    "chapterList": "<js>change(src)</js>\n.listmh@li@a||.page-location-text",
    "chapterName": "text",
    "chapterUrl": "href@js:result==\"\"?baseUrl:result"
  },
  "searchUrl": "/mcsearch/-------/?wd={{key}}",
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