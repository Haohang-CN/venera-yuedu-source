class YueduConvertedSource extends ComicSource {
    name = "白茶漫画（魔法）"
    key = "yuedu_0148_source_148"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.webtoons.com/zh-hant/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "挂梯",
  "bookSourceGroup": "漫画",
  "bookSourceName": "白茶漫画（魔法）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.webtoons.com/zh-hant/",
  "customOrder": 2844,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{'title':'人气榜','url':'https://m.webtoons.com/zh-hant/top,{\"headers\":{\"User-Agent\":\"Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044807 Mobile Safari/537.36\"}}','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},\n{'title':'时间表','url':'','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},\n{'title':'周一','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=0','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周二','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=1','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周三','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=2','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周四','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=3','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周五','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=4','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周六','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=5','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'周日','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=6','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\n{'title':'完结','url':'https://www.webtoons.com/zh-hant/dailySchedule?page=7','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}}]",
  "lastUpdateTime": 1733852639902,
  "loginUrl": "",
  "respondTime": 6870,
  "ruleBookInfo": {
    "author": "class.author@ownText",
    "coverUrl": "[property=\"og:image\"]@content",
    "init": "",
    "intro": "class.date.0@text&&class.summary@html@js:result.trim().replace(/[\\s\\t]+/g, '\\n').replace(/(\\d+\\/\\d+\\/\\d+)/, '    🔖更新时间：$1\\n&lrm;').replace(/(\\d+?)\\/(\\d+?)\\/(\\d+?)/, '$1-$2-$3')",
    "kind": "book.kind&&class.day_info@text&&class.genre@text",
    "lastChapter": "class.subj.1@text",
    "name": "tag.h3@text",
    "tocUrl": "@js:\nheader={\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044807 Mobile Safari/537.36\"\n}\nheaders={\"headers\":JSON.stringify(header)}\n\n'https://m.webtoons.com'+baseUrl.replace(/http.*?com/,'')+','+JSON.stringify(headers);",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "id._imageList@img@data-url##webtoon##mwebtoon\n@js:header={\"Referer\":baseUrl};\nheaders={\"headers\":JSON.stringify(header)};\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "replaceRegex": "##src=\".*?data-url=##src=",
    "webJs": ""
  },
  "ruleExplore": {
    "author": ".author@text",
    "bookList": "class.lst_type1@li||class.daily_card\n<js>\nif(baseUrl.match(/page=(\\d+)/)){\nid=baseUrl.match(/page=(\\d+)/)[1];\nlist=result.toArray();\nresult=list[id]\n}else{\nresult=result\n}\n</js>\ntag.li",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "img@src@js:header={\"Referer\":baseUrl}\nheaders={\"headers\":JSON.stringify(header)}\nresult=result+','+JSON.stringify(headers)",
    "intro": "",
    "kind": "class.genre@text",
    "name": ".subj@text"
  },
  "ruleSearch": {
    "author": "class.author@text",
    "bookList": "class.challenge_lst@li&&class.card_lst@li",
    "bookUrl": "tag.a.0@href",
    "checkKeyWord": "girl",
    "coverUrl": "img@src##webtoon##mwebtoon",
    "kind": "class.g_romance@text",
    "lastChapter": "",
    "name": "class.subj@text"
  },
  "ruleToc": {
    "chapterList": "-id._episodeList@li@a",
    "chapterName": "class.sub_title@text",
    "chapterUrl": "href",
    "nextTocUrl": "",
    "updateTime": "{{@@class.likeList _likeMark@text##likeit##♡}}｜{{@@class.date@text##/##-}}"
  },
  "searchUrl": "https://www.webtoons.com/zh-hant/search?keyword={{key}}",
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