class YueduConvertedSource extends ComicSource {
    name = "裤裤漫画（优）"
    key = "yuedu_0029_source_29"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.kukuc.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "裤裤漫画（优）",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.kukuc.net",
  "customOrder": 293,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[\n  {\n    \"title\": \"全部漫画\",\n    \"url\": \"/kuclists/9/全部/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"韩漫\",\n    \"url\": \"/kuclists/9/韩漫/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"剧情\",\n    \"url\": \"/kuclists/9/剧情/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"耽美\",\n    \"url\": \"/kuclists/9/耽美/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"纯爱\",\n    \"url\": \"/kuclists/9/纯爱/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"大女主\",\n    \"url\": \"/kuclists/9/大女主/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"古风\",\n    \"url\": \"/kuclists/9/古风/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"都市\",\n    \"url\": \"/kuclists/9/都市/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"热血\",\n    \"url\": \"/kuclists/9/热血/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"少年\",\n    \"url\": \"/kuclists/9/少年/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"玄幻\",\n    \"url\": \"/kuclists/9/玄幻/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"穿越\",\n    \"url\": \"/kuclists/9/穿越/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"甜宠\",\n    \"url\": \"/kuclists/9/甜宠/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"校园\",\n    \"url\": \"/kuclists/9/校园/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"悬疑\",\n    \"url\": \"/kuclists/9/悬疑/3/{{page}}.html\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  }\n]",
  "header": "{\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 13; zh-Hans-CN; PFJM10 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.4896.58 Quark/6.13.6.581 Mobile Safari/537.36\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\"Referer\":\"http://www.kukuc.net\"}",
  "lastUpdateTime": 1760405815303,
  "respondTime": 10233,
  "ruleBookInfo": {
    "author": "[property=\"og:novel:author\"]@content",
    "coverUrl": "[property=\"og:image\"]@content##(.*)##$1,{\"headers\":{\"Referer\":\"$1\"}}###",
    "intro": "[property=\"og:description\"]@content",
    "kind": "[property~=category|status|update_time]@content",
    "lastChapter": "[property~=las?test_chapter_name]@content",
    "name": "[property=\"og:novel:book_name\"]@content",
    "tocUrl": "text.目录@href"
  },
  "ruleContent": {
    "content": "#content@p@a@img@src\n@js:\nresult.split('\\n').map(x => '<img src=\"'+x+',{\"headers\":{\"Referer\":\"'+x+'\"}}\">').join('\\n')"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "dd.1@ownText##作者：",
    "bookList": "#sitebox@dl",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src##(.*)##$1,{\"headers\":{\"Referer\":\"$1\"}}###",
    "intro": "dd.2@text",
    "kind": "span.0@text",
    "lastChapter": "a.2@text",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": ".readlist@li!0@a",
    "chapterName": "text",
    "chapterUrl": "href",
    "nextTocUrl": "option@value"
  },
  "searchUrl": "/search/,{\n  \"body\": \"searchkey={{key}}\",\n  \"method\": \"POST\"\n}",
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