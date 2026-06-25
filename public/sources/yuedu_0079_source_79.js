class YueduConvertedSource extends ComicSource {
    name = "百年漫画📱"
    key = "yuedu_0079_source_79"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.bnmanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "百年漫画📱",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.bnmanhua.com",
  "bookUrlPattern": "",
  "customOrder": 1834,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "少年漫画::https://m.bnmanhua.com/list/1/{{page}}.html\n少女漫画::https://m.bnmanhua.com/list/2/{{page}}.html\n青年漫画::https://m.bnmanhua.com/list/3/{{page}}.html\n女性漫画::https://m.bnmanhua.com/list/4/{{page}}.html\n日本漫画::https://m.bnmanhua.com/list/rihan/{{page}}.html\n国产漫画::https://m.bnmanhua.com/list/guochan/{{page}}.html\n最近更新::https://m.bnmanhua.com/page/new/{{page}}.html\n最新加载::https://m.bnmanhua.com/page/wanjie/{{page}}.html\n排行榜::https://m.bnmanhua.com/page/hot/{{page}}.html",
  "header": "",
  "lastUpdateTime": 1626436494778,
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.data@class.dir@text##作者：",
    "coverUrl": "class.img@tag.mip-img@src",
    "intro": "class.banquan@text&&class.tbox_js@text",
    "kind": "class.data@class.yac@text##类别：",
    "lastChapter": "class.data@class.act@text##更新：",
    "name": "class.data@tag.h4@text",
    "tocUrl": "##\"(.*link.*)\" ><i##$1###",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "<js>\nvar data=result.match(/z_img='([^']*)/)[1];\ndata\n</js>\n$.[*]@js:result.split(\"\\n\").map(x=>'<img src=\\\"https://img.glyf168.com/'+x+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "replaceRegex": "",
    "sourceRegex": "",
    "webJs": ""
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.vbox@tag.li",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "tag.mip-img.0@src",
    "lastChapter": "tag.a.0@text",
    "name": "tag.a.1@text"
  },
  "ruleToc": {
    "chapterList": "-class.list_block show@tag.a||text.点击阅读原文",
    "chapterName": "text",
    "chapterUrl": "href",
    "isVip": "",
    "nextTocUrl": "",
    "updateTime": ""
  },
  "searchUrl": "https://m.bnmanhua.com/search/{{key}}<,/{{page}}.html>",
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