class YueduConvertedSource extends ComicSource {
    name = "奇怪漫画"
    key = "yuedu_0054_source_54"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.hdmanhua.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "奇怪漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.hdmanhua.com",
  "bookUrlPattern": "https://www.hdmanhua.com/comic/\\d+/",
  "customOrder": 1163,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "[{\"title\":\"分类\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"剧情\",\"url\":\"/category/1/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"爱情\",\"url\":\"/category/5/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"奇幻\",\"url\":\"/category/2/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"乱伦\",\"url\":\"/category/3/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"调教\",\"url\":\"/category/6/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.21,\"layout_flexGrow\":-1}},{\"title\":\"校园\",\"url\":\"/category/4/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.21,\"layout_flexGrow\":-1}},{\"title\":\"B L\",\"url\":\"/category/7/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.21,\"layout_flexGrow\":-1}},{\"title\":\"标签\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"巨乳\",\"url\":\"/tag/1/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"熟女\",\"url\":\"/tag/3/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"学生\",\"url\":\"/tag/2/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"O L\",\"url\":\"/tag/6/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"不伦\",\"url\":\"/tag/4/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"青年\",\"url\":\"/tag/7/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"教师\",\"url\":\"/tag/8/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"女仆\",\"url\":\"/tag/9/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"职场\",\"url\":\"/tag/5/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"剧情\",\"url\":\"/tag/15/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"后宫\",\"url\":\"/tag/16/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"妖精\",\"url\":\"/tag/12/{{page-1}}\",\"style\":{\"layout_flexBasisPercent\":0.2,\"layout_flexGrow\":1}},{\"title\":\"排行\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"人气排行\",\"url\":\"/top/hot/{{page==1?'':'index_'+page+'.html'}}\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"收藏排行\",\"url\":\"/top/collect/{{page==1?'':'index_'+page+'.html'}}\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"热门全本\",\"url\":\"/top/wanben/{{page==1?'':'index_'+page+'.html'}}\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"评分排行\",\"url\":\"/top/score/{{page==1?'':'index_'+page+'.html'}}\",\"style\":{\"layout_flexBasisPercent\":0.29,\"layout_flexGrow\":-1}},{\"title\":\"最新漫画\",\"url\":\"/top/new/{{page==1?'':'index_'+page+'.html'}}\",\"style\":{\"layout_flexBasisPercent\":0.29,\"layout_flexGrow\":-1}}]",
  "lastUpdateTime": 1752315540561,
  "respondTime": 2297,
  "ruleBookInfo": {
    "author": "@get:{a}",
    "coverUrl": "@get:{c}",
    "init": "@put:{n:\"[property$=book_name]@content\",\na:\"[property$=author]@content\",\nk:\"[property~=category|status|update_time]@content\",\nl:\"[property~=las?test_chapter_name]@content\",\ni:\"[property$=description]@content\",\nc:\"[property$=image]@content\"}",
    "intro": "@get:{i}",
    "kind": "@get:{k}",
    "lastChapter": "@get:{l}",
    "name": "@get:{n}"
  },
  "ruleContent": {
    "content": ".images@html"
  },
  "ruleExplore": {
    "author": "span@text",
    "bookList": ".book-like@a",
    "bookUrl": "href",
    "coverUrl": "img@src",
    "name": "h4@text"
  },
  "ruleSearch": {
    "bookList": ".grid-item",
    "bookUrl": "h3@a@href",
    "coverUrl": "img@src",
    "name": "h3@a@text",
    "wordCount": "{{\"🎨奇怪漫画\"}}"
  },
  "ruleToc": {
    "chapterList": ".book-chapter@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.aakkrr.com/comic/{{key}}/{{page}}",
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