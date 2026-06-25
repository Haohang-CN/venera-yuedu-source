class YueduConvertedSource extends ComicSource {
    name = "花瓣插画（发现）"
    key = "yuedu_0143_source_143"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://huaban.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "花瓣插画（发现）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://huaban.com",
  "customOrder": 2829,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "UI/UX::https://api.huaban.com/favorite/web_app_icon?limit=100&page={{page}}&&平面::https://api.huaban.com/favorite/design?limit=100&page={{page}}&&插画/漫画::https://api.huaban.com/favorite/illustration?limit=100&page={{page}}&&摄影::https://api.huaban.com/favorite/photography?limit=100&page={{page}}&&游戏::https://api.huaban.com/favorite/games?limit=100&page={{page}}&&动漫::https://api.huaban.com/favorite/anime?limit=100&page={{page}}&&工业设计::https://api.huaban.com/favorite/industrial_design?limit=100&page={{page}}&&建筑设计::https://api.huaban.com/favorite/architecture?limit=100&page={{page}}&&人文艺术::https://api.huaban.com/favorite/art?limit=100&page={{page}}&&家居/家装::https://api.huaban.com/favorite/home?limit=100&page={{page}}&&女装/搭配::https://api.huaban.com/favorite/apparel?limit=100&page={{page}}&&男士/风尚::https://api.huaban.com/favorite/men?limit=100&page={{page}}&&造型/美妆::https://api.huaban.com/favorite/modeling_hair?limit=100&page={{page}}&&手工/布艺::https://api.huaban.com/favorite/diy_crafts?limit=100&page={{page}}&&美食::https://api.huaban.com/favorite/food_drink?limit=100&page={{page}}&&旅行::https://api.huaban.com/favorite/travel_places?limit=100&page={{page}}&&婚礼::https://api.huaban.com/favorite/wedding_events?limit=100&page={{page}}&&儿童::https://api.huaban.com/favorite/kids?limit=100&page={{page}}&&宠物::https://api.huaban.com/favorite/pets?limit=100&page={{page}}&&美图::https://api.huaban.com/favorite/quotes?limit=100&page={{page}}&&明星::https://api.huaban.com/favorite/people?limit=100&page={{page}}&&美女::https://api.huaban.com/favorite/beauty?limit=100&page={{page}}&&礼物::https://api.huaban.com/favorite/desire?limit=100&page={{page}}&&极客::https://api.huaban.com/favorite/geek?limit=100&page={{page}}&&数据图::https://api.huaban.com/favorite/data_presentation?limit=100&page={{page}}&&汽车/摩托::https://api.huaban.com/favorite/cars_motorcycles?limit=100&page={{page}}&&电影/图书::https://api.huaban.com/favorite/film_music_books?limit=100&page={{page}}&&生活百科::https://api.huaban.com/favorite/tips?limit=100&page={{page}}&&教育::https://api.huaban.com/favorite/education?limit=100&page={{page}}&&运动::https://api.huaban.com/favorite/sports?limit=100&page={{page}}&&搞笑::https://api.huaban.com/favorite/funny?limit=100&page={{page}}&&健身/舞蹈::https://api.huaban.com/favorite/fitness?limit=100&page={{page}}&&其它::https://api.huaban.com/favorite/other?limit=100&page={{page}}&&3C数码::https://api.huaban.com/favorite/digital?limit=100",
  "lastUpdateTime": 1731616911982,
  "respondTime": 180000,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "<div>\n<img src=\"https://hbimg.huabanimg.com//{{$.pin.file.key}}\"/>\n<p>相关推荐：</p>\n{{json=JSON.parse(java.getElements('$.pin.board.pins'));\nimg='';\nfor (i in json){\nkey=json[i].file.key;\nimg=img+'<img src=\"https://hbimg.huabanimg.com//'+key+'\"/>'\n}\nimg\n}}\n阅读原文：https://huaban.com/pins/{{$.pin.pin_id}}\n</div>",
    "imageStyle": "full"
  },
  "ruleExplore": {
    "author": "$.user.username",
    "bookList": "$.pins",
    "bookUrl": "https://huaban.com/pins/{{$.pin_id}}/@put:{id:$.pin_id}",
    "coverUrl": "$.orig_source||https://hbimg.huabanimg.com/{$.file.key}_/fw/480/format/webp\n@js:java.put(\"img\",result)",
    "intro": "$.board.title&&$.board.description",
    "lastChapter": "$.created_at@js:(new Date(result*1000)).toLocaleDateString();",
    "name": "$.board.title"
  },
  "ruleSearch": {
    "author": "$.user.username",
    "bookList": "<js>\nlist=result.match(/app.page\\[\"pins\"\\] = (\\[[\\s\\S]+?\\]);/)[1];\n</js>\n$.[*]",
    "bookUrl": "https://huaban.com/pins/{{$.pin_id}}/@put:{id:$.pin_id}",
    "coverUrl": "$.orig_source||https://hbimg.huabanimg.com/{$.file.key}_/fw/480/format/webp\n@js:java.put(\"img\",result)",
    "intro": "$.board.title&&$.board.description&&$.raw_text",
    "kind": "",
    "lastChapter": "",
    "name": "$.raw_text",
    "wordCount": ""
  },
  "ruleToc": {
    "chapterList": "tag.html",
    "chapterName": "@js:book.name",
    "chapterUrl": "https://api.huaban.com/pins/@get:{id}"
  },
  "searchUrl": "https://huaban.com/search/?q={{key}}&page={{page}}",
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