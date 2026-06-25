class YueduSource0103 extends ComicSource {
    name = "\u591a\u591a\u6f2b\u753b\ud83c\udd70"
    key = "yuedu_0103"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/yuedu_0103.js"

    sourceUrl = "https://api.duoduomh.1a3.net"
    sourceGroup = "\u6f2b\u753b"
    sourceRemark = ""

    explore = [
        {
            title: "源信息",
            type: "multiPartPage",
            load: async (page) => {
                return [
                    {
                        title: "由阅读书源转换",
                        comics: [
                            new Comic({
                                id: "source_info",
                                title: this.name,
                                subTitle: this.sourceUrl || "无源地址",
                                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                                tags: ["阅读书源", "自动转换"],
                                description: "这是从阅读/Legado 书源 JSON 转换来的 Venera 占位源。"
                            })
                        ]
                    }
                ]
            }
        }
    ]

    search = {
        load: async (keyword, options, page) => {
            return {
                comics: [
                    new Comic({
                        id: "source_info",
                        title: this.name,
                        subTitle: "关键词: " + keyword,
                        cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                        tags: ["阅读书源", "待适配"],
                        description: "此源已成功导入 Venera，但阅读书源规则不能直接等于 Venera 漫画源规则，需要单独适配搜索、详情、章节和图片。"
                    })
                ],
                maxPage: 1
            }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            return new ComicDetails({
                title: this.name,
                subTitle: this.sourceUrl || "阅读书源",
                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                description:
                    "源名称: " + this.name + "\n" +
                    "源地址: " + this.sourceUrl + "\n" +
                    "分组: " + this.sourceGroup + "\n" +
                    "备注: " + this.sourceRemark + "\n\n" +
                    "说明: 这是阅读/Legado 书源转换成的 Venera 占位源。可以安装和显示，但要真正阅读内容，需要把原书源规则手动改写成 Venera JS 漫画源逻辑。",
                tags: {
                    "来源": ["阅读书源"],
                    "状态": ["待适配"]
                },
                chapters: {
                    "源信息": "source_info"
                },
                url: this.sourceUrl || "https://example.com"
            })
        },

        loadEp: async (comicId, epId) => {
            return {
                images: [
                    "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png"
                ]
            }
        }
    }
}
