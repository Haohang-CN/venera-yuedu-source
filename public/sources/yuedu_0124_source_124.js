class YueduConvertedSource extends ComicSource {
    name = "咚漫"
    key = "yuedu_0124_source_124"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.dongmanmanhua.cn"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "咚漫",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.dongmanmanhua.cn",
  "bookUrlPattern": "",
  "customOrder": 2640,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "更新::https://m.dongmanmanhua.cn/dailySchedule\n分类::https://m.dongmanmanhua.cn/genre\n周六::https://m.dongmanmanhua.cn/dailySchedule{,/error.html}#SATURDAY\r\n周日::https://m.dongmanmanhua.cn/dailySchedule{,/error.html}#SUNDAY\r\n完结::https://m.dongmanmanhua.cn/dailySchedule{,/error.html}#COMPLETE\r\n恋爱::https://m.dongmanmanhua.cn/genre{,/error.html}#LOVE\r\n少年::https://m.dongmanmanhua.cn/genre{,/error.html}#BOY\r\n古风::https://m.dongmanmanhua.cn/genre{,/error.html}#ANCIENTCHINESE\r\n奇幻::https://m.dongmanmanhua.cn/genre{,/error.html}#FANTASY\r\n搞笑::https://m.dongmanmanhua.cn/genre{,/error.html}#COMEDY\r\n校园::https://m.dongmanmanhua.cn/genre{,/error.html}#CAMPUS\r\n都市::https://m.dongmanmanhua.cn/genre{,/error.html}#METROPOLIS\r\n治愈::https://m.dongmanmanhua.cn/genre{,/error.html}#HEALING\r\n悬疑::https://m.dongmanmanhua.cn/genre{,/error.html}#SUSPENSE\r\n励志::https://m.dongmanmanhua.cn/genre{,/error.html}#INSPIRATIONAL\r\n影视化::https://m.dongmanmanhua.cn/genre{,/error.html}#FILMADAPTATION\r\n完结::https://m.dongmanmanhua.cn/genre{,/error.html}#TERMINATION",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 8.0.0; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 YaBrowser/18.9.1.2199.00 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1733130054183,
  "loginUrl": "",
  "respondTime": 2913,
  "ruleBookInfo": {
    "author": "class.author.0@text",
    "init": "",
    "intro": "class.summary@text",
    "kind": "class.genre@text",
    "lastChapter": "id._episodeList@tag.span.0@text",
    "name": "class.subj.0@text"
  },
  "ruleContent": {
    "content": "@js:\neval(result.match(/(var imageList = \\[[\\s\\S]+?\\])/)[1]);\nhtml='';\nheaders={\"headers\": {\"Referer\":baseUrl}}\nfor(i in imageList){\nhtml+='<img src=\"'+imageList[i].url+','+JSON.stringify(headers)+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "writingAuthorName",
    "bookList": "class.daily_list@tag.li||$.titleList",
    "bookUrl": "tag.a@href||https://m.dongmanmanhua.cn/{$.genreNew.gnTitle}/{$.titleGroupName}/list?title_no={$.titleNo}",
    "coverUrl": "tag.img@src||https://cdn.dongmanmanhua.cn{$.thumbnailMobile}@js:header={\"Referer\":baseUrl}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "kind": "class.genre@text",
    "name": "class.subj@text||$.title"
  },
  "ruleToc": {
    "chapterList": "id._episodeList@tag.li",
    "chapterName": "tag.span.0@text",
    "chapterUrl": "a@data-href",
    "isVolume": ""
  },
  "searchUrl": "https://m.dongmanmanhua.cn/searchResult,{\n  \"headers\": \"{Content-Type: application/x-www-form-urlencoded}\",\n  \"method\": \"POST\",\n  \"body\": \"keyword={{key}}&searchType=WEBTOON&start=1\"\n}",
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