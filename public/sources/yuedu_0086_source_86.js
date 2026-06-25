class YueduConvertedSource extends ComicSource {
    name = "🌠 奇葩漫画"
    key = "yuedu_0086_source_86"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.qipamh.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🌠 奇葩漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.qipamh.com/",
  "customOrder": 1926,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[\n{\"title\":\"❀排行❀\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"阅读总榜\",\"url\":\"/top.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"最新上新\",\"url\":\"/top.html?type=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"最新更新\",\"url\":\"/top.html?type=2\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"日阅读榜\",\"url\":\"/top.html?type=3\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"周阅读榜\",\"url\":\"/top.html?type=4\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"月阅读榜\",\"url\":\"/top.html?type=5\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"❀题材❀\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"热血\",\"url\":\"/sort/rexue/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"科幻\",\"url\":\"/sort/kehuan/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"古风\",\"url\":\"/sort/gufeng/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"悬疑\",\"url\":\"/sort/xuanyi/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"后宫\",\"url\":\"/sort/hougong/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"穿越\",\"url\":\"/sort/chuanyue/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"修真\",\"url\":\"/sort/xiyzhen/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恐怖\",\"url\":\"/sort/kongbu/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"真人\",\"url\":\"/sort/zhenren/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"霸总\",\"url\":\"/sort/bazong/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"校园\",\"url\":\"/sort/xiaoyuan/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"生活\",\"url\":\"/sort/shenghuo/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恋爱\",\"url\":\"/sort/lianai/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"耽美\",\"url\":\"/sort/danmei/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"百合\",\"url\":\"/sort/baihe/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"韩漫\",\"url\":\"/sort/hanman/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"女主\",\"url\":\"/sort/nvzhu/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"搞笑\",\"url\":\"/sort/gaoxiao/{{page}}/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"❀地区❀\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"国漫\",\"url\":\"http://www.qipamh.com/sort/all/{{page}}/diqu_3/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"日本\",\"url\":\"/sort/all/{{page}}/diqu_2/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"韩国\",\"url\":\"/sort/all/{{page}}/diqu_4/\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n]",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9) Mobile Safari/537.36\"}",
  "lastUpdateTime": 1722473799431,
  "respondTime": 180000,
  "ruleBookInfo": {
    "intro": "class.nmain_com_p nmain_com_p2@p@text"
  },
  "ruleContent": {
    "content": "class.comicpage@html",
    "imageStyle": "full",
    "title": ""
  },
  "ruleSearch": {
    "author": "class.li_div nmain_cl_author@text",
    "bookList": "#list@li",
    "bookUrl": "a.0@href",
    "checkKeyWord": "神印",
    "coverUrl": "img@data-src",
    "lastChapter": "class.li_div nmain_cl_newc@p@text",
    "name": "class.li_div nmain_cl_tit@text"
  },
  "ruleToc": {
    "chapterList": "#ncp3_ul@li@a",
    "chapterName": "text",
    "chapterUrl": "href",
    "updateTime": "class.ncp3li_div ncp3li_div_1@text"
  },
  "searchUrl": "/03f?searchkey={{key}},{\n  \"webView\": true\n}",
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