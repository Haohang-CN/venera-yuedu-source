from pathlib import Path

ROOT = Path(r"C:\Users\59530\Desktop\venera_yuedu_convert")

NEW_FUNC = r'''    textToSvgPages(text) {
        let lines = []
        let clean = String(text || "").replace(/\r/g, "").split("\n")

        for (let para of clean) {
            para = String(para || "").trim()

            if (!para) {
                lines.push("")
                continue
            }

            let max = 24
            for (let i = 0; i < para.length; i += max) {
                lines.push(para.slice(i, i + max))
            }
        }

        let pages = []
        let perPage = 28

        for (let i = 0; i < lines.length; i += perPage) {
            let part = lines.slice(i, i + perPage)
            let tspans = ""

            for (let j = 0; j < part.length; j++) {
                let line = part[j]
                let y = 70 + j * 34
                tspans += "<text x=\"40\" y=\"" + y + "\" font-size=\"26\" fill=\"#222\">" +
                    this.escapeXml(line) +
                    "</text>"
            }

            let svg =
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"1200\">" +
                "<rect width=\"100%\" height=\"100%\" fill=\"#f7f3e8\"/>" +
                tspans +
                "</svg>"

            pages.push("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg))
        }

        if (pages.length === 0) {
            let emptySvg =
                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"900\" height=\"1200\">" +
                "<rect width=\"100%\" height=\"100%\" fill=\"#f7f3e8\"/>" +
                "<text x=\"40\" y=\"80\" font-size=\"28\" fill=\"#222\">空内容</text>" +
                "</svg>"

            pages.push("data:image/svg+xml;charset=utf-8," + encodeURIComponent(emptySvg))
        }

        return pages
    }'''

def patch_file(path: Path):
    text = path.read_text(encoding="utf-8", errors="replace")

    start = text.find("    textToSvgPages(text) {")
    if start == -1:
        print("跳过，没有 textToSvgPages:", path.name)
        return False

    end = text.find("\n\n    escapeXml(s)", start)
    if end == -1:
        print("跳过，没找到 escapeXml 位置:", path.name)
        return False

    new_text = text[:start] + NEW_FUNC + text[end:]
    path.write_text(new_text, encoding="utf-8")
    print("已修复:", path.name)
    return True

def main():
    count = 0

    for path in ROOT.glob("yuedu_*.js"):
        if patch_file(path):
            count += 1

    print("修复完成，文件数量:", count)

if __name__ == "__main__":
    main()