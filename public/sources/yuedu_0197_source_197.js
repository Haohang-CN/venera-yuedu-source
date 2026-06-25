class YueduConvertedSource extends ComicSource {
    name = "🌐肉色漫画"
    key = "yuedu_0197_source_197"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.roumh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌐肉色漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.roumh.com",
  "bookUrlPattern": "",
  "customOrder": 3593,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "都市::https://m.roumh.com/waplist/%E9%83%BD%E5%B8%82?page={{page}}\n恋爱::https://m.roumh.com/waplist/%E6%81%8B%E7%88%B1?page={{page}}\n异能::https://m.roumh.com/waplist/%E5%BC%82%E8%83%BD?page={{page}}\n青春::https://m.roumh.com/waplist/%E9%9D%92%E6%98%A5?page={{page}}\n悬疑::https://m.roumh.com/waplist/%E6%82%AC%E7%96%91?page={{page}}\n校园::https://m.roumh.com/waplist/%E6%A0%A1%E5%9B%AD?page={{page}}",
  "lastUpdateTime": 1728716049222,
  "loginUrl": "",
  "respondTime": 6621,
  "ruleBookInfo": {
    "author": "class.d_he_r@tag.p.2@text",
    "coverUrl": "class.fl d_he_img@img@src",
    "intro": "class.d_he_tit@text##/简介：",
    "kind": "class.d_he_r@tag.p.3@text",
    "name": "class.d_he_r@tag.a@text"
  },
  "ruleContent": {
    "content": "class.lazy@data-original",
    "nextContentUrl": "class.statement_page@tag.a.0@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.sr_tit@tag.h3@text##/作者：",
    "bookList": "class.sr_ul@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.a@img@src",
    "name": "class.sr_tit@tag.h2@text"
  },
  "ruleToc": {
    "chapterList": "class.d_cen_ul@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href",
    "nextTocUrl": "class.d_cen_ul.tag.a@href"
  },
  "searchUrl": "https://m.roumh.com/wapsearch/{{key}}",
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