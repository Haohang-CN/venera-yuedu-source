import json
import re
import urllib.request
from pathlib import Path

URL = "https://www.yckceo.com/yuedu/shuyuans/json/id/1119.json"

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")
PUBLIC = ROOT / "public"
SOURCES = PUBLIC / "sources"

PUBLIC.mkdir(exist_ok=True)
SOURCES.mkdir(exist_ok=True)

def safe_key(text, index):
    text = str(text or "")
    text = re.sub(r"[^a-zA-Z0-9_]+", "_", text)
    text = text.strip("_").lower()
    if not text:
        text = f"source_{index}"
    if text[0].isdigit():
        text = "s_" + text
    return f"yuedu_{index:04d}_{text[:30]}"

def js_string(s):
    return json.dumps(str(s or ""), ensure_ascii=False)

def load_json_from_url(url):
    print("正在下载:", url)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()
    text = raw.decode("utf-8-sig", errors="replace")
    return json.loads(text)

def pick_sources(data):
    if isinstance(data, list):
        return data

    if isinstance(data, dict):
        for key in ["data", "sources", "source", "list", "items"]:
            if key in data:
                value = data[key]
                if isinstance(value, dict):
                    return list(value.values())
                if isinstance(value, list):
                    return value

    raise RuntimeError("无法识别 JSON 结构")

def make_js(name, key, url, raw_source):
    raw = json.dumps(raw_source, ensure_ascii=False, indent=2)

    return f"""
class YueduConvertedSource extends ComicSource {{
    name = {js_string(name)}
    key = {js_string(key)}
    version = "1.0.0"
    minAppVersion = "1.0.0"
    url = {js_string(url)}

    // 原始阅读书源规则，保留在这里，方便后续手工改写
    rawYueduSource = {raw}

    search = {{
        load: async (keyword, options, page) => {{
            throw new Error("这是由阅读书源 JSON 自动转换的占位源。Venera 是漫画阅读器，阅读书源不能直接使用，需要手工改写 search.load。")
        }},
        optionList: []
    }}

    comic = {{
        loadInfo: async (id) => {{
            throw new Error("这是阅读书源占位源，需要手工把小说目录规则改写成 Venera comic.loadInfo。")
        }},

        loadEp: async (comicId, epId) => {{
            throw new Error("Venera 的 loadEp 需要返回图片数组 images；阅读书源返回的是小说文本，不能直接通用转换。")
        }}
    }}
}}
""".strip()

def main():
    data = load_json_from_url(URL)
    sources = pick_sources(data)

    index = []

    for i, src in enumerate(sources, 1):
        name = (
            src.get("bookSourceName")
            or src.get("sourceName")
            or src.get("name")
            or f"阅读书源{i}"
        )

        url = (
            src.get("bookSourceUrl")
            or src.get("sourceUrl")
            or src.get("url")
            or ""
        )

        key = safe_key(name, i)
        file_name = f"{key}.js"

        js_code = make_js(name, key, url, src)
        (SOURCES / file_name).write_text(js_code, encoding="utf-8")

        index.append({
            "name": name,
            "fileName": f"sources/{file_name}",
            "key": key,
            "version": "1.0.0",
            "description": "由阅读书源 JSON 自动转换的 Venera 占位源"
        })

    (PUBLIC / "index.json").write_text(
        json.dumps(index, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8"
    )

    print("转换完成")
    print("共生成源数量:", len(index))
    print("输出目录:", PUBLIC)
    print("Venera 导入文件: public/index.json")

if __name__ == "__main__":
    main()