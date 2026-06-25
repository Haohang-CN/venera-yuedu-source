class YueduConvertedSource extends ComicSource {
    name = "🎨 好吧漫画"
    key = "yuedu_0231_source_231"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://hao8.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 下载链接为空",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🎨 好吧漫画",
  "bookSourceType": 3,
  "bookSourceUrl": "https://hao8.net",
  "customOrder": 4765,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"都市\",\"url\":\"/booklist?page={{page}}&cate=都市&end=-1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"耽美\",\"url\":\"/booklist?page={{page}}&cate=耽美&end=-1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"伦理\",\"url\":\"/booklist?page={{page}}&cate=伦理&end=-1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "header": "{\n    'User-Agent': 'mobile-web-app-capable'\n}",
  "lastUpdateTime": 1713414595427,
  "respondTime": 301940,
  "ruleBookInfo": {
    "author": ".head-info-author@textNodes##.*\\s",
    "coverUrl": ".head-banner img@src",
    "init": "",
    "intro": ".head-info-desc@html##\\,污漫库漫画.*|[&amp;hellip;]",
    "kind": ".head-tags span@text&&.mod-chapter-title span.0@text##\\|##,",
    "lastChapter": "#chapters a.-1@text",
    "name": ".head-title-tags h1@text",
    "wordCount": ".info-grade@text##$##分"
  },
  "ruleContent": {
    "content": ".comic-pic-list@img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "",
    "bookList": ".comic-item",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "intro": ".comic-desc@text##\\,污漫库漫画.*|[&amp;hellip;]",
    "kind": ".comic-tag@text##\\|##,",
    "name": ".comic-title@text",
    "wordCount": ".comic-update@text##\\s.*"
  },
  "ruleToc": {
    "chapterList": "#chapters li a",
    "chapterName": "text",
    "chapterUrl": "href"
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