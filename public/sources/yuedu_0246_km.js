class YueduConvertedSource extends ComicSource {
    name = "KM漫画"
    key = "yuedu_0246_km"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://kmh004.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//2025.1.8\nBuding 修复搜索 部分书籍目录\n感谢= =大佬提供的目录规则\n\n//2024.10.9\n感谢明月照大江大佬与朱振亿大佬提供正文规则\nby墨殇&明月照大江&朱振亿",
  "bookSourceGroup": "漫画",
  "bookSourceName": "KM漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://kmh004.com/",
  "bookUrlPattern": "https?://kmh004.com/comic/\\w+",
  "customOrder": 5616,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"首页\",\"url\":\"/home\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"周一\",\"url\":\"/weekly/1\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周二\",\"url\":\"/weekly/2\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周三\",\"url\":\"/weekly/3\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周四\",\"url\":\"/weekly/4\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周五\",\"url\":\"/weekly/5\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周六\",\"url\":\"/weekly/6\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周日\",\"url\":\"/weekly/0\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"完本\",\"url\":\"/complete?page={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "{\"Referer\":\"https://kmh004.com/\"}",
  "lastUpdateTime": 1736314468305,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "span.2@text##作者：",
    "coverUrl": ".swiper-slide.0@img@src",
    "intro": "p.0@text",
    "kind": ".p-1 a@text##\\>",
    "lastChapter": "span.3@text",
    "name": "span.0@text"
  },
  "ruleContent": {
    "content": "<js>\nthis._init(`JSON.stringify(item).includes(\"FREEXCOMIC\")`, ($) => {\n  $ = jsonpath($);\n  result = $.read(\"$..images[?(@.sourceName == 'FREEXCOMIC')]\");\n  result = result.toArray().map((item, index) => {\n    return `<img src=\"${item.url}\">`\n  });\n});\nresult.join('\\n')\n</js>"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "佚名{{@@}}",
    "bookList": ".flex-wrap a",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": "h4.2@text##连载状态：",
    "lastChapter": "h4.0@text",
    "name": "h3@text",
    "wordCount": "h4.3@text"
  },
  "ruleToc": {
    "chapterList": "a[href~=chapter]",
    "chapterName": "span!-1@text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://kmh004.com/search?key={{key}}",
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