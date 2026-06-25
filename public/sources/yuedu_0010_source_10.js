class YueduConvertedSource extends ComicSource {
    name = "秀人🌇🔍"
    key = "yuedu_0010_source_10"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.xiurentur.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "秀人🌇🔍",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.xiurentur.com",
  "customOrder": 108,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "乳::https://www.xiurentur.com/page/{{page}}?s=乳\n美::https://www.xiurentur.com/page/{{page}}?s=美\n女儿::https://www.xiurentur.com/page/{{page}}?s=女儿\n尺度::https://www.xiurentur.com/page/{{page}}?s=尺度\n免费套图::/xiuren/page/{{page}}\nCosplay::/cosplay-2/page/{{page}}\n高清图::/tbgx/page/{{page}}\n微密圈::/weeme/page/{{page}}\n其他名站::/qtmzsy/page/{{page}}\n写真视频::/video/page/{{page}}\n高清原图::/gaoqingyuantu/page/{{page}}\n在线视频::/videoonline/page/{{page}}\n福利视频::/vipsource/page/{{page}}\n稀有资源::/xiyou/page/{{page}}\n网红摄影::/wanghongjiepai/page/{{page}}\n丝袜美腿::/swmt/page/{{page}}\n套图合集::/twxz/page/{{page}}\n精品散图::/jpst/page/{{page}}\n单购资源::/dangou/page/{{page}}\n永久会员::/vippic/page/{{page}}\n周边商品::/%e5%91%a8%e8%be%b9%e5%95%86%e5%93%81/page/{{page}}\n名站套图::/mztt/page/{{page}}\nAPP推荐::/app/page/{{page}}\n众筹专区::/zczq/page/{{page}}",
  "lastUpdateTime": 1757232122618,
  "respondTime": 180000,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "class.entry-content u-text-format u-clearfix@p@html"
  },
  "ruleExplore": {
    "bookList": "class.col-lg-1-5 col-6 col-sm-6 col-md-4 col-lg-3",
    "bookUrl": "a@href",
    "coverUrl": ".placeholder img@data-src||.placeholder img@src",
    "name": "h2@text"
  },
  "ruleSearch": {
    "bookList": "class.col-lg-1-5 col-6 col-sm-6 col-md-4 col-lg-3",
    "bookUrl": "a@href",
    "coverUrl": ".placeholder img@data-src||.placeholder img@src",
    "name": "h2@text"
  },
  "ruleToc": {
    "chapterList": "h1",
    "chapterName": "h1@text"
  },
  "searchUrl": "https://www.xiurentur.com/page/{{page}}?s={{key}}",
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