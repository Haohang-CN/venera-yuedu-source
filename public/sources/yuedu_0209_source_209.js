class YueduConvertedSource extends ComicSource {
    name = "无遮韩漫🎃"
    key = "yuedu_0209_source_209"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.wxzhm.top#🎃"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "无遮韩漫🎃",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.wxzhm.top#🎃",
  "customOrder": 3971,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\": \"分类\",\"url\": \"\",\"style\": {\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\": \"全部\",\"url\": \"/booklist?tag=%E5%85%A8%E9%83%A8&area=-1&end=-1&page={{page}}\",\"style\": {\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\": \"连载\",\"url\": \"/booklist?tag=%E5%85%A8%E9%83%A8&area=-1&end=0&page={{page}}\",\"style\": {\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\": \"完结\",\"url\": \"/booklist?tag=%E5%85%A8%E9%83%A8&area=-1&end=1&page={{page}}\",\"style\": {\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "header": "{\n\t\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36\"\n\t}",
  "lastUpdateTime": 0,
  "respondTime": 7808,
  "ruleBookInfo": {
    "init": "",
    "lastChapter": "id.detail-list-select@li.-1@a@text"
  },
  "ruleContent": {
    "content": "id.cp_img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "class.manga-list-2@li",
    "bookUrl": "class.manga-list-2-title@a@href",
    "coverUrl": "class.manga-list-2-cover@img@data-original",
    "lastChapter": "class.manga-list-2-tip@text##已更新",
    "name": "class.manga-list-2-title@text"
  },
  "ruleSearch": {
    "author": "class.book-list-info-bottom-item@text##作者：",
    "bookList": "class.book-list@li",
    "bookUrl": "class.book-list-info@a@href",
    "checkKeyWord": "寄宿",
    "coverUrl": "class.book-list-cover@a@img@data-original",
    "intro": "class.ook-list-info-desc@text",
    "kind": "class.book-list-info-bottom-right-font@text",
    "name": "class.book-list-info-title@text"
  },
  "ruleToc": {
    "chapterList": "id.detail-list-select@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "http://www.wxzhm.top/search?keyword={{key}},{\n\t\"charset\":\"utf-8\"\n\t}",
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