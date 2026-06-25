from pathlib import Path
import json
import re

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")

PLACEHOLDER = "https://cdn.jsdelivr.net/gh/Haohang-CN/venera-yuedu-source@main/placeholder.png"


def patch_js(path: Path):
    txt = path.read_text(encoding="utf-8", errors="replace")

    # 1. 统一把 placeholder 字段改成绝对地址
    txt = re.sub(
        r'placeholder\s*=\s*"[^"]*"',
        f'placeholder = "{PLACEHOLDER}"',
        txt
    )

    # 2. 所有 Comic / ComicDetails 的 cover 强制改成绝对地址，避免 GET 空地址
    txt = re.sub(r'cover:\s*this\.placeholder', f'cover: "{PLACEHOLDER}"', txt)
    txt = re.sub(r'cover:\s*cover', f'cover: "{PLACEHOLDER}"', txt)
    txt = re.sub(r'cover:\s*""', f'cover: "{PLACEHOLDER}"', txt)
    txt = re.sub(r'cover:\s*null', f'cover: "{PLACEHOLDER}"', txt)
    txt = re.sub(r'cover:\s*undefined', f'cover: "{PLACEHOLDER}"', txt)

    # 3. 如果没有 explore，补一个首页；打开源时不再直接报感叹号
    if "explore =" not in txt:
        marker = "    search = {"
        explore_code = f'''    explore = [
        {{
            title: "首页",
            type: "multiPartPage",
            load: async (page) => {{
                return [
                    {{
                        title: "源信息",
                        comics: [
                            new Comic({{
                                id: this.baseUrl || "source_info",
                                title: this.name,
                                subTitle: this.baseUrl || "已导入",
                                cover: "{PLACEHOLDER}",
                                tags: ["1119转换源"],
                                description: "该源由阅读书源转换。请优先使用搜索功能测试。"
                            }})
                        ]
                    }}
                ]
            }}
        }}
    ]

'''
        txt = txt.replace(marker, explore_code + marker)

    path.write_text(txt, encoding="utf-8")
    print("已修复:", path.name)


def patch_index():
    for name in ["index_fixed.json", "index.json"]:
        p = ROOT / name
        if not p.exists():
            continue

        data = json.loads(p.read_text(encoding="utf-8-sig", errors="replace"))

        for item in data:
            item["version"] = "2.0.1"
            item["icon"] = PLACEHOLDER

            # 强制换缓存
            if "url" in item:
                item["url"] = re.sub(r"\?v=.*$", "", item["url"])
                item["url"] += "?v=coverfix201"

        p.write_text(
            json.dumps(data, ensure_ascii=True, separators=(",", ":")),
            encoding="ascii"
        )

        print("已修复索引:", name)


def main():
    files = list(ROOT.glob("ydok_*.js")) + list(ROOT.glob("yuedu_*.js"))

    for f in files:
        patch_js(f)

    patch_index()
    print("完成。")


if __name__ == "__main__":
    main()