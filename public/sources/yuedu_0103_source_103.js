class YueduConvertedSource extends ComicSource {
    name = "多多漫画🅰"
    key = "yuedu_0103_source_103"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://api.duoduomh.1a3.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "多多漫画🅰",
  "bookSourceType": 2,
  "bookSourceUrl": "https://api.duoduomh.1a3.net",
  "bookUrlPattern": "",
  "customOrder": 2234,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "最新漫画::https://api.duoduomh.1a3.net/app2/comic/index?sort=update&page={{page}}\n热门漫画::https://api.duoduomh.1a3.net/app2/comic/index?sort=click&page={{page}}\n完结漫画::https://api.duoduomh.1a3.net/app2/comic/index?sort=post&filter=wanjie&page={{page}}",
  "header": "{\n  \"User-Agent\": \"DuoduoMH Android Client/1.0 (admin@duoduomh.com)\"\n}",
  "lastUpdateTime": 1671014466256,
  "loginUrl": "",
  "respondTime": 462,
  "ruleBookInfo": {
    "author": "data.author",
    "init": "",
    "intro": "data.description@js:result.replace('漫画简介：','')",
    "kind": "data.category_data.name&&data.subjects..name",
    "name": "data.name"
  },
  "ruleContent": {
    "content": "$.data.imageArray\n@js:\nlist=result.split(\"\\n\");\nhtml='';\nfor(i in list){\nhtml+='<img src=\"'+list[i]+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "author",
    "bookList": "items",
    "bookUrl": "https://api.duoduomh.1a3.net/app2/comic/view?id={$.id}",
    "coverUrl": "coverUrl@js:header={\"Referer\":baseUrl}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "lastChapter": "last_chapter_name",
    "name": "name"
  },
  "ruleToc": {
    "chapterList": "data.chapterGroup.[*].chapters.[*]",
    "chapterName": "$.name",
    "chapterUrl": "https://api.duoduomh.1a3.net/app2/chapter/view?id={$.id}"
  },
  "searchUrl": "https://api.duoduomh.1a3.net/app2/comic/search?sort=click&page={{page}}&keywords={{key}}",
  "weight": 96
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