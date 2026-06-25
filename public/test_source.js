class TestSource extends ComicSource {
    name = "测试源"
    key = "test_source"
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = ""

    search = {
        load: async (keyword, options, page) => {
            return {
                comics: [
                    {
                        id: "test_book",
                        title: "测试漫画",
                        subTitle: "如果你能看到这个，说明源格式没问题",
                        cover: ""
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
                cover: "",
                description: "这是一个测试源，只用于确认 Venera 能识别 JS 源。",
                tags: {
                    "来源": ["本地测试"]
                },
                chapters: {
                    "第一话": "ep1"
                }
            }
        },

        loadEp: async (comicId, epId) => {
            return {
                images: []
            }
        }
    }
}
