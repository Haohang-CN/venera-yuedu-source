class YueduConvertedSource extends ComicSource {
    name = "星火漫画（优）"
    key = "yuedu_0242_source_242"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://www.vomicmh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "星火漫画（优）",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.vomicmh.com",
  "customOrder": 5504,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "热血::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=热血\n都市::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=都市\n喜剧::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=喜剧\n东方::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=东方\n爱情::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=爱情\n校园::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=校园\n百合::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=百合\n冒险::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=冒险\n搞笑::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=搞笑\n科幻::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=科幻\n同人::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=同人\n其他::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=其他\n轻小说::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=轻小说\nABO::http://api.vomicmh.com/api/v1/search/search-comic-data?page={{page}}&category=ABO",
  "header": "@js:\nvar headers = JSON.stringify({\n\t\"User-Agent\": \"Mozilla/5.0 (Linux; Android 10; SK) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36\",\n\"Referer\": String(source.getKey()).replace(/$/,'/')\n});java.put('head', headers);",
  "lastUpdateTime": 1720292644469,
  "respondTime": 9356,
  "ruleBookInfo": {
    "author": "$.data.authors_name",
    "coverUrl": "$.data.cover_img_url",
    "intro": "$.data.description",
    "kind": "$.data.categories",
    "name": "$.data.title",
    "tocUrl": ""
  },
  "ruleContent": {
    "content": "#app > div > div.scroll-wrapper.page-scroll > div@html\n@js:\nvar html=result;\nvar result = html.replace(/<img[^>]*\\bsrc=\"(https?:\\/\\/[^\"]+\\.jpg)\"[^>]*>/g, '<img src=\"$1\">');\nresult;",
    "replaceRegex": "##👇🏻 👇🏻\\n"
  },
  "ruleExplore": {
    "bookUrl": "$.detail_url\n@js:\nbid=result.replace(/\\/(.*)_c\\/$/, '$1');\njava.log(bid);\njava.put('bid', bid);\n'http://api.vomicmh.com/api/v1/detail/get-comic-detail-data?mid='+bid"
  },
  "ruleSearch": {
    "author": "@js:\"漫画\"",
    "bookList": "$.data.result[*]",
    "bookUrl": "$.detail_url\n@js:\nbid=result.replace(/\\/(.*)_c\\/$/, '$1');\njava.log(bid);\njava.put('bid', bid);\n'http://api.vomicmh.com/api/v1/detail/get-comic-detail-data?mid='+bid",
    "coverUrl": "$.cover_img_url",
    "kind": "$.status",
    "lastChapter": "$.latest_chapter.title",
    "name": "$.title",
    "wordCount": ""
  },
  "ruleToc": {
    "chapterList": "@js:\nvar bid=java.get('bid');\nvar url='http://api.vomicmh.com/api/v1/detail/get-comic-detail-chapter-data?mid='+bid;\nvar head = JSON.parse(java.get('head'));\n\nres=java.get(url,head).body();\nvar jsonR = JSON.parse(res).data;\nvar reversedList = jsonR.reverse();\nvar list = [];\nfor (var i = 0; i < reversedList.length; i++) {\n  var name = reversedList[i].title;\n  var link = 'http://www.vomicmh.com/#/page/' + bid + reversedList[i].chapter_url;\n  var link = String(link);\n  var link = link.replace(/\\/m_/, '/');\n  list.push({ text: name, href: link });\n}\nlist;",
    "chapterName": "text",
    "chapterUrl": "href##$##,{\"webView\": true}",
    "preUpdateJs": ""
  },
  "searchUrl": "http://api.vomicmh.com/api/v1/search/search-comic-data?title={{key}}&page={{page}}",
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