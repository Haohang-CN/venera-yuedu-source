class YueduConvertedSource extends ComicSource {
    name = "看漫画"
    key = "yuedu_0003_source_3"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.kanman.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceGroup": "漫画",
  "bookSourceName": "看漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.kanman.com",
  "customOrder": 4,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "@js:\nvar result = [];\nvar push = (title, url, size) => result.push({\n    title: title,\n    url: url,\n    style: {\n        layout_flexGrow: 1,\n        layout_flexBasisPercent: size\n    }\n});\n\npush(\"༺ˇ»`ʚ  分类  ɞ´«ˇ༻\", null, 1);\n\nconst cats = [\n    ['完结', 'comic_sort=wanjie'], ['连载', 'comic_sort=lianzai'], ['热血', 'comic_sort=rexue'],\n    ['恋爱', 'comic_sort=lianai'], ['玄幻', 'comic_sort=xuanhuan'], ['都市', 'comic_sort=dushi'],\n    ['霸总', 'comic_sort=bazong'], ['穿越', 'comic_sort=chuanyue'], ['搞笑', 'comic_sort=gaoxiao'],\n    ['冒险', 'comic_sort=maoxian'], ['古风', 'comic_sort=gufeng'], ['生活', 'comic_sort=shenghuo']\n];\n\ncats.forEach(c => push(c[0], '/api/getsortlist?' + c[1] + '&page={{page}}&size=20', 0.25));\n\nJSON.stringify(result);",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (X11; Linux x86_64; rv:149.0) Gecko/20100101 Firefox/149.0\"\n}",
  "lastUpdateTime": 1776286886453,
  "respondTime": 16587,
  "ruleBookInfo": {
    "author": "meta[property=\"og:novel:author\"]@content",
    "coverUrl": "meta[property=\"og:image\"]@content",
    "intro": "class.intro@text || class.j-desc@text || id.detail-desc@text",
    "kind": "meta[property=\"og:novel:category\"]@content",
    "lastChapter": "meta[property=\"og:novel:latest_chapter_name\"]@content",
    "name": "meta[property=\"og:novel:book_name\"]@content"
  },
  "ruleContent": {
    "content": "@js:\nvar res = \"\";\ntry {\n    var match = result.match(/window\\.comicInfo\\s*=\\s*(.*?)(?:,window\\.hideguide|;|<\\/script>)/);\n    if (match) {\n        var json = eval('(' + match[1] + ')');\n        var images = json.current_chapter.chapter_img_list;\n        var html = [];\n        for(var i=0; i<images.length; i++){\n            var imgUrl = String(images[i]).replace(/^\\/\\//, 'https://');\n            html.push('<img src=\"' + imgUrl + '\">');\n        }\n        res = html.join('\\n');\n    } else {\n        res = \"解析失败：未匹配到图片数据\";\n    }\n} catch(e) {\n    res = \"解析报错：\" + e.message;\n}\nres;"
  },
  "ruleExplore": {
    "author": "$.cartoon_author_list_name",
    "bookList": "$.data||$.data.data[*]||$.data[*]",
    "bookUrl": "https://www.kanman.com/{{$.comic_id}}/",
    "coverUrl": "https://image.yqmh.com/mh/{{$.comic_id}}.jpg",
    "intro": "$.cartoon_desc",
    "kind": "$.comic_type_name",
    "lastChapter": "$.last_chapter_name",
    "name": "$.comic_name"
  },
  "ruleSearch": {
    "author": "$.cartoon_author_list_name",
    "bookList": "$.data||$.data.data[*]||$.data[*]",
    "bookUrl": "https://www.kanman.com/{{$.comic_id}}/",
    "coverUrl": "https://image.yqmh.com/mh/{{$.comic_id}}.jpg",
    "intro": "$.cartoon_desc",
    "kind": "$.comic_type_name",
    "lastChapter": "$.last_chapter_name",
    "name": "$.comic_name"
  },
  "ruleToc": {
    "chapterList": "id.j_chapter_list@li",
    "chapterName": "class.name@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://www.kanman.com/api/getsortlist?search_key={{key}}&page=1&size=20",
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