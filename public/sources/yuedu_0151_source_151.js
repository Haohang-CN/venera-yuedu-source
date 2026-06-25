class YueduConvertedSource extends ComicSource {
    name = "红茶漫画"
    key = "yuedu_0151_source_151"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.webtoons.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "referer",
  "bookSourceGroup": "漫画",
  "bookSourceName": "红茶漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.webtoons.com",
  "customOrder": 2851,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "全部分类::https://www.webtoons.com/zh-hant/genre\n\n动作&奇幻::https://www.webtoons.com/zh-hant/top?rankingGenre=ACTION_FANTASY&target=MALE10",
  "lastUpdateTime": 1734955331635,
  "respondTime": 2075,
  "ruleBookInfo": {
    "author": "class.author@ownText",
    "init": "",
    "intro": "class.summary@text",
    "kind": "class.genre@text",
    "lastChapter": "class.tx.0@text&&class.subj.1@text",
    "name": "tag.h3@text",
    "tocUrl": "@js:\nheader={\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044807 Mobile Safari/537.36\"\n}\nheaders={\"headers\":JSON.stringify(header)}\n\n'https://m.webtoons.com'+baseUrl.replace(/http.*?com/,'')+','+JSON.stringify(headers);",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "id._imageList@img@data-url##webtoon##mwebtoon\n@js:header={\"Referer\":baseUrl};\nheaders={\"headers\":JSON.stringify(header)};\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "replaceRegex": "",
    "webJs": "\n"
  },
  "ruleExplore": {
    "author": ".author@text",
    "bookList": ".card_lst@li||.lst_type1@li",
    "bookUrl": "a@href",
    "coverUrl": "img@src@js:header={\"Referer\":baseUrl}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "intro": ".summary@text",
    "kind": ".genre g_fantasy@text",
    "name": ".subj@text"
  },
  "ruleSearch": {
    "author": "class.author@text",
    "bookList": "class.card_lst@ul@li&&.challenge_lst@li",
    "bookUrl": "tag.a.0@href",
    "checkKeyWord": "大小姐",
    "coverUrl": "img@src##webtoon##mwebtoon@js:header={\"Referer\":baseUrl}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "kind": "class.g_romance@text",
    "lastChapter": "",
    "name": "class.subj@text"
  },
  "ruleToc": {
    "chapterList": "-id._episodeList@li@a",
    "chapterName": "class.sub_title@text",
    "chapterUrl": "href",
    "nextTocUrl": "",
    "updateTime": "class.date@text"
  },
  "searchUrl": "https://www.webtoons.com/zh-hant/search?searchType=ALL&keyword={{key}}",
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