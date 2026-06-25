class YueduConvertedSource extends ComicSource {
    name = "🌐 漫漫漫画"
    key = "yuedu_0201_source_201"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.manmanapp.com#♤yc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌐 漫漫漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.manmanapp.com#♤yc",
  "customOrder": 3608,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"全部\",\"url\":\"/comic/category_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"兄弟\",\"url\":\"/comic/category-5_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恋爱\",\"url\":\"/comic/category-4_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"都市\",\"url\":\"/comic/category-18_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"霸总\",\"url\":\"/comic/category-9_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"校园\",\"url\":\"/comic/category-8_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"古风\",\"url\":\"/comic/category-7_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"搞笑\",\"url\":\"/comic/category-6_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"暖萌\",\"url\":\"/comic/category-10_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"日常\",\"url\":\"/comic/category-12_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"奇幻\",\"url\":\"/comic/category-13_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"悬疑\",\"url\":\"/comic/category-15_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"仙侠\",\"url\":\"/comic/category-16_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"热血\",\"url\":\"/comic/category-17_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恐怖\",\"url\":\"/comic/category-19_{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1728715746338,
  "loginUrl": "",
  "respondTime": 2895,
  "ruleBookInfo": {
    "canReName": "",
    "coverUrl": ".pic img@src",
    "intro": ".supplement@html",
    "kind": "{{book.kind}},{{@@.type@text}}##类型：",
    "lastChapter": ".comic_list li.0@h4@img@src&&.comic_list li.0@h3@text##.*book_ic.*?\\n##🔒",
    "tocUrl": "https://www.manmanapp.com/works/comic-list-ajax.html,{\n\"method\": \"POST\",\n\"body\": \"id={{java.put('page',1);result=baseUrl.match(/(\\d+)\\.html/)[1];java.put('id',result)}}&sort=1&page=1\"}"
  },
  "ruleContent": {
    "content": ".man_img@html",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleExplore": {
    "intro": "",
    "kind": "",
    "lastChapter": ""
  },
  "ruleSearch": {
    "author": ".subtitle@text",
    "bookList": ".classification",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "intro": ".text@text",
    "kind": "❤️{{@@.supplement@ownText}}",
    "name": ".title@text"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.title",
    "chapterUrl": "https://www.manmanapp.com/comic/detail-{{$.id}}.html",
    "isVip": "@js:'{{$.is_read}}'=='0'?'1':''",
    "nextTocUrl": "@js:\ncode='{{$.code}}';\nif(code=='1'){\npage=java.get('page');\npage=parseInt(page)+1;\njava.put('page',page);\nid=java.get('id');\nurl='https://www.manmanapp.com/works/comic-list-ajax.html,';\nbody='id='+id+'&sort=1&page='+page;\npost={\n\"method\": \"POST\",\n\"body\":String(body)\n}\nresult=url+JSON.stringify(post);\n}",
    "updateTime": "$.publish_time"
  },
  "searchUrl": "/search/word-{{key}}.html",
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