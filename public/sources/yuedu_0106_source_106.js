class YueduConvertedSource extends ComicSource {
    name = "一个漫画"
    key = "yuedu_0106_source_106"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.amcomic.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": ".stui-player__video@html  正文",
  "bookSourceGroup": "漫画",
  "bookSourceName": "一个漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.amcomic.com",
  "customOrder": 2240,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "最新::https://www.amcomic.com/manhua/index.html\n漫画::https://www.amcomic.com/manhua/index<,-{{page}}>.html",
  "lastUpdateTime": 1685242898615,
  "respondTime": 180000,
  "ruleContent": {
    "content": ".imglist@html",
    "nextContentUrl": ".mh_headpager@a.2@href",
    "title": "h3@text",
    "webJs": ""
  },
  "ruleExplore": {
    "bookList": "li.stui-vodlist__item",
    "bookUrl": "a.0@href",
    "coverUrl": "a.0@data-original",
    "name": "h4@text"
  },
  "ruleSearch": {
    "bookList": "li.stui-vodlist__item",
    "bookUrl": "a.0@href",
    "coverUrl": "a.0@data-original",
    "name": "h4@text"
  },
  "ruleToc": {
    "chapterList": ".stui-content__playlist@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href##$##,{\"webView\":true}"
  },
  "searchUrl": "https://www.amcomic.com/vod/search/page/{{page}}.html,{\n  \"body\": \"wd={{key}}\",\n  \"charset\": \"UTF-8\",\n  \"method\": \"POST\"\n}",
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