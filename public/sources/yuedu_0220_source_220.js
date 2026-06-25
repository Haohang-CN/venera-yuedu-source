class YueduConvertedSource extends ComicSource {
    name = "好看漫画"
    key = "yuedu_0220_source_220"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.9comic.cn"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "API",
  "bookSourceGroup": "漫画",
  "bookSourceName": "好看漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.9comic.cn",
  "bookUrlPattern": "",
  "concurrentRate": "",
  "coverDecodeJs": "",
  "customOrder": 4504,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"都市\",\"url\":\"/comic22/book/list?cateid=1&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"恋爱\",\"url\":\"/comic22/book/list?cateid=2&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"爆笑\",\"url\":\"/comic22/book/list?cateid=3&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"热血\",\"url\":\"/comic22/book/list?cateid=4&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"悬疑\",\"url\":\"/comic22/book/list?cateid=5&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"古风\",\"url\":\"/comic22/book/list?cateid=6&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"校园\",\"url\":\"/comic22/book/list?cateid=7&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"搞笑\",\"url\":\"/comic22/book/list?cateid=9&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"玄幻\",\"url\":\"/comic22/book/list?cateid=10&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"励志\",\"url\":\"/comic22/book/list?cateid=11&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"恐怖\",\"url\":\"/comic22/book/list?cateid=13&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"冒险\",\"url\":\"/comic22/book/list?cateid=14&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.29}},{\"title\":\"儿童\",\"url\":\"/comic22/book/list?cateid=15&end=0&free=0&sort=0&p={{page}}&n=21\",\"style\":{\"layout_flexGrow\":0,\"layout_flexBasisPercent\":0.29}}]",
  "header": "",
  "lastUpdateTime": 1720291791246,
  "loginCheckJs": "",
  "loginUi": "",
  "loginUrl": "",
  "respondTime": 575,
  "ruleBookInfo": {
    "author": "$.author",
    "canReName": "",
    "coverUrl": "$.pic",
    "init": "$.data",
    "intro": "$.info",
    "kind": "$.tag",
    "lastChapter": "$.lastchapter",
    "name": "$.title",
    "tocUrl": "https://www.9comic.cn/comic22/book/listChapter?imei=aanid10d10df686793008&id={{$.id}}&p=1&n=10000",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "@js:\nvar options = {\n\"headers\": {\"Referer\": baseUrl}\n}\njava.getStringList(\"$.data..url\").toArray().map\n(id=>'<img src=\"'+id+'\" >').join(\"\\n\")",
    "imageStyle": "",
    "nextContentUrl": "",
    "replaceRegex": "",
    "sourceRegex": "",
    "webJs": ""
  },
  "ruleExplore": {
    "author": "",
    "bookList": "",
    "bookUrl": "",
    "coverUrl": "",
    "intro": "",
    "kind": "",
    "lastChapter": "",
    "name": ""
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$..list[*]||$.data[*]",
    "bookUrl": "https://www.9comic.cn/comic22/book/show?id={{$.id}}&imei=aanid10d10df686793008",
    "coverUrl": "$.pic",
    "intro": "$.info",
    "kind": "$.tag",
    "lastChapter": "$.lastchapter",
    "name": "$.title",
    "wordCount": ""
  },
  "ruleToc": {
    "chapterList": "$.data[*]",
    "chapterName": "$.name",
    "chapterUrl": "https://www.9comic.cn/comic22/book/showChapter?id={{$.id}}&imei=aanid10d10df686793008",
    "isVip": "",
    "isVolume": "",
    "nextTocUrl": "",
    "updateTime": "{{java.timeFormat(java.getString('$.createtime'))}}"
  },
  "searchUrl": "https://www.9comic.cn/comic22/so/comic?keyword={{key}}&p=&ver=2.0",
  "variableComment": "",
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