class YueduConvertedSource extends ComicSource {
    name = "奇漫屋子（优）"
    key = "yuedu_0030_source_30"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.qimanwu.app"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "奇漫屋子（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.qimanwu.app",
  "customOrder": 295,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "@js:\nfunction qimanwu() {\n  let disc = [];\n  let Html = java.ajax(`${source.key}/custom/search`);\n  let doc = org.jsoup.Jsoup.parse(Html);\n  let tag = doc.select(\".groupList li a\");\n  Array.from(tag).forEach(a => {\n    disc.push({\n      title: a.text(),\n      url: a.attr(\"href\") +\"/page/{{page}}\",\n      style: {\n        layout_flexGrow: 1,\n        layout_flexBasisPercent: 0.45\n      }\n    });\n  });\n  \n  disc.push({\n    title: \"精品漫画\",\n    url: \"/custom/boutique\",\n    style: {layout_flexBasisPercent: 1, layout_flexGrow: 0.45}\n  });\n  \n  disc.push({\n    title: \"最近更新\",\n    url: \"/custom/update\",\n    style: {layout_flexBasisPercent: 1, layout_flexGrow: 0.45}\n  });\n  \n  disc.push({\n    title: \"热门推荐\",\n    url: \"/custom/recom\",\n    style: {layout_flexBasisPercent: 1, layout_flexGrow: 0.45}\n  });\n\n   return JSON.stringify(disc);\n}\nqimanwu();",
  "header": "@js:\nJSON.stringify({\n\"User-Agent\": java.getWebViewUA()\n})",
  "lastUpdateTime": 1760405989780,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "p.1@text",
    "coverUrl": "img.2@src",
    "intro": "p.5@text",
    "kind": "p.2@a@text",
    "lastChapter": "p.3@text##更新至：",
    "name": "p.0@text"
  },
  "ruleContent": {
    "content": "img@data-src||img@src\n@js:\nresult.split(\"\\n\").map(url => ` <img src=\"${url}\"> `).join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "p.2@text",
    "bookList": ".rankList@li",
    "bookUrl": "a@href",
    "checkKeyWord": "烂柯棋缘",
    "coverUrl": "img.0@src",
    "lastChapter": "p.1@text",
    "name": "p.0@text"
  },
  "ruleToc": {
    "chapterList": ".chapter@ul@li@a",
    "chapterName": "text",
    "chapterUrl": "href##$##,{\"webView\": true}"
  },
  "searchUrl": "/search/{{encodeURIComponent(key)}}/{{page}}",
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