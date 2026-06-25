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

PLACEHOLDER_URL = f"https://raw.githubusercontent.com/{USER}/{REPO}/{BRANCH}/placeholder.png?v=validpng1"


def png_chunk(chunk_type, data):
    return (
        struct.pack(">I", len(data))
        + chunk_type
        + data
        + struct.pack(">I", binascii.crc32(chunk_type + data) & 0xFFFFFFFF)
    )


def make_valid_png(path: Path):
    # 300x400 浅灰色 RGB PNG，不依赖 Pillow
    w, h = 300, 400
    raw = b"".join(b"\x00" + bytes([245, 245, 245]) * w for _ in range(h))

    png = (
        b"\x89PNG\r\n\x1a\n"
        + png_chunk(
            b"IHDR",
            struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0),
        )
        + png_chunk(b"IDAT", zlib.compress(raw, 9))
        + png_chunk(b"IEND", b"")
    )

    path.write_bytes(png)
    print("已生成有效 placeholder.png:", path)


def replace_function(text, func_name, new_func):
    marker = f"    {func_name}("
    start = text.find(marker)
    if start == -1:
        return text

    brace = text.find("{", start)
    if brace == -1:
        return text

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

    return text[:start] + new_func + text[end:]


NEW_ABS_URL = r'''    absUrl(u, base) {
        if (!u) return ""

        u = String(u).trim()
        if (!u) return ""

        let lower = u.toLowerCase()

        if (
            lower === "null" ||
            lower === "undefined" ||
            lower === "#" ||
            lower.startsWith("#") ||
            lower.startsWith("javascript:") ||
            lower.startsWith("mailto:") ||
            lower.startsWith("tel:")
        ) {
            return ""
        }

        if (lower.startsWith("data:image/")) return u
        if (lower.startsWith("http://") || lower.startsWith("https://")) return u
        if (u.startsWith("//")) return "https:" + u

        let b = base || this.baseUrl || ""
        if (!b || !(b.startsWith("http://") || b.startsWith("https://"))) {
            return ""
        }

        if (u.startsWith("/")) {
            let m = b.match(/^(https?:\/\/[^\/]+)/)
            if (m) return m[1] + u
            return b.replace(/\/$/, "") + u
        }

        // 相对路径按当前页面目录拼接
        let root = b
        if (root.indexOf("?") >= 0) root = root.split("?")[0]
        root = root.replace(/\/[^\/]*$/, "/")

        return root + u
    }'''


NEW_MAKE_COMIC = r'''    makeComic(item, pageUrl) {
        let title = this.pick(item, this.searchNameSelector, this.searchNameAttr, pageUrl)
        let href = this.pick(item, this.searchLinkSelector, this.searchLinkAttr, pageUrl)
        let author = this.pick(item, this.searchAuthorSelector, this.searchAuthorAttr, pageUrl)
        let last = this.pick(item, this.searchLastSelector, this.searchLastAttr, pageUrl)

        href = this.absUrl(href, pageUrl)

        if (!href) return null
        if (!title) title = href

        return new Comic({
            id: href,
            title: title,
            subTitle: [author, last].filter(x => x).join(" / "),
            cover: this.placeholder,
            tags: [],
            description: ""
        })
    }'''


NEW_PICK = r'''    pick(root, selector, attr, base) {
        let el = this.qs(root, selector)
        if (!el) return ""

        if (!attr || attr === "text") {
            return String(el.text || "").trim()
        }

        if (attr === "html") {
            return String(el.innerHtml || "").trim()
        }

        let attrs = el.attributes || {}
        let v = attrs[attr] || ""

        if (!v && attr === "href") {
            v = attrs["data-href"] || attrs["data-url"] || ""
        }

        if (!v && attr === "src") {
            v = attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
        }

        if (
            attr === "href" ||
            attr === "src" ||
            attr === "data-src" ||
            attr === "data-original" ||
            attr === "data-url"
        ) {
            return this.absUrl(v, base)
        }

        return String(v || "").trim()
    }'''


def patch_js(path: Path):
    txt = path.read_text(encoding="utf-8", errors="replace")

    # 强制有效封面地址
    txt = re.sub(
        r'placeholder\s*=\s*"[^"]*"',
        f'placeholder = "{PLACEHOLDER_URL}"',
        txt,
    )

    txt = replace_function(txt, "absUrl", NEW_ABS_URL)
    txt = replace_function(txt, "makeComic", NEW_MAKE_COMIC)
    txt = replace_function(txt, "pick", NEW_PICK)

    # 搜索循环里避免 makeComic 返回 null 后继续访问 c.title
    txt = txt.replace(
        "let c = this.makeComic(item, url)\n                if (c.title && c.id) comics.push(c)",
        "let c = this.makeComic(item, url)\n                if (c && c.title && c.id) comics.push(c)",
    )

    # 所有封面统一使用有效 PNG
    txt = re.sub(r'cover:\s*this\.placeholder', f'cover: "{PLACEHOLDER_URL}"', txt)
    txt = re.sub(r'cover:\s*cover', f'cover: "{PLACEHOLDER_URL}"', txt)
    txt = re.sub(r'cover:\s*""', f'cover: "{PLACEHOLDER_URL}"', txt)
    txt = re.sub(r'cover:\s*null', f'cover: "{PLACEHOLDER_URL}"', txt)
    txt = re.sub(r'cover:\s*undefined', f'cover: "{PLACEHOLDER_URL}"', txt)

    # 章节链接为空或者 javascript: 时跳过
    txt = txt.replace(
        'if (cname && curl) {\n                    chapters[curl] = cname\n                }',
        'if (cname && curl && !curl.toLowerCase().startsWith("javascript:")) {\n                    chapters[curl] = cname\n                }',
    )

    # 图片兜底也必须是有效 PNG
    txt = txt.replace("images = [this.placeholder]", f'images = ["{PLACEHOLDER_URL}"]')

    path.write_text(txt, encoding="utf-8")
    print("已修复:", path.name)


def patch_index():
    for name in ["index_fixed.json", "index.json"]:
        p = ROOT / name
        if not p.exists():
            continue

        data = json.loads(p.read_text(encoding="utf-8-sig", errors="replace"))

        for item in data:
            item["version"] = "2.0.2"
            item["icon"] = PLACEHOLDER_URL

            if "url" in item:
                item["url"] = re.sub(r"\?v=.*$", "", item["url"])
                item["url"] += "?v=final202"

        p.write_text(
            json.dumps(data, ensure_ascii=True, separators=(",", ":")),
            encoding="ascii",
        )
        print("已修复索引:", name)


def main():
    make_valid_png(ROOT / "placeholder.png")

    files = list(ROOT.glob("ydok_*.js")) + list(ROOT.glob("yuedu_*.js"))

    for f in files:
        patch_js(f)

    patch_index()
    print("全部修复完成。")


if __name__ == "__main__":
    main()