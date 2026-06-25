class YueduConvertedSource extends ComicSource {
    name = "👙九妖漫画"
    key = "yuedu_0109_source_109"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://ciyuanrukou.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "👙九妖漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://ciyuanrukou.com/",
  "customOrder": 2248,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"🔥———— 全部分类 ————🔥\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"✨————    韩    漫    ————✨\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category/list/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1/list/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2/list/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/order/addtime/list/2<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/list/2/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/list/2/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/list/2/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/list/2/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/list/2/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"✨————   出版漫画   ————✨\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category/list/4<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1/list/4<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2/list/4<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/list/4/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/list/4/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/list/4/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/list/4/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/list/4/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/list/4/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"✨————   3D漫画   ————✨\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category/list/1<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1/list/1<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2/list/1<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/list/1/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/list/1/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/list/1/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/list/1/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/list/1/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/list/1/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"✨————    单    本    ————✨\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category/list/3<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1/list/3<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2/list/3<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/list/3/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/list/3/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/list/3/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/list/3/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/list/3/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/list/3/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"✨————   其它类   ————✨\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全  部\",\"url\":\"/category/list/5<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载中\",\"url\":\"/category/finish/1/list/5<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"已完结\",\"url\":\"/category/finish/2/list/5<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最新更新\",\"url\":\"/category/list/5/order/addtime<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最热漫画\",\"url\":\"/category/list/5/order/hits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最高评分\",\"url\":\"/category/list/5/order/score<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"最多收藏\",\"url\":\"/category/list/5/order/shits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"新漫入库\",\"url\":\"/category/list/5/order/id<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"今日人气\",\"url\":\"/category/list/5/order/rhits<,/page/{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "lastUpdateTime": 1721303370160,
  "loginUrl": "",
  "respondTime": 11426,
  "ruleBookInfo": {
    "author": "class.comic-author@class.name@tag.a@text",
    "coverUrl": "class.de-info__cover@tag.img@src",
    "intro": "class.comic-intro@class.intro@text",
    "kind": "class.comic-status@class.text.0@tag.b@text",
    "name": "class.de-info__box@class.comic-title j-comic-title@text"
  },
  "ruleContent": {
    "content": "class.rd-article-wr clearfix@class.rd-article__pic hide@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "author": "",
    "bookList": "class.cate-comic-list clearfix@class.common-comic-item",
    "bookUrl": "class.comic__title@tag.a@href",
    "coverUrl": "class.cover@tag.img@data-original",
    "intro": "class.cover@class.comic-feature@text",
    "kind": "",
    "lastChapter": "class.comic-update@tag.a@text",
    "name": "class.comic__title@tag.a@text"
  },
  "ruleSearch": {
    "author": "",
    "bookList": "class.cate-comic-list clearfix@class.common-comic-item",
    "bookUrl": "class.comic__title@tag.a@href",
    "coverUrl": "class.cover@tag.img@data-original",
    "intro": "class.cover@tag.p@text",
    "kind": "",
    "lastChapter": "class.comic-update@tag.a@text",
    "name": "class.comic__title@tag.a@text"
  },
  "ruleToc": {
    "chapterList": "class.chapter__list-box clearfix@tag.li@tag.a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/index.php/search?key={{key}}",
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