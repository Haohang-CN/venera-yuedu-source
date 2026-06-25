class YueduConvertedSource extends ComicSource {
    name = "🎨大树漫画"
    key = "yuedu_0171_source_171"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.dashumanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🎨大树漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.dashumanhua.com",
  "bookUrlPattern": "",
  "customOrder": 3151,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "冒险热血::/category/maoxianrexue/index-{{page}}.html\n玄幻科幻::/category/xuanhuankehuan/index-{{page}}.html\n侦探推理::/category/zhentantuili/index-{{page}}.html\n耽美爱情::/category/danmeiaiqing/index-{{page}}.html\n生活漫画::/category/shenghuomanhua/index-{{page}}.html\n其他::/category/qita/index-{{page}}.html\n武侠格斗::/category/wuxiagedou/index-{{page}}.html",
  "lastUpdateTime": 1718443810034,
  "respondTime": 4007,
  "ruleBookInfo": {
    "author": "class.shuxin@dd.0@a@text",
    "coverUrl": "",
    "init": "",
    "intro": ".bookms@.ms@text",
    "kind": "class.shuxin@dd.1@a@text",
    "lastChapter": "",
    "name": "h1@text",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "@js:\r\ntry{\nheaders={\"headers\":{\"Referer\":baseUrl}};\r\ne=eval(result.match(/else\\s*?\\{\\s*?(eval\\([\\s\\S]+?\\{\\}\\)\\))\\s*\\}\\s*var/)[1]);\r\npicTree.map(a=>'<img src=\"'+a+','+JSON.stringify(headers)+'\">').join(\"\\n\")\r\n}catch(e){}",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "replaceRegex": "",
    "webJs": ""
  },
  "ruleExplore": {
    "author": "",
    "bookList": "",
    "bookUrl": "",
    "coverUrl": "",
    "intro": "",
    "lastChapter": "",
    "name": ""
  },
  "ruleSearch": {
    "author": "",
    "bookList": "class.alllist@dt",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "intro": "",
    "kind": "",
    "lastChapter": ".who@a@text",
    "name": ".ti@text"
  },
  "ruleToc": {
    "chapterList": "-id.ul_chapter1@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href",
    "isVip": "",
    "nextTocUrl": "",
    "updateTime": ""
  },
  "searchUrl": "https://www.dashumanhua.com/search?types=comic&searhword={{key}}",
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