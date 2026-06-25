class YueduConvertedSource extends ComicSource {
    name = "漫城小说🎃"
    key = "yuedu_0155_source_155"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.ieat.cc#🎃"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画,小说",
  "bookSourceName": "漫城小说🎃",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.ieat.cc#🎃",
  "customOrder": 2956,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[\n{\n    \"title\":\"༺ˇ»`ʚ排行榜ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n{\n    \"title\":\"人气\",\n    \"url\":\"index.php/api/data/book?order=zhits&page={{page}}&size=15\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"收藏\",\n    \"url\":\"index.php/api/data/book?order=shits&page={{page}}&size=15\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"月票\",\n    \"url\":\"index.php/api/data/book?order=ticket&page={{page}}&size=15\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"打赏\",\n    \"url\":\"index.php/api/data/book?order=cion&page={{page}}&size=15\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"免费\",\n    \"url\":\"index.php/api/data/book?pay=0&page={{page}}\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  \n  \n\n  {\n    \"title\":\"༺ˇ»`ʚ玄幻ɞ´«ˇ༻\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=1\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\n    \"title\":\"仙侠\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=2\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"都市\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=3\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"历史\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=4\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"网游\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=6\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"科幻\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=5\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"言情\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=10\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"其他\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=8\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"男频\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=9\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"女频\",\n    \"url\":\"index.php/api/data/book?ist=3&order=shits&pay=0&finish=0&tags=0&size=0&page={{page}}&cid=7\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  \n  \n  ]",
  "header": "@js:\nJSON.stringify({\n\t\"referer\": source.getKey(),\n\"x-requested-with\": \"mark.via\",\n\"accept-language\": \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\n\"user-agent\": \"Mozilla/5.0 (Linux; Android 10; PACM00 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36\"})",
  "lastUpdateTime": 0,
  "respondTime": 9810,
  "ruleBookInfo": {
    "author": "[property$=author]@content",
    "canReName": "",
    "coverUrl": "[property$=image]@content",
    "intro": "🕰  更新：{{@@[property$=update_time]@content##\\s.*}}\n🌟  人气：{{@@.hot@text##人气：}}\n📜  简介：{{@@[property$=description]@content}}##(^|[。！？……；]+[”」）】]?)##$1<br>",
    "kind": "[property~=category|status|update_time]@content##\\s.*",
    "lastChapter": "{{@@[property$=chapter_name]@content##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]}}•{{@@[property$=update_time]@content##\\s.*}}\n。@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(第.+章)\\s?\\d+/,'$1')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "name": "[property$=book_name]@content",
    "tocUrl": "",
    "wordCount": ""
  },
  "ruleContent": {
    "content": ".chapter-preview@p@text",
    "replaceRegex": "##一秒记住.*宝书网.*无弹窗."
  },
  "ruleExplore": {
    "author": "$.author",
    "bookList": "$.data",
    "bookUrl": "$.url",
    "coverUrl": "$.picx",
    "intro": "$.content",
    "kind": "{{$.serialize}}\n{{$.tags}}\n{{$.addtime##\\s.*}}",
    "lastChapter": "$.chapter_name",
    "name": "$.name",
    "wordCount": "$.text_num##^\\d+\\.|正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(第.+章)\\s?\\d+/,'$1')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3"
  },
  "ruleSearch": {
    "author": ".comic-author.0@text",
    "bookList": ".comic-list-item",
    "bookUrl": "a.0@href",
    "checkKeyWord": "我的模拟长生路",
    "coverUrl": "img@src",
    "intro": ".comic-author.1@text",
    "kind": ".comic-update-at@text##\\(|\\).*",
    "lastChapter": "",
    "name": ".comic-name@text",
    "wordCount": ".comic-update-at@text##.*\\)共"
  },
  "ruleToc": {
    "chapterList": ".item@a",
    "chapterName": ".title@text",
    "chapterUrl": "href",
    "updateTime": "{{@@.date@text}}##^##更新时间："
  },
  "searchUrl": "book/search?key={{key}}",
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