class YueduConvertedSource extends ComicSource {
    name = "奇漫屋"
    key = "yuedu_0066_source_66"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://qiman.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 下载链接为空",
  "bookSourceGroup": "漫画",
  "bookSourceName": "奇漫屋",
  "bookSourceType": 3,
  "bookSourceUrl": "http://qiman.com",
  "customOrder": 1482,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"榜单\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"人气榜\",\"url\":\"/rank/4-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"日读榜\",\"url\":\"/rank/1-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"周读榜\",\"url\":\"/rank/2-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"月读榜\",\"url\":\"/rank/3-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"新作榜\",\"url\":\"/rank/6-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"最新榜\",\"url\":\"/rank/5-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"分类\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"冒险热血\",\"url\":\"/sort/1-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"武侠格斗\",\"url\":\"/sort/2-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"科幻魔幻\",\"url\":\"/sort/3-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"侦探推理\",\"url\":\"/sort/4-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"耽美爱情\",\"url\":\"/sort/5-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"生活漫画\",\"url\":\"/sort/6-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"推荐漫画\",\"url\":\"/sort/11-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"完结\",\"url\":\"/sort/12-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"连载中\",\"url\":\"/sort/13-{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1728716211041,
  "loginUrl": "",
  "respondTime": 7206,
  "ruleBookInfo": {
    "author": "##作者.([^<]+)<##$1###",
    "coverUrl": "[itemprop=\"image\"]@content",
    "init": "",
    "intro": ".comic-intro@html##(^|[。！？]+[”」）】]?)##$1<br>",
    "kind": "class.txtItme.1:2@text##.*：|\\s.*",
    "lastChapter": "[property=\"og:novel:latest_chapter_name\"]@content",
    "name": "[property=\"og:title\"]@content",
    "tocUrl": "http://qiman56.com/bookchapter/,{\n\"method\": \"POST\",\n\"body\": \"id={{java.put('id',baseUrl.match(/(\\d+)\\/$/)[1]);}}&id2=1\"\n}",
    "wordCount": ""
  },
  "ruleContent": {
    "content": ".lazy@html",
    "imageStyle": "FULL",
    "replaceRegex": "##data-original=\"(.*?)\" src=\".*?\"##src=\"$1\"",
    "webJs": ""
  },
  "ruleExplore": {
    "author": ".comic-author@text",
    "bookList": ".rank-item",
    "bookUrl": "a.1@href",
    "coverUrl": ".cover@data-src",
    "intro": "",
    "lastChapter": ".comic-tip@text",
    "name": ".comic-name@text"
  },
  "ruleSearch": {
    "author": ".comic-author@text",
    "bookList": ".comic-list-item",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "kind": ".comic-tags@text",
    "lastChapter": ".comic-update-at@text",
    "name": ".comic-name@text"
  },
  "ruleToc": {
    "chapterList": "-$.[*]",
    "chapterName": "$.name",
    "chapterUrl": "http://qiman56.com/@get:{id}/{{$.id}}.html,{\"webView\":true}",
    "isVip": ""
  },
  "searchUrl": "/spotlight/?keyword={{key}}",
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