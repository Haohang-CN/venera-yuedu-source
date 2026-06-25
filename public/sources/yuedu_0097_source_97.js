class YueduConvertedSource extends ComicSource {
    name = "粉丝漫画"
    key = "yuedu_0097_source_97"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://apifans.dushimh.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "API",
  "bookSourceGroup": "漫画",
  "bookSourceName": "粉丝漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://apifans.dushimh.com/",
  "customOrder": 2168,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"更新\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=update&filter=&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"上架\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=post&filter=&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"点击\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=click&filter=&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"完结\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=update&filter=wanjie&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"热门\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=click&filter=&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"玄幻\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=update&filter=xuanhuan&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"奇幻\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=update&filter=qihuan&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"武侠\",\"url\":\"https://apifans.dushimh.com/app2/comic/index?sort=update&filter=wuxia&page={{page}}&keyword=\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "lastUpdateTime": 1684510633872,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "$..author",
    "coverUrl": "",
    "init": "",
    "intro": "$..description",
    "kind": "{{$..category_data.name}}",
    "lastChapter": "$..last_chapter_name",
    "name": "$..title"
  },
  "ruleContent": {
    "content": "@js:\nvar options = {\n\"headers\": {\"Referer\": baseUrl}\n}\njava.getStringList(\"$.data.imageArray\").toArray().map\n(id=>'<img src=\"'+id+'\" >').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$.items[*]",
    "bookUrl": "https://apifans.dushimh.com/app2/comic/view?id={{$.id}}",
    "coverUrl": "$.coverUrl##https://img.fansmh.com##https://reso.qianwee.com",
    "intro": "$.description",
    "kind": "",
    "lastChapter": "$.last_chapter_name",
    "name": "$.title",
    "wordCount": ""
  },
  "ruleToc": {
    "chapterList": "$.data..chapters[*]",
    "chapterName": "$.name",
    "chapterUrl": "https://apifans.dushimh.com/app2/chapter/view?id={{$.id}}",
    "updateTime": "{{java.timeFormat(java.getString('$.updated_at')*1000)}}"
  },
  "searchUrl": "https://apifans.dushimh.com/app2/comic/search?sort=click&page={{page}}&keywords={{key}}",
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