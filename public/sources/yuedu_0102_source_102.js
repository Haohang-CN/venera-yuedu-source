class YueduConvertedSource extends ComicSource {
    name = "歪歪漫画"
    key = "yuedu_0102_source_102"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://612242.xyz"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "歪歪漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "http://612242.xyz",
  "bookUrlPattern": "",
  "concurrentRate": "",
  "customOrder": 2229,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "总点击::/cb/1a.php?id=2&page={{page}}\n已完结::/cb/1a.php?id=1&page={{page}}\n连载中::/cb/1a.php?id=0&page={{page}}",
  "header": "",
  "lastUpdateTime": 1679103274432,
  "loginCheckJs": "",
  "loginUi": "",
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "<js>\nimglist = unescape(baseUrl).replace(/.*v=/g,\"\").split(',')\nurl='https://krv76.com';\nhtml='';\nfor(i in imglist){\nhtml +='<img src=\"'+url+imglist[i]+'\">\\n'\n}\nhtml\n</js>\n",
    "imageStyle": "full"
  },
  "ruleExplore": {
    "bookList": ".list li",
    "bookUrl": "a@href##&m.*",
    "coverUrl": ".left img@data-original@js:\"https://krv76.com\" + result",
    "intro": ".des@text",
    "name": ".title@text"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": ".list li",
    "chapterName": ".content@text",
    "chapterUrl": "a@href##&m.*",
    "nextTocUrl": ".page@tag.a[!0,!-1,!-2]@href\n"
  },
  "searchUrl": "",
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