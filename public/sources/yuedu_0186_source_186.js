class YueduConvertedSource extends ComicSource {
    name = "漫客栈子"
    key = "yuedu_0186_source_186"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.mkzhan.com#♤Haxc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫客栈子",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.mkzhan.com#♤Haxc",
  "bookUrlPattern": "https://m.mkzhan.com/\\d+/",
  "customOrder": 3452,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "修真::https://www.mkzhan.com/category/?theme_id=2&page={{page}}\n恋爱::https://www.mkzhan.com/category/?theme_id=3&page={{page}}\n校园::https://www.mkzhan.com/category/?theme_id=4&page={{page}}\n冒险::https://www.mkzhan.com/category/?theme_id=5&page={{page}}\n搞笑::https://www.mkzhan.com/category/?theme_id=6&page={{page}}\n生活::https://www.mkzhan.com/category/?theme_id=7&page={{page}}\n热血::https://www.mkzhan.com/category/?theme_id=8&page={{page}}\n架空::https://www.mkzhan.com/category/?theme_id=9&page={{page}}\n后宫::https://www.mkzhan.com/category/?theme_id=10&page={{page}}\n耽美::https://www.mkzhan.com/category/?theme_id=11&page={{page}}\n玄幻::https://www.mkzhan.com/category/?theme_id=12&page={{page}}\n悬疑::https://www.mkzhan.com/category/?theme_id=13&page={{page}}\n恐怖::https://www.mkzhan.com/category/?theme_id=14&page={{page}}\n灵异::https://www.mkzhan.com/category/?theme_id=15&page={{page}}\n动作::https://www.mkzhan.com/category/?theme_id=16&page={{page}}\n科幻::https://www.mkzhan.com/category/?theme_id=17&page={{page}}\n战争::https://www.mkzhan.com/category/?theme_id=18&page={{page}}\n古风::https://www.mkzhan.com/category/?theme_id=19&page={{page}}\n穿越::https://www.mkzhan.com/category/?theme_id=20&page={{page}}\n竞技::https://www.mkzhan.com/category/?theme_id=21&page={{page}}\n百合::https://www.mkzhan.com/category/?theme_id=22&page={{page}}\n励志::https://www.mkzhan.com/category/?theme_id=23&page={{page}}\n同人::https://www.mkzhan.com/category/?theme_id=24&page={{page}}\n真人::https://www.mkzhan.com/category/?theme_id=26&page={{page}}\n霸总::https://www.mkzhan.com/category/?theme_id=1&page={{page}}",
  "lastUpdateTime": 1733776999673,
  "respondTime": 7915,
  "ruleBookInfo": {
    "author": "class.name@text",
    "intro": "class.intro-total@text",
    "kind": "class.comic-status@tag.span.0@text##题材:",
    "lastChapter": "class.update-time@text",
    "name": "class.comic-title.0@text"
  },
  "ruleContent": {
    "content": "$..image@js:result.split(\"\\n\").map(x=>'<img src=\\\"'+x+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "class.cate-comic-list clearfix@class.common-comic-item",
    "bookUrl": "class.cover@href",
    "coverUrl": "img@data-src",
    "intro": ".comic-feature@text",
    "lastChapter": "class.comic-update@text##更至：",
    "name": "class.comic__title@text"
  },
  "ruleSearch": {
    "bookList": "class.search-comic-list@class.common-comic-item",
    "bookUrl": "class.cover@href",
    "coverUrl": "img@data-src",
    "intro": ".comic-feature@text",
    "lastChapter": "class.comic-update@text##更至：",
    "name": "class.comic__title@tag.a.0@text"
  },
  "ruleToc": {
    "chapterList": "-class.chapter__list-box@tag.li",
    "chapterName": "a@text",
    "chapterUrl": ".j-chapter-link@data-chapterid\n@js:\r\ncid=result;\r\nbid=baseUrl.match(/\\/(\\d+)\\//)[1],\n\n'https://comic.mkzcdn.com/chapter/content/v1/?chapter_id='+cid+'&comic_id='+bid+'&format=1&quality=1&sign=0&type=1&uid=0'",
    "updateTime": ".data@text"
  },
  "searchUrl": "https://www.mkzhan.com/search/?keyword={{key}}",
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