class YueduConvertedSource extends ComicSource {
    name = "YY漫画"
    key = "yuedu_0037_yy"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.yymanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//5.16@ys4568",
  "bookSourceGroup": "漫画",
  "bookSourceName": "YY漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.yymanhua.com",
  "customOrder": 449,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"熱血\",\"url\":\"/manga-list-31-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"戀愛\",\"url\":\"/manga-list-26-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"校園\",\"url\":\"/manga-list-1-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"冒險\",\"url\":\"/manga-list-2-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科幻\",\"url\":\"/manga-list-25-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"生活\",\"url\":\"/manga-list-11-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"懸疑\",\"url\":\"/manga-list-17-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"魔法\",\"url\":\"/manga-list-15-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"運動\",\"url\":\"/manga-list-34-{{page-1}}-10/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "@js:\nJSON.stringify({\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 11; PCHM30 Build/RKQ1.200903.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36\",\n  \"accept-language\": \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n})",
  "lastUpdateTime": 1747713140320,
  "respondTime": 3933,
  "ruleBookInfo": {
    "author": ".detail-main-top-info-author-item@text",
    "intro": "&nbsp;\n📄 简介：{{@@.detail-main-content.-1@text}}"
  },
  "ruleContent": {
    "content": "@js: \n   let pics=java.getString('.lazy@img@data-src');\n   let hd=JSON.stringify({\"headers\":{\"Referer\":source.key}});\n   let p=String(pics).split(\"\\n\").map(i=>`<img src=\"${i},${hd}\">`).join(\"\\n\");\n   p;",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ".manga-i-list-item",
    "bookUrl": ".manga-i-list-item@a@href",
    "coverUrl": "img@src",
    "intro": ".manga-i-list-subtitle@text",
    "name": ".manga-i-list-title@text"
  },
  "ruleSearch": {
    "author": ".manga-item-subtitle.0@text##作者：",
    "bookList": ".manga-item",
    "bookUrl": "a@href",
    "checkKeyWord": "姐姐",
    "coverUrl": "img@src",
    "intro": ".manga-item-content@text",
    "kind": ".manga-item-subtitle@span@text",
    "name": ".manga-item-title@text"
  },
  "ruleToc": {
    "chapterList": "-.detail-list-item@a",
    "chapterName": "textNodes",
    "chapterUrl": "href##$##,{\"webView\":true}"
  },
  "searchUrl": "/search?title={{key}}",
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