class YueduConvertedSource extends ComicSource {
    name = "极速漫画💰"
    key = "yuedu_0173_source_173"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.1kkk.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "极速漫画💰",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.1kkk.com",
  "bookUrlPattern": "",
  "customOrder": 3265,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "全部::http://www.1kkk.com/manhua-list-p{{page}}\n连载::http://www.1kkk.com/manhua-list-st1-p{{page}}\n完结::http://www.1kkk.com/manhua-list-st2-p{{page}}\n港台::http://www.1kkk.com/manhua-list-area35-p{{page}}\n日韩::http://www.1kkk.com/manhua-list-area36-p{{page}}\n大陆::http://www.1kkk.com/manhua-list-area37-p{{page}}\n欧美::http://www.1kkk.com/manhua-list-area52-p{{page}}\n少年向::http://www.1kkk.com/manhua-list-group1-p{{page}}\n少女向::http://www.1kkk.com/manhua-list-group2-p{{page}}\n青年向::http://www.1kkk.com/manhua-list-group3-p{{page}}\n热血::http://www.1kkk.com/manhua-<rexue/,list-tag31-p2/,list-tag31-p{{page}}/>\n恋爱::http://www.1kkk.com/manhua-<aiqing/,list-tag31-p2/,list-tag31-p{{page}}/>\n校园::http://www.1kkk.com/manhua-<xiaoyuan/,list-tag31-p2/,list-tag31-p{{page}}/>\n百合::http://www.1kkk.com/manhua-<baihe/,list-tag31-p2/,list-tag31-p{{page}}/>\n耽美::http://www.1kkk.com/manhua-<danmei/,list-tag31-p2/,list-tag31-p{{page}}/>\n冒险::http://www.1kkk.com/manhua-<maoxian/,list-tag31-p2/,list-tag31-p{{page}}/>\n后宫::http://www.1kkk.com/manhua-<hougong/,list-tag31-p2/,list-tag31-p{{page}}/>\n科幻::http://www.1kkk.com/manhua-<kehuan/,list-tag31-p2/,list-tag31-p{{page}}/>\n战争::http://www.1kkk.com/manhua-<zhanzheng/,list-tag31-p2/,list-tag31-p{{page}}/>\n悬疑::http://www.1kkk.com/manhua-<xuanyi/,list-tag31-p2/,list-tag31-p{{page}}/>\n推理::http://www.1kkk.com/manhua-<zhentan/,list-tag31-p2/,list-tag31-p{{page}}/>\n搞笑::http://www.1kkk.com/manhua-<gaoxiao/,list-tag31-p2/,list-tag31-p{{page}}/>\n奇幻::http://www.1kkk.com/manhua-<qihuan/,list-tag31-p2/,list-tag31-p{{page}}/>\n恐怖::http://www.1kkk.com/manhua-<kongbu/,list-tag31-p2/,list-tag31-p{{page}}/>\n神鬼::http://www.1kkk.com/manhua-<dongfangshengui/,list-tag31-p2/,list-tag31-p{{page}}/>\n历史::http://www.1kkk.com/manhua-<lishi/,list-tag31-p2/,list-tag31-p{{page}}/>\n同人::http://www.1kkk.com/manhua-<tongren/,list-tag31-p2/,list-tag31-p{{page}}/>\n运动::http://www.1kkk.com/manhua-<jingji/,list-tag31-p2/,list-tag31-p{{page}}/>\n绅士::http://www.1kkk.com/manhua-<jiecao/,list-tag31-p2/,list-tag31-p{{page}}/>\n机甲::http://www.1kkk.com/manhua-<jizhan/,list-tag31-p2/,list-tag31-p{{page}}/>",
  "lastUpdateTime": 1725635684040,
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.detail-main-info-author@tag.a@text",
    "coverUrl": "class.detail-main-cover@tag.img@src",
    "init": "",
    "intro": "class.detail-desc@text",
    "kind": "class.detail-main-info-class@tag.a@text",
    "name": "class.detail-main-info-title.0@text"
  },
  "ruleContent": {
    "content": "@js:\r\ntry{\nvar options={\"headers\":{\"Referer\":baseUrl}};\r\neval(result.match(/(eval\\([\\s\\S]+?)<\\/script/)[1]);\r\nnewImgs.map(a=>\r\n'<img src=\"'+a+\",\"+JSON.stringify(options)+'\">').join(\"\\n\")\r\n}catch(e){}",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "class.subtitle@tag.a@text||class.author.0@tag.a@text",
    "bookList": "class.banner_detail_form&&class.mh-list@tag.li",
    "bookUrl": "class.title@tag.a@href##(\\/.*\\/)##http://m.1kkk.com$1",
    "coverUrl": "tag.img.0@src||class.mh-cover.0@style##.*\\(([^\\)]+)\\)##$1",
    "lastChapter": "class.chapter.0@tag.a@text",
    "name": "class.title.0@tag.a@text"
  },
  "ruleToc": {
    "chapterList": "-id.detail-list-select-1@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "http://www.1kkk.com/search?title={{key}}&language=1&page={{page}}",
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