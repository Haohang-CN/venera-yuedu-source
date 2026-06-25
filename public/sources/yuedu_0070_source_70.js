class YueduConvertedSource extends ComicSource {
    name = "乐语漫画📱"
    key = "yuedu_0070_source_70"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.leyuman.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "haxc",
  "bookSourceGroup": "漫画",
  "bookSourceName": "乐语漫画📱",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.leyuman.com",
  "bookUrlPattern": "",
  "customOrder": 1766,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "排行::https://m.leyuman.com/page/hot/{{page}}/\n已完结::https://m.leyuman.com/page/wanjie/{{page}}/\n连载中::https://m.leyuman.com/page/lianzai/{{page}}/\n少年漫画::https://m.leyuman.com/list/shaonian/{{page}}/\n少女漫画::https://m.leyuman.com/list/shaonv/{{page}}/\n青年漫画::https://m.leyuman.com/list/qingnian/{{page}}/\n女性漫画::https://m.leyuman.com/list/nvxing/{{page}}/\n真人漫画::https://m.leyuman.com/list/zhenren/{{page}}/\n大陆漫画::https://m.leyuman.com/list/dalu/{{page}}/\n日本漫画::https://m.leyuman.com/list/riben/{{page}}/\n韩国漫画::https://m.leyuman.com/list/hanguo/{{page}}/\n欧美漫画::https://m.leyuman.com/list/omei/{{page}}/\n香港漫画::https://m.leyuman.com/list/xianggang/{{page}}/\n台湾漫画::https://m.leyuman.com/list/taiwan/{{page}}/\n其他漫画::https://m.leyuman.com/list/qita/{{page}}/",
  "lastUpdateTime": 1606119699509,
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.dir@text##作者：",
    "coverUrl": "class.img@tag.mip-img@src",
    "intro": "class.tbox_js@text",
    "kind": "class.yac@text##类别：",
    "lastChapter": "class.act@text##更新：",
    "name": "tag.h4.0@text"
  },
  "ruleContent": {
    "content": "@js:\nvar html=result,\nheader={\"Referer\":baseUrl};\n(function getImgList(){\n    var p = \"z_img=\\'\\\\[(.*?)\\\\]\";\n    var path = html.match(p)[1].replace(/\\\"/g, \"\").replace(/\\\\/g, \"\").split(\",\");\n    var piclist = new Array([path.length]);\n    for (var i = 0; i < path.length; i++) {\n        piclist[i] = \"https://img.xpelly.com/\"+ path[i];\n    }\n    return piclist;\r\n}()).map(uri=>\n'<img src=\"'+uri+'\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleSearch": {
    "bookList": "class.vbox",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.mip-img@src",
    "lastChapter": "tag.span@text",
    "name": "tag.h4.0@text"
  },
  "ruleToc": {
    "chapterList": "-class.list_block@li||class.list_block@span",
    "chapterName": "tag.a@text||tag.span@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://m.leyuman.com/index.php/search.html,{\n  \"method\": \"POST\",\n  \"body\": \"keyword={{key}}\"\n}",
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