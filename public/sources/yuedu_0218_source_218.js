class YueduConvertedSource extends ComicSource {
    name = "🌠 韩国漫画"
    key = "yuedu_0218_source_218"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.mxshm.top"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "发布页：http://www.hmfby.com/",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌠 韩国漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.mxshm.top",
  "bookUrlPattern": "",
  "customOrder": 4479,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"连载\",\"url\":\"/booklist?tag=全部&area=-1&end=0&page={{page}}\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}},\n{\"title\":\"完结\",\"url\":\"/booklist?tag=全部&area=-1&end=1&page={{page}}\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}},\n{\"title\":\"都市\",\"url\":\"/booklist?tag=都市&page={{page}}\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}},\n{\"title\":\"出版\",\"url\":\"/booklist?tag=出版漫画&page={{page}}\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}}]",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; MIX 2 Build/OPR1.170623.027) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1\"\n}",
  "lastUpdateTime": 1698747585165,
  "loginUrl": "",
  "respondTime": 44819,
  "ruleBookInfo": {
    "author": "class.detail-main-info-author.1@a@text",
    "coverUrl": "img@data-original",
    "intro": ".detail-desc@html",
    "kind": "class.detail-main-info-author.2@a@text&&.detail-main-info-class a@text&&.detail-list-title-1@text&&.detail-list-title-3@text##更新",
    "lastChapter": "#detail-list-select a.-1@text",
    "name": "class.detail-main-info-author.0@a@text",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "#cp_img@html##src.*\\\"\n@js:result.replace(/data-original/g,\"src\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "ul li",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "lastChapter": "p.1@text##.*\\s",
    "name": "p.0@text"
  },
  "ruleSearch": {
    "author": "span.0@text##作者.",
    "bookList": "ul li",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": "p.1@text",
    "kind": "span.1@text",
    "name": "p.0@text"
  },
  "ruleToc": {
    "chapterList": "#detail-list-select li a",
    "chapterName": "text",
    "chapterUrl": "href##$##,{'webView': true}"
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