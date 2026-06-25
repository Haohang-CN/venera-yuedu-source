class YueduConvertedSource extends ComicSource {
    name = "新爱漫画（优+）"
    key = "yuedu_0111_source_111"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://xapi.xinmanhua.net#♤Haxc"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "新爱漫画（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://xapi.xinmanhua.net#♤Haxc",
  "customOrder": 2369,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "全部::https://xapi.xinmanhua.net/search/catalog?keyword=all&ischarge=2&isfinish=2&order=0&page={{page}}\n治愈::https://xapi.xinmanhua.net/search/catalog?keyword=治愈&page={{page}}\n日常::https://xapi.xinmanhua.net/search/catalog?keyword=日常&page={{page}}\n都市::https://xapi.xinmanhua.net/search/catalog?keyword=都市&page={{page}}\n悬疑::https://xapi.xinmanhua.net/search/catalog?keyword=悬疑&page={{page}}\n科幻::https://xapi.xinmanhua.net/search/catalog?keyword=科幻&page={{page}}\n奇幻::https://xapi.xinmanhua.net/search/catalog?keyword=奇幻&page={{page}}\n热血::https://xapi.xinmanhua.net/search/catalog?keyword=热血&page={{page}}\n武侠::https://xapi.xinmanhua.net/search/catalog?keyword=武侠&page={{page}}\n古风::https://xapi.xinmanhua.net/search/catalog?keyword=古风&page={{page}}\n恋爱::https://xapi.xinmanhua.net/search/catalog?keyword=恋爱&page={{page}}\n少年::https://xapi.xinmanhua.net/search/catalog?keyword=少年&page={{page}}\n日漫::https://xapi.xinmanhua.net/search/catalog?keyword=日漫&page={{page}}\n原创::https://xapi.xinmanhua.net/search/catalog?keyword=原创&page={{page}}",
  "header": "{\n  \"User-Agent\": \"okhttp/3.10.0\"\n}",
  "lastUpdateTime": 1760406229444,
  "respondTime": 2065,
  "ruleBookInfo": {
    "intro": "@JSon:$.data.attributes.intro&&$.data.attributes.description"
  },
  "ruleContent": {
    "content": "$.data[*].attributes.url\n@js:list=result.split('\\n');\nlist.map(x=>'<img src=\"'+x+'\">').join('\\n')",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@JSon:$.attributes.author",
    "bookList": "@JSon:$.data.*",
    "bookUrl": "https://xapi.xinmanhua.net/worksinfos/{$.attributes.wid}?include=chapters.digests",
    "coverUrl": "@JSon:$.attributes.logo_detail",
    "kind": "@JSon:$.attributes.workscate",
    "lastChapter": "@JSon:$.attributes.lastctitle",
    "name": "@JSon:$.attributes.title"
  },
  "ruleToc": {
    "chapterList": "$.included.*",
    "chapterName": "$.attributes.title&&$.attributes.intro",
    "chapterUrl": "https://xapi.xinmanhua.net/chapters/{$.id}/qualitywebs"
  },
  "searchUrl": "https://xapi.xinmanhua.net/search/selfdefine,{\n  \"method\": \"POST\",\n  \"body\": \"keyword={{key}}&page={{page}}\"\n}",
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