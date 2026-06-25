from pathlib import Path
import json
import re
import zlib
import struct
import binascii

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")

USER = "Haohang-CN"
REPO = "venera-yuedu-source"
BRANCH = "main"

PLACEHOLDER_URL = f"https://raw.githubusercontent.com/{USER}/{REPO}/{BRANCH}/placeholder.png?v=safe301"


def png_chunk(t, data):
    return (
        struct.pack(">I", len(data))
        + t
        + data
        + struct.pack(">I", binascii.crc32(t + data) & 0xFFFFFFFF)
    )


def make_png():
    w, h = 300, 400
    raw = b"".join(b"\x00" + bytes([245, 245, 245]) * w for _ in range(h))
    png = (
        b"\x89PNG\r\n\x1a\n"
        + png_chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
        + png_chunk(b"IDAT", zlib.compress(raw, 9))
        + png_chunk(b"IEND", b"")
    )
    (ROOT / "placeholder.png").write_bytes(png)
    print("已生成有效 placeholder.png")


def replace_load_ep(text):
    marker = "        loadEp: async"
    start = text.find(marker)
    if start == -1:
        return text, False

    brace = text.find("{", start)
    if brace == -1:
        return text, False

    depth = 0
    end = brace

    while end < len(text):
        ch = text[end]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                end += 1
                break
        end += 1

    # 如果后面有逗号，保留结构
    if end < len(text) and text[end] == ",":
        end += 1

    new_load_ep = f'''        loadEp: async (comicId, epId) => {{
            let url = this.absUrl(epId, comicId || this.baseUrl)

            if (!url) {{
                return {{
                    images: ["{PLACEHOLDER_URL}"]
                }}
            }}

            let html = await this.getHtml(url, comicId || this.baseUrl)
            let doc = this.doc(html)

            let candidates = []
            let nodes = this.qsa(doc, this.contentSelector)

            if (nodes.length === 0) {{
                nodes = this.qsa(doc, "img")
            }}

            for (let node of nodes) {{
                let v = this.pick(node, ":root", this.contentAttr, url)

                if (!v) {{
                    let attrs = node.attributes || {{}}
                    v = attrs.src || attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
                }}

                v = this.absUrl(v, url)

                if (this.isGoodImageLink(v)) {{
                    candidates.push(v)
                }}
            }}

            let found = this.findImages(html, url)

            for (let img of found) {{
                if (this.isGoodImageLink(img)) {{
                    candidates.push(img)
                }}
            }}

            candidates = Array.from(new Set(candidates))

            let images = []

            for (let img of candidates) {{
                if (images.length >= 80) break

                let ok = await this.checkImage(img, url)

                if (ok) {{
                    images.push(img)
                }}
            }}

            if (images.length === 0) {{
                images = ["{PLACEHOLDER_URL}"]
            }}

            return {{
                images: images
            }}
        }},'''

    return text[:start] + new_load_ep + text[end:], True


def insert_helper_methods(text):
    if "checkImage(u, ref)" in text:
        return text

    insert_pos = text.rfind("\n}")
    if insert_pos == -1:
        return text

    helpers = r'''

    isGoodImageLink(u) {
        if (!u) return false

        u = String(u).trim()
        let lower = u.toLowerCase()

        if (!lower) return false
        if (lower === "null") return false
        if (lower === "undefined") return false
        if (lower.startsWith("javascript:")) return false
        if (lower.startsWith("#")) return false
        if (lower.indexOf("javascript:;") >= 0) return false

        return this.isImage(u)
    }

    async checkImage(u, ref) {
        try {
            if (!this.isGoodImageLink(u)) return false

            let res = await Network.get(u, {
                "User-Agent": "Mozilla/5.0",
                "Referer": ref || this.baseUrl
            })

            return res.status >= 200 && res.status < 300
        } catch (e) {
            return false
        }
    }
'''

    return text[:insert_pos] + helpers + text[insert_pos:]


def patch_js(path):
    text = path.read_text(encoding="utf-8", errors="replace")

    text = re.sub(
        r'placeholder\s*=\s*"[^"]*"',
        f'placeholder = "{PLACEHOLDER_URL}"',
        text
    )

    text = re.sub(r'cover:\s*this\.placeholder', f'cover: "{PLACEHOLDER_URL}"', text)
    text = re.sub(r'cover:\s*""', f'cover: "{PLACEHOLDER_URL}"', text)
    text = re.sub(r'cover:\s*null', f'cover: "{PLACEHOLDER_URL}"', text)
    text = re.sub(r'cover:\s*undefined', f'cover: "{PLACEHOLDER_URL}"', text)

    text, changed = replace_load_ep(text)
    text = insert_helper_methods(text)

    path.write_text(text, encoding="utf-8")
    print("已修复:", path.name)


def patch_index():
    for name in ["index_fixed.json", "index.json"]:
        p = ROOT / name
        if not p.exists():
            continue

        data = json.loads(p.read_text(encoding="utf-8-sig", errors="replace"))

        for item in data:
            item["version"] = "2.0.3"
            item["icon"] = PLACEHOLDER_URL

            if "url" in item:
                item["url"] = re.sub(r"\?v=.*$", "", item["url"])
                item["url"] += "?v=safe301"

        p.write_text(
            json.dumps(data, ensure_ascii=True, separators=(",", ":")),
            encoding="ascii"
        )

        print("已更新索引:", name)


def main():
    make_png()

    files = list(ROOT.glob("ydok_*.js")) + list(ROOT.glob("yuedu_*.js"))

    for file in files:
        patch_js(file)

    patch_index()

    print("完成。")


if __name__ == "__main__":
    main()