class YueduConvertedSource extends ComicSource {
    name = "🔞🎨丽图·污漫画"
    key = "yuedu_0117_source_117"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://litu100.xyz"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "🔞🎨丽图·污漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://litu100.xyz",
  "customOrder": 2411,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "                        更  新  时  间                             \n全部::/comics/{{page}}.html\n连载中::/comics/kk-1/{{page}}.html\n已完结::/comics/kk-2/{{page}}.html\n单行本::/comics/kk-3/{{page}}.html\n韩国::/comics/kk-韩国/{{page}}.html\n日本::/comics/kk-日本/{{page}}.html\n中国::/comics/kk-中国/{{page}}.html\n                       发  布  时  间                           \n全部::/comics/sort-added/{{page}}.html\n连载中::/comics/kk-1/sort-added/{{page}}.html\n已完结::/comics/kk-2/sort-added/{{page}}.html\n单行本::/comics/kk-3/sort-added/{{page}}.html\n韩国::/comics/kk-韩国/sort-added/{{page}}.html\n日本::/comics/kk-日本/sort-added/{{page}}.html\n中国::/comics/kk-中国/sort-added/{{page}}.html                       \n                       浏  览  最  多                         \n今日热漫::/                        \n全部::/comics/sort-read/{{page}}.html\n连载中::/comics/kk-1/sort-read/{{page}}.html\n已完结::/comics/kk-2/sort-read/{{page}}.html\n单行本::/comics/kk-3/sort-read/{{page}}.htm\n韩国::/comics/kk-韩国/sort-read/{{page}}.html\n日本::/comics/kk-日本/sort-read/{{page}}.html\n中国::/comics/kk-中国/sort-read/{{page}}.html\n                         评  论  最  多                         \n全部::/comics/sort-comment/{{page}}.html\n连载中::/comics/kk-1/sort-comment/{{page}}.html\n已完结::/comics/kk-2/sort-comment/{{page}}.html\n单行本::/comics/kk-3/sort-comment/{{page}}.html\n韩国::/comics/kk-韩国/sort-comment/{{page}}.html\n日本::/comics/kk-日本/sort-comment/{{page}}.html\n中国::/comics/kk-中国/sort-comment/{{page}}.html",
  "lastUpdateTime": 1688044597342,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "text.作者：@text",
    "coverUrl": ".cover@img@src",
    "intro": "text.简介：@text",
    "kind": "text.状态：@text",
    "lastChapter": ".status a@text",
    "name": ".title"
  },
  "ruleContent": {
    "content": ".comic img@html",
    "title": ""
  },
  "ruleExplore": {
    "author": "text.作者：@text",
    "bookList": ".right a&&.item",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": "text.国家：@text",
    "lastChapter": "div.4,div.5@text##更新：",
    "name": "a.1@text||div.0@text##\\d*?\\s|\\s"
  },
  "ruleSearch": {
    "author": "text.作者：@text",
    "bookList": ".item",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": "text.国家：@text",
    "lastChapter": "div.5@text##更新：",
    "name": "div.4@text"
  },
  "ruleToc": {
    "chapterList": ".chapters a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://litu100.xyz/comics/kk-{{key}}.html",
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