from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "x-post-scam-suit-source-20260529.png"
OUTPUT = ROOT / "x-post-scam-suit-20260529.png"

W, H = 1600, 900

FONT_HEAD = Path(r"C:\Windows\Fonts\simhei.ttf")
FONT_BODY = Path(r"C:\Windows\Fonts\msjhbd.ttc")


def fit_cover(image, size):
    target_w, target_h = size
    scale = max(target_w / image.width, target_h / image.height)
    resized = image.resize(
        (round(image.width * scale), round(image.height * scale)),
        Image.Resampling.LANCZOS,
    )
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def draw_stroked(draw, xy, text, font, fill="black", stroke=12):
    x, y = xy
    draw.text(
        (x + 12, y + 14),
        text,
        font=font,
        fill=(0, 0, 0, 225),
        stroke_width=stroke,
        stroke_fill=(0, 0, 0, 225),
    )
    draw.text(
        (x, y),
        text,
        font=font,
        fill=fill,
        stroke_width=stroke,
        stroke_fill="white",
    )


def add_pill(layer, box, text, font):
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        (box[0] + 7, box[1] + 9, box[2] + 7, box[3] + 9),
        radius=36,
        fill=(0, 0, 0, 125),
    )
    layer.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(5)))
    draw = ImageDraw.Draw(layer)
    draw.rounded_rectangle(box, radius=36, fill=(8, 8, 8, 245))
    draw.text((box[0] + 30, box[1] + 19), text, font=font, fill="white")


def main():
    base = fit_cover(Image.open(SOURCE).convert("RGB"), (W, H)).convert("RGBA")

    # Keep the left panel punchy and readable without covering the generated character.
    veil = Image.new("RGBA", (W, H), (255, 188, 0, 0))
    vd = ImageDraw.Draw(veil)
    for x in range(0, 760):
        alpha = int(90 * (1 - x / 760))
        vd.line((x, 0, x, H), fill=(255, 196, 0, alpha))
    base.alpha_composite(veil)

    draw = ImageDraw.Draw(base)
    head_big = ImageFont.truetype(str(FONT_HEAD), 128)
    head_mid = ImageFont.truetype(str(FONT_HEAD), 124)
    body = ImageFont.truetype(str(FONT_BODY), 51)
    source = ImageFont.truetype(str(FONT_BODY), 27)
    pill = ImageFont.truetype(str(FONT_BODY), 30)

    add_pill(base, (34, 36, 562, 106), "防詐提醒・網戀劇本・阿姨白話", pill)
    draw = ImageDraw.Draw(base)

    draw_stroked(draw, (42, 164), "詐騙也會", head_big)
    draw_stroked(draw, (44, 318), "穿", head_mid)
    draw_stroked(draw, (206, 318), "西裝", head_mid, fill="#f45b93")

    body_lines = ["急著叫你匯款的，", "不是愛情，是劇本。"]
    y = 650
    for line in body_lines:
        draw.text(
            (46, y),
            line,
            font=body,
            fill="black",
            stroke_width=3,
            stroke_fill=(255, 255, 255, 218),
        )
        y += 64

    footer = "中央社 2026.05.28｜阿姨別生氣 @auntienomad"
    draw.rounded_rectangle((42, 826, 708, 872), radius=23, fill=(255, 255, 255, 195))
    draw.text((66, 836), footer, font=source, fill=(24, 24, 24))

    base.convert("RGB").save(OUTPUT, quality=95, subsampling=0)
    print(OUTPUT)


if __name__ == "__main__":
    main()
