class YueduConvertedSource extends ComicSource {
    name = "千度🌇🔍"
    key = "yuedu_0009_source_9"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://112re.qdtu1.cfd"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "千度🌇🔍",
  "bookSourceType": 2,
  "bookSourceUrl": "https://112re.qdtu1.cfd",
  "customOrder": 106,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "64::https://112re.qdtu1.cfd/search/?k=木耳\n全部::https://112re.qdtu1.cfd/search/?k=%E5%85%A8%E9%83%A8&p={{page}}\n可爱::/search/?k=可爱&p={{page}}\n萝莉::/search/?k=萝莉&p={{page}}\n性感::/search/?k=性感&p={{page}}\n杂志::/search/?k=杂志&p={{page}}\n制服::/search/?k=制服&p={{page}}\n角色扮演::/search/?k=角色扮演&p={{page}}\n美足::/search/?k=美足&p={{page}}\n唯美写真::/search/?k=唯美写真&p={{page}}\n日本::/search/?k=日本&p={{page}}\n少女映画::/search/?k=少女映画&p={{page}}\n柚木::/search/?k=柚木&p={{page}}\n年年::/search/?k=年年&p={{page}}\n黑丝::/search/?k=黑丝&p={{page}}\n秀人::/search/?k=XR&p={{page}}\nPure Media::/search/?k=Pure&p={{page}}\nJVID::/search/?k=JVID&p={{page}}\nEGG::/search/?k=EGG&p={{page}}\nHYG::/search/?k=HYG&p={{page}}\nMoon Night::/search/?k=Moon&p={{page}}\nCosplay::/search/?k=cosplay&p={{page}}\nFushii_海堂::/search/?k=Fushii&p={{page}}\n其他::/search/?k=其他&p={{page}}\n私密::/search/?k=私&p={{page}}",
  "lastUpdateTime": 1757232082938,
  "respondTime": 180000,
  "ruleBookInfo": {
    "coverUrl": ""
  },
  "ruleContent": {
    "content": "class.content@html",
    "nextContentUrl": "//ul[@class=\"pagination\"]//a[text()=\">\"]/@href"
  },
  "ruleExplore": {
    "bookList": "class.thumb-block",
    "bookUrl": "a@href",
    "coverUrl": ".pos-rlt img@src",
    "name": "class.text-ellipsis@text"
  },
  "ruleSearch": {
    "bookList": "class.thumb-block",
    "bookUrl": "a@href",
    "checkKeyWord": "木耳",
    "coverUrl": ".pos-rlt img@src",
    "name": "class.text-ellipsis@text"
  },
  "ruleToc": {
    "chapterList": "h3",
    "chapterName": "h3@text"
  },
  "searchUrl": "https://112re.qdtu1.cfd/search/?k={{key}}",
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