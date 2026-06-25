class YueduConvertedSource extends ComicSource {
    name = "🌆连连看漫画"
    key = "yuedu_0012_source_12"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.hmkll.com/##@Mengteen"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "源社区：@Mengteen 原创\n二传二创或者是其它问题请联系我。\n我邮箱:[xxxmgqxxx@vip.qq.com]",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌆连连看漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.hmkll.com/##@Mengteen",
  "customOrder": 137,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[\n{\"title\": \"连载中\",\"url\": \"/list/all_0-{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"已完结\",\"url\": \"/list/all_1-{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"全部\",\"url\": \"/list/index-{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}}\n]",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1750579991701,
  "respondTime": 6301,
  "ruleBookInfo": {
    "author": ".detail-main-info-author.1@text",
    "intro": "📄简介：{{@@.detail-desc@text}}",
    "kind": ".detail-main-info-class@a@text",
    "lastChapter": "ul@li.0@text",
    "name": ".detail-main-info-title@text",
    "tocUrl": "ul@li"
  },
  "ruleContent": {
    "content": "class.view-main-1 readForm@img@html",
    "imageStyle": "FULL",
    "nextContentUrl": "class.view-bottom-bar@li.2@a@href"
  },
  "ruleExplore": {
    "bookList": "ul@li",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "intro": ".manga-list-2-tip@text",
    "kind": "🔞{{@@.level@text}}",
    "name": "p@a@text"
  },
  "ruleSearch": {
    "author": ".book-list-info-bottom-item@text",
    "bookList": "ul@li",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": ".book-list-info-desc@text",
    "kind": "class.book-list-info-bottom-right-font active@text",
    "name": ".book-list-info-title@text"
  },
  "ruleToc": {
    "chapterList": "-ul@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "/search?keyword={{key}}",
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