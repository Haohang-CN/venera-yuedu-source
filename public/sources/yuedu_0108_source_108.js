class YueduConvertedSource extends ComicSource {
    name = "九妖漫画👙"
    key = "yuedu_0108_source_108"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://cloudflare.fw-91mh-912023.xyz"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "九妖漫画👙",
  "bookSourceType": 2,
  "bookSourceUrl": "https://cloudflare.fw-91mh-912023.xyz",
  "customOrder": 2243,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": " 全部::https://cloudflare.fw-91mh-912023.xyz/category/order/addtime/page/{{page}}/&&韓漫::https://cloudflare.fw-91mh-912023.xyz/category/list/2/page/{{page}}/&&出版::https://cloudflare.fw-91mh-912023.xyz/category/list/4/page/{{page}}/&&3D漫畫::https://cloudflare.fw-91mh-912023.xyz/category/list/1/page/{{page}}/&&單本::https://cloudflare.fw-91mh-912023.xyz/category/list/3/page/{{page}}/&&其它::https://cloudflare.fw-91mh-912023.xyz/category/list/5/page/{{page}}/&&更新::https://cloudflare.fw-91mh-912023.xyz/custom/update/order/addtime/page/{{page}}/&&熱門人氣::https://cloudflare.fw-91mh-912023.xyz/category/order/hits/page/{{page}}/&&最高評分::https://cloudflare.fw-91mh-912023.xyz/category/order/score/page/{{page}}/&&最多收藏::https://cloudflare.fw-91mh-912023.xyz/category/order/shits/page/{{page}}/&&新漫入庫::https://cloudflare.fw-91mh-912023.xyz/category/order/id/page/{{page}}/&&今日人氣::https://cloudflare.fw-91mh-912023.xyz/category/order/rhits/page/{{page}}/",
  "lastUpdateTime": 1711865825511,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": ".name@text",
    "coverUrl": ".lazy@src",
    "intro": ".intro@text",
    "kind": ".text@text##题材:",
    "lastChapter": ".update-time@text",
    "name": ".j-comic-title@text",
    "tocUrl": "{{baseUrl}}"
  },
  "ruleContent": {
    "content": ".lazy-read@data-original",
    "nextContentUrl": ""
  },
  "ruleExplore": {
    "author": "class.updata@text",
    "bookList": "class.cate-comic-list@class.common-comic-item",
    "bookUrl": "a[0]@href",
    "coverUrl": ".lazy@data-original",
    "intro": ".comic-feature@text",
    "kind": "li.biaoqian@a@text",
    "lastChapter": ".comic-update@text##更至：",
    "name": ".comic__title@text"
  },
  "ruleSearch": {
    "author": "",
    "bookList": "class.cate-comic-list@class.common-comic-item",
    "bookUrl": "a@href",
    "coverUrl": ".lazy@data-original",
    "intro": ".comic-feature@text",
    "kind": "",
    "lastChapter": ".comic-update@text",
    "name": ".comic__title@text"
  },
  "ruleToc": {
    "chapterList": ".chapter__list@ul@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href",
    "nextTocUrl": ""
  },
  "searchUrl": "https://cloudflare.fw-91mh-912023.xyz/index.php/search/{{Key}}/{{Page}}",
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