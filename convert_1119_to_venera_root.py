import json
import re
import urllib.request
from pathlib import Path

# 你的阅读书源 JSON
SOURCE_JSON_URL = "https://www.yckceo.com/yuedu/shuyuans/json/id/1119.json"

# 你的 GitHub 仓库信息
GITHUB_USER = "Haohang-CN"
GITHUB_REPO = "venera-yuedu-source"
BRANCH = "main"

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")

# 生成的 JS 源文件使用 raw 地址
RAW_BASE = f"https://raw.githubusercontent.com/{GITHUB_USER}/{GITHUB_REPO}/{BRANCH}"

# 也可以改成 jsDelivr，国内可能更快：
# RAW_BASE = f"https://cdn.jsdelivr.net/gh/{GITHUB_USER}/{GITHUB_REPO}@{BRANCH}"


def download_json(url: str):
    print("正在下载:", url)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        raw = resp.read()

    text = raw.decode("utf-8-sig", errors="replace")
    return json.loads(text)


def pick_sources(data):
    if isinstance(data, list):
        return data

    if isinstance(data, dict):
        for key in ["data", "sources", "source", "list", "items"]:
            value = data.get(key)
            if isinstance(value, list):
                return value
            if isinstance(value, dict):
                return list(value.values())

    raise RuntimeError("无法识别 1119.json 的结构")


def safe_key(index: int, name: str):
    # Venera 的 key 尽量只用英文数字下划线
    return f"yuedu_{index:04d}"


def safe_class_name(index: int):
    return f"YueduSource{index:04d}"


def js_string(value):
    # 统一转义，避免中文编码导致 invalid content
    return json.dumps(str(value or ""), ensure_ascii=True)


def get_field(src, *names):
    for name in names:
        value = src.get(name)
        if value is not None and str(value).strip() != "":
            return str(value)
    return ""


def clean_old_generated_files():
    # 删除旧的测试源和旧的 yuedu_*.js
    for file in ROOT.glob("yuedu_*.js"):
        file.unlink()

    test_file = ROOT / "venera_test.js"
    if test_file.exists():
        test_file.unlink()

    public_dir = ROOT / "public"
    if public_dir.exists():
        import shutil
        shutil.rmtree(public_dir)


def make_js(index, src):
    name = get_field(src, "bookSourceName", "sourceName", "name") or f"阅读源{index}"
    source_url = get_field(src, "bookSourceUrl", "sourceUrl", "url")
    group = get_field(src, "bookSourceGroup", "sourceGroup", "group")
    remark = get_field(src, "sourceRemark", "bookSourceRemark", "remark")

    key = safe_key(index, name)
    class_name = safe_class_name(index)
    file_name = f"{key}.js"
    update_url = f"{RAW_BASE}/{file_name}"

    # 为了避免 JS 文件太大，不把整个原始 JSON 塞进去，只保留关键字段。
    return f'''class {class_name} extends ComicSource {{
    name = {js_string(name)}
    key = {js_string(key)}
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = {js_string(update_url)}

    sourceUrl = {js_string(source_url)}
    sourceGroup = {js_string(group)}
    sourceRemark = {js_string(remark)}

    explore = [
        {{
            title: "源信息",
            type: "multiPartPage",
            load: async (page) => {{
                return [
                    {{
                        title: "由阅读书源转换",
                        comics: [
                            new Comic({{
                                id: "source_info",
                                title: this.name,
                                subTitle: this.sourceUrl || "无源地址",
                                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                                tags: ["阅读书源", "自动转换"],
                                description: "这是从阅读/Legado 书源 JSON 转换来的 Venera 占位源。"
                            }})
                        ]
                    }}
                ]
            }}
        }}
    ]

    search = {{
        load: async (keyword, options, page) => {{
            return {{
                comics: [
                    new Comic({{
                        id: "source_info",
                        title: this.name,
                        subTitle: "关键词: " + keyword,
                        cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                        tags: ["阅读书源", "待适配"],
                        description: "此源已成功导入 Venera，但阅读书源规则不能直接等于 Venera 漫画源规则，需要单独适配搜索、详情、章节和图片。"
                    }})
                ],
                maxPage: 1
            }}
        }},
        optionList: []
    }}

    comic = {{
        loadInfo: async (id) => {{
            return new ComicDetails({{
                title: this.name,
                subTitle: this.sourceUrl || "阅读书源",
                cover: "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png",
                description:
                    "源名称: " + this.name + "\\n" +
                    "源地址: " + this.sourceUrl + "\\n" +
                    "分组: " + this.sourceGroup + "\\n" +
                    "备注: " + this.sourceRemark + "\\n\\n" +
                    "说明: 这是阅读/Legado 书源转换成的 Venera 占位源。可以安装和显示，但要真正阅读内容，需要把原书源规则手动改写成 Venera JS 漫画源逻辑。",
                tags: {{
                    "来源": ["阅读书源"],
                    "状态": ["待适配"]
                }},
                chapters: {{
                    "源信息": "source_info"
                }},
                url: this.sourceUrl || "https://example.com"
            }})
        }},

        loadEp: async (comicId, epId) => {{
            return {{
                images: [
                    "https://raw.githubusercontent.com/venera-app/venera/master/assets/images/icon.png"
                ]
            }}
        }}
    }}
}}
'''


def main():
    clean_old_generated_files()

    data = download_json(SOURCE_JSON_URL)
    sources = pick_sources(data)

    print("读取到源数量:", len(sources))

    index_list = []

    for i, src in enumerate(sources, 1):
        name = get_field(src, "bookSourceName", "sourceName", "name") or f"阅读源{i}"
        key = safe_key(i, name)
        file_name = f"{key}.js"

        js_code = make_js(i, src)
        (ROOT / file_name).write_text(js_code, encoding="utf-8")

        index_list.append({
            "name": name,
            "url": f"{RAW_BASE}/{file_name}",
            "key": key,
            "version": "1.0.0",
            "description": "由阅读书源 JSON 自动转换的 Venera 占位源"
        })

        print(f"[{i}/{len(sources)}] 生成: {name} -> {file_name}")

    # index.json 用 ascii，中文全部转成 \\u，避免乱码和 invalid content
    (ROOT / "index.json").write_text(
        json.dumps(index_list, ensure_ascii=True, separators=(",", ":")),
        encoding="ascii"
    )

    print()
    print("转换完成")
    print("生成 index.json")
    print("生成 JS 源数量:", len(index_list))
    print("目录:", ROOT)


if __name__ == "__main__":
    main()