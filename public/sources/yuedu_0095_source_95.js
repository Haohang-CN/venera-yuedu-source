class YueduConvertedSource extends ComicSource {
    name = "武芊漫画（优+）"
    key = "yuedu_0095_source_95"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://comic.mkzcdn.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "武芊漫画（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://comic.mkzcdn.com",
  "customOrder": 2120,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "@js:\nlet url = 'https://comic.mkzcdn.com/search/filter/?audience=0&order=sort&page_num={{page}}&page_size=18&theme_id=class'\nlet class_name=\"全部&修真&霸总&恋爱&校园&冒险&搞笑&生活&热血&架空&后宫&玄幻&悬疑&恐怖&灵异&动作&科幻&战争&古风&穿越&竞技&励志&同人&真人\".split(\"&\");\nlet class_url=\"0&2&1&3&4&5&6&7&8&9&10&12&13&14&15&16&17&18&19&20&21&23&24&26\".split(\"&\")\n\nlet sort_name='推荐&最热&最新'.split(\"&\")\nlet sort_url='3&1&2'.split(\"&\")\nlet model = (title,url,num)=>{\n    return {title:title,url:url,style:{layout_flexGroup:1,layout_flexBasisPercent:num}}\n}\n\ntop=[{\"title\":\"热门人气\",\"url\":\"https://comic.mkzcdn.com/search/filter/?order=1&page_num={{page}}&page_size=12\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}},\n{\"title\":\"更新时间\",\"url\":\"https://comic.mkzcdn.com/search/filter/?order=2&page_num={{page}}&page_size=12\",\"style\":{\"layout_flexBasisPercent\":0.4,\"layout_flexGrow\":1}}]\n\n\n\nlet list = []\nlist=list.concat(top)\n\nfor (let i = 0; i < sort_name.length; i++) {\n    list.push(model(sort_name[i],\"\",1))\n    for (let j = 0; j < class_name.length; j++) {\n        let t = url.replace(\"sort\",`${sort_url[i]}`).replace(\"class\",`${class_url[j]}`)\n        list.push(model(class_name[j],t,0.15))\n    }\n}\nJSON.stringify(list)",
  "lastUpdateTime": 1761880408491,
  "respondTime": 3224,
  "ruleBookInfo": {
    "intro": "$..content##^##<br/>",
    "kind": "$..theme_id\n@js:\nlet class_name=\"全部&修真&霸总&恋爱&校园&冒险&搞笑&生活&热血&架空&后宫&玄幻&悬疑&恐怖&灵异&动作&科幻&战争&古风&穿越&竞技&励志&同人&真人\".split(\"&\");\nlet class_url=\"0&2&1&3&4&5&6&7&8&9&10&12&13&14&15&16&17&18&19&20&21&23&24&26\".split(\"&\")\n\nlet res=Array.from(result)[0].split(\",\")\n\nfor(var i=0;i<class_url.length;i++){\n\tfor(var j=0;j<res.length;j++){\n\t\tif(class_url[i]==res[j]){\n\t\t\t  res[j]=class_name[i]\n\t\t\t}\n}\n}\n\n\nres.join(\",\")",
    "name": "@put:{comic_id:$..comic_id}",
    "tocUrl": "https://comic.mkzcdn.com/chapter/v1/?comic_id={{$..comic_id}}"
  },
  "ruleContent": {
    "content": "$.data[*].image\n@js:\nresult.split(\"\\n\").map(x=>'<img src=\"'+x+'\">').join(\"\\n\")"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.author_title",
    "bookList": "$..list[*]",
    "bookUrl": "https://comic.mkzcdn.com/comic/info/?comic_id={{$.comic_id}}",
    "coverUrl": "$.cover",
    "intro": "$.feature",
    "lastChapter": "$.chapter_title",
    "name": "$.title"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.title",
    "chapterUrl": "https://comic.mkzcdn.com/chapter/content/?chapter_id={{$.chapter_id}}&comic_id=@get:{comic_id}",
    "updateTime": "$..start_time\n@js:\"🕗 \"+java.timeFormat(result*1000)+\"    \"+(new Date(result*1000)>new Date()?\"❗️未发布\":\"\")"
  },
  "searchUrl": "https://comic.mkzcdn.com/search/keyword/?keyword={{key}}&page_num={{page}}&page_size=20",
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