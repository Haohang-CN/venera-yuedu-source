class YueduConvertedSource extends ComicSource {
    name = "🗂🙈九妖漫画🚩"
    key = "yuedu_0091_source_91"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://91mh01.xyz/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "var v = source.getVariable();\n\"\" == v || null == v || undefined == v\n  ? ((v = \"源站：1\"), source.setVariable(v))\n  : v\nvar flag = 1,\n  url = \"https://9yaomh.com\",\n  mail = \" sjzxsp@gmail.com\",\n  issueSite=\"九妖.com||九妖漫画.com\",\n  Tele = \"https://t.me/jiuyaomh\";\nhost =\n  -1 !== v.indexOf(\"1\")\n    ? \"https://91mh-02.xyz\"\n    : -1 !== v.indexOf(\"2\")\n    ? \"https://jiu01.xyz\"\n    : -1 !== v.indexOf(\"3\")\n    ? \"https://ciyuanrukou.com\"\n    : -1 !== v.indexOf(\"4\")\n    ? \"https://xn--z4q0c88g672b.xyz\"\n    : \"https://91mh01.xyz\"",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🗂🙈九妖漫画🚩",
  "bookSourceType": 2,
  "bookSourceUrl": "https://91mh01.xyz/",
  "bookUrlPattern": "https://.*/chapter/[0-9]+",
  "concurrentRate": "",
  "customOrder": 2074,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "<js>\neval(String(source.bookSourceComment));\n\nlist=[{\"title\":\"全部\",\"url\":\"/category<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韓漫\",\"url\":\"/category/list/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"出版漫畫\",\"url\":\"/category/list/4<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"3D漫畫\",\"url\":\"/category/list/1<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"單本\",\"url\":\"/category/list/3<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"其它類\",\"url\":\"/category/list/5<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"更新時間\",\"url\":\"/category/finish/1/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"熱門人氣\",\"url\":\"/category/finish/1/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高評分\",\"url\":\"/category/finish/1/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/finish/1/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入庫\",\"url\":\"/category/finish/1/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人氣\",\"url\":\"/category/finish/1/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]\n\n\nlist.forEach(x=>{x.url=host+x.url})\nJSON.stringify(list)\n</js>",
  "header": "{\"User-Agent\":\"Mozilla/5.0 (Linux; Android 11; MI CC9 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1704169504930,
  "loginCheckJs": "",
  "loginUi": "",
  "loginUrl": "",
  "respondTime": 1681,
  "ruleBookInfo": {
    "author": ".au-name@text",
    "coverUrl": ".de-info__cover@img@src",
    "init": "",
    "intro": ".comic-intro@html",
    "kind": ".comic-tags@text",
    "lastChapter": ".update-time@text",
    "name": ".comic-name.0@text",
    "tocUrl": "",
    "wordCount": ""
  },
  "ruleContent": {
    "content": ".comic-list@img@data-original\n@js:\n/*\nproxy=\"https://images.weserv.nl/?url=\"\nif(/ciyuanrukou/.test(baseUrl)){\n\tresult.split(\"\\n\").map(x=>'<img src=\"'+x+'\">').join(\"\\n\")\n}else result.split(\"\\n\").map(x=>'<img src=\"'+proxy+x+'\">').join(\"\\n\")\n*/\nresult.split(\"\\n\").map(x=>'<img src=\"'+x+'\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "title": "h1.comic-name@text"
  },
  "ruleExplore": {
    "author": "",
    "bookList": "",
    "bookUrl": "",
    "coverUrl": "",
    "intro": "",
    "kind": "",
    "lastChapter": "",
    "name": "",
    "wordCount": ""
  },
  "ruleSearch": {
    "author": ".comic-author@text",
    "bookList": ".comic-list-item||.catagory-list@.comic-item",
    "bookUrl": "a.0@href",
    "checkKeyWord": "私密",
    "coverUrl": "img@data-src||img@src",
    "intro": ".comic-feature@text",
    "kind": ".comic-tags@span@text",
    "lastChapter": ".comic-update-at@text||.comic-tip@text",
    "name": ".comic-name@text"
  },
  "ruleToc": {
    "chapterList": ".chapter-item a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "<js>\neval(String(source.bookSourceComment));\n1 == flag ? host + \"/search?key=\" + key : java.toast(\"\\n❗未启用书源❗\");\n</js>",
  "variableComment": "❗️源站范围1-4❗️\n9yaomh.cc",
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