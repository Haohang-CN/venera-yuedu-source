class YueduConvertedSource extends ComicSource {
    name = "包子漫画"
    key = "yuedu_0120_source_120"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://cn.baozimh.org/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "bug：章节太少不跳转目录页的获取不到目录",
  "bookSourceGroup": "漫画",
  "bookSourceName": "包子漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://cn.baozimh.org/",
  "bookUrlPattern": "",
  "customOrder": 2437,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "热门漫画::/manga-genre/hots\n国漫::/manga-genre/cn\n其他::/manga-genre/qita\n日漫::/manga-genre/jp\n韩漫::/manga-genre/kr\n欧美::/manga-genre/ou-mei\n#复仇::/manga-tag/fuchou\n#古风::/manga-tag/gufeng\n#奇幻::/manga-tag/qihuan\n#逆袭::/manga-tag/nixi\n#异能::/manga-tag/yineng\n#宅向::/manga-tag/zhaixiang\n#穿越::/manga-tag/chuanyue\n#热血::/manga-tag/rexue\n#纯爱::/manga-tag/chunai\n#系统::/manga-tag/xitong\n#重生::/manga-tag/zhongsheng\n#冒险::/manga-tag/maoxian\n#灵异::/manga-tag/lingyi\n#大女主::/manga-tag/danvzhu\n#剧情::/manga-tag/juqing\n#恋爱::/manga-tag/lianai\n#玄幻::/manga-tag/xuanhuan\n#女神::/manga-tag/nvshen\n#科幻::/manga-tag/kehuan\n#魔幻::/manga-tag/mohuan\n#推理::/manga-tag/tuili\n#猎奇::/manga-tag/lieqi\n#治愈::/manga-tag/zhiyu\n#都市::/manga-tag/doushi\n#异形::/manga-tag/yixing\n#青春::/manga-tag/qingchun\n#末日::/manga-tag/mori\n#悬疑::/manga-tag/xuanyi\n#修仙::/manga-tag/xiuxian\n#战斗::/manga-tag/zhandou",
  "header": "{\n\t\"cookie\":\"_ga=GA1.1.425169873.1697720519; _ga_KMWK3HTJJQ=GS1.1.1698098065.4.1.1698098124.0.0.0; bnState_1995929={\"impressions\":23,\"delayStarted\":0}\"\n\t}",
  "lastUpdateTime": 1698130757596,
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.text-small py-1@a@text",
    "coverUrl": "",
    "intro": "class.text-medium line-clamp-4 my-unit-md@text",
    "kind": "class.text-sm py-1@span.1@text",
    "lastChapter": "",
    "name": "class.flex ißtems-center text-default-400@a@text",
    "tocUrl": "class.my-unit-sm@a@href"
  },
  "ruleContent": {
    "content": "class.w-full h-full@img@src@js:result.split(\"\\n\").map(x=>'<img src=\"'+x+'\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "title": ""
  },
  "ruleExplore": {
    "bookList": "class.pb-2",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "name": "h3@text"
  },
  "ruleSearch": {
    "author": "",
    "bookList": "class.pb-2",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "-class.w-full md:w-1/2||-class. bg-default-50 rounded-lg",
    "chapterName": "span.0@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://cn.baozimh.org/s/{{key}},{'webView': true}",
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