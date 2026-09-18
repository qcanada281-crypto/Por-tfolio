import os
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent.parent.resolve()
IMG_DIR = ROOT / "images"

print("=" * 60)
print("HIGH-PRECISION PORTFOLIO IMAGE OPTIMIZATION ENGINE")
print("=" * 60)

stats = []

def optimize_image(filename, target_filename, max_size=None, quality=85, keep_alpha=True):
    src_path = IMG_DIR / filename
    if not src_path.exists():
        print(f"Warning: Source {filename} not found.")
        return None

    dst_path = IMG_DIR / target_filename
    orig_size = src_path.stat().st_size

    with Image.open(src_path) as im:
        if keep_alpha and (im.mode in ("RGBA", "LA") or ("transparency" in im.info)):
            im = im.convert("RGBA")
        else:
            im = im.convert("RGB")

        orig_w, orig_h = im.size

        if max_size:
            max_w, max_h = max_size
            if orig_w > max_w or orig_h > max_h:
                im.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)

        new_w, new_h = im.size
        im.save(dst_path, "WEBP", quality=quality, method=6)
        new_size = dst_path.stat().st_size

    saved_pct = ((orig_size - new_size) / orig_size) * 100
    stats.append({
        "src": filename,
        "dst": target_filename,
        "orig_size": orig_size,
        "new_size": new_size,
        "saved_pct": saved_pct,
        "orig_dim": f"{orig_w}x{orig_h}",
        "new_dim": f"{new_w}x{new_h}"
    })
    print(f"OK: {filename:<34} -> {target_filename:<34} | {orig_size/1024:7.1f} KB -> {new_size/1024:5.1f} KB (-{saved_pct:4.1f}%)")

# 1. Project Showcases & Screenshots
print("\n1. Optimizing Project Screenshots (Target: Max 1600px width, Q85 WebP):")
project_files = [
    "project1.png", "project2.png", "project3.png", "project4.png",
    "project5.png", "project6.png", "project7.png", "project8.png",
    "project9.png", "project10.png", "project11.png", "pr-hirafi.png", "pr-asso1.png"
]
for pf in project_files:
    target_name = Path(pf).stem + ".webp"
    optimize_image(pf, target_name, max_size=(1600, 1600), quality=85, keep_alpha=False)

# 2. Hero & Portrait with Alpha Transparency
print("\n2. Optimizing Hero Portrait (Transparent Alpha, Q88 WebP):")
optimize_image(
    "abdelilah_11-removebg-preview.png",
    "abdelilah_11-removebg-preview.webp",
    max_size=(1300, 1300),
    quality=88,
    keep_alpha=True
)

# 3. Backgrounds & Workspaces
print("\n3. Optimizing Background Workspaces (Q82 WebP):")
optimize_image("developer-workspace.jpg", "developer-workspace.webp", max_size=(1920, 1920), quality=82, keep_alpha=False)

# 4. Tech Badges & Icons (Preserving Alpha)
print("\n4. Optimizing Tech Stack Icons (Transparent WebP):")
tech_icons = [
    "react.png", "node.png", "java.png",
    "php-removebg-preview (1).png", "sql-removebg-preview.png", "VSCODE.png"
]
for ti in tech_icons:
    target_name = Path(ti).stem.replace(" (1)", "") + ".webp"
    optimize_image(ti, target_name, max_size=(256, 256), quality=90, keep_alpha=True)

# 5. Brand Logo & Navbar Thumbnails
print("\n5. Creating Optimized Brand Logos & Navbar Thumbnail:")
optimize_image("elabed_logo.jpg", "elabed_logo.webp", max_size=(600, 600), quality=85, keep_alpha=False)
optimize_image("elabed_logo.jpg", "elabed_logo_thumb.webp", max_size=(120, 120), quality=90, keep_alpha=False)

# 6. Generate Multi-Resolution Favicon.ico
print("\n6. Generating Ultra-Light Multi-Size Favicon.ico:")
logo_path = IMG_DIR / "elabed_logo.jpg"
favicon_path = ROOT / "favicon.ico"
old_favicon_size = favicon_path.stat().st_size if favicon_path.exists() else 0

with Image.open(logo_path) as im:
    im_square = im.convert("RGBA")
    sizes = [(16, 16), (32, 32), (48, 48)]
    im_square.save(favicon_path, format="ICO", sizes=sizes)

new_favicon_size = favicon_path.stat().st_size
fav_pct = ((old_favicon_size - new_favicon_size) / old_favicon_size) * 100 if old_favicon_size else 0
print(f"OK: Favicon.ico updated | {old_favicon_size/1024:7.1f} KB -> {new_favicon_size/1024:5.1f} KB (-{fav_pct:4.1f}%)")

# Summary Totals
total_orig = sum(s["orig_size"] for s in stats) + old_favicon_size
total_new = sum(s["new_size"] for s in stats) + new_favicon_size
overall_pct = ((total_orig - total_new) / total_orig) * 100

print("\n" + "=" * 60)
print(f"OPTIMIZATION RESULTS SUMMARY:")
print(f"   Original Total Size : {total_orig / (1024 * 1024):.2f} MB")
print(f"   Optimized Total Size: {total_new / (1024 * 1024):.2f} MB")
print(f"   Data Transferred Saved: {(total_orig - total_new) / (1024 * 1024):.2f} MB ({overall_pct:.1f}% REDUCTION!)")
print("=" * 60)
