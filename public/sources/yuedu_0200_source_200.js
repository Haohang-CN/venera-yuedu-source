class YueduConvertedSource extends ComicSource {
    name = "🌐 背窝韩漫"
    key = "yuedu_0200_source_200"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://bwhanman.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌐 背窝韩漫",
  "bookSourceType": 2,
  "bookSourceUrl": "https://bwhanman.com",
  "customOrder": 3607,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "热门漫画::https://bwhanman.com/list?page={{page}}",
  "lastUpdateTime": 1728715758454,
  "respondTime": 5476,
  "ruleBookInfo": {
    "author": "",
    "init": "",
    "intro": "class.novel-intro@p@html",
    "kind": "class.hottag flexstart@em@text",
    "name": "tag.h3@text",
    "tocUrl": "text.查看全部章节@href"
  },
  "ruleContent": {
    "content": "class.u-reading-content@img@html##src=\"/.*?v=.*\" class=\"lazyload\"",
    "imageStyle": "FULL",
    "replaceRegex": ""
  },
  "ruleExplore": {
    "bookList": "class.flexbetween@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "class.newimg@img@data-src",
    "lastChapter": "tag.span.-1@text##更新至",
    "name": "tag.h2@text"
  },
  "ruleSearch": {
    "bookList": "class.flexbetween@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "class.newimg@img@data-src",
    "lastChapter": "tag.span.-1@text##更新至",
    "name": "tag.h2@text"
  },
  "ruleToc": {
    "chapterList": "id.chapters@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://bwhanman.com/site/search?keyword={{key}}",
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