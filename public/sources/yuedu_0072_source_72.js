class YueduConvertedSource extends ComicSource {
    name = "哔咔漫画"
    key = "yuedu_0072_source_72"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "http://m.bikabika.com"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "",
  "bookSourceGroup": "漫画",
  "bookSourceName": "哔咔漫画",
  "bookSourceType": 0,
  "bookSourceUrl": "http://m.bikabika.com",
  "bookUrlPattern": "",
  "customOrder": 1771,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "exploreUrl": "完结::/wanjie/{{page}}.html\n连载中::/lianzai/{{page}}.html\n日韩::/rihan/{{page}}.html\n内地::/neidi/{{page}}.html\n港台::/gangntai/{{page}}.html\n欧美::/oumei/{{page}}.html\n其他::/qita/{{page}}.html\n少年::/shaonianqu/{{page}}.html\n少女::/shaonvqu/{{page}}.html\n青年::/qingnian/{{page}}.html\n少儿::/shaoer/{{page}}.html\n热血::/rexue/{{page}}.html\n格斗::/gedou/{{page}}.html\n科幻::/kehuan/{{page}}.html\n竞技::/jingji/{{page}}.html\n搞笑::/gaoxiao/{{page}}.html\n推理::/tuili/{{page}}.html\n恐怖::/kongbu/{{page}}.html\n耽美::/danmei/{{page}}.html\n少女::/shaonv/{{page}}.html\n恋爱::/lianai/{{page}}.html\n生活::/shenghuo/{{page}}.html\n战争::/zhanzheng/{{page}}.html\n故事::/gushi/{{page}}.html\n冒险::/maoxian/{{page}}.html\n魔幻::/mohuan/{{page}}.html\n玄幻::/xuanhuan/{{page}}.html\n校园::/xiaoyuan/{{page}}.html\n悬疑::/xuanyi/{{page}}.html\n萌系::/mengxi/{{page}}.html\n穿越::/chuanyue/{{page}}.html\n后宫::/hougong/{{page}}.html\n都市::/dushi/{{page}}.html\n武侠::/wuxia/{{page}}.html\n历史::/lishi/{{page}}.html\n同人::/tongren/{{page}}.html\n励志::/lizhi/{{page}}.html\n百合::/baihe/{{page}}.html\n治愈::/zhiyu/{{page}}.html\n机甲::/jijia/{{page}}.html\n纯爱::/chunai/{{page}}.html\n美食::/meishi/{{page}}.html\n血腥::/xuexing/{{page}}.html\n僵尸::/jiangshi/{{page}}.html\n恶搞::/egao/{{page}}.html\n虐心::/nuexin/{{page}}.html\n动作::/dongzuo/{{page}}.html\n惊险::/jingxian/{{page}}.html\n唯美::/weimei/{{page}}.html\n震撼::/zhenhan/{{page}}.html\n复仇::/fuchou/{{page}}.html\n侦探::/zhentan/{{page}}.html\n脑洞::/naodong/{{page}}.html\n奇幻::/qihuan/{{page}}.html\n宫斗::/gongdou/{{page}}.html\n爆笑::/baoxiao/{{page}}.html\n运动::/yundong/{{page}}.html\n青春::/qingchun/{{page}}.html\n灵异::/lingyi/{{page}}.html\n古风::/gufeng/{{page}}.html\n权谋::/quanmou/{{page}}.html\n节操::/jiecao/{{page}}.html\n明星::/mingxing/{{page}}.html\n暗黑::/anhei/{{page}}.html\n社会::/shehui/{{page}}.html\n浪漫::/langman/{{page}}.html\n栏目::/lanmu/{{page}}.html\n仙侠::/xianxia/{{page}}.html",
  "header": "{\n  \"User-Agent\": \"Mobile\"\n}",
  "lastUpdateTime": 1605838937428,
  "loginUrl": "",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.sub_r@tag.p.2@text##作者：",
    "coverUrl": "",
    "intro": "class.detailContent@p@text",
    "kind": "class.sub_r@tag.p.3@text##标签：",
    "lastChapter": "class.c1@text##状态：",
    "name": "class.h1@text",
    "wordCount": ""
  },
  "ruleContent": {
    "content": "@js:\nvar html=result,\nheader={\"Referer\":baseUrl};\nheaders={\"headers\":JSON.stringify(header)};\n\n(function getImgList() {\r\n    eval(html.match(/(var qTcms_Cur=[\\S\\s]+var qTcms_S_show_1=.*?;)/)[1]);\r\n    var list = java.base64Decode(qTcms_S_m_murl_e).split(\"\\\\$qingtiandy\\\\$\");\r\n    var piclist = new Array();\r\n    for (var i = 0; i < list.length; i++) {\n        var v = list[i];\r\n        var s = v;\r\n        if (v.substring(0, 1) == \"/\") {\r\n            s = qTcms_m_weburl + s;\r\n        } else {\r\n            if (qTcms_Pic_m_if != \"2\") {\r\n                v = v.replaceAll(\"\\\\?\", \"a1a1\");\r\n                v = v.replaceAll(\"&\", \"b1b1\");\r\n                v = v.replaceAll(\"%\", \"c1c1\");\r\n                var m_httpurl = \"\";\r\n                if (typeof(qTcms_S_m_mhttpurl) != \"undefined\") m_httpurl = java.base64Decode(qTcms_S_m_mhttpurl);\r\n            }\r\n        }\r\n        piclist[i] =s;\r\n    }\r\n    return piclist;\r\n}()).map(uri=>\n'<img src=\"'+uri+','+JSON.stringify(headers)+'\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleSearch": {
    "author": "",
    "bookList": "id.listbody@tag.li",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@src",
    "intro": "",
    "kind": "",
    "lastChapter": "class.info@text",
    "name": "class.txtA@text"
  },
  "ruleToc": {
    "chapterList": "-id.chapterList_ul_1@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "http://m.bikabika.com/statics/search.aspx?key={{key}}&page={{page}}",
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