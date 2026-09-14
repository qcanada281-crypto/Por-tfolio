import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

root = Path(__file__).parent.parent.resolve()
html_path = root / "index.html"
html = html_path.read_text(encoding="utf-8")

print("==================================================")
print("SEO & TECHNICAL ARCHITECTURE AUDIT VERIFICATION")
print("==================================================")

# 1. Schema.org JSON-LD
print("\n--- 1. SCHEMA.ORG JSON-LD VALIDATION ---")
matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
if not matches:
    print("❌ No JSON-LD found!")
for i, m in enumerate(matches, 1):
    try:
        data = json.loads(m.strip())
        print(f"✅ Block {i}: Valid JSON. Context: {data.get('@context')}")
        graph = data.get("@graph", [])
        print(f"   Graph Items ({len(graph)}):")
        for item in graph:
            print(f"   - Type: {item.get('@type'):<20} | Name: {item.get('name')}")
    except Exception as e:
        print(f"❌ Block {i} JSON Parse Error: {e}")

# 2. Headings Hierarchy
print("\n--- 2. HEADING STRUCTURE AUDIT ---")
h1s = re.findall(r'<h1\b[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
h2s = re.findall(r'<h2\b[^>]*>(.*?)</h2>', html, re.DOTALL | re.IGNORECASE)
h3s = re.findall(r'<h3\b[^>]*>(.*?)</h3>', html, re.DOTALL | re.IGNORECASE)
print(f"H1 Count: {len(h1s)} (Target: 1)")
for h in h1s:
    clean_h = " ".join(re.sub(r'<[^>]+>', ' ', h).split())
    print(f"  👉 H1: {clean_h[:80]}...")

print(f"H2 Count: {len(h2s)}")
for idx, h in enumerate(h2s, 1):
    clean_h = " ".join(re.sub(r'<[^>]+>', ' ', h).split())
    print(f"   [{idx}] H2: {clean_h[:70]}")

print(f"H3 Count: {len(h3s)} projects & sub-sections")

# 3. Canonical & Robots
print("\n--- 3. METADATA TAGS ---")
canonical = re.search(r'<link rel="canonical" href="([^"]+)"', html)
robots = re.search(r'<meta name="robots" content="([^"]+)"', html)
desc = re.search(r'<meta name="description"\s+content="([^"]+)"', html)
title = re.search(r'<title>(.*?)</title>', html)

print("Title      :", title.group(1) if title else "❌ Missing")
print("Description:", (desc.group(1)[:75] + "...") if desc else "❌ Missing")
print("Canonical  :", canonical.group(1) if canonical else "❌ Missing")
print("Robots     :", robots.group(1) if robots else "❌ Missing")

# 4. Sitemap.xml
print("\n--- 4. SITEMAP.XML AUDIT ---")
sitemap_path = root / "sitemap.xml"
if sitemap_path.exists():
    tree = ET.parse(sitemap_path)
    sm_root = tree.getroot()
    urls = [e.text for e in sm_root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    print(f"✅ sitemap.xml exists and valid XML. URLs ({len(urls)}): {urls}")
else:
    print("❌ sitemap.xml not found")

# 5. Robots.txt
print("\n--- 5. ROBOTS.TXT AUDIT ---")
robots_path = root / "robots.txt"
if robots_path.exists():
    content = robots_path.read_text(encoding="utf-8")
    has_sitemap = "Sitemap:" in content
    print(f"✅ robots.txt exists. Sitemap referenced: {has_sitemap}")
else:
    print("❌ robots.txt not found")

# 6. 404.html
print("\n--- 6. 404.HTML AUDIT ---")
page_404 = root / "404.html"
if page_404.exists():
    content = page_404.read_text(encoding="utf-8")
    print(f"✅ 404.html exists ({len(content)} bytes), noindex present: {'noindex' in content}")
else:
    print("❌ 404.html not found")

# 7. Images Audit
print("\n--- 7. IMAGES AUDIT IN INDEX.HTML ---")
img_tags = re.findall(r'<img\b([^>]+)>', html, re.IGNORECASE)
missing_dims = 0
missing_alts = 0
for tag in img_tags:
    has_alt = 'alt="' in tag
    has_width = 'width="' in tag
    has_height = 'height="' in tag
    if not has_alt:
        missing_alts += 1
    if not (has_width and has_height):
        missing_dims += 1
        src_m = re.search(r'src="([^"]+)"', tag)
        if src_m:
            print(f"   Missing dims: {src_m.group(1)}")

print(f"\nTotal <img> tags: {len(img_tags)}")
print(f"Images with missing alt: {missing_alts}")
print(f"Images without explicit width/height: {missing_dims}")
print("==================================================")
