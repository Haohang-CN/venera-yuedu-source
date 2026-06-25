class VeneraTest extends ComicSource {
    name = "Venera Test"
    key = "venera_test"
    version = "1.0.1"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/venera_test.js"

    explore = [
        {
            title: "Test",
            type: "multiPartPage",
            load: async (page) => {
                return [
                    {
                        title: "Test",
                        comics: [
                            new Comic({
                                id: "test_comic",
                                title: "Test Comic",
                                subTitle: "Source format test",
                                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                                tags: ["test"],
                                description: "If this source can be installed, the source format is correct."
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
                        id: "test_comic",
                        title: "Test Comic",
                        subTitle: "keyword: " + keyword,
                        cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                        tags: ["test"],
                        description: "Search test result"
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
                title: "Test Comic",
                subTitle: "Venera source format test",
                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                description: "If you can open this page, the JS source is loaded correctly.",
                tags: {
                    "type": ["test"]
                },
                chapters: {
                    "ep1": "Chapter 1"
                },
                url: "https://example.com"
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
