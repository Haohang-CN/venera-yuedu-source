class YueduConvertedSource extends ComicSource {
    name = "爱漫画🎃"
    key = "yuedu_0156_source_156"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.bjzf.org#🎃"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "爱漫画🎃",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.bjzf.org#🎃",
  "customOrder": 2982,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "全部::/category/?page={{page}}\n霸总::/category/?theme_id=1&order=1&page={{page}}\n修真::/category/?theme_id=2&page={{page}}\n恋爱::/category/?theme_id=3&page={{page}}\n校园::/category/?theme_id=4&page={{page}}\n冒险::/category/?theme_id=5&page={{page}}\n搞笑::/category/?theme_id=6&page={{page}}\n生活::/category/?theme_id=7&page={{page}}\n热血::/category/?theme_id=8&page={{page}}\n架空::/category/?theme_id=9&page={{page}}\n后宫::/category/?theme_id=10&page={{page}}\n玄幻::/category/?theme_id=12&page={{page}}\n悬疑::/category/?theme_id=13&page={{page}}\n恐怖::/category/?theme_id=14&page={{page}}\n灵异::/category/?theme_id=15&page={{page}}\n动作::/category/?theme_id=16&page={{page}}\n科幻::/category/?theme_id=17&page={{page}}\n战争::/category/?theme_id=18&page={{page}}\n古风::/category/?theme_id=19&page={{page}}\n穿越::/category/?theme_id=20&page={{page}}\n竞技::/category/?theme_id=21&page={{page}}\n励志::/category/?theme_id=23&page={{page}}\n同人::/category/?theme_id=24&page={{page}}\n真人::/category/?theme_id=26&page={{page}}",
  "lastUpdateTime": 0,
  "respondTime": 2725,
  "ruleBookInfo": {
    "author": ".comic-info@p@a@text",
    "intro": ".article-desc@text",
    "name": ".comic-info@h1@text"
  },
  "ruleContent": {
    "content": ".lazy-img@data-original\n@js:headers={\"headers\":{\"Referer\":baseUrl}};\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ".container@li",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "intro": "span.1@text",
    "lastChapter": ".new-chapter@text",
    "name": "p@text"
  },
  "ruleSearch": {
    "author": ".author.0@text",
    "bookList": ".block-content li",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": ".bookmark@a@text",
    "lastChapter": ".author.1@a@text##最新：",
    "name": ".article-info@a.0@text"
  },
  "ruleToc": {
    "chapterList": ".chapter-list@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.bjzf.org/search/?searchkey={{key}}",
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