class YueduConvertedSource extends ComicSource {
    name = "光社漫畫（优+）"
    key = "yuedu_0024_source_24"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.g-mh.org/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "可能有cf盾",
  "bookSourceGroup": "漫画",
  "bookSourceName": "光社漫畫（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.g-mh.org/",
  "customOrder": 267,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[\n{\"title\":\"复仇\",\"url\":\"https://m.g-mh.org/manga-tag/fuchou<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"古风\",\"url\":\"https://m.g-mh.org/manga-tag/gufeng<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"奇幻\",\"url\":\"https://m.g-mh.org/manga-tag/qihuan<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"逆袭\",\"url\":\"https://m.g-mh.org/manga-tag/nixi<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"异能\",\"url\":\"https://m.g-mh.org/manga-tag/yineng<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"宅向\",\"url\":\"https://m.g-mh.org/manga-tag/zhaixiang<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"穿越\",\"url\":\"https://m.g-mh.org/manga-tag/chuanyue<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"热血\",\"url\":\"https://m.g-mh.org/manga-tag/rexue<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"纯爱\",\"url\":\"https://m.g-mh.org/manga-tag/chunai<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"系统\",\"url\":\"https://m.g-mh.org/manga-tag/xitong<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"重生\",\"url\":\"https://m.g-mh.org/manga-tag/zhongsheng<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"冒险\",\"url\":\"https://m.g-mh.org/manga-tag/maoxian<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"灵异\",\"url\":\"https://m.g-mh.org/manga-tag/lingyi<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"大女主\",\"url\":\"https://m.g-mh.org/manga-tag/danvzhu<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"剧情\",\"url\":\"https://m.g-mh.org/manga-tag/juqing<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"恋爱\",\"url\":\"https://m.g-mh.org/manga-tag/lianai<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"玄幻\",\"url\":\"https://m.g-mh.org/manga-tag/xuanhuan<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"女神\",\"url\":\"https://m.g-mh.org/manga-tag/nvshen<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"科幻\",\"url\":\"https://m.g-mh.org/manga-tag/kehuan<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"魔幻\",\"url\":\"https://m.g-mh.org/manga-tag/mohuan<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"推理\",\"url\":\"https://m.g-mh.org/manga-tag/tuili<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"猎奇\",\"url\":\"https://m.g-mh.org/manga-tag/lieqi<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"治愈\",\"url\":\"https://m.g-mh.org/manga-tag/zhiyu<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"都市\",\"url\":\"https://m.g-mh.org/manga-tag/doushi<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"异形\",\"url\":\"https://m.g-mh.org/manga-tag/yixing<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"青春\",\"url\":\"https://m.g-mh.org/manga-tag/qingchun<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"末日\",\"url\":\"https://m.g-mh.org/manga-tag/mori<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"悬疑\",\"url\":\"https://m.g-mh.org/manga-tag/xuanyi<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"修仙\",\"url\":\"https://m.g-mh.org/manga-tag/xiuxian<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}},\n{\"title\":\"战斗\",\"url\":\"https://m.g-mh.org/manga-tag/zhandou<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.24}}\n]",
  "header": "{\n\t\"User-Agent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36\",\n\t\"Referer\":\"https://m.g-mh.org/\"\n}",
  "lastUpdateTime": 1760405687184,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.text-small py-1 pb-2@a@text##,",
    "coverUrl": "class.rounded-lg@src",
    "intro": "class.text-medium line-clamp-4 my-unit-md@text",
    "kind": "class.block text-left mx-auto@[class=\"py-1\"]@a@span@text###",
    "lastChapter": "id.lastchap@text",
    "name": "class.mb-2 text-xl font-medium@h1@textNodes",
    "tocUrl": "@js:\nlet u=src.match(/data-mid=\\\"(.*?)\\\"/)\nlet m=u[1]\nlet url=`https://api-get-v3.mgsearcher.com/api/manga/get?mid=${m}&mode=all`\nurl"
  },
  "ruleContent": {
    "content": "$..images.images\n@js:\nlet u=result;\nconst g=\"https://f40-1-4.g-mh.online\";\nlet n=JSON.parse(u).map(i=>`<img src=\"${g}${i.url}\">`).join('\\n')\n//java.log(JSON.stringify(n))\nn",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.pb-2",
    "bookUrl": "a@href",
    "checkKeyWord": "凤傲天小说里的黄毛反派也想幸福",
    "coverUrl": "class.aspect-3-4 rounded-lg bg-default-100@img@src",
    "name": "class.cardtitle@h3@text"
  },
  "ruleToc": {
    "chapterList": "$.data.chapters\n@js:\nlet u=result;\nlet o=src.match(/data\\\":{\\\"id\\\":\\\"(.*?)\\\"/)\nif(o){\nlet k=o[1]\nlet q=JSON.parse(u)\nlet a=q.map(is=>({\n\ttext:is.attributes.title,\t\t  url:`https://api-get-v3.mgsearcher.com/api/chapter/getinfo?m=${k}&c=${is.id}`\n\t}))\n//java.log(JSON.stringify(a))\na\n}else{\nlet h=\tsrc.match(/data.*id\\\":\\\"(\\d+)\\\",\\\"slug/)[1]\njava.log(JSON.stringify(h))\nlet q=JSON.parse(u)\nlet a=q.map(is=>({\n\ttext:is.attributes.title,\t\t  url:`https://api-get-v3.mgsearcher.com/api/chapter/getinfo?m=${h}&c=${is.id}`\n\t}))\n//java.log(JSON.stringify(a))\na\n}",
    "chapterName": "text",
    "chapterUrl": "url"
  },
  "searchUrl": "https://m.g-mh.org/s/{{key}}?page={{page}}",
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