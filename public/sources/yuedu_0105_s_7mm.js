class YueduConvertedSource extends ComicSource {
    name = "求补齐正文规则-7mm漫画"
    key = "yuedu_0105_s_7mm"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://7mmtv.sx/zh/hcomic_list/all.html"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "求补齐正文规则-7mm漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "https://7mmtv.sx/zh/hcomic_list/all.html",
  "customOrder": 2237,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "随机::https://7mmtv.sx/zh/hcomic_random/all/index.html\n顺序::https://7mmtv.sx/zh/hcomic_list/all/{{page}}.html\n源变量指定页::https://7mmtv.sx/zh/hcomic_list/all/{{source.getVariable()}}.html\n短篇::https://7mmtv.sx/zh/hcomic_list/short/{{page}}.html\n中篇::https://7mmtv.sx/zh/hcomic_list/novellas/{{page}}.html\n单行本::https://7mmtv.sx/zh/hcomic_list/voluminous/{{page}}.html",
  "lastUpdateTime": 1674986328012,
  "respondTime": 180000,
  "ruleBookInfo": {
    "name": "class.breadcrumb-item active@a@text"
  },
  "ruleContent": {
    "content": "class.fullcomics-item@img@src",
    "imageStyle": "FULL",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.col-auto.0@text",
    "bookList": "class.comics",
    "bookUrl": "a.0@href",
    "checkKeyWord": "妹妹",
    "coverUrl": "a.0@img@src",
    "kind": "class.small text-mute@text",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "class.breadcrumb-item active@a",
    "chapterName": "text"
  },
  "searchUrl": "https://7mmtv.sx/zh/searchform_search/all/{{page}}.html,{\n  \"method\": \"POST\",\n  \"body\":\"search_keyword={{key}}&search_type=hcomic&op=search\"\n}",
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