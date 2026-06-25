class YueduConvertedSource extends ComicSource {
    name = "🎨 686漫画✈️"
    key = "yuedu_0244_s_686"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://www.686mh.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 下载链接为空\n\nHaxc",
  "bookSourceGroup": "漫画",
  "bookSourceName": "🎨 686漫画✈️",
  "bookSourceType": 3,
  "bookSourceUrl": "https://www.686mh.com",
  "bookUrlPattern": "",
  "customOrder": 5586,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "全部::/booklist/?page={{page}}\n校园::/booklist?page={{page}}&tag=校园\n搞笑::/booklist?page={{page}}&tag=搞笑\n后宫::/booklist?page={{page}}&tag=后宫\n生活::/booklist?page={{page}}&tag=生活\n恋爱::/booklist?page={{page}}&tag=恋爱\n霸总::/booklist?page={{page}}&tag=霸总\n玄幻::/booklist?page={{page}}&tag=玄幻\n热血::/booklist?page={{page}}&tag=热血\n科幻::/booklist?page={{page}}&tag=科幻\n竞技::/booklist?page={{page}}&tag=竞技\n灵异::/booklist?page={{page}}&tag=灵异\n冒险::/booklist?page={{page}}&tag=冒险\n古风::/booklist?page={{page}}&tag=古风\n同人::/booklist?page={{page}}&tag=同人\n真人::/booklist?page={{page}}&tag=真人\n悬疑::/booklist?page={{page}}&tag=悬疑\n架空::/booklist?page={{page}}&tag=架空\n穿越::/booklist?page={{page}}&tag=穿越\n动作::/booklist?page={{page}}&tag=动作\n耽美::/booklist?page={{page}}&tag=耽美\n战争::/booklist?page={{page}}&tag=战争\n恐怖::/booklist?page={{page}}&tag=恐怖\n励志::/booklist?page={{page}}&tag=励志\n修真::/booklist?page={{page}}&tag=修真\n百合::/booklist?page={{page}}&tag=百合\n官商::/booklist?page={{page}}&tag=官商\n重生::/booklist?page={{page}}&tag=重生\n女主::/booklist?page={{page}}&tag=女主",
  "header": "{\n  \"User-Agent\": \"Mobile\"\n}",
  "lastUpdateTime": 1630754485158,
  "loginUrl": "",
  "respondTime": 90732,
  "ruleBookInfo": {
    "author": "class.author@text",
    "coverUrl": "",
    "intro": "class.content@text",
    "kind": ".tags-txt@text",
    "lastChapter": ".chapterlist@tag.li.-1@text",
    "name": "class.name@text"
  },
  "ruleContent": {
    "content": ".comiclist@img@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "",
    "bookList": "class.comic-sort@tag.li||class.manga-list-2@tag.li||class.rank-list@tag.a",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@data-src",
    "intro": ".chapter@text",
    "lastChapter": "class.manga-list-2-tip@text##已更新||tag.span.-1@text",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": ".chapterlist@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://www.686mh.com/search?keyword={{key}}&page={{page}}",
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