class YueduConvertedSource extends ComicSource {
    name = "来漫画"
    key = "yuedu_0207_source_207"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.laimanhua.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "搜索不了了",
  "bookSourceGroup": "漫画",
  "bookSourceName": "来漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.laimanhua.net",
  "bookUrlPattern": "",
  "customOrder": 3911,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "少年热血::/kanmanhua/rexue/?page={{page}}\n武侠格斗::/kanmanhua/gedou/?page={{page}}\n科幻魔幻::/kanmanhua/kehuan/?page={{page}}\n竞技体育::/kanmanhua/jingji/?page={{page}}\n爆笑喜剧::/kanmanhua/gaoxiao/?page={{page}}\n侦探推理::/kanmanhua/tuili/?page={{page}}\n恐怖灵异::/kanmanhua/kongbu/?page={{page}}\n耽美人生::/kanmanhua/danmei/?page={{page}}\n少女爱情::/kanmanhua/shaonv/?page={{page}}\n恋爱生活::/kanmanhua/lianai/?page={{page}}\n生活漫画::/kanmanhua/shenghuo/?page={{page}}\n战争漫画::/kanmanhua/zhanzheng/?page={{page}}\n故事漫画::/kanmanhua/gushi/?page={{page}}\n百合女性::/kanmanhua/baihe/?page={{page}}\n伪娘漫画::/kanmanhua/weiniang/?page={{page}}\n其他漫画::/kanmanhua/qita/?page={{page}}",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.116 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1680616586790,
  "loginUrl": "",
  "respondTime": 1501,
  "ruleBookInfo": {
    "author": "class.cont-list@tag.dl.2@tag.dd@text",
    "coverUrl": "class.thumb@tag.img@src",
    "init": "",
    "intro": "id.bookIntro@text",
    "kind": "class.cont-list@tag.dl.3@tag.dd@text&&class.thumb@tag.i@text",
    "lastChapter": "class.cont-list@tag.dl.0@tag.dd@text",
    "name": "class.main-bar@tag.h1@text"
  },
  "ruleContent": {
    "content": "@js:\neval(result.match(/(var mhInfo=.*;)/)[1]);\nhost1=\"https://mhpic5.kingwar.cn\";\nhost2=\"https://res.gezhengzhongyi.cn:20207\"; host3=\"https://mhpic5.kingwar.cn\";\nhost=parseInt(mhInfo.chapterId)>542724? host=host1:host=host2;\nif (parseInt(mhInfo.chapterId)>885032)\nhost=host3;\n                                   \nheader={\"Referer\":baseUrl,\n\"Accept\":\"image/webp,image/apng,image/*,*/*;q=0.8\"};\nheaders={\"headers\":JSON.stringify(header)}\nhtml='';\npath=mhInfo.path;\nfor(i in mhInfo.images){\nimg=host+path+mhInfo.images[i];\nhtml +='<img src=\"'+img+','+JSON.stringify(headers)+'\">\\n'\n}\nhtml",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "sourceRegex": ""
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "bookList": "class.dmList@tag.li||id.detail@tag.li",
    "bookUrl": "tag.a@href@js:\"https://m.laimanhua.net\"+result",
    "coverUrl": "tag.img@data-src||tag.img@src",
    "kind": "tag.dd.1@text&&tag.i@text&&tag.p.3@tag.a@text&&tag.p.2@tag.span@text",
    "lastChapter": "tag.dd.2@text||class.yellow@text",
    "name": "tag.h3@text||tag.dt@text"
  },
  "ruleToc": {
    "chapterList": "-id.chapterList@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://m.laimanhua.net/e/search/?key={{key}},{\n\"charset\": \"gbk\"\n}",
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