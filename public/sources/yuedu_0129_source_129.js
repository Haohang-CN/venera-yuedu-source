class YueduConvertedSource extends ComicSource {
    name = "包子漫画（魔法）"
    key = "yuedu_0129_source_129"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://cn.baozimh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "包子漫画（魔法）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://cn.baozimh.com",
  "bookUrlPattern": "",
  "concurrentRate": "",
  "customOrder": 2671,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "最新上架::https://cn.baozimh.com/list/new\n中国::https://cn.baozimh.com/classify?region=cn&page={{page}}\n日本::https://cn.baozimh.com/classify?region=jp&page={{page}}\n欧美::https://cn.baozimh.com/classify?region=en&page={{page}}\n连载中::https://cn.baozimh.com/classify?state=serial&page={{page}}\n已完结::https://cn.baozimh.com/classify?state=pub&page={{page}}\n都市::https://cn.baozimh.com/classify?type=dushi&page={{page}}\n冒险::https://cn.baozimh.com/classify?type=mouxian&page={{page}}\n热血::https://cn.baozimh.com/classify?type=rexie&page={{page}}\n爱情::https://cn.baozimh.com/classify?type=aiqing&page={{page}}\n恋爱::https://cn.baozimh.com/classify?type=lianai&page={{page}}\n耽美::https://cn.baozimh.com/classify?type=danmei&page={{page}}\n武侠::https://cn.baozimh.com/classify?type=wuxia&page={{page}}\n格斗::https://cn.baozimh.com/classify?type=gedou&page={{page}}\n科幻::https://cn.baozimh.com/classify?type=kehuan&page={{page}}\n魔幻::https://cn.baozimh.com/classify?type=mohuan&page={{page}}\n侦探::https://cn.baozimh.com/classify?type=zhentan&page={{page}}\n推理::https://cn.baozimh.com/classify?type=tuili&page={{page}}\n玄幻::https://cn.baozimh.com/classify?type=xuanhuan&page={{page}}\n日常::https://cn.baozimh.com/classify?type=richang&page={{page}}\n生活::https://cn.baozimh.com/classify?type=shenghuo&page={{page}}\n搞笑::https://cn.baozimh.com/classify?type=gaoxiao&page={{page}}\n校园::https://cn.baozimh.com/classify?type=xiaoyuan&page={{page}}\n奇幻::https://cn.baozimh.com/classify?type=qihuan&page={{page}}\nABCD::https://cn.baozimh.com/classify?filter=ABCD&page={{page}}\nEFGH::https://cn.baozimh.com/classify?filter=EFGH&page={{page}}\nIJKL::https://cn.baozimh.com/classify?filter=IJKL&page={{page}}\nMNOP::https://cn.baozimh.com/classify?filter=MNOP&page={{page}}\nQRST::https://cn.baozimh.com/classify?filter=QRST&page={{page}}\nUVW::https://cn.baozimh.com/classify?filter=UVW&page={{page}}\nXYZ::https://cn.baozimh.com/classify?filter=XYZ&page={{page}}\n0-9::https://cn.baozimh.com/classify?filter=0-9&page={{page}}",
  "lastUpdateTime": 1750215074743,
  "loginUrl": "",
  "respondTime": 180568,
  "ruleBookInfo": {
    "author": "h2.comics-detail__author@text",
    "coverUrl": "",
    "init": "",
    "intro": "p.comics-detail__desc@text",
    "kind": ".supporting-text div:first-child@text&&.tag-list span@text##状态：",
    "lastChapter": "class.comics-chapters__item.0@text||.supporting-text@span.-1@a@text",
    "name": "h1.comics-detail__title@text"
  },
  "ruleContent": {
    "content": ".comic-contain@img@src@js:\nheaders={\"headers\":{\"Referer\":baseUrl}};\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL",
    "nextContentUrl": "@css:a:contains(下一页)@href",
    "webJs": ""
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": ".tags@text",
    "bookList": ".comics-card",
    "bookUrl": "tag.a.0@href",
    "checkKeyWord": "幽冥诡匠",
    "coverUrl": "tag.amp-img.0@src",
    "name": ".comics-card__title@text"
  },
  "ruleToc": {
    "chapterList": "<js>\nif(result.match(/章节目录/)){\njava.getElements(\"id.chapter-items@class.comics-chapters@a&&id.chapters_other_list@class.comics-chapters@a\")\n}else\n{\njava.getElements(\"class.comics-chapters||.supporting-text@span.-1\")\n}\n</js>",
    "chapterName": "a@text||span@text||text",
    "chapterUrl": "tag.a@href||href"
  },
  "searchUrl": "https://cn.baozimh.com/search?q={{key}}",
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