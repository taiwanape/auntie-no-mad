from __future__ import annotations

import math
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont


ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "x-profile-generated-source-20260529.png"
BANNER_SIZE = (1500, 500)
AVATAR_SIZE = 400

BLACK = (8, 8, 8)
WHITE = (255, 255, 255)
PINK = (255, 72, 139)
YELLOW = (255, 198, 0)


def c(codes: list[int], suffix: str = "") -> str:
    return "".join(chr(code) for code in codes) + suffix


TEXT = {
    "pill": c([29983, 27963, 38647, 36948, 12539, 36393, 22353, 26085, 35352, 12539, 32929, 24066], "ETF"),
    "auntie": c([38463, 23016]),
    "dont": c([21029]),
    "angry": c([29983, 27683]),
    "tagline": c([38752, 36817, 19968, 40670, 65292, 29105, 25628, 25165, 35498, 30495, 35441, 12290]),
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
F_HEAD = font(103)
F_TAG = font(30)


def fit_cover(img: Image.Image, size: tuple[int, int], center: tuple[float, float]) -> Image.Image:
    tw, th = size
    scale = max(tw / img.width, th / img.height)
    resized = img.resize((round(img.width * scale), round(img.height * scale)), Image.Resampling.LANCZOS)
    left = round((resized.width - tw) * center[0])
    top = round((resized.height - th) * center[1])
    left = max(0, min(left, resized.width - tw))
    top = max(0, min(top, resized.height - th))
    return resized.crop((left, top, left + tw, top + th))


def add_left_readability(base: Image.Image) -> None:
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    px = overlay.load()
    for y in range(base.height):
        for x in range(base.width):
            left = max(0, 1 - x / 640)
            bottom = max(0, (y - 395) / 105)
            px[x, y] = (YELLOW[0], YELLOW[1], YELLOW[2], int(140 * left + 36 * bottom))
    base.alpha_composite(overlay)


def add_halftone(base: Image.Image) -> None:
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for y in range(16, base.height, 24):
        for x in range(12, base.width, 24):
            strength = min(1, max(0, 1 - x / 320) + max(0, (x - 1260) / 240))
            if strength <= 0:
                continue
            r = int((3 + 8 * strength) * (0.85 + 0.15 * math.sin((x + y) * 0.03)))
            draw.ellipse((x - r, y - r, x + r, y + r), fill=(115, 78, 0, int(40 + 70 * strength)))
    base.alpha_composite(overlay)


def draw_pill(draw: ImageDraw.ImageDraw, x: int, y: int) -> None:
    text = TEXT["pill"]
    box = draw.textbbox((0, 0), text, font=F_PILL)
    w, h = box[2] - box[0], box[3] - box[1]
    draw.rounded_rectangle((x, y, x + w + 44, y + h + 26), radius=28, fill=BLACK)
    draw.text((x + 22, y + 10), text, font=F_PILL, fill=WHITE)


def draw_head(draw: ImageDraw.ImageDraw, x: int, y: int, text: str, pink: bool = False) -> None:
    draw.text((x + 8, y + 10), text, font=F_HEAD, fill=BLACK, stroke_width=7, stroke_fill=BLACK)
    draw.text((x, y), text, font=F_HEAD, fill=PINK if pink else BLACK, stroke_width=8, stroke_fill=WHITE)


def make_banner(src: Image.Image) -> Image.Image:
    banner = fit_cover(src, BANNER_SIZE, (0.5, 0.5)).convert("RGBA")
    banner = ImageEnhance.Color(banner).enhance(1.08)
    banner = ImageEnhance.Contrast(banner).enhance(1.05)
    add_left_readability(banner)
    add_halftone(banner)

    draw = ImageDraw.Draw(banner)
    draw_pill(draw, 45, 38)
    draw_head(draw, 50, 126, TEXT["auntie"])
    draw_head(draw, 278, 126, TEXT["dont"], pink=True)
    draw_head(draw, 50, 255, TEXT["angry"])
    draw.text((224, 418), TEXT["tagline"], font=F_TAG, fill=BLACK, stroke_width=2, stroke_fill=(255, 224, 58))
    draw.text((224, 458), "@auntienomad", font=F_TAG, fill=BLACK)
    return banner.convert("RGB")


def make_avatar(src: Image.Image) -> Image.Image:
    zoomed = fit_cover(src, (520, 520), (0.70, 0.46))
    avatar = zoomed.crop((60, 28, 460, 428)).convert("RGBA")
    avatar = ImageEnhance.Color(avatar).enhance(1.08)
    avatar = ImageEnhance.Contrast(avatar).enhance(1.05)
    avatar = ImageEnhance.Sharpness(avatar).enhance(1.08)
    return avatar.convert("RGB")


def main() -> None:
    src = Image.open(SOURCE).convert("RGB")
    make_banner(src).save(ROOT / "x-profile-cover-generated-20260529.jpg", quality=94, subsampling=1)
    make_avatar(src).save(ROOT / "x-profile-avatar-generated-20260529.jpg", quality=94, subsampling=1)


if __name__ == "__main__":
    main()
