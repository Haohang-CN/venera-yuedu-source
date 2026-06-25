class VeneraTest extends ComicSource {
    name = "Venera测试源"
    key = "venera_test"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://cdn.jsdelivr.net/gh/Haohang-CN/venera-yuedu-source@main/public/venera_test.js"

    explore = [
        {
            title: "测试",
            type: "singlePageWithMultiPart",
            load: async () => {
                return {
                    "测试分区": [
                        {
                            id: "test_comic",
                            title: "测试漫画",
                            subTitle: "格式测试",
                            cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                            tags: ["测试"]
                        }
                    ]
                }
            }
        }
    ]

    search = {
        load: async (keyword, options, page) => {
            return {
                comics: [
                    {
                        id: "test_comic",
                        title: "测试漫画",
                        subTitle: "关键词: " + keyword,
                        cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                        tags: ["测试"]
                    }
                ],
                maxPage: 1
            }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            return {
                title: "测试漫画",
                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                description: "如果能看到这里，说明 Venera 源格式已经正确。",
                tags: {
                    "类型": ["测试"],
                    "来源": ["本地转换"]
                },
                chapters: {
                    "第一话": "ep1"
                }
            }
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
