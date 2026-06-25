class YueduConvertedSource extends ComicSource {
    name = "🎨 咪咕动漫"
    key = "yuedu_0157_source_157"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://m.migudm.cn已整理"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "🎨 咪咕动漫",
  "bookSourceType": 0,
  "bookSourceUrl": "http://m.migudm.cn已整理",
  "bookUrlPattern": "已校验",
  "customOrder": 3012,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "人气::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3\n月票::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=5\n更新::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=1\n完结::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&statusId=7000\n连载::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&statusId=7001\n女生::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&consumerId=180001\n少年::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&consumerId=180002\n男生::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&consumerId=180000\n情感::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15003\n热血::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15017\n搞笑::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=45000\n玄幻::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15021\n都市::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15024\n校园::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15012\n悬疑::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15005\n古风::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15039\n科幻::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15004\n运动::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15002\n萌系::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15025\n恐怖::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15013\n武侠::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15020\n怀旧::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15043\n资讯::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15044\n亲子::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&themeId=15042\n大陆::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5100\n日本::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5102\n韩国::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5104\n港台::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5101\n欧美::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5103\n其他::http://m.migudm.cn/api/listOpus.html?opusType=2&pageNo={{page}}&pageSize=20&orderType=3&areaId=5105",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16D57 UCBrowser/12.3.0.1138 Mobile AliApp(TUnionSDK/0.1.20.3)\"\n}",
  "lastUpdateTime": 1764034736839,
  "respondTime": 1904,
  "ruleBookInfo": {
    "author": "data.opusDetail.authorName",
    "intro": "data.opusDetail.opusDesc",
    "lastChapter": "data.opusDetail.lastItemName",
    "name": "data.opusDetail.opusName"
  },
  "ruleContent": {
    "content": "$.data.watchUrlListWebp.[*]url\n@js:\nlist=result.split(\"\\n\");\nhtml='';\nfor(i in list){\nhtml+='<img src=\"'+list[i]+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "authorName",
    "bookList": "data.comicResult.opusDetailList||data.opusList",
    "bookUrl": "http://m.migudm.cn/api/opusDetail.html?hwOpusId={$.hwOpusId}&opusType={$.opusType}&order=0",
    "coverUrl": "opusUrl",
    "intro": "opusDesc",
    "kind": "themeList..themeName",
    "lastChapter": "lastItemName",
    "name": "opusName",
    "wordCount": "statusValue"
  },
  "ruleToc": {
    "chapterList": "$.data.itemList",
    "chapterName": "itemName",
    "chapterUrl": "http://m.migudm.cn/comic/readImage.html?opusType={$.opusType}&hwOpusId={$.hwOpusId}&hwItemId={$.hwItemId}",
    "isVip": "$.isFee"
  },
  "searchUrl": "http://m.migudm.cn/api/searchOpus.html?hintKey={{key}}&pageNo={{page}}&pageSize=20&opusType=2&actionSource=02&inputType=01",
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