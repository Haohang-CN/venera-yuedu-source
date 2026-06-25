class YueduConvertedSource extends ComicSource {
    name = "漫画人吧"
    key = "yuedu_0174_source_174"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.manhuaren.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 发现目录失效",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫画人吧",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.manhuaren.com",
  "bookUrlPattern": "",
  "customOrder": 3271,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "热门::http://www.manhuaren.com/manhua-list/dm5.ashx?d=Wed Mar 06 2019 15:24:13 GMT 0800,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&pagesize=21&categoryid=0&tagid=0&status=0&usergroup=0&pay=-1&areaid=0&sort=10&iscopyright=0\"}\n最近更新::http://www.manhuaren.com/manhua-list/dm5.ashx?d=Wed Mar 06 2019 15:24:13 GMT 0800,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&pagesize=21&categoryid=0&tagid=0&status=0&usergroup=0&pay=-1&areaid=0&sort=2&iscopyright=0\"}\n最新上架::http://www.manhuaren.com/manhua-list/dm5.ashx?d=Wed Mar 06 2019 15:24:13 GMT 0800,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&pagesize=21&categoryid=0&tagid=0&status=0&usergroup=0&pay=-1&areaid=0&sort=18&iscopyright=0\"}\n连载::http://www.manhuaren.com/manhua-list/dm5.ashx?d=Wed Mar 06 2019 15:24:13 GMT 0800,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&pagesize=21&categoryid=0&tagid=0&status=1&usergroup=0&pay=-1&areaid=0&sort=10&iscopyright=0\"}\n完结::http://www.manhuaren.com/manhua-list/dm5.ashx?d=Wed Mar 06 2019 15:24:13 GMT 0800,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&pagesize=21&categoryid=0&tagid=0&status=2&usergroup=0&pay=-1&areaid=0&sort=10&iscopyright=0\"}\n全部::http://www.manhuaren.com/manhua-list/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&pageindex={{page}}&sort=10&status=0&tagid=0\"}\n热血::http://www.manhuaren.com/manhua-rexue/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=31&pageindex={{page}}\"}\n恋爱::http://www.manhuaren.com/manhua-aiqing/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=26&pageindex={{page}}\"}\n校园::http://www.manhuaren.com/manhua-xiaoyuan/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=1&pageindex={{page}}\"}\n百合::http://www.manhuaren.com/manhua-baihe/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=3&pageindex={{page}}\"}\n耽美::http://www.manhuaren.com/manhua-danmei/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=27&pageindex={{page}}\"}\n伪娘::http://www.manhuaren.com/manhua-weiniang/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=5&pageindex={{page}}\"}\n冒险::http://www.manhuaren.com/manhua-maoxian/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=2&pageindex={{page}}\"}\n职场::http://www.manhuaren.com/manhua-zhichang/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=6&pageindex={{page}}\"}\n后宫::http://www.manhuaren.com/manhua-hougong/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=8&pageindex={{page}}\"}\n治愈::http://www.manhuaren.com/manhua-zhiyu/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=9&pageindex={{page}}\"}\n科幻::http://www.manhuaren.com/manhua-kehuan/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=25&pageindex={{page}}\"}\n轻小说::http://www.manhuaren.com/manhua-qingxiaoshuo1/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=156&pageindex={{page}}\"}\n励志::http://www.manhuaren.com/manhua-lizhi/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=10&pageindex={{page}}\"}\n战争::http://www.manhuaren.com/manhua-zhanzheng/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=12&pageindex={{page}}\"}\n悬疑::http://www.manhuaren.com/manhua-xuanyi/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=17&pageindex={{page}}\"}\n搞笑::http://www.manhuaren.com/manhua-gaoxiao/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=37&pageindex={{page}}\"}\n奇幻::http://www.manhuaren.com/manhua-qihuan/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=14&pageindex={{page}}\"}\n魔法::http://www.manhuaren.com/manhua-mofa/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=15&pageindex={{page}}\"}\n恐怖::http://www.manhuaren.com/manhua-kongbu/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=29&pageindex={{page}}\"}\n萌系::http://www.manhuaren.com/manhua-mengxi/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=21&pageindex={{page}}\"}\n历史::http://www.manhuaren.com/manhua-lishi/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=4&pageindex={{page}}\"}\n美食::http://www.manhuaren.com/manhua-meishi/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=7&pageindex={{page}}\"}\n同人::http://www.manhuaren.com/manhua-tongren/dm5.ashx?,{\"method\": \"POST\",\"body\": \"action=getclasscomics&tagid=30&pageindex={{page}}\"}",
  "lastUpdateTime": 1734945504669,
  "loginUrl": "",
  "respondTime": 181060,
  "ruleBookInfo": {
    "author": "class.detail-main-info-author@tag.a@text",
    "coverUrl": "class.detail-main-bg@src",
    "init": "",
    "intro": "class.detail-desc.0@text",
    "kind": "class.detail-main-info-class@tag.span@text",
    "name": "class.detail-main-info-title.0@text"
  },
  "ruleContent": {
    "content": "@js:\r\ntry{\nvar options={\"headers\":{\"Referer\":baseUrl}};\r\neval(result.match(/(eval\\([\\s\\S]+?)<\\/script/)[1]);\r\nnewImgs.map(a=>\r\n'<img src=\"'+a+\",\"+JSON.stringify(options)+'\">').join(\"\\n\")\r\n}catch(e){}",
    "imageStyle": "FULL",
    "nextContentUrl": ""
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "tag.dd.0@tag.a.0@text||class.subtitle@tag.a@text||class.author.0@tag.a@text",
    "bookList": "class.book-list@tag.li||UpdateComicItems.*",
    "bookUrl": "tag.a.0@href||http://www.manhuaren.com/{$.UrlKey}",
    "coverUrl": "class.book-list-cover-img@src||ShowConver",
    "lastChapter": "class.manga-list-2-tip@text||ShowLastPartName",
    "name": "class.book-list-info-title.0@text||Title"
  },
  "ruleToc": {
    "chapterList": "-id.detail-list-select-1@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "http://www.manhuaren.com/search?title={{key}}&language=1",
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