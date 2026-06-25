class YueduConvertedSource extends ComicSource {
    name = "kuronavi漫画raw"
    key = "yuedu_0002_kuronavi_raw"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://kuronavi.blog"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "kuronavi漫画raw源，提供日本漫画raw资源",
  "bookSourceGroup": "漫画",
  "bookSourceName": "kuronavi漫画raw",
  "bookSourceType": 0,
  "bookSourceUrl": "https://kuronavi.blog",
  "customOrder": 4,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "热门::https://kuronavi.blog/hot\n最新更新::https://kuronavi.blog/search/manga?status=-1&sort=15\n排行榜::https://kuronavi.blog/search/manga?status=-1&sort=10\n完結済み::https://kuronavi.blog/search/manga?status=2&sort=30",
  "header": "{\n\"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\"\n}",
  "lastUpdateTime": 1764785352359,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": ".author .col-xs-8@text##更新中",
    "coverUrl": ".col-image img@src",
    "intro": ".detail-content p@text",
    "kind": ".kind .col-xs-8@text",
    "lastChapter": ".list-chapter ul li:first-child .chapter a@text",
    "name": ".title-detail@text"
  },
  "ruleContent": {
    "content": ".page-chapter img@html"
  },
  "ruleExplore": {
    "author": "class.author@text||更新中",
    "bookList": ".item",
    "bookUrl": "figcaption h3 a@href",
    "coverUrl": ".image img@src",
    "kind": ".box_tootip p:contains(ジャンル)@text##ジャンル:",
    "lastChapter": ".chapter a:first@text",
    "name": "figcaption h3 a@text"
  },
  "ruleSearch": {
    "author": "class.author@text||更新中",
    "bookList": ".item",
    "bookUrl": "figcaption h3 a@href",
    "coverUrl": ".image img@src",
    "intro": ".box_tootip .box_text p@text",
    "kind": ".box_tootip p:contains(ジャンル)@text##ジャンル:",
    "lastChapter": ".chapter a:first@text",
    "name": "figcaption h3 a@text"
  },
  "ruleToc": {
    "chapterList": "-#nt_listchapter nav ul li",
    "chapterName": ".chapter a@text",
    "chapterUrl": "a@href",
    "updateTime": ".col-xs-4@text"
  },
  "searchUrl": "https://kuronavi.blog/search/manga?keyword={{key}}",
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