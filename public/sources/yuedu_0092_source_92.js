class YueduConvertedSource extends ComicSource {
    name = "🎨🙈秒看漫画"
    key = "yuedu_0092_source_92"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://miaokanmh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🎨🙈秒看漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://miaokanmh.com",
  "customOrder": 2087,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"地区\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"大陆\",\"url\":\"/area-1\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.15}},\n{\"title\":\"韩国\",\"url\":\"/area-2\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.15}},\n{\"title\":\"日本\",\"url\":\"/area-3\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.15}},\n{\"title\":\"港台\",\"url\":\"/area-4\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.15}},\n{\"title\":\"欧美\",\"url\":\"/area-5\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.15}}]",
  "lastUpdateTime": 1691244154313,
  "respondTime": 6839,
  "ruleBookInfo": {
    "author": "",
    "init": "",
    "intro": "class.novel-intro@p@html",
    "kind": "class.hottag flexstart@em@text",
    "name": "tag.h3@text",
    "tocUrl": "text.查看全部章节@href"
  },
  "ruleContent": {
    "content": "class.u-reading-content@img@data-src\n@js:\nopt={\"headers\":{\"Referer\":baseUrl}}\nresult.split(\"\\n\").map(x=>'<img src=\"'+x+','+JSON.stringify(opt)+'\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "replaceRegex": ""
  },
  "ruleExplore": {
    "bookList": "class.flexbetween@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "class.newimg@img@data-src",
    "lastChapter": "tag.span.-1@text##更新至",
    "name": "tag.h2@text"
  },
  "ruleSearch": {
    "bookList": "class.flexbetween@li",
    "bookUrl": "tag.a@href",
    "coverUrl": "class.newimg@img@data-src",
    "lastChapter": "tag.span.-1@text##更新至",
    "name": "tag.h2@text"
  },
  "ruleToc": {
    "chapterList": "id.chapters@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "/site/search?keyword={{key}}",
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