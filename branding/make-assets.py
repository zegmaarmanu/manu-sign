"""Maakt de Manu Sign-beelden (favicons, e-maillogo, deelbeeld) in de huisstijl van zegmaarmanu.be."""
import os
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
YELLOW, RED, BLUE, BLACK, PAPER = "#ffec00", "#e64310", "#009fe2", "#000000", "#fbf8f1"
# Icoon op een raster van 64: drie verschoven lagen (drukfout) en het zwarte vlak met een witte M.
LAYERS = [(10, YELLOW), (7, RED), (4, BLUE), (1, BLACK)]
M = [(13, 39), (13, 13), (19.5, 13), (26, 23), (32.5, 13), (39, 13), (39, 39), (33, 39), (33, 23.5), (26, 33.5), (19, 23.5), (19, 39)]


def font(size, weight=700):
    f = ImageFont.truetype(os.path.join(HERE, "SpaceGrotesk.ttf"), size)
    f.set_variation_by_axes([weight])
    return f


def icon(size, bg=None):
    s = 8  # supersampling
    img = Image.new("RGBA", (size * s, size * s), bg or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    k = size * s / 64
    for off, col in LAYERS:
        d.rounded_rectangle([off * k, off * k, (off + 50) * k, (off + 50) * k], radius=6 * k, fill=col)
    d.polygon([(x * k, y * k) for x, y in M], fill="white")
    return img.resize((size, size), Image.LANCZOS)


def wordmark(height, color=BLACK, bg=(0, 0, 0, 0)):
    """Icoon + 'Manu Sign' naast elkaar."""
    f = font(int(height * 0.62))
    text = "Manu Sign"
    tw = int(f.getlength(text))
    gap = int(height * 0.28)
    img = Image.new("RGBA", (height + gap + tw + 4, height), bg)
    img.alpha_composite(icon(height), (0, 0))
    d = ImageDraw.Draw(img)
    d.text((height + gap, height / 2), text, font=f, fill=color, anchor="lm")
    return img


def out(path):
    p = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    return p


for base in ["apps/remix/public", "packages/assets"]:
    for name, size in [("favicon-16x16.png", 16), ("favicon-32x32.png", 32), ("apple-touch-icon.png", 180),
                       ("android-chrome-192x192.png", 192), ("android-chrome-512x512.png", 512)]:
        bg = PAPER if name.startswith("apple") else None
        icon(size, bg).save(out(f"{base}/{name}"))
    icon(64).save(out(f"{base}/favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# E-maillogo (wordt op h-6 = 24px getoond, dus ruim scherp).
for p in ["packages/assets/static/logo.png", "packages/email/static/logo.png", "apps/remix/public/static/logo.png"]:
    wordmark(96).save(out(p))

# Deelbeeld 1200x630.
og = Image.new("RGBA", (1200, 630), PAPER)
og.alpha_composite(wordmark(110), (90, 120))
d = ImageDraw.Draw(og)
d.text((90, 330), "Let's get down to business.", font=font(64), fill=BLACK)
d.text((90, 420), "Hier wordt een handdruk een handtekening.", font=font(36, 500), fill="#333333")
for i, col in enumerate([YELLOW, RED, BLUE]):
    d.rectangle([0, 600 + i * 10, 1200, 610 + i * 10], fill=col)
og.convert("RGB").save(out("apps/remix/public/opengraph-image.jpg"), quality=90)
for f in ["og-share-frame.png", "og-share-frame2.png"]:
    p = out(f"packages/assets/static/{f}")
    w, h = Image.open(p).size if os.path.exists(p) else (1200, 630)
    og.resize((w, h), Image.LANCZOS).save(p)
print("ok")
