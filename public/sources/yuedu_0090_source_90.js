class YueduConvertedSource extends ComicSource {
    name = "🗂🙈顶通漫画🚩"
    key = "yuedu_0090_source_90"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://toptoon.buzz/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//发布页https://9yaomh.com/m.html\nflag = 1",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🗂🙈顶通漫画🚩",
  "bookSourceType": 2,
  "bookSourceUrl": "https://toptoon.buzz/",
  "bookUrlPattern": "https://toptoon.*\\..*/[0-9a-zA-Z]+/",
  "concurrentRate": "",
  "customOrder": 2062,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "[\n  {\n    title: \"排行榜\",\n    url: \"/top.html\",\n    style: {\n      layout_flexGrow: 1\n    }\n  },\n  {\n    title: \"连载中\",\n    url: \"/weekly/?page={{page}}\",\n    style: {\n      layout_flexGrow: 1\n    }\n  },\n  {\n    title: \"已完结\",\n    url: \"/complete/?page={{page}}\",\n    style: {\n      layout_flexGrow: 1\n    }\n  }\n]",
  "header": "{\n\"User-agent\":\"Mozilla/5.0 (Linux; Android 7.1.1; OPPO A83 Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.138 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1707062722891,
  "loginCheckJs": "",
  "loginUi": "",
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "$.author",
    "coverUrl": "$.cover",
    "downloadUrls": "$.durl",
    "init": "<js>\neval(String(source.bookSourceComment));\nvar J = org.jsoup.Jsoup.parse(result),\n  $1 = key => String(J.select('[property=\"og:' +key+ '\"]')\n    .attr(\"content\")),\n  $2 = key => String(J.select(key).text()),\n  $3 = key => String(J.select(key).attr(\"href\")),\n  $4 = key => String(J.select(key).attr(\"src\")),\nurl = baseUrl;\nl = $2(\"section p:eq(4) a\").replace(/最新章节：/g, \"\");\ns = $2(\"section p:eq(1)\").replace(/[中已]/g, \"\").replace(/完本/, \"完结\");\nk = \"\";\nt = \"\";\ncount = J.select(\"#yuedu ul li a\").length;\n1 == flag;\nJSON.stringify({\n  name: $2(\"section h1\"),\n  author: $2(\"section p:eq(2)\")\n    .replace(/[,xX&]|[图文][:：]/g, \"/\")\n    .replace(/\\s/g, \"\")\n    .replace(/\\/\\/\\/|\\/\\//g, \"/\"),\n  kind: s + \",\" + k + \",\" + t,\n  latest: l + \"·[\" + count + \"]\",\n  intro:\n    \"<br>\" +\n    $2(\"section p:eq(3)\")\n      .replace(/\\\\n/g, \"<br>\")\n      .replace(/(^|[。！？!?]+[\\\"”」）】]?)/g, \"$1<br>\"),\n  cover: $4(\".img-box img\"),\n  url: url\n});\n\n</js>",
    "intro": "$.intro",
    "kind": "$.kind",
    "lastChapter": "$.latest",
    "name": "$.name",
    "tocUrl": "$.url",
    "wordCount": "$.word"
  },
  "ruleContent": {
    "content": "<js>\nif(java.get(\"Enable\")){\n\topt={\"headers\":{\"Referer\":source.getKey()}}\n\tcookie.removeCookie(baseUrl)\n  result=java.getString\n        (\"#txtbox img@data-original\")\n  result.split(\"\\n\").map(x=>\n  \t '<img src=\"'+x+\",\"+JSON.stringify(opt)+\n  \t \t   '\">').\n  \t \t    join(\"\\n\")\n }else java.toast(\"\\n❗未启用书源❗\");\n</js>",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "author": "$.author",
    "bookList": "<js>\neval(String(source.bookSourceComment));\nvar list = java.getElements(\".tx-box ul li\"),\n  data = [];\nfor (i = 0; i < list.length; i++) {\n  data.push({\n    name: list[i].select(\"h2 a\").text(),\n    author: String(list[i].select(\"p\")[0].text())\n      .replace(/[,xX&]|[图文][:：]/g, \"/\")\n      .replace(/\\s/g, \"\")\n      .replace(/\\/\\/\\/|\\/\\//g, \"/\"),\n    kind:\n      String(list[i].select(\".status\").textNodes()).replace(/[中已\\[\\]]/g, \"\") +\n      \",\" +\n      list[i].select(\".adult\").text(),\n    word: \"\",\n    latest: String(list[i].select(\"p\")[1].text()).replace(/最新章节：/g, \"\"),\n    intro: list[i].select(\"p\")[2].text(),\n    cover: list[i].select(\".img-box img\").attr(\"src\"),\n    url: list[i].select(\"a\").attr(\"href\")\n  });\n}\n1 == flag ? JSON.stringify(data) : java.toast(\"\\n❗未启用书源❗\");\n</js>\n$[*]",
    "bookUrl": "$.url",
    "coverUrl": "$.cover",
    "intro": "$.intro",
    "kind": "$.kind",
    "lastChapter": "$.latest",
    "name": "$.name",
    "wordCount": "$.word"
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "<js>\neval(String(source. bookSourceComment));\nvar list = java.getElements(\".tx-box ul li\"),\n  data = [];\nfor (i = 0; i < list.length; i++) {\n  data.push({\n    name: list[i].select(\"h2 a\").text(),\n    author: String(list[i].select(\".mb5.txt-ov.f-12\")[0].text())\n      .replace(/[,xX&]|[图文][:：]/g, \"/\")\n      .replace(/\\s/g, \"\")\n      .replace(/\\/\\/\\/|\\/\\//g, \"/\"),\n    kind: String(list[i].select(\".status\").text()).replace(/[中已]/g, \"\"),\n    word: \"\",\n    latest: \"\",\n    intro: list[i].select(\".f-gray.mb10.f-12.i50\").text(),\n    cover: list[i].select(\".img-box img\").attr(\"src\"),\n    url: list[i].select(\"a\").attr(\"href\")\n  });\n}\nJSON.stringify(data);\n</js>\n$[:10]",
    "bookUrl": "$.url",
    "checkKeyWord": "社团学姐",
    "coverUrl": "$.cover",
    "intro": "$.intro",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": "<js>\nDate.prototype.Format = function (fmt) {\n  var o= {\n    \"M+\": this.getMonth() + 1, //月份 \n    \"d+\": this.getDate(), //日 \n    \"H+\": this.getHours(), //小时 \n    \"m+\": this.getMinutes(), //分 \n    \"s+\": this.getSeconds(), //秒 \n    \"q+\": Math.floor((this.getMonth() + 3) / 3), //季度 \n    \"S\": this.getMilliseconds() //毫秒 \n  };\n  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + \"\").substr(4 - RegExp.$1.length));\n  for (var k in o)\n  if (new RegExp(\"(\" + k + \")\").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((\"00\" + o[k]).substr((\"\" + o[k]).length)));\n  return fmt;\n};\ndate = new Date(new Date().getTime()).Format(\"yyyy-MM-dd HH:mm:ss\");\neval(String(source.bookSourceComment));\nvar list = java.getElements(\"#yuedu ul li a\"),\n  data = [];\nfor (i = 0; i < list.length; i++) {\n  data.push({\n    title:\n      i == list.length - 1 ? `${list[i].text()}〔${date}〕` : list[i].text(),\n    link: list[i].attr(\"href\")\n  });\n};\n1 == flag\n  ? (java.put(\"Enable\", 1), JSON.stringify(data))\n  : java.toast(\"\\n❗未启用书源❗\");\n</js>\n$[*]",
    "chapterName": "$.title",
    "chapterUrl": "$.link"
  },
  "searchUrl": "<js>\neval(String(source.bookSourceComment));\n1 == flag\n  ? \"/txsearch.html?&search=\" + key\n  : java.toast(\"\\n❗未启用书源❗\");\n</js>\n",
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