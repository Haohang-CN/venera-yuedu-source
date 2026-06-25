class YueduConvertedSource extends ComicSource {
    name = "🌐仙漫漫画"
    key = "yuedu_0112_source_112"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.xianman123.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "haxc",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌐仙漫漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.xianman123.com",
  "customOrder": 2378,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "连载::https://www.xianman123.com/f-1-0-0-1-0-0-{{page}}.html\n完结::https://www.xianman123.com/f-1-0-0-2-0-0-{{page}}.html\n国漫::https://www.xianman123.com/f-1-0-1-0-0-0-{{page}}.html\n日漫::https://www.xianman123.com/f-1-0-2-0-0-0-{{page}}.html\n更新::https://www.xianman123.com/f-1-0-0-0-0-0-{{page}}.html\n排行::https://www.xianman123.com/f-1-0-0-0-0-1-{{page}}.html",
  "lastUpdateTime": 1728715383989,
  "respondTime": 1984,
  "ruleBookInfo": {
    "author": ".subtitle@a@text",
    "init": "",
    "intro": ".content@text",
    "kind": ".ticai@a@text",
    "lastChapter": "#detail-list-select-1@li.0@a@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": "@js:\r\ntry{\r\neval(result.match(/(eval\\([\\s\\S]+?)<\\/script/)[1]);\nhost=result.match(/imgDomain = '(.*?)';/)[1];\r\npicdata.map(a=>\r\n'<img src=\"'+host+a+'\">').join(\"\\n\")\r\n}catch(e){}",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "bookList": ".mh-list@li",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "lastChapter": "p@a@text",
    "name": "h2@text"
  },
  "ruleToc": {
    "chapterList": "-#detail-list-select-1@li@a",
    "chapterName": "textNodes",
    "chapterUrl": "href",
    "updateTime": "span@text"
  },
  "searchUrl": "https://www.xianmanwang.com/index/index/search.html?keyboard={{key}}",
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