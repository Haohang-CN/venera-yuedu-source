class YueduConvertedSource extends ComicSource {
    name = "✐ 亲亲漫画 Haxc"
    key = "yuedu_0083_haxc"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://api.acg.gd♤Haxc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "✐ 亲亲漫画 Haxc",
  "bookSourceType": 0,
  "bookSourceUrl": "http://api.acg.gd♤Haxc",
  "bookUrlPattern": "",
  "customOrder": 1874,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "国漫::/app/comic/index?sort=update&filter=dalu&page={{page}}\n日漫::/app/comic/index?sort=update&filter=riben&page={{page}}\n韩漫::/app/comic/index?sort=update&filter=hanguo&page={{page}}",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.4094.1 Safari/537.36\"\n}",
  "lastUpdateTime": 1643539373124,
  "loginUrl": "",
  "respondTime": 10245,
  "ruleBookInfo": {
    "author": "$.data.author",
    "coverUrl": "",
    "intro": "$..description",
    "kind": "$..subjects[*].name",
    "lastChapter": "$.data.last_chapter_name",
    "name": "$.data.name"
  },
  "ruleContent": {
    "content": "@js:\nheader={\"Referer\":\"https://www.acgqd.com\"};\nheaders={\"headers\":JSON.stringify(header)};\n$=JSON.parse(result);\nimglist=$.data.imageArray;\npath=$.data.path;\nurl='http://mangaimg.62611311.com:44240/';\nurl=url+path;\nhtml='';\nfor(i in imglist){\nhtml +='<img src=\"'+url+imglist[i]+','+JSON.stringify(headers)+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "coverUrl": "$.coverUrl@js:\nheader={\"Referer\":\"https://www.dintong.com\"}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)"
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$.items.*",
    "bookUrl": "http://api.acg.gd/app/comic/view?id={$.id}",
    "coverUrl": "$.coverUrl@js:\nheader={\"Referer\":\"https://www.acgqd.com\"}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "intro": "$.description",
    "kind": "",
    "lastChapter": "$.last_chapter_name",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": "$..chapterGroup.1.*",
    "chapterName": "$.name",
    "chapterUrl": "http://api.acg.gd/app/chapter/view?id={$.id}"
  },
  "searchUrl": "http://api.acg.gd/app/comic/search?keywords={{key}}&page={{page}}&sort=post",
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