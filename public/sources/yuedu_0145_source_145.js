class YueduConvertedSource extends ComicSource {
    name = "动漫之家"
    key = "yuedu_0145_source_145"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://api.dmzj.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "动漫之家",
  "bookSourceType": 2,
  "bookSourceUrl": "https://api.dmzj.com",
  "bookUrlPattern": "",
  "customOrder": 2835,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "人气排行日榜::https://api.m.dmzj.com/rank/0-0-0-{{page-1}}.json\n人气排行周榜::https://api.m.dmzj.com/rank/0-0-1-{{page-1}}.json\n人气排行月榜::https://api.m.dmzj.com/rank/0-0-2-{{page-1}}.json\n人气排行总榜::https://api.m.dmzj.com/rank/0-0-3-{{page-1}}.json\n吐槽排行日榜::https://api.m.dmzj.com/rank/1-0-0-{{page-1}}.json\n吐槽排行周榜::https://api.m.dmzj.com/rank/1-0-1-{{page-1}}.json\n吐槽排行月榜::https://api.m.dmzj.com/rank/1-0-2-{{page-1}}.json\n吐槽排行总榜::https://api.m.dmzj.com/rank/1-0-3-{{page-1}}.json\n订阅排行日榜::https://api.m.dmzj.com/rank/2-0-0-{{page-1}}.json\n订阅排行周榜::https://api.m.dmzj.com/rank/2-0-1-{{page-1}}.json\n订阅排行月榜::https://api.m.dmzj.com/rank/2-0-2-{{page-1}}.json\n订阅排行总榜::https://api.m.dmzj.com/rank/2-0-3-{{page-1}}.json\n最近更新::https://api.m.dmzj.com/recommend/latest/{{page-1}}.json\n人气::https://api.m.dmzj.com/classify/0-0-0-0-0-{{page-1}}.json\n更新::https://api.m.dmzj.com/classify/0-0-0-0-1-{{page-1}}.json\n连载::https://api.m.dmzj.com/classify/0-0-1-0-1-{{page-1}}.json\n完结::https://api.m.dmzj.com/classify/0-0-2-0-1-{{page-1}}.json\n少年::https://api.m.dmzj.com/classify/0-1-0-0-1-{{page-1}}.json\n少女::https://api.m.dmzj.com/classify/0-2-0-0-1-{{page-1}}.json\n青年::https://api.m.dmzj.com/classify/0-3-0-0-1-{{page-1}}.json\n日本::https://api.m.dmzj.com/classify/0-0-0-1-1-{{page-1}}.json\n内地::https://api.m.dmzj.com/classify/0-0-0-2-1-{{page-1}}.json\n欧美::https://api.m.dmzj.com/classify/0-0-0-3-1-{{page-1}}.json\n港台::https://api.m.dmzj.com/classify/0-0-0-4-1-{{page-1}}.json\n韩国::https://api.m.dmzj.com/classify/0-0-0-5-1-{{page-1}}.json\n其他::https://api.m.dmzj.com/classify/0-0-0-6-1-{{page-1}}.json\n冒险::https://api.m.dmzj.com/classify/1-0-0-0-1-{{page-1}}.json\n欢乐向::https://api.m.dmzj.com/classify/2-0-0-0-1-{{page-1}}.json\n格斗::https://api.m.dmzj.com/classify/3-0-0-0-1-{{page-1}}.json\n科幻::https://api.m.dmzj.com/classify/4-0-0-0-1-{{page-1}}.json\n爱情::https://api.m.dmzj.com/classify/5-0-0-0-1-{{page-1}}.json\n竞技::https://api.m.dmzj.com/classify/6-0-0-0-1-{{page-1}}.json\n魔法::https://api.m.dmzj.com/classify/7-0-0-0-1-{{page-1}}.json\n校园::https://api.m.dmzj.com/classify/8-0-0-0-1-{{page-1}}.json\n悬疑::https://api.m.dmzj.com/classify/9-0-0-0-1-{{page-1}}.json\n恐怖::https://api.m.dmzj.com/classify/10-0-0-0-1-{{page-1}}.json\n生活亲情::https://api.m.dmzj.com/classify/11-0-0-0-1-{{page-1}}.json\n百合::https://api.m.dmzj.com/classify/12-0-0-0-1-{{page-1}}.json\n伪娘::https://api.m.dmzj.com/classify/13-0-0-0-1-{{page-1}}.json\n耽美::https://api.m.dmzj.com/classify/14-0-0-0-1-{{page-1}}.json\n后宫::https://api.m.dmzj.com/classify/15-0-0-0-1-{{page-1}}.json\n萌系::https://api.m.dmzj.com/classify/16-0-0-0-1-{{page-1}}.json\n治愈::https://api.m.dmzj.com/classify/17-0-0-0-1-{{page-1}}.json\n武侠::https://api.m.dmzj.com/classify/18-0-0-0-1-{{page-1}}.json\n职场::https://api.m.dmzj.com/classify/19-0-0-0-1-{{page-1}}.json\n奇幻::https://api.m.dmzj.com/classify/20-0-0-0-1-{{page-1}}.json\n节操::https://api.m.dmzj.com/classify/21-0-0-0-1-{{page-1}}.json\n轻小说::https://api.m.dmzj.com/classify/22-0-0-0-1-{{page-1}}.json\n搞笑::https://api.m.dmzj.com/classify/23-0-0-0-1-{{page-1}}.json",
  "lastUpdateTime": 1734946088461,
  "loginUrl": "",
  "respondTime": 1224,
  "ruleBookInfo": {
    "author": "$.comic.authors",
    "coverUrl": "",
    "init": "",
    "intro": "$.comic.description",
    "kind": "$.comic.types&&$.comic.status##\\/",
    "lastChapter": "$.comic.last_update_chapter_name",
    "name": "$.comic.name"
  },
  "ruleContent": {
    "content": "<js>\nvar data = result.match(/\"page_url\":(\\[.*?\\])/)[1];\ndata\n</js>\n$.[*]@js:\nheaders={\"headers\":{\"Referer\":baseUrl}}\n;\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "bookList": ""
  },
  "ruleSearch": {
    "author": "$.authors",
    "bookList": "$.[*]",
    "bookUrl": "https://api.m.dmzj.com/info/{$.comic_py}.html",
    "coverUrl": "$.cover@js:\nheaders={\"headers\":{\"Referer\":baseUrl}}\n;result.indexOf(\"http\")==0?result:\"http://images.dmzj.com/\"+result+','+JSON.stringify(headers)",
    "intro": "",
    "kind": "$.types&&$.status",
    "lastChapter": "$.last_update_chapter_name",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": "-<js>\njava.getString(\"$.chapter_json\");\n</js>\n$.[*]data[*]",
    "chapterName": "$.chapter_name",
    "chapterUrl": "https://api.m.dmzj.com/comic/chapter/{$.comic_id}/{$.id}.html"
  },
  "searchUrl": "https://api.m.dmzj.com/search/{{key}}",
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