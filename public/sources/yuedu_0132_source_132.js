class YueduConvertedSource extends ComicSource {
    name = "香新漫画"
    key = "yuedu_0132_source_132"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://xapi.xinmanhua.net"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//2025.7.29 by.◎辞晨◎",
  "bookSourceGroup": "漫画",
  "bookSourceName": "香新漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://xapi.xinmanhua.net",
  "customOrder": 2695,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\npush(\"全部🌊分类\",`/search/catalog?keyword=all&ischarge=2&isfinish=2&order=0&page={{page}}\n`,1,1)\n\tarList=[\"治愈\",\"日常\",\"都市\",\"悬疑\",\"科幻\",\"奇幻\",\"热血\",\"武侠\",\"古风\",\"恋爱\",\"少年\",\"日漫\",\"原创\"]\n\tarList.map((tag,id)=>{\n\t\turl=`/search/catalog?keyword=${tag}&page={{page}}\n`;\n\t\tpush(tag, url, 1, 0.25);\n\t\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "@js:\nJSON.stringify({\n  'User-Agent': java.getWebViewUA(),\n  'sec-ch-ua-platform': \"\\\"Android\\\"\",\n  'origin': baseUrl,\n  'x-requested-with': \"cn.mujiankeji.mbrowser\",\n  'Referer': baseUrl,\n  'Accept-language': \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n})",
  "lastUpdateTime": 1759431337763,
  "respondTime": 1476,
  "ruleBookInfo": {
    "author": "$.data..author",
    "intro": "@JSon:$.data.attributes.intro&&$.data.attributes.description",
    "kind": "$.data..workscate##\\/##,",
    "name": "$.data..title"
  },
  "ruleContent": {
    "content": "<js>\njava.getStringList(\"$.data[*].attributes.url\").toArray().map(x=>`<img src=\"${x}\">`).join('\\n');\n</js>",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.attributes.author",
    "bookList": "$.data[*]",
    "bookUrl": "/worksinfos/{$.attributes.wid}?include=chapters.digests",
    "coverUrl": "$.attributes.logo_detail",
    "kind": "$.attributes.workscate",
    "lastChapter": "$.attributes.lastctitle",
    "name": "$.attributes.title"
  },
  "ruleToc": {
    "chapterList": "$.included.*",
    "chapterName": "$.attributes.title&&$.attributes.intro",
    "chapterUrl": "/chapters/{$.id}/qualitywebs"
  },
  "searchUrl": "/search/selfdefine,{\n  \"method\": \"POST\",\n  \"body\": \"keyword={{key}}&page={{page}}\"\n}",
  "weight": 44
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