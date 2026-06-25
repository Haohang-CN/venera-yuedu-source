class YueduConvertedSource extends ComicSource {
    name = "知音漫客"
    key = "yuedu_0180_source_180"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.zymk.cn/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "知音漫客",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.zymk.cn/",
  "customOrder": 3427,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "热血::/sort/5_p{{page}}.html&&\n搞笑::/sort/6_p{{page}}.html&&\n玄幻::/sort/7_p{{page}}.html&&\n生活::/sort/8_p{{page}}.html&&\n恋爱::/sort/9_p{{page}}.html&&\n动作::/sort/10_p{{page}}.html&&\n科幻::/sort/11_p{{page}}.html&&\n战争::/sort/12_p{{page}}.html&&\n悬疑::/sort/13_p{{page}}.html&&\n恐怖::/sort/14_p{{page}}.html&&\n校园::/sort/15_p{{page}}.html&&\n历史::/sort/16_p{{page}}.html&&\n穿越::/sort/17_p{{page}}.html&&\n体育::/sort/19_p{{page}}.html&&\n都市::/sort/20_p{{page}}.html&&\n漫改::/sort/22_p{{page}}.html&&\n修真::/sort/53_p{{page}}.html&&\n霸总::/sort/62_p{{page}}.html&&\n古风::/sort/63_p{{page}}.html&&\n游戏::/sort/64_p{{page}}.html&&\n真人::/sort/65_p{{page}}.html&&\n武侠::/sort/66_p{{page}}.html&&",
  "lastUpdateTime": 1732184856973,
  "respondTime": 728,
  "ruleBookInfo": {
    "author": "class.author@text",
    "intro": "class.content@text",
    "kind": "class.tags@a@text",
    "name": "h1.name@text"
  },
  "ruleContent": {
    "content": "@js:\nhost='http://mhpic.zymkcdn.com/comic/';\noriginal=result.match(/dr_original:\"([^\"]+)\"/)[1];\nend=result.match(/end_var:(\\d+)/)[1];\n//画质\nhigh='.jpg-zymk.high.webp';\nlow='.jpg-zymk.low.webp';\nmiddle='.jpg-zymk.middle.webp';\n\nhtml='';\nfor(i=1;i<=end;i++){\nhtml+='<img src=\"'+host+original+i+high+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "",
    "bookList": "class.item@h3",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "img@data-src",
    "kind": "class.score@text",
    "lastChapter": "class.chapter@text",
    "name": "class.title@a@text"
  },
  "ruleToc": {
    "chapterList": "-class.chapterlist@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.zymk.cn/sort/all.html?key={{key}}",
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