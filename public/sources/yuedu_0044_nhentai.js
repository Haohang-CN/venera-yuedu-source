class YueduConvertedSource extends ComicSource {
    name = "🔞Nhentai漫( 日漫+ )"
    key = "yuedu_0044_nhentai"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://ch.hentai-one.com/"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "基本全是汉化的漫画，画质较高",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🔞Nhentai漫( 日漫+ )",
  "bookSourceType": 2,
  "bookSourceUrl": "https://ch.hentai-one.com/",
  "customOrder": 656,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[\n  {\n    \"title\": \"🔖排行🔖\",\n    \"url\": \"\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"全部\",\n    \"url\": \"https://ch.hentai-one.com/articles/rank?t=all_time&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"每月\",\n    \"url\": \"https://ch.hentai-one.com/articles/rank?t=monthly&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"每周\",\n    \"url\": \"https://ch.hentai-one.com/articles/rank?t=weekly&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"每日\",\n    \"url\": \"https://ch.hentai-one.com/articles/rank?t=daily&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n    {\n    \"title\": \"🔖类型🔖\",\n    \"url\": \"\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"同人志\",\n    \"url\": \"https://ch.hentai-one.com/categories/2?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"漫画\",\n    \"url\": \"https://ch.hentai-one.com/categories/4?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  },\n  {\n    \"title\": \"韩漫\",\n    \"url\": \"https://ch.hentai-one.com/tags/6875?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.2\n    }\n  }\n  ,\n    {\n    \"title\": \"🔖人气🔖\",\n    \"url\": \"\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"单女\",\n    \"url\": \"https://ch.hentai-one.com/tags/5744?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"大胸\",\n    \"url\": \"https://ch.hentai-one.com/tags/186?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"单男\",\n    \"url\": \"https://ch.hentai-one.com/tags/5745?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"中出\",\n    \"url\": \"https://ch.hentai-one.com/tags/4170?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"多人\",\n    \"url\": \"https://ch.hentai-one.com/tags/1564?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"口交\",\n    \"url\": \"https://ch.hentai-one.com/tags/215?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"萝莉\",\n    \"url\": \"https://ch.hentai-one.com/tags/3358?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"制服\",\n    \"url\": \"https://ch.hentai-one.com/tags/5409?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"强奸\",\n    \"url\": \"https://ch.hentai-one.com/tags/5056?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"阿黑颜\",\n    \"url\": \"https://ch.hentai-one.com/tags/30?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"全彩\",\n    \"url\": \"https://ch.hentai-one.com/tags/1227?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"正太\",\n    \"url\": \"https://ch.hentai-one.com/tags/5632?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"束缚\",\n    \"url\": \"https://ch.hentai-one.com/tags/230?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"乱伦\",\n    \"url\": \"https://ch.hentai-one.com/tags/2224?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"催眠\",\n    \"url\": \"https://ch.hentai-one.com/tags/3766?type=popular&page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  }\n  ,{\n    \"title\": \"🔖更新🔖\",\n    \"url\": \"\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"单女\",\n    \"url\": \"https://ch.hentai-one.com/tags/5744?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"大胸\",\n    \"url\": \"https://ch.hentai-one.com/tags/186?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"单男\",\n    \"url\": \"https://ch.hentai-one.com/tags/5745?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"中出\",\n    \"url\": \"https://ch.hentai-one.com/tags/4170?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"多人\",\n    \"url\": \"https://ch.hentai-one.com/tags/1564?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"口交\",\n    \"url\": \"https://ch.hentai-one.com/tags/215?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"萝莉\",\n    \"url\": \"https://ch.hentai-one.com/tags/3358?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"制服\",\n    \"url\": \"https://ch.hentai-one.com/tags/5409?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"强奸\",\n    \"url\": \"https://ch.hentai-one.com/tags/5056?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"阿黑颜\",\n    \"url\": \"https://ch.hentai-one.com/tags/30?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"全彩\",\n    \"url\": \"https://ch.hentai-one.com/tags/1227?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"正太\",\n    \"url\": \"https://ch.hentai-one.com/tags/5632?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"束缚\",\n    \"url\": \"https://ch.hentai-one.com/tags/230?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"乱伦\",\n    \"url\": \"https://ch.hentai-one.com/tags/2224?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  },\n  {\n    \"title\": \"催眠\",\n    \"url\": \"https://ch.hentai-one.com/tags/3766?page={{page}}\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.3\n    }\n  }\n]",
  "lastUpdateTime": 1763956000074,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "//div[@id='article-tag-information']/div/div[1]//p/text()",
    "coverUrl": "//div[@id='article-details']//img/@src",
    "kind": "//div[@id='article-tag-information']/div/div[6]//div/text()|//div[@id='article-tag-information']/div/div[7]//div/text()|//div[@id='article-tag-information']/div/div[5]//div/text()",
    "name": "//div[@id='article-details']//h1/text()"
  },
  "ruleContent": {
    "content": "//script@js:\nresult.match(/https:\\/\\/cdn\\.imagedeliveries\\.com\\/[a-zA-Z0-9\\/_-]+?\\.(webp|png|jpg|jpeg)/g)\n.map(x=>'<img src=\\\"'+x+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "//div[contains(@class,'container')]//a[contains(@class,'group')]",
    "bookUrl": "a@href",
    "checkKeyWord": "姐姐",
    "coverUrl": "img@src",
    "kind": "img@alt@js:'NHentai漫'",
    "name": "//a[contains(@class,'group')]/div[2]/div[2]/div[1]/text()"
  },
  "ruleToc": {
    "chapterList": "//div[contains(@class,'container')]/div/a[1]@js:[result]",
    "chapterName": "//a/div/img/@alt@js:'全话阅读'",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://ch.hentai-one.com/articles/search?keyword={{key}}&type=popular",
  "weight": 50
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