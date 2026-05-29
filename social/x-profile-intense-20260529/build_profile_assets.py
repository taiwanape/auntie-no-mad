from __future__ import annotations

from pathlib import Path
import math
import os

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parent
PROJECT = ROOT.parents[2]
SOURCE = PROJECT / "x-brand-real-person" / "x-cover-real-person.png"

BANNER_W, BANNER_H = 1500, 500
AVATAR = 400

BLACK = (10, 10, 10)
WHITE = (255, 255, 255)
PINK = (255, 72, 139)
YELLOW = (255, 198, 0)


def chars(values: list[int], suffix: str = "") -> str:
    return "".join(chr(v) for v in values) + suffix


TEXT = {
    "pill": chars([29983, 27963, 38647, 36948, 12539, 36393, 22353, 26085, 35352, 12539, 32929, 24066], "ETF"),
    "auntie": chars([38463, 23016]),
    "dont": chars([21029]),
    "angry": chars([29983, 27683]),
    "tagline": chars([30475, 25026, 29105, 25628, 65292, 21029, 34987, 27969, 37327, 29309, 33879, 36208, 12290]),
}


def font(size: int) -> ImageFont.FreeTypeFont:
    for candidate in [
        r"C:\Windows\Fonts\msjhbd.ttc",
        r"C:\Windows\Fonts\Noto Sans SC Bold (TrueType).otf",
        r"C:\Windows\Fonts\simhei.ttf",
    ]:
        if os.path.exists(candidate):
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


F_PILL = font(31)
F_HEAD = font(96)
F_HEAD_BIG = font(104)
F_TAG = font(30)


def fit_cover(img: Image.Image, size: tuple[int, int], center: tuple[float, float]) -> Image.Image:
    tw, th = size
    scale = max(tw / img.width, th / img.height)
    nw, nh = round(img.width * scale), round(img.height * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = round((nw - tw) * center[0])
    top = round((nh - th) * center[1])
    left = max(0, min(left, nw - tw))
    top = max(0, min(top, nh - th))
    return img.crop((left, top, left + tw, top + th))


def add_halftone(img: Image.Image) -> None:
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for y in range(18, img.height, 25):
        for x in range(12, img.width, 25):
            strength = max(0, 1 - x / 360) + max(0, (x - 1260) / 240)
            strength = min(1, strength)
            if strength <= 0:
                continue
            wobble = 0.82 + 0.18 * math.sin((x + y) * 0.025)
            radius = int((3 + 8 * strength) * wobble)
            alpha = int(36 + 62 * strength)
            draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(112, 77, 0, alpha))
    img.alpha_composite(overlay)


def draw_pill(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    text = TEXT["pill"]
    box = draw.textbbox((0, 0), text, font=F_PILL)
    w = box[2] - box[0]
    h = box[3] - box[1]
    draw.rounded_rectangle((x, y, x + w + 44, y + h + 26), radius=27, fill=BLACK)
    draw.text((x + 22, y + 10), text, font=F_PILL, fill=WHITE)


def draw_head(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, pink: bool = False, big: bool = False) -> None:
    f = F_HEAD_BIG if big else F_HEAD
    draw.text((x + 8, y + 10), text, font=f, fill=BLACK, stroke_width=7, stroke_fill=BLACK)
    draw.text((x, y), text, font=f, fill=PINK if pink else BLACK, stroke_width=8, stroke_fill=WHITE)


def heart(draw: ImageDraw.ImageDraw, cx: int, cy: int, s: int) -> None:
    draw.ellipse((cx - s, cy - s, cx, cy), fill=PINK)
    draw.ellipse((cx, cy - s, cx + s, cy), fill=PINK)
    draw.polygon([(cx - s, cy - s // 4), (cx + s, cy - s // 4), (cx, cy + s)], fill=PINK)


def sparkle(draw: ImageDraw.ImageDraw, cx: int, cy: int, s: int) -> None:
    pts = [
        (cx, cy - s),
        (cx + s // 4, cy - s // 4),
        (cx + s, cy),
        (cx + s // 4, cy + s // 4),
        (cx, cy + s),
        (cx - s // 4, cy + s // 4),
        (cx - s, cy),
        (cx - s // 4, cy - s // 4),
    ]
    draw.polygon(pts, fill=WHITE, outline=BLACK)


def make_banner(src: Image.Image) -> Image.Image:
    base = fit_cover(src.crop((0, 0, src.width, src.height - 14)), (BANNER_W, BANNER_H), (0.50, 0.50)).convert("RGBA")
    base = ImageEnhance.Color(base).enhance(1.08)
    base = ImageEnhance.Contrast(base).enhance(1.07)
    base = ImageEnhance.Sharpness(base).enhance(1.05)

    add_halftone(base)

    glow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    g = glow.load()
    for y in range(BANNER_H):
        for x in range(BANNER_W):
            left = max(0, 1 - x / 610)
            bottom = max(0, (y - 365) / 135)
            g[x, y] = (YELLOW[0], YELLOW[1], YELLOW[2], int(126 * left + 36 * bottom))
    base.alpha_composite(glow)

    draw = ImageDraw.Draw(base)
    draw_pill(draw, 45, 38)
    draw_head(draw, 50, 123, TEXT["auntie"], big=True)
    draw_head(draw, 278, 123, TEXT["dont"], pink=True, big=True)
    draw_head(draw, 50, 252, TEXT["angry"], big=True)
    draw.text((224, 418), TEXT["tagline"], font=F_TAG, fill=BLACK, stroke_width=2, stroke_fill=(255, 224, 58))
    draw.text((224, 458), "@auntienomad", font=F_TAG, fill=BLACK)
    sparkle(draw, 1355, 92, 22)
    heart(draw, 1335, 330, 26)
    return base.convert("RGB")


def make_avatar(src: Image.Image) -> Image.Image:
    clean = src.crop((0, 0, src.width, src.height - 14))
    crop = fit_cover(clean, (AVATAR, AVATAR), (0.70, 0.47)).convert("RGBA")
    crop = ImageEnhance.Color(crop).enhance(1.08)
    crop = ImageEnhance.Contrast(crop).enhance(1.07)
    crop = ImageEnhance.Sharpness(crop).enhance(1.10)
    vignette = Image.new("RGBA", crop.size, (0, 0, 0, 0))
    px = vignette.load()
    for y in range(AVATAR):
        for x in range(AVATAR):
            dx = (x - AVATAR / 2) / (AVATAR / 2)
            dy = (y - AVATAR / 2) / (AVATAR / 2)
            d = min(1, max(0, (dx * dx + dy * dy - 0.50) / 0.52))
            px[x, y] = (0, 0, 0, int(46 * d))
    crop.alpha_composite(vignette)
    draw = ImageDraw.Draw(crop)
    sparkle(draw, 328, 73, 14)
    heart(draw, 319, 322, 16)
    return crop.convert("RGB")


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SOURCE).convert("RGB")
    banner = make_banner(src)
    avatar = make_avatar(src)
    banner.save(ROOT / "x-profile-cover-intense-20260529.jpg", quality=94, subsampling=1)
    avatar.save(ROOT / "x-profile-avatar-intense-20260529.jpg", quality=94, subsampling=1)


if __name__ == "__main__":
    main()
