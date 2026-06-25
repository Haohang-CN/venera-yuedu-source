class YueduConvertedSource extends ComicSource {
    name = "永远漫画（优）"
    key = "yuedu_0136_source_136"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.yydsmh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "永远漫画（优）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.yydsmh.com",
  "bookUrlPattern": "https?://www.yydsmh.com/manga/\\d+/",
  "customOrder": 2804,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[\n  {\n    \"title\":\"全部\",\n    \"url\":\"/manga-lists/9/全部/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\n    \"title\":\"长条\",\n    \"url\":\"/manga-lists/9/长条/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"大女主\",\n    \"url\":\"/manga-lists/9/大女主/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"百合\",\n    \"url\":\"/manga-lists/9/百合/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"耽美\",\n    \"url\":\"/manga-lists/9/耽美/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"纯爱\",\n    \"url\":\"/manga-lists/9/纯爱/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"後宫\",\n    \"url\":\"/manga-lists/9/後宫/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"韩漫\",\n    \"url\":\"/manga-lists/9/韩漫/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"奇幻\",\n    \"url\":\"/manga-lists/9/奇幻/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"轻小说\",\n    \"url\":\"/manga-lists/9/轻小说/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"生活\",\n    \"url\":\"/manga-lists/9/生活/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"悬疑\",\n    \"url\":\"/manga-lists/9/悬疑/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"格斗\",\n    \"url\":\"/manga-lists/9/格斗/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"搞笑\",\n    \"url\":\"/manga-lists/9/搞笑/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"伪娘\",\n    \"url\":\"/manga-lists/9/伪娘/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"竞技\",\n    \"url\":\"/manga-lists/9/竞技/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"职场\",\n    \"url\":\"/manga-lists/9/职场/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"萌系\",\n    \"url\":\"/manga-lists/9/萌系/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"冒险\",\n    \"url\":\"/manga-lists/9/冒险/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"治愈\",\n    \"url\":\"/manga-lists/9/治愈/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"都市\",\n    \"url\":\"/manga-lists/9/都市/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"霸总\",\n    \"url\":\"/manga-lists/9/霸总/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"神鬼\",\n    \"url\":\"/manga-lists/9/神鬼/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"侦探\",\n    \"url\":\"/manga-lists/9/侦探/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"爱情\",\n    \"url\":\"/manga-lists/9/爱情/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"古风\",\n    \"url\":\"/manga-lists/9/古风/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"欢乐向\",\n    \"url\":\"/manga-lists/9/欢乐向/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"科幻\",\n    \"url\":\"/manga-lists/9/科幻/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"穿越\",\n    \"url\":\"/manga-lists/9/穿越/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"性转换\",\n    \"url\":\"/manga-lists/9/性转换/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"校园\",\n    \"url\":\"/manga-lists/9/校园/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  },\n  {\n    \"title\":\"美食\",\n    \"url\":\"/manga-lists/9/美食/3/{{page}}.html\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.2\n    }\n  }\n]",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1750215922514,
  "respondTime": 19229,
  "ruleBookInfo": {
    "author": "@get:{a}",
    "coverUrl": "@get:{c}",
    "init": "@put:{n:\"[property$=book_name]@content\",\na:\"[property$=author]@content\",\nk:\"[property~=category|status|update_time]@content\",\nl:\"[property~=las?test_chapter_name]@content\",\ni:\"[property$=description]@content\",\nc:\"[property$=image]@content\"}",
    "intro": "@get:{i}",
    "kind": "@get:{k}",
    "lastChapter": "@get:{l}",
    "name": "@get:{n}"
  },
  "ruleContent": {
    "content": "article#reader-scroll@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "li.item.comic-item",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": "0",
    "lastChapter": "span@text",
    "name": "p.title@text"
  },
  "ruleToc": {
    "chapterList": ".chapter-list li a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "{{cookie.removeCookie(baseUrl)}}/search?searchkey={{key}}",
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