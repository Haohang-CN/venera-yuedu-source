class YueduConvertedSource extends ComicSource {
    name = "UAA漫画"
    key = "yuedu_0104_uaa"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.uaa.com/app"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "UAA漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.uaa.com/app",
  "bookUrlPattern": "",
  "customOrder": 2235,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "最近更新::https://api.uaa.com/comic/app/comic/search?orderType=2&page={{page}}&size=25\n最多观看::https://api.uaa.com/comic/app/comic/search?orderType=3&page={{page}}&size=25\n最多收藏::https://api.uaa.com/comic/app/comic/search?orderType=4&page={{page}}&size=25\n上架时间::https://api.uaa.com/comic/app/comic/search?orderType=1&page={{page}}&size=25\n韩漫::https://api.uaa.com/comic/app/comic/search?page={{page}}&size=30&keyword=&origin=2&orderType=1&color=2\n剧情::https://api.uaa.com/comic/app/comic/search?page={{page}}&size=30&category=%E5%89%A7%E6%83%85&orderType=3&color=2\n奇幻::https://api.uaa.com/comic/app/comic/search?page={{page}}&size=30&category=%E5%A5%87%E5%B9%BB&orderType=3&color=2",
  "header": "",
  "lastUpdateTime": 1687401145694,
  "loginUrl": "",
  "respondTime": 5811,
  "ruleBookInfo": {
    "intro": ""
  },
  "ruleContent": {
    "content": "$.model.images[*]\n@js:\nlist=result.split(\"\\n\");\nhtml='';\nfor(i in list){\nhtml+='<img src=\"'+list[i]+'\">';\n}\nhtml\n",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.authors",
    "bookList": "$.model.data",
    "bookUrl": "$.id@js:\"https://api.uaa.com/comic/app/comic/catalog/\"+result",
    "coverUrl": "$.coverUrl",
    "intro": "$.brief",
    "kind": "$.categories",
    "name": "$.title",
    "wordCount": "$.wordCount"
  },
  "ruleToc": {
    "chapterList": "$.model.menus..children.*||$.model.menus",
    "chapterName": "$.title",
    "chapterUrl": "https://api.uaa.com/comic/app/comic/chapter?id={{$.id}}&offset=0&viewId=16758385134915627"
  },
  "searchUrl": "https://api.uaa.com/comic/app/comic/search?page={{page}}&size=30&keyword={{key}}&orderType=3",
  "weight": 72
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