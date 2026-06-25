class YueduConvertedSource extends ComicSource {
    name = "🌊漫画吧◎辞晨◎"
    key = "yuedu_0089_source_89"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.manhuaba.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "//2025.1.17by.◎辞晨◎",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌊漫画吧◎辞晨◎",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.manhuaba.com/",
  "customOrder": 2050,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\npush(\"全部🌊分类\",null,1,1)\n\tarList=[\"🌊国产漫画🌊\",\"🌊日本漫画🌊\",\"🌊韩国漫画🌊\",\"🌊欧美漫画🌊\"]\n\tnrList=[\"韩国\",\"咚漫\",\"原创\",\"异形\",\"偶像\",\"歌舞\",\"宅斗\",\"宅向\",\"青春\",\"西幻\",\"冒险\",\"恋爱\",\"都市\",\"其它\",\"战斗\",\"其他\",\"灵异\",\"科幻\",\"纯爱\",\"现代\",\"总裁\",\"推理\",\"职场\",\"剧情\",\"校园\",\"穿越\",\"逆袭\",\"古风\",\"玄幻\",\"热血\",\"权谋\",\"正能量\",\"复仇\",\"悬疑\",\"奇幻\",\"搞笑\",\"日常\",\"大女主\",\"亲情\",\"战争\",\"脑洞\",\"社会\",\"重生\",\"怪物\",\"女神\",\"多世界\",\"异能\",\"治愈\",\"浪漫\",\"魔幻\"]\n\tarList.map((tag,index)=>{\n\t\turl=`/category/list/${index+1}<,/page/{{page}}>`;\n\t\tpush(tag, url, 1, 1);\n\t\tnrList.map((teg,ure)=>{\n\t\t\tpush(teg,`/category/list/${index+1}/tags/${ure+528}<,/page/{{page}}>`,1,0.25)\n\t\t\t});\n\t\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "{\n  'User-Agent': \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0\",\n  'sec-ch-ua-platform': \"\\\"Android\\\"\",\n  'origin': \"baseUrl\",\n  'x-requested-with': \"cn.mujiankeji.mbrowser\",\n  'referer': \"baseUrl\",\n  'accept-language': \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n}",
  "lastUpdateTime": 1737102994479,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": ".module-info-item-content.0@text",
    "kind": "{{@@.module-info-item-content.1:3:2@text##\\s##,}},{{@@.module-info-item.-1@text}}",
    "lastChapter": ".module-info-item-content.-1@text",
    "name": "h1@text",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "#images@img@data-src\n@js:java.toast(typeof result);\nresult.split('\\n').map(x=>\n\t`<img src=\"${x}\">`\n\t).join('\\n');",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": "",
    "name": ""
  },
  "ruleSearch": {
    "bookList": ".module-items@a",
    "bookUrl": "a.0@href",
    "coverUrl": "img@data-original",
    "lastChapter": ".module-item-note@text",
    "name": ".module-poster-item-title@text"
  },
  "ruleToc": {
    "chapterList": ".module-play-list-content @a[href~=chapter]",
    "chapterName": "a@text",
    "chapterUrl": "a@href##$##,{\"webView\":true}"
  },
  "searchUrl": "/search/{{key}}<,/{{page}}>",
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