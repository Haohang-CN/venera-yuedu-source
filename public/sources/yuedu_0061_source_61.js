class YueduConvertedSource extends ComicSource {
    name = "漫画戏说[修|仅发现]"
    key = "yuedu_0061_source_61"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = "https://comic.acgn.cc仅发现"

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {
  "bookSourceComment": "// Error: 下载链接为空",
  "bookSourceGroup": "漫画",
  "bookSourceName": "漫画戏说[修|仅发现]",
  "bookSourceType": 3,
  "bookSourceUrl": "https://comic.acgn.cc仅发现",
  "bookUrlPattern": "",
  "customOrder": 1348,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "exploreUrl": "冒險::https://comic.acgn.cc/cate-1.htm?page={{page}}\n搞笑::https://comic.acgn.cc/cate-2.htm?page={{page}}\n格鬥::https://comic.acgn.cc/cate-3.htm?page={{page}}\n科幻::https://comic.acgn.cc/cate-4.htm?page={{page}}\n愛情::https://comic.acgn.cc/cate-5.htm?page={{page}}\n偵探::https://comic.acgn.cc/cate-6.htm?page={{page}}\n競技::https://comic.acgn.cc/cate-7.htm?page={{page}}\n魔法::https://comic.acgn.cc/cate-8.htm?page={{page}}\n東方神鬼::https://comic.acgn.cc/cate-9.htm?page={{page}}\n校園::https://comic.acgn.cc/cate-10.htm?page={{page}}\n恐怖::https://comic.acgn.cc/cate-11.htm?page={{page}}\n其他::https://comic.acgn.cc/cate-12.htm?page={{page}}\n四格::https://comic.acgn.cc/cate-13.htm?page={{page}}\n生活親情::https://comic.acgn.cc/cate-14.htm?page={{page}}\n百合::https://comic.acgn.cc/cate-15.htm?page={{page}}\n偽娘::https://comic.acgn.cc/cate-16.htm?page={{page}}\n懸疑::https://comic.acgn.cc/cate-17.htm?page={{page}}\n耽美::https://comic.acgn.cc/cate-18.htm?page={{page}}\n熱血::https://comic.acgn.cc/cate-19.htm?page={{page}}\n後宮::https://comic.acgn.cc/cate-20.htm?page={{page}}\n歷史::https://comic.acgn.cc/cate-21.htm?page={{page}}\n戰爭::https://comic.acgn.cc/cate-22.htm?page={{page}}\n萌系::https://comic.acgn.cc/cate-23.htm?page={{page}}\n宅男腐女::https://comic.acgn.cc/cate-24.htm?page={{page}}\n治癒::https://comic.acgn.cc/cate-25.htm?page={{page}}\n勵志::https://comic.acgn.cc/cate-26.htm?page={{page}}\n武俠::https://comic.acgn.cc/cate-27.htm?page={{page}}\n機戰::https://comic.acgn.cc/cate-28.htm?page={{page}}\n音樂舞蹈::https://comic.acgn.cc/cate-29.htm?page={{page}}\n美食::https://comic.acgn.cc/cate-30.htm?page={{page}}\n職場::https://comic.acgn.cc/cate-31.htm?page={{page}}\n西方魔幻::https://comic.acgn.cc/cate-32.htm?page={{page}}\n高清單行本::https://comic.acgn.cc/cate-33.htm?page={{page}}\nA::https://comic.acgn.cc/pinyin-a.htm?page={{page}}\nB::https://comic.acgn.cc/pinyin-b.htm?page={{page}}\nC::https://comic.acgn.cc/pinyin-c.htm?page={{page}}\nD::https://comic.acgn.cc/pinyin-d.htm?page={{page}}\nE::https://comic.acgn.cc/pinyin-e.htm?page={{page}}\nF::https://comic.acgn.cc/pinyin-f.htm?page={{page}}\nG::https://comic.acgn.cc/pinyin-g.htm?page={{page}}\nH::https://comic.acgn.cc/pinyin-h.htm?page={{page}}\nI::https://comic.acgn.cc/pinyin-i.htm?page={{page}}\nJ::https://comic.acgn.cc/pinyin-j.htm?page={{page}}\nK::https://comic.acgn.cc/pinyin-k.htm?page={{page}}\nL::https://comic.acgn.cc/pinyin-l.htm?page={{page}}\nM::https://comic.acgn.cc/pinyin-m.htm?page={{page}}\nN::https://comic.acgn.cc/pinyin-n.htm?page={{page}}\nO::https://comic.acgn.cc/pinyin-o.htm?page={{page}}\nP::https://comic.acgn.cc/pinyin-p.htm?page={{page}}\nQ::https://comic.acgn.cc/pinyin-q.htm?page={{page}}\nR::https://comic.acgn.cc/pinyin-r.htm?page={{page}}\nS::https://comic.acgn.cc/pinyin-s.htm?page={{page}}\nT::https://comic.acgn.cc/pinyin-t.htm?page={{page}}\nU::https://comic.acgn.cc/pinyin-u.htm?page={{page}}\nV::https://comic.acgn.cc/pinyin-v.htm?page={{page}}\nW::https://comic.acgn.cc/pinyin-w.htm?page={{page}}\nX::https://comic.acgn.cc/pinyin-x.htm?page={{page}}\nY::https://comic.acgn.cc/pinyin-y.htm?page={{page}}\nZ::https://comic.acgn.cc/pinyin-z.htm?page={{page}}\n0-9::https://comic.acgn.cc/pinyin-0-9.htm?page={{page}}\nnull",
  "lastUpdateTime": 1700987891919,
  "loginUrl": "",
  "respondTime": 6572,
  "ruleBookInfo": {
    "author": "class.mss.0@tag.a@text",
    "intro": "class.gameshows@tag.dd.1@text##\\s",
    "kind": "class.mss.3@tag.a@text",
    "lastChapter": "class.mss.4@tag.a@text",
    "name": "tag.h3@text"
  },
  "ruleContent": {
    "content": "id.pic_list@class.pic@html",
    "sourceRegex": ".*\\.(jpg|png).*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.display@tag.li",
    "bookUrl": "tag.a.1@href",
    "coverUrl": "tag.img@src",
    "name": "tag.a.1@text"
  },
  "ruleToc": {
    "chapterList": "-id.comic_chapter@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://comic.acgn.cc/searchcse?cx=008124722090293425135:i6inzsizmqg&cof=FORID:11&ie=UTF-8&q={{key}}&sa=搜尋",
  "weight": 59
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