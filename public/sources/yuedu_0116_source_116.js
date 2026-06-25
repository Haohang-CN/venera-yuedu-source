class YueduConvertedSource extends ComicSource {
    name = "🏆 梦游漫画"
    key = "yuedu_0116_source_116"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.mumumh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// 地址发布页 www.muahm.com",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🏆 梦游漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.mumumh.com",
  "bookUrlPattern": "",
  "customOrder": 2406,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"连载\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"都市\",\"url\":\"/booklist?page={{page}}&tag=都市&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"出版\",\"url\":\"/booklist?page={{page}}&tag=出版漫画&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"剧情\",\"url\":\"/booklist?page={{page}}&tag=剧情&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恋爱\",\"url\":\"/booklist?page={{page}}&tag=恋爱&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"动作\",\"url\":\"/booklist?page={{page}}&tag=动作&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"校园\",\"url\":\"/booklist?page={{page}}&tag=校园&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恐怖\",\"url\":\"/booklist?page={{page}}&tag=恐怖&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"耽美\",\"url\":\"/booklist?page={{page}}&tag=耽美&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"搞笑\",\"url\":\"/booklist?page={{page}}&tag=搞笑&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"爱情\",\"url\":\"/booklist?page={{page}}&tag=爱情&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"生活\",\"url\":\"/booklist?page={{page}}&tag=生活&area=-1&end=0\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"完结\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"都市\",\"url\":\"/booklist?page={{page}}&tag=都市&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"出版\",\"url\":\"/booklist?page={{page}}&tag=出版漫画&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"剧情\",\"url\":\"/booklist?page={{page}}&tag=剧情&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恋爱\",\"url\":\"/booklist?page={{page}}&tag=恋爱&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"动作\",\"url\":\"/booklist?page={{page}}&tag=动作&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"校园\",\"url\":\"/booklist?page={{page}}&tag=校园&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"恐怖\",\"url\":\"/booklist?page={{page}}&tag=恐怖&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"耽美\",\"url\":\"/booklist?page={{page}}&tag=耽美&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"搞笑\",\"url\":\"/booklist?page={{page}}&tag=搞笑&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"爱情\",\"url\":\"/booklist?page={{page}}&tag=爱情&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"生活\",\"url\":\"/booklist?page={{page}}&tag=生活&area=-1&end=1\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 9; HWI-AL00 Build/HUAWEIHWI-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1730747162481,
  "loginUrl": "",
  "respondTime": 303421,
  "ruleBookInfo": {
    "author": ".detail-main-info a.0@text",
    "coverUrl": ".detail-main-cover img@data-original",
    "init": "",
    "intro": "&nbsp;&nbsp;🔖更新时间：{{@@.detail-list-title span.1@text##更新}}{{'\\n&lrm;\\n'}}&nbsp;&nbsp;🏷️标签：{{@@.detail-main-info-class@text}}{{'\\n&lrm;\\n'}}{{@@.detail-desc@html}}",
    "kind": ".detail-list-title span.0:1@text##更新",
    "lastChapter": ".detail-list-1 a.-1@text&&.detail-list-title span.1@text##更新\n<js>result.replace(/(.*)\\s/,'$1 • ')</js>",
    "name": ".detail-main-info p.0@text"
  },
  "ruleContent": {
    "content": "#cp_img@img@html##src.*\\\"\n@js:result.replace(/data-original/g,\"src\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ".manga-list-2 li",
    "bookUrl": "a.1@href",
    "coverUrl": "img@data-original",
    "intro": "",
    "kind": "",
    "lastChapter": "a.2@text",
    "name": "a.1@text",
    "wordCount": ""
  },
  "ruleSearch": {
    "author": "span.0@text",
    "bookList": ".book-list li",
    "bookUrl": "a.1@href",
    "coverUrl": "img@data-original",
    "intro": "p.1@text",
    "kind": "span.1@text",
    "name": "p.0@text",
    "wordCount": ""
  },
  "ruleToc": {
    "chapterList": ".detail-list-1 li a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/search?keyword={{key}}",
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