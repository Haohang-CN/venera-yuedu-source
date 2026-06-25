class YueduConvertedSource extends ComicSource {
    name = "✐ 古风漫画"
    key = "yuedu_0176_source_176"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.gufengmh8.com#Haxc1107"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "✐ 古风漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.gufengmh8.com#Haxc1107",
  "customOrder": 3357,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "排行榜::https://m.gufengmh9.com/rank/\n今日更新::https://m.gufengmh9.com/update/{{page}}/\n日本漫画::https://m.gufengmh9.com/list/ribenmanhua/{{page}}/\n国产漫画::https://m.gufengmh9.com/list/guochanmanhua/{{page}}/\n港台漫画::https://m.gufengmh9.com/list/gangtaimanhua/{{page}}/\n欧美漫画::https://m.gufengmh9.com/list/oumeimanhua/{{page}}/\n韩国漫画::https://m.gufengmh9.com/list/hanguomanhua/{{page}}/\n少年漫画::https://m.gufengmh9.com/list/shaonian/{{page}}/\n少女漫画::https://m.gufengmh9.com/list/shaonv/{{page}}/\n青年漫画::https://m.gufengmh9.com/list/qingnian/{{page}}/\n真人漫画::https://m.gufengmh9.com/list/zhenrenmanhua/{{page}}/",
  "lastUpdateTime": 1722687874986,
  "respondTime": 2319,
  "ruleBookInfo": {
    "author": "class.pic@tag.dl.1@tag.dd@text",
    "intro": "class.txtDesc@text",
    "kind": "class.pic@tag.dl.2@tag.dd@text",
    "lastChapter": "class.pic@tag.dl.0@tag.dd@text",
    "name": "tag.h1@text"
  },
  "ruleContent": {
    "content": "@js:\nvar options={\"headers\":{\"Referer\":baseUrl}};\n(function getImgList() {\neval(result.match(/chapterImages\\s*=\\s*[^;]*/)[0])\neval(result.match(/chapterPath\\s*=\\s*[^;]*/)[0])\nreturn chapterImages;\r\n}()).map(uri=>\n'<img src=\"'+'https://res.xiaoqinre.com/'+chapterPath+uri+'\"/>').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".itemTxt@tag.p.0@text",
    "bookList": ".itemBox||id.w0@li",
    "bookUrl": ".itemImg a@href||class.txtA@tag.a@href",
    "coverUrl": ".itemImg mip-img@src||tag.mip-img@src",
    "intro": "class.txtDesc@text",
    "kind": ".itemTxt@tag.p.1@text",
    "lastChapter": "class.coll@text||class.info@tag.a@text||id.chapter-list-1@tag.li.-1@text",
    "name": ".itemTxt a@text||class.txtA@text"
  },
  "ruleToc": {
    "chapterList": "class.list.-1@li@a",
    "chapterName": "span@text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.gufengmh9.com/search/?keywords={{key}}",
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