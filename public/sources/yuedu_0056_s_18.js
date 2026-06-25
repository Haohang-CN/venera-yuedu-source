class YueduConvertedSource extends ComicSource {
    name = "18禁漫◎辞晨◎"
    key = "yuedu_0056_s_18"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://m.18mhx.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//2025.6.1by.◎辞晨◎",
  "bookSourceGroup": "漫画",
  "bookSourceName": "18禁漫◎辞晨◎",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.18mhx.com/",
  "customOrder": 1201,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\npush(\"全部🌊分类\",null,1,1)\npush(\"🌊最新上架🌊\",`/newss/page/{{page}}`,1,0.35)\npush(\"🌊热门更新🌊\",`/dayup/page/{{page}}`,1,0.35)\n\tarList=[[\"全部\",\"\"],[\"韓漫\",\"hanman\"],[\"真人寫真\",\"zhenrenxiezhen\"],[\"日漫\",\"riman\"],[\"AI寫真\",\"aixiezhen\"],[\"熱門漫畫\",\"hots\"]]\n\tarList.map(([tag,uri])=>{\n\t\ttag=java.t2s(tag);\n\t\t\t\turl=`/manga-genre/${uri}/page/{{page}}`;\n\t\tpush(tag, url, 1, 0.25);\n\t\t});\n\t\tpush(\"🌊其他标签🌊\",null,1,1)\n\t\tnrList=[[\"多人\",\"duoren\"],[\"慾望\",\"yuwang\"],[\"正妹\",\"zhengmei\"],[\"同居\",\"tongju\"],[\"女學生\",\"nxuesheng\"],[\"劇情\",\"juqing\"],[\"偷情\",\"touqing\"],[\"校园\",\"xiaoyuan\"],[\"逆襲\",\"nixi\"],[\"办公室\",\"bangongshi\"],[\"誘惑\",\"youhuo\"],[\"反转\",\"fanzhuan\"],[\"熟女\",\"shun\"],[\"人妻\",\"renqi\"],[\"初戀\",\"chulian\"],[\"少妇\",\"shaofu\"],[\"刺激\",\"ciji\"],[\"女大学生\",\"ndaxuesheng\"],[\"治疗\",\"zhiliao\"],[\"超能力\",\"chaonengli\"],[\"浪漫校园\",\"langmanxiaoyuan\"],[\"戏剧\",\"xiju\"],[\"学姐\",\"xuejie\"],[\"大学生\",\"daxuesheng\"],[\"泳衣\",\"yongyi\"],[\"暧昧\",\"aimei\"],[\"写真\",\"xiezhen\"],[\"女神\",\"nshen\"],[\"大尺度\",\"dachidu\"],[\"纯情警察\",\"chunqingjingcha\"]]\n\tnrList.map(([tag,uri])=>{\n\t\ttag=java.t2s(tag);\n\t\t\t\turl=`/manga-tag/${uri}/page/{{page}}`;\n\t\tpush(tag, url, 1, 0.25);\n\t\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "@js:\nJSON.stringify({\n  'User-Agent': \"Mozilla/5.0 (Linux; Android 15; V2304A Build/AP3A.240905.015.A2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.71 Mobile Safari/537.36\",\n  'sec-ch-ua-platform': \"\\\"Android\\\"\",\n  'origin': baseUrl,\n  'x-requested-with': \"cn.mujiankeji.mbrowser\",\n  'referer': baseUrl,\n  'accept-language': \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n})",
  "lastUpdateTime": 1767776328452,
  "respondTime": 5313,
  "ruleBookInfo": {
    "author": "span.7@text",
    "coverUrl": "[property=\"og:image\"]@content",
    "init": "<js>java.t2s(result)</js>",
    "intro": ".text-medium.0@text",
    "kind": "{{@@span.5@text}},{{@@.py-1!0@a@text}}",
    "lastChapter": ".italic.0@text",
    "name": "h1.1@textNodes",
    "tocUrl": "<js>\nlet p = result.match(/data-mid\\=\\\"(.*?)\\\"/);\nif (p) {\n  // java.log(p[1])\n  java.put('bi', p[1]);\n  url = \"https://m.18mhx.com/manga/get?mid=\" + p[1] + \"&mode=all\";\n}\nurl;\n</js>\n"
  },
  "ruleContent": {
    "content": "img@src||img@data-src\n<js>\njava.toast(typeof result);\nlet headers = JSON.stringify({\"headers\":{\"Referer\":baseUrl}});\nresult.split('\\n').map(x=>`<img src=\"${x},${headers}\">`).join('\\n');\n</js>",
    "imageStyle": "FULL",
    "replaceRegex": "##.*base64.*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "<js>java.t2s(result)</js>\n.pb-2",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "<js>java.t2s(result)</js>\n#allchapterlist@a",
    "chapterName": "##data\\-ct\\=\\\"(.*?)\\\"##$1###",
    "chapterUrl": "##data\\-cs\\=\\\"(.*?)\\\"##$1###\n<js>\npi= `https://m.18mhx.com/chapter/getcontent?m=${java.get('bi')}&c=${result}`;\n</js>"
  },
  "searchUrl": "/s/{{key}}?page={{page}}",
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