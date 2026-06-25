class YueduConvertedSource extends ComicSource {
    name = "世界b🌇"
    key = "yuedu_0016_b"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://xn--nrv-vaginaintheworld-com-dp02bt87kul1aw470a.b-dfriend.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "世界b🌇",
  "bookSourceType": 2,
  "bookSourceUrl": "https://xn--nrv-vaginaintheworld-com-dp02bt87kul1aw470a.b-dfriend.com",
  "customOrder": 212,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "00-20::/?type=0&sort=1&age=1&page={{page}}\n20-30::/?type=0&sort=1&age=2&page={{page}}\n30-40::/?type=0&sort=1&age=3&page={{page}}\n40-99::/?type=0&sort=1&age=2&page={{page}}",
  "lastUpdateTime": 1757231842450,
  "respondTime": 180000,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "class.plist.!0@html"
  },
  "ruleExplore": {
    "bookList": "class.drow forth-position",
    "bookUrl": "a@href",
    "coverUrl": ".img .img-wrap1 img@data-original||.img .img-wrap1 img@src",
    "name": "a@text"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": "class.mtitle",
    "chapterName": "class.mtitle@text"
  },
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