class YueduConvertedSource extends ComicSource {
    name = "🔞漫小肆韩漫"
    key = "yuedu_0005_source_5"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.jjmh.top/##@Mengteen"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "源社区：@Mengteen 原创\n二传或者是其它问题请@我并告知我",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🔞漫小肆韩漫",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.jjmh.top/##@Mengteen",
  "customOrder": 34,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[\n{\"title\": \"性感\",\"url\": \"/booklist/?page={{page}}&tag=%E6%80%A7%E6%84%9F\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"巨乳\",\"url\": \"/booklist/?page={{page}}&tag=%E5%B7%A8%E4%B9%B3\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"连载\",\"url\": \"/booklist/?page={{page}}&end=0\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"完结\",\"url\": \"/booklist/?page={{page}}&tag=%E5%85%A8%E9%83%A8&area=-1&end=1\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}}\n]",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1759802472385,
  "respondTime": 2999,
  "ruleBookInfo": {
    "intro": "📄简介：{{@@.detail-desc@text}}",
    "kind": ".detail-main-info@p.4@text"
  },
  "ruleContent": {
    "content": "@js: \n   let pics=java.getString('img@data-original');   \n   let p=String(pics).split(\"\\n\").map(i=>`<img src=\"${i}\">`).join(\"\\n\");\n   p;",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "ul@li",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": "class.manga-list-2-tip@text",
    "name": "class.manga-list-2-title@text"
  },
  "ruleSearch": {
    "author": ".book-list-info-bottom-item@text",
    "bookList": "ul@li",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": ".book-list-info-desc@text",
    "kind": ".book-list-info-bottom-right-font@text",
    "name": ".book-list-info-title@text"
  },
  "ruleToc": {
    "chapterList": "ul@li",
    "chapterName": ".chapteritem@text",
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