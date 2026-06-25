class YueduConvertedSource extends ComicSource {
    name = "漫漫漫画"
    key = "yuedu_0119_source_119"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.manmanapp.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫漫漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.manmanapp.com",
  "bookUrlPattern": "https://www.manmanapp.com/comic-\\d+.html",
  "customOrder": 2423,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "全部::/comic/category_{{page}}.html\n兄弟情::/comic/category-5_{{page}}.html\n恋爱::/comic/category-4_{{page}}.html\n都市::/comic/category-18_{{page}}.html\n霸总::/comic/category-9_{{page}}.html\n校园::/comic/category-8_{{page}}.html\n古风::/comic/category-7_{{page}}.html\n搞笑::/comic/category-6_{{page}}.html\n暖萌::/comic/category-10_{{page}}.html\n日常::/comic/category-12_{{page}}.html\n奇幻::/comic/category-13_{{page}}.html\n悬疑::/comic/category-15_{{page}}.html\n仙侠::/comic/category-16_{{page}}.html\n热血::/comic/category-17_{{page}}.html\n恐怖::/comic/category-19_{{page}}.html\n",
  "lastUpdateTime": 1759505101697,
  "respondTime": 3111,
  "ruleBookInfo": {
    "author": "class.describe_title@a@text",
    "coverUrl": "class.pic@img@src",
    "intro": "class.supplement@text",
    "kind": "{{book.kind}},{{@@class.type@text}}##类型：",
    "lastChapter": "class.comic_list@tag.li.0@h4@img@src&&class.comic_list@tag.li.0@h3@text##.*book_ic.*?\\n##🔒",
    "name": "class.title.0@ownText",
    "tocUrl": "https://www.manmanapp.com/works/comic-list-ajax.html,{\n\"method\": \"POST\",\n\"body\": \"id={{java.put('page',1);result=baseUrl.match(/(\\d+)\\.html/)[1];java.put('id',result)}}&sort=1&page=1\"}"
  },
  "ruleContent": {
    "content": "class.man_img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.subtitle@text",
    "bookList": "class.classification",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "img@src",
    "intro": "class.text@text",
    "kind": "❤️{{@@class.supplement@ownText}}",
    "name": "class.title@text"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.title",
    "chapterUrl": "https://www.manmanapp.com/comic/detail-{{$.id}}.html",
    "isVip": "@js:'{{$.is_read}}'=='0'?'1':''",
    "nextTocUrl": "@js:\ncode='{{$.code}}';\nif(code=='1'){\npage=java.get('page');\npage=parseInt(page)+1;\njava.put('page',page);\nid=java.get('id');\nurl='https://www.manmanapp.com/works/comic-list-ajax.html,';\nbody='id='+id+'&sort=1&page='+page;\npost={\n\"method\": \"POST\",\n\"body\":String(body)\n}\nresult=url+JSON.stringify(post);\n}",
    "updateTime": "$.publish_time"
  },
  "searchUrl": "https://www.manmanapp.com/search/word-{{key}}.html",
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