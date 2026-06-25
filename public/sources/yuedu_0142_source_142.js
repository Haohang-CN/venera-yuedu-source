class YueduConvertedSource extends ComicSource {
    name = "快看漫画"
    key = "yuedu_0142_source_142"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://api.kkmh.com#♤Haxc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 发现失效\n\nError: Timed out waiting for 180000 ms",
  "bookSourceGroup": "漫画",
  "bookSourceName": "快看漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://api.kkmh.com#♤Haxc",
  "bookUrlPattern": "",
  "customOrder": 2824,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "全部::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=0&since={{20*(page-1)}}\n少年::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=49&since={{20*(page-1)}}\n奇幻::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=22&since={{20*(page-1)}}\n爆笑::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=24&since={{20*(page-1)}}\n日漫::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=57&since={{20*(page-1)}}\n都市::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=48&since={{20*(page-1)}}\n古风::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=46&since={{20*(page-1)}}\n治愈::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=27&since={{20*(page-1)}}\n恋爱::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=20&since={{20*(page-1)}}\n校园::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=47&since={{20*(page-1)}}\n灵异::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=32&since={{20*(page-1)}}\n玄幻::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=63&since={{20*(page-1)}}\n剧情::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=23&since={{20*(page-1)}}\n韩漫::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=60&since={{20*(page-1)}}\n日常::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=19&since={{20*(page-1)}}\n畅销::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=59&since={{20*(page-1)}}\n完结::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=40&since={{20*(page-1)}}\n正能量::https://api.kkmh.com/v1/topic_new/lists/get_by_tag?tag=54&since={{20*(page-1)}}\nnull",
  "header": "{\n  \"User-Agent\": \"Kuaikan/5.23.0/523000(Android;8.0.0;MIX2;kuaikan568;WIFI;2030*1080)\"\n}",
  "lastUpdateTime": 1725648555868,
  "loginUrl": "",
  "respondTime": 183808,
  "ruleBookInfo": {
    "author": "$.data.user.nickname",
    "intro": "$.data.description",
    "kind": "$.category",
    "name": "$.data.title"
  },
  "ruleContent": {
    "content": "@js:\nvar options = {\n\"headers\": {\"Referer\": baseUrl}\n}\njava.getStringList(\"$.data.images\").toArray().map\n(a=>'<img src=\"'+a+'\" >').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.user.nickname",
    "bookList": "$.data.topic.hit.*&&$.data.topics.*",
    "bookUrl": "https://api.kkmh.com/v1/topics/{$.id}",
    "coverUrl": "$.cover_image_url",
    "intro": "$.description",
    "kind": "$.category",
    "lastChapter": "$.latest_comic_title",
    "name": "$.title"
  },
  "ruleToc": {
    "chapterList": "-$..comics.*",
    "chapterName": "$.title",
    "chapterUrl": "https://api.kkmh.com/v2/comic/{$.id}?is_preview=0",
    "updateTime": "@js:java.timeFormat({{$.created_at}}*1000)"
  },
  "searchUrl": "https://search.kkmh.com/search/complex?q={{key}}",
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