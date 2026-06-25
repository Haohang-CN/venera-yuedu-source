class YueduConvertedSource extends ComicSource {
    name = "友爱漫画"
    key = "yuedu_0233_source_233"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "UAA·漫画"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: SSL handshake aborted: ssl=0x7fff4bebd288: I/O error during system call, Connection reset by peer",
  "bookSourceGroup": "漫画",
  "bookSourceName": "友爱漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "UAA·漫画",
  "customOrder": 4804,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "@js:\nlista=JSON.parse(java.ajax('https://api.uaa.com/comic/app/comic/categories?type=1')).model;\nprea='';\nlena=lista.length;\nfor(i=0;i<lena;i++){\nprea+=\"{'title':'\"+lista[i].name+\"','url':'https://api.uaa.com/comic/app/comic/search?category=\"+lista[i].name+\"&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.25}},\"\n}\nlistb=JSON.parse(java.ajax('https://api.uaa.com/comic/app/comic/categories?type=2')).model;\npreb='';\nlenb=listb.length;\nfor(i=0;i<lenb;i++){\npreb+=\"{'title':'\"+listb[i].name+\"','url':'https://api.uaa.com/comic/app/comic/search?category=\"+listb[i].name+\"&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},\"\n}\nlistc=JSON.parse(java.ajax('https://api.uaa.com/comic/app/comic/tags?type=1')).model;\nprec='';\nlenc=listc.length;\nfor(i=0;i<lenc;i++){\nprec+=\"{'title':'\"+listc[i].name+\"','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&tag=\"+listc[i].name+\"'},\"\n}\nlistd=JSON.parse(java.ajax('https://api.uaa.com/comic/app/comic/tags?type=2')).model;\npred='';\nlend=listd.length;\nfor(i=0;i<lend;i++){\npred+=\"{'title':'\"+listd[i].name+\"','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&tag=\"+listd[i].name+\"'},\"\n}\nresult=\"[{'title':'分类 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'日本H漫','url':'https://api.uaa.com/comic/app/comic/search?origin=1&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},\"+prea+prec+\"{'title':'韩国H漫','url':'https://api.uaa.com/comic/app/comic/search?origin=2&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},\"+preb+pred+\"{'title':'色彩 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'彩色','url':'https://api.uaa.com/comic/app/comic/search?color=2&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'黑白','url':'https://api.uaa.com/comic/app/comic/search?color=1&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'篇幅 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'单话','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&space=1','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'多话','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&space=3','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'取向 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'直男','url':'https://api.uaa.com/comic/app/comic/search?orientation=1&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'女主','url':'https://api.uaa.com/comic/app/comic/search?orientation=2&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'男男','url':'https://api.uaa.com/comic/app/comic/search?orientation=3&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'女女','url':'https://api.uaa.com/comic/app/comic/search?orientation=4&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'来源 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'原创首发','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&source=1','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'会员上传','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25&source=2','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'状态 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'已完结','url':'https://api.uaa.com/comic/app/comic/search?finished=1&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'连载中','url':'https://api.uaa.com/comic/app/comic/search?finished=0&page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.4}},{'title':'时段 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'今日','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&period=1&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.25}},{'title':'本周','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&period=2&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.25}},{'title':'本月','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&period=3&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.25}},{'title':'评分 • 全部','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:1}},{'title':'优秀','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&score=4&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'良好','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&score=3&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'普通','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&score=2&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}},{'title':'劣质','url':'https://api.uaa.com/comic/app/comic/search?page={{page}}&score=1&size=25','style':{layout_flexGrow:1,layout_flexBasisPercent:0.2}}]\"",
  "header": "{\"cookie\":\"_ga=GA1.1.316026359.1685377249; _ga_4BC3P9JVX3=GS1.1.1685401323.2.1.1685401938.60.0.0\",\n\"token\":\"eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODYwNzIxNzA0MDMxMzU4OTc2LCJ0eXBlIjoiY3VzdG9tZXIiLCJ0aW1lc3RhbXAiOjE2ODUzNzg1MTE1NzQsImV4cCI6MTY4NTk4MzMxMX0.-FX7rOJP7I10ApjeM5NVaGj57aeYnkVyopniC7U_Dv8\"}",
  "lastUpdateTime": 1722688266766,
  "respondTime": 300796,
  "ruleBookInfo": {
    "author": "authors",
    "coverUrl": "coverUrl",
    "init": "model",
    "intro": "tags##^|,##&nbsp;",
    "kind": "categories&&updateTimeFormat",
    "lastChapter": "latestUpdate",
    "name": "title",
    "tocUrl": "/comic/app/comic/catalog/{{$.id}}",
    "wordCount": "@js:{{$.finished}}=='0'?'连载':'完结';"
  },
  "ruleContent": {
    "content": "model.images\n@js:\nresult='<img\\ssrc=\"'+String(result).replace(/\\n/g,'\">\\n<img\\ssrc=\"')+'\">'",
    "imageStyle": ""
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "authors",
    "bookList": ".[?(@.title)]",
    "bookUrl": "/comic/app/comic/intro?id={{$.id}}",
    "checkKeyWord": "",
    "coverUrl": "coverUrl",
    "intro": "tags",
    "kind": "categories&&updateTimeFormat",
    "lastChapter": "latestUpdate",
    "name": "title",
    "wordCount": "@js:{{$.finished}}=='0'?'连载':'完结';"
  },
  "ruleToc": {
    "chapterList": ".[?(@.title)]",
    "chapterName": "title",
    "chapterUrl": "/comic/app/comic/chapter?id={{$.id}}&viewId=16755023882598961",
    "isVip": "",
    "isVolume": "",
    "preUpdateJs": "",
    "updateTime": "onlineTime##T.*"
  },
  "searchUrl": "https://api.uaa.com/comic/app/comic/search?keyword={{key}}&page={{page}}&size=10",
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