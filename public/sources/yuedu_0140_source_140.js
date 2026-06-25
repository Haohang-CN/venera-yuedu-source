class YueduConvertedSource extends ComicSource {
    name = "品如漫画"
    key = "yuedu_0140_source_140"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.rumanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: Timed out waiting for 60000 ms\n\n//9.1 by: 游客",
  "bookSourceGroup": "漫画",
  "bookSourceName": "品如漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.rumanhua.com",
  "bookUrlPattern": "https?://m.rumanhua.com/\\w+/",
  "customOrder": 2817,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "@js:\nvar kind = [\"冒险\",\"热血\",\"都市\",\n\"玄幻\",\"悬疑\",\"耽美\",\"恋爱\",\"生活\",\n\"搞笑\",\"穿越\",\"修真\",\"后宫\",\"女主\",\n\"古风\",\"连载\",\"完结\"];\nlet bu = \"/data/sort,\"\nbd = {\n  \"body\": \"s=1&p={{page}}\",\n  \"headers\": {\n    \"Referer\": \"{{baseUrl}}/\",\n    \"X-Requested-With\": \"XMLHttpRequest\"\n  },\n  \"method\": \"POST\"\n};\n\nsort = kind.map((name, index) => {\n\tindex++; let  i = index,\n\turl = `s=${i}&p={{page}}`,\n\ttitle = name; bd.body = url;\n\tlink = bu + JSON.stringify(bd);\n\tlist = ({\n    \"title\": title,\n    \"url\": link,\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.25,\n    }\n  });\n\treturn list\n\t});\n\t\nJSON.stringify(sort);",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1750753319803,
  "respondTime": 263026,
  "ruleBookInfo": {
    "author": "@get:{a}",
    "coverUrl": "@get:{c}",
    "init": "@put:{n:\"[property$=title]@content\",\na:\"[property$=author]@content\",\nk:\".comic-tags@span@text&&\n.comic-info-detail > p.0@text\",\nl:\"[property~=las?test_chapter_name]@content\",\ni:\".cartoon-introduction@text\",\nc:\"[property$=image]@content\"}",
    "intro": "@get:{i}",
    "kind": "@get:{k}##更新：",
    "lastChapter": "@get:{l}",
    "name": "@get:{n}"
  },
  "ruleContent": {
    "content": ".main_img@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$.data[*]",
    "bookUrl": "/{{$.id}}/",
    "coverUrl": "$.imgurl",
    "intro": "$.intro",
    "kind": "0",
    "lastChapter": "$.remarks",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": ".chaplist-box li a\n@js:\nvar list = Array.from(result)\ntry{\n var regex = /(\\w+)\\/$/,\n id = baseUrl.match(regex)[1];\n url = baseUrl.replace(regex, \"morechapter\");\n\tp = java.post(url, `id=${id}`, \n\t{Referer: baseUrl}).body();\n\td = JSON.parse(p).data;\ndir = d.map($ => ({text: $.chaptername,\n\thref: baseUrl + $.chapterid+\".html\"}) );\n\t}catch(e){\n\t\tjava.log(e)\n\t\tdir = [];\n\t\t}\nlist.concat(dir).reverse()",
    "chapterName": "text",
    "chapterUrl": "href##$##,{'webView': true}"
  },
  "searchUrl": "/s,{\n  \"body\": \"k={{key}}\",\n  \"headers\": {\n    \"Referer\": \"{{baseUrl}}/\",\n    \"X-Requested-With\": \"XMLHttpRequest\"\n  },\n  \"method\": \"POST\"\n}",
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