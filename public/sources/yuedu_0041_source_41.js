class YueduConvertedSource extends ComicSource {
    name = "漫客栈"
    key = "yuedu_0041_source_41"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://comic.mkzhan.com♤Haxc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫客栈",
  "bookSourceType": 0,
  "bookSourceUrl": "http://comic.mkzhan.com♤Haxc",
  "bookUrlPattern": "",
  "customOrder": 647,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "热门人气::https://comic.mkzcdn.com/search/filter/?order=1&page_num={{page}}&page_size=12\n更新时间::https://comic.mkzcdn.com/search/filter/?order=2&page_num={{page}}&page_size=12\n连载::https://comic.mkzcdn.com/search/filter/?finish=1&page_num={{page}}&page_size=12\n完结::https://comic.mkzcdn.com/search/filter/?finish=2&page_num={{page}}&page_size=12\n霸总::https://comic.mkzcdn.com/search/filter/?theme_id=1&page_num={{page}}&page_size=12\n修真::https://comic.mkzcdn.com/search/filter/?theme_id=2&page_num={{page}}&page_size=12\n恋爱::https://comic.mkzcdn.com/search/filter/?theme_id=3&page_num={{page}}&page_size=12\n校园::https://comic.mkzcdn.com/search/filter/?theme_id=4&page_num={{page}}&page_size=12\n冒险::https://comic.mkzcdn.com/search/filter/?theme_id=5&page_num={{page}}&page_size=12\n搞笑::https://comic.mkzcdn.com/search/filter/?theme_id=6&page_num={{page}}&page_size=12\n生活::https://comic.mkzcdn.com/search/filter/?theme_id=7&page_num={{page}}&page_size=12\n热血::https://comic.mkzcdn.com/search/filter/?theme_id=8&page_num={{page}}&page_size=12\n架空::https://comic.mkzcdn.com/search/filter/?theme_id=9&page_num={{page}}&page_size=12\n后宫::https://comic.mkzcdn.com/search/filter/?theme_id=10&page_num={{page}}&page_size=12\n耽美::https://comic.mkzcdn.com/search/filter/?theme_id=11&page_num={{page}}&page_size=12\n玄幻::https://comic.mkzcdn.com/search/filter/?theme_id=12&page_num={{page}}&page_size=12\n悬疑::https://comic.mkzcdn.com/search/filter/?theme_id=13&page_num={{page}}&page_size=12\n恐怖::https://comic.mkzcdn.com/search/filter/?theme_id=14&page_num={{page}}&page_size=12\n灵异::https://comic.mkzcdn.com/search/filter/?theme_id=15&page_num={{page}}&page_size=12\n动作::https://comic.mkzcdn.com/search/filter/?theme_id=16&page_num={{page}}&page_size=12\n科幻::https://comic.mkzcdn.com/search/filter/?theme_id=17&page_num={{page}}&page_size=12\n战争::https://comic.mkzcdn.com/search/filter/?theme_id=18&page_num={{page}}&page_size=12\n古风::https://comic.mkzcdn.com/search/filter/?theme_id=19&page_num={{page}}&page_size=12\n穿越::https://comic.mkzcdn.com/search/filter/?theme_id=20&page_num={{page}}&page_size=12\n竞技::https://comic.mkzcdn.com/search/filter/?theme_id=21&page_num={{page}}&page_size=12\n百合::https://comic.mkzcdn.com/search/filter/?theme_id=22&page_num={{page}}&page_size=12\n励志::https://comic.mkzcdn.com/search/filter/?theme_id=23&page_num={{page}}&page_size=12\n同人::https://comic.mkzcdn.com/search/filter/?theme_id=24&page_num={{page}}&page_size=12\n真人::https://comic.mkzcdn.com/search/filter/?theme_id=26&page_num={{page}}&page_size=12\n少年::https://comic.mkzcdn.com/search/filter/?audience=1&page_num={{page}}&page_size=12\n少女::https://comic.mkzcdn.com/search/filter/?audience=2&page_num={{page}}&page_size=12\n青年::https://comic.mkzcdn.com/search/filter/?audience=3&page_num={{page}}&page_size=12\n少儿::https://comic.mkzcdn.com/search/filter/?audience=4&page_num={{page}}&page_size=12\n独家::https://comic.mkzcdn.com/search/filter/?copyright=1&page_num={{page}}&page_size=12\n合作::https://comic.mkzcdn.com/search/filter/?copyright=2&page_num={{page}}&page_size=12\n免费::https://comic.mkzcdn.com/search/filter/?is_free=1&page_num={{page}}&page_size=12\n付费::https://comic.mkzcdn.com/search/filter/?is_fee=1&page_num={{page}}&page_size=12\nVIP::https://comic.mkzcdn.com/search/filter/?is_vip=1&page_num={{page}}&page_size=12",
  "header": "{\n  \"User-Agent\": \"okhttp/3.11.0\"\n}",
  "lastUpdateTime": 1716230010386,
  "loginUrl": "",
  "respondTime": 4076,
  "ruleBookInfo": {
    "author": "@get:{author}",
    "coverUrl": "",
    "intro": "$.data.content",
    "lastChapter": "$.data.chapter_title",
    "name": "$.data.title",
    "tocUrl": "https://comic.mkzhan.com/chapter/?comic_id={$.data.comic_id}"
  },
  "ruleContent": {
    "content": "@js:\njava.getStringList(\"$.data.page[*]image\").toArray().map\n(a=>'<img src=\"'+a+'\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.author_title@put:{author:$.author_title}",
    "bookList": "$.data.list.*",
    "bookUrl": "https://comic.mkzhan.com/comic/info/?comic_id={$.comic_id}",
    "coverUrl": "$.cover@js:result.replace(/\\.(jpg|JPG).*/g,\".$1!cover-400\")",
    "lastChapter": "$.chapter_title",
    "name": "$.title@put:{comic_id:$.comic_id}"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.title",
    "chapterUrl": "https://comic.mkzhan.com/chapter/content/v1/?chapter_id={{$.chapter_id}}&comic_id=@get:{comic_id}&format=1&quality=1&sign=0&type=1&uid=0",
    "isVip": "$.is_vip",
    "nextTocUrl": "",
    "updateTime": "$.change_time@js:result==0?'':java.timeFormat(result*1000)"
  },
  "searchUrl": "https://comic.mkzhan.com/search/keyword/?keyword={{key}}&page_num={{page}}&page_size=20",
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