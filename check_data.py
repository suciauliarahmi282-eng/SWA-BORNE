"""Periksa data biaya di assets/js/data.js terhadap total di Lembar Acuan v0.2.

Jalankan dari akar repositori:  python tools/check_data.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
src = (ROOT / "assets" / "js" / "data.js").read_text(encoding="utf-8")

m = re.search(r"window\.SWA_KOMPONEN\s*=\s*(\[.*?\n\]);", src, re.S)
if not m:
    sys.exit("SWA_KOMPONEN tidak ditemukan")

# ubah literal JS (kunci tanpa tanda kutip) menjadi JSON
js = m.group(1)
js = re.sub(r"(\{|,)\s*([a-z]+):", r'\1 "\2":', js)
rows = json.loads(js)

EXPECT_FINAL = 872_500
EXPECT_ALL = 1_039_000
EXPECT_KAT = {
    "Komponen elektronik": 547_000,
    "Material casing": 99_500,
    "Bahan kalibrasi": 48_000,
    "Alat dan bahan perakitan": 143_000,
    "Lain-lain": 35_000,
}

errors = []

# subtotal = harga satuan x jumlah, bila jumlah berupa angka murni
for r in rows:
    if r["jml"].isdigit() and int(r["jml"]) * r["harga"] != r["sub"]:
        errors.append(f"baris {r['no']}: {r['jml']} x {r['harga']} != {r['sub']}")

final = [r for r in rows if r["pakai"]]
total_final = sum(r["sub"] for r in final)
total_all = sum(r["sub"] for r in rows)

if total_final != EXPECT_FINAL:
    errors.append(f"total final {total_final} != {EXPECT_FINAL}")
if total_all != EXPECT_ALL:
    errors.append(f"total keseluruhan {total_all} != {EXPECT_ALL}")

kat = {}
for r in final:
    kat[r["kat"]] = kat.get(r["kat"], 0) + r["sub"]
for k, v in EXPECT_KAT.items():
    if kat.get(k) != v:
        errors.append(f"kategori '{k}': {kat.get(k)} != {v}")
extra = set(kat) - set(EXPECT_KAT)
if extra:
    errors.append(f"kategori tak terduga: {extra}")

print(f"baris: {len(rows)} | final: {total_final:,} | keseluruhan: {total_all:,}")
for k, v in kat.items():
    print(f"  {k}: {v:,}")

if errors:
    print("\nGAGAL:")
    for e in errors:
        print(" -", e)
    sys.exit(1)
print("\nSemua pemeriksaan lolos.")
