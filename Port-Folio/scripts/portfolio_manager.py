"""
===================================================================
ABDELILAH EL ABED PORTFOLIO - UNIFIED MASTER DEVELOPMENT TOOL
===================================================================

"""

import os
import re
import sys
from pathlib import Path

# ─── Base Paths ───────────────────────────────────────────────────────────────
PROJECT_ROOT = Path(__file__).parent.parent.resolve()
INDEX_HTML   = PROJECT_ROOT / "index.html"
JS_CHUNK     = PROJECT_ROOT / "_next" / "static" / "chunks" / "c65c05f54eca7dce.js"
VERCEL_CHUNK = PROJECT_ROOT / "_next" / "static" / "chunks" / "e0c4451251674107.js"
IMAGES_DIR   = PROJECT_ROOT / "images"


# ─── 1. AUDIT ─────────────────────────────────────────────────────────────────
def audit_assets():
    """Scan index.html and React JS chunks to verify all referenced files exist on disk."""
    print("\n--- 🔍 AUDITING PROJECT ASSETS & RESOURCES ---")
    files_to_check = [INDEX_HTML, JS_CHUNK, VERCEL_CHUNK]
    missing, total = [], 0

    for file_path in files_to_check:
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8", errors="ignore")
        matches = re.findall(r'["\']((?:/?images/|/_next/)[^"\'?#]+)["\']', content)
        for ref in matches:
            if ref.startswith(("http", "//", "data:")):
                continue
            full_path = PROJECT_ROOT / ref.lstrip("/").replace("/", os.sep)
            total += 1
            if not full_path.exists():
                missing.append((ref, file_path.name))

    print(f"References checked : {total}")
    if missing:
        print(f"⚠️  Missing ({len(missing)}):")
        for asset, src in missing:
            print(f"   - {asset}  (in {src})")
    else:
        print("✅ SUCCESS — 0 missing assets. Everything exists on disk.")


# ─── 2. RELATIVE PATHS ────────────────────────────────────────────────────────
def enforce_relative_paths():
    """Convert root-relative /images/ paths to relative images/ for XAMPP & subdir compatibility."""
    print("\n--- 🛠️  ENFORCING RELATIVE ASSET PATHS ---")
    for file_path, patterns in [
        (INDEX_HTML,  [(r'src="/images/',  'src="images/'),
                       (r'href="/images/', 'href="images/')]),
        (JS_CHUNK,    [(r'["\']/images/',  '"images/')]),
        (VERCEL_CHUNK,[(r'["\']/images/',  '"images/')]),
    ]:
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8")
        original = content
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        if content != original:
            file_path.write_text(content, encoding="utf-8")
            print(f"✔  Updated relative paths in: {file_path.name}")
        else:
            print(f"✔  Already relative in: {file_path.name}")


# ─── 3. VERCEL PATCH ──────────────────────────────────────────────────────────
def patch_vercel_analytics():
    """Prevent Vercel Web Analytics 405 errors when running locally."""
    print("\n--- ⚡ PATCHING VERCEL ANALYTICS LOCAL GUARD ---")
    if not VERCEL_CHUNK.exists():
        print("⚠️  Vercel chunk not found, skipping.")
        return
    content = VERCEL_CHUNK.read_text(encoding="utf-8")
    bypass = ('if(typeof window!=="undefined"&&'
              '(window.location.hostname==="localhost"||'
              'window.location.hostname==="127.0.0.1"||'
              'window.location.protocol==="file:"))return;')
    if bypass in content:
        print("✔  Local bypass already active.")
        return
    # inject before the first fetch/sendBeacon call inside the analytics payload
    target = 'let i=t.scriptSrc?t.scriptSrc'
    if target in content:
        content = content.replace(target, bypass + "\n" + target)
        VERCEL_CHUNK.write_text(content, encoding="utf-8")
        print("✔  Local bypass injected successfully.")
    else:
        print("⚠️  Injection point not found — chunk may have changed.")


# ─── 4. SYNC TECH IMAGES ──────────────────────────────────────────────────────
def sync_tech_images():
    """Replace low-res/missing tech card images with verified SVG/PNG sources."""
    print("\n--- 🎨 SYNCING TECHNOLOGY GRID ICONS ---")
    replacements = {
        "/images/CSS.png":    "images/CSS.svg",
        "/images/csharp.png": "images/csharp.svg",
        "/images/dotnet.png": "images/dotnet.svg",
        "/images/figma.png":  "images/figma.svg",
        "/images/cpanel.png": "images/PANEL.svg",
    }
    for file_path in [INDEX_HTML, JS_CHUNK]:
        if not file_path.exists():
            continue
        content = file_path.read_text(encoding="utf-8")
        original = content
        for old, new in replacements.items():
            content = content.replace(old, new)
        if content != original:
            file_path.write_text(content, encoding="utf-8")
            print(f"✔  Tech icons synced in: {file_path.name}")
        else:
            print(f"✔  No changes needed in: {file_path.name}")


# ─── 5. CATALOG IMAGES ────────────────────────────────────────────────────────
def catalog_images():
    """List all image files in /images with their sizes."""
    print("\n--- 🖼️  IMAGE CATALOG (/images/) ---")
    if not IMAGES_DIR.exists():
        print("⚠️  /images/ folder not found.")
        return
    images = sorted(IMAGES_DIR.glob("*"))
    total_kb = sum(f.stat().st_size for f in images if f.is_file()) / 1024
    print(f"Total files: {len(images)}  |  Total size: {total_kb:.1f} KB\n")
    for img in images:
        if img.is_file():
            print(f"  {img.name:<40} {img.stat().st_size / 1024:>7.1f} KB")


# ─── 6. RUN ALL ───────────────────────────────────────────────────────────────
def run_all():
    """Execute complete maintenance pipeline: paths → patch → sync → audit → catalog."""
    print("🚀 RUNNING COMPLETE PORTFOLIO MAINTENANCE PIPELINE\n" + "=" * 55)
    enforce_relative_paths()
    patch_vercel_analytics()
    sync_tech_images()
    audit_assets()
    catalog_images()
    print("\n" + "=" * 55)
    print("✅ Pipeline complete.")


# ─── CLI ENTRY POINT ──────────────────────────────────────────────────────────
COMMANDS = {
    "audit":    audit_assets,
    "relative": enforce_relative_paths,
    "patch":    patch_vercel_analytics,
    "tech":     sync_tech_images,
    "images":   catalog_images,
    "all":      run_all,
}

if __name__ == "__main__":
    cmd = sys.argv[1].lower() if len(sys.argv) > 1 else "all"
    if cmd in COMMANDS:
        COMMANDS[cmd]()
    else:
        print(f"❌ Unknown command: '{cmd}'")
        print(f"   Valid commands: {', '.join(COMMANDS)}")
