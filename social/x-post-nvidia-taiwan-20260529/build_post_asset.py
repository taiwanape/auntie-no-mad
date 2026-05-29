from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "x-post-nvidia-taiwan-source-20260529.png"
OUTPUT = ROOT / "x-post-nvidia-taiwan-20260529.png"

W, H = 1600, 900

FONT_HEAD = Path(r"C:\Windows\Fonts\simhei.ttf")
FONT_BODY = Path(r"C:\Windows\Fonts\msjhbd.ttc")
FONT_PILL = Path(r"C:\Windows\Fonts\msjhbd.ttc")


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


def draw_stroked_text(draw, xy, text, font, fill, stroke=10, shadow=(10, 12)):
    x, y = xy
    sx, sy = shadow
    draw.text(
        (x + sx, y + sy),
        text,
        font=font,
        fill=(0, 0, 0, 220),
        stroke_width=stroke,
        stroke_fill=(0, 0, 0, 220),
    )
    draw.text(
        (x, y),
        text,
        font=font,
        fill=fill,
        stroke_width=stroke,
        stroke_fill="white",
    )


def rounded_rect_with_shadow(layer, box, radius, fill):
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    offset_box = (box[0] + 7, box[1] + 9, box[2] + 7, box[3] + 9)
    sd.rounded_rectangle(offset_box, radius=radius, fill=(0, 0, 0, 115))
    shadow = shadow.filter(ImageFilter.GaussianBlur(5))
    layer.alpha_composite(shadow)
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle(box, radius=radius, fill=fill)


def main():
    base = fit_cover(Image.open(SOURCE).convert("RGB"), (W, H)).convert("RGBA")

    # Soft left-side readability veil, kept warm so the generated photo still leads.
    veil = Image.new("RGBA", (W, H), (255, 184, 0, 0))
    vd = ImageDraw.Draw(veil)
    for x in range(0, 850):
        alpha = int(100 * (1 - x / 850))
        vd.line((x, 0, x, H), fill=(255, 190, 0, alpha))
    base.alpha_composite(veil)

    draw = ImageDraw.Draw(base)
    head_font = ImageFont.truetype(str(FONT_HEAD), 134)
    head_font_small = ImageFont.truetype(str(FONT_HEAD), 128)
    body_font = ImageFont.truetype(str(FONT_BODY), 56)
    source_font = ImageFont.truetype(str(FONT_BODY), 28)
    pill_font = ImageFont.truetype(str(FONT_PILL), 30)

    pill_text = "科技新聞・AI供應鏈・阿姨白話"
    pill_box = (34, 36, 560, 106)
    rounded_rect_with_shadow(base, pill_box, 35, (8, 8, 8, 245))
    draw = ImageDraw.Draw(base)
    draw.text((64, 56), pill_text, font=pill_font, fill="white")

    draw_stroked_text(draw, (42, 164), "1500億", head_font, "black", stroke=13, shadow=(12, 14))
    draw_stroked_text(draw, (46, 315), "不是", head_font_small, "#f45b93", stroke=13, shadow=(12, 14))
    draw_stroked_text(draw, (46, 462), "情話", head_font_small, "black", stroke=13, shadow=(12, 14))

    body_lines = ["AI 點名台灣，", "錢包先冷靜。"]
    y = 660
    for line in body_lines:
        draw.text(
            (46, y),
            line,
            font=body_font,
            fill="black",
            stroke_width=3,
            stroke_fill=(255, 255, 255, 210),
        )
        y += 68

    source = "Reuters 2026.05.27｜阿姨別生氣 @auntienomad"
    draw.rounded_rectangle((42, 826, 680, 872), radius=23, fill=(255, 255, 255, 190))
    draw.text((66, 836), source, font=source_font, fill=(26, 26, 26))

    base.convert("RGB").save(OUTPUT, quality=95, subsampling=0)
    print(OUTPUT)


if __name__ == "__main__":
    main()
