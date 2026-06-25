class YueduConvertedSource extends ComicSource {
    name = "漫画网"
    key = "yuedu_0046_source_46"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.manhua.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "\n\n//2025.4.25 by.◎辞晨◎\n//正文解密引入CryptoJS库\n//谢谢萝卜姐",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫画网",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.manhua.com/",
  "customOrder": 702,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\npush(\"全部🌊分类\",null,1,1)\n  mrList=[[\"国产漫画\",\"1\"],[\"日本漫画\",\"2\"],[\"韩国漫画\",\"3\"]]\n\tarList=[[\"韩国\",\"528\"],[\"咚漫\",\"529\"],[\"原创\",\"531\"],[\"异形\",\"532\"],[\"偶像\",\"533\"],[\"歌舞\",\"534\"],[\"宅斗\",\"536\"],[\"宅向\",\"538\"],[\"青春\",\"539\"],[\"西幻\",\"540\"],[\"冒险\",\"541\"],[\"恋爱\",\"542\"],[\"都市\",\"543\"],[\"其它\",\"544\"],[\"战斗\",\"545\"],[\"其他\",\"546\"],[\"灵异\",\"547\"],[\"科幻\",\"548\"],[\"纯爱\",\"549\"],[\"现代\",\"550\"],[\"总裁\",\"551\"],[\"推理\",\"552\"],[\"职场\",\"553\"],[\"剧情\",\"554\"],[\"校园\",\"555\"],[\"穿越\",\"556\"],[\"逆袭\",\"557\"],[\"古风\",\"558\"],[\"玄幻\",\"559\"],[\"热血\",\"560\"],[\"权谋\",\"561\"],[\"正能量\",\"562\"],[\"复仇\",\"563\"],[\"悬疑\",\"564\"],[\"奇幻\",\"565\"],[\"搞笑\",\"566\"],[\"日常\",\"567\"],[\"大女主\",\"568\"],[\"亲情\",\"569\"],[\"战争\",\"570\"],[\"脑洞\",\"571\"],[\"社会\",\"572\"],[\"重生\",\"573\"],[\"怪物\",\"574\"],[\"女神\",\"575\"],[\"多世界\",\"576\"],[\"异能\",\"577\"],[\"治愈\",\"578\"],[\"浪漫\",\"579\"],[\"魔幻\",\"580\"]]\n\tmrList.map(([teg,uro])=>{\npush(teg,`/category/list/${uro}/order/addtime`,1,1)\n\tarList.map(([tag,uri])=>{\n\t\t\t\turl=`/category/list/${uro}/order/addtime/tags/${uri}`;\n\t\tpush(tag, url, 1, 0.25);\n\t\t});\n\t\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "@js:\nJSON.stringify({\n  'User-Agent': \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\",\n  'sec-ch-ua-platform': \"\\\"Android\\\"\",\n  'origin': baseUrl,\n  'x-requested-with': \"cn.mujiankeji.mbrowser\",\n  'Referer': baseUrl,\n  'Accept-language': \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n})",
  "jsLib": "{\"crypto\":\"https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js\"}",
  "lastUpdateTime": 1745603168160,
  "respondTime": 13157,
  "ruleBookInfo": {
    "author": ".module-info-item-content.0@text",
    "coverUrl": "img.0@data-original",
    "intro": ".module-info-introduction-content@text",
    "kind": "{{@@.module-info-tag-link@text}},{{@@.module-info-item-content!-1@text}}",
    "lastChapter": ".module-info-item-content.-1@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": "@js:\nparams = result.match(/params = '([^']+)'/)[1];\nfunction decryptParams(encryptedParams) {\n  const parsedData = CryptoJS.enc.Base64.parse(encryptedParams);\n  const iv = CryptoJS.lib.WordArray.create(parsedData.words.slice(0, 4)); \n  const encryptedWords = parsedData.words.slice(4);  \n  const encryptedHex = CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.create(encryptedWords));\n  const key = CryptoJS.enc.Utf8.parse('9S8$vJnU2ANeSRoF'); \n  const decrypted = CryptoJS.AES.decrypt({\n    ciphertext: CryptoJS.enc.Hex.parse(encryptedHex)\n  }, key, { iv: iv });\n const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);\n  const decryptedJson = JSON.parse(decryptedText);\n  return decryptedJson.images;\n}\nimg = String(decryptParams(params)).replace(/\\,/g,'\\n');\nimg.split('\\n').map(x=>`<img src=\"${x}\">`).join('\\n');",
    "imageStyle": "FULL",
    "nextContentUrl": "",
    "title": ""
  },
  "ruleSearch": {
    "author": "",
    "bookList": "<js>\nif (/安全验证/.test(src)) {\n    let url = source.key;\n    let c = cookie.getCookie(url);\n    let t=Math.floor(Date.now());\n    let key = java.get('key');\n    let imgurl = url + 'index.php/api/code?' + Math.random();\n    let code=java.getVerificationCode(imgurl);\n    url=`${url}index.php/search?key=${key}&verify=1&pcode=${code}&_=${t}`\n    uri=java.ajax(url)\n    c = cookie.getCookie(url);\n     //java.log(cookie.getCookie(url));\n    cookie.setCookie(url,c);\n    result=uri;\n}\nresult;\n</js>\n.module-items@a",
    "bookUrl": "a@href",
    "checkKeyWord": "",
    "coverUrl": "img@data-original",
    "lastChapter": ".module-item-note@text",
    "name": ".module-poster-item-title@text"
  },
  "ruleToc": {
    "chapterList": ".module-play-list-content@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "<js>\nlet url=source.key;\njava.put('key',key)\nurl=`${url}/search/${key}/${page}`\n</js>",
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