# SWA-BORNE

*Smart Water-Borne Disease Risk Detector*. Alat skrining awal kelayakan air berdasarkan tiga parameter, pH, TDS, dan kekeruhan, terhadap baku mutu Permenkes No. 2 Tahun 2023. Proyek mata kuliah Perancangan Sistem Biomedis 2 (PSB II), Teknik Biomedis ITERA.

Status: draf, mengikuti Lembar Acuan Tunggal v0.2 (29 Oktober 2026).

## Batas penggunaan

SWA-BORNE bukan pengganti uji laboratorium dan bukan jaminan air aman dikonsumsi. Hasil LAYAK hanya berarti pH, TDS, dan kekeruhan tidak terdeteksi melampaui batas menurut sensor yang dipakai. Parameter mikrobiologi dan kimia lain tidak diukur.

## Isi repositori

```
index.html              halaman utama situs
assets/css/style.css    gaya
assets/js/data.js       data komponen dan biaya (sumber untuk tabel di situs)
assets/js/app.js        tabel biaya, simulator aturan keputusan, navigasi
assets/img/             tempat foto prototipe (belum ada)
tools/check_data.py     pemeriksa total biaya terhadap lembar acuan
.nojekyll               mematikan Jekyll di GitHub Pages
```

## Ringkasan teknis

| Hal | Nilai |
|---|---|
| Mikrokontroler | Arduino Uno R3 (ADC internal 10-bit) |
| Sensor | Modul pH-4502C, TDS Sensor Meter V1.0, Turbidity Sensor Module |
| Tampilan | OLED SSD1306 128 × 64 (I2C, 0x3C), *Serial Monitor* 9600 baud |
| Penanda tambahan | LED merah di D8, menyala hanya saat TIDAK LAYAK |
| Tombol mode | D2, `INPUT_PULLUP` |
| Daya | 5 V dari laptop lewat USB |
| Biaya prototipe final | Rp 872.500 |
| Pengeluaran keseluruhan | Rp 1.039.000 |

Ambang keputusan: pH 6,5 sampai 8,5; TDS kurang dari 300 mg/L; kekeruhan kurang dari 3 NTU. LAYAK hanya jika ketiganya memenuhi.

## Menjalankan situs di komputer

Situs statis, tanpa proses *build*. Buka `index.html` di *browser*, atau jalankan server lokal:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`. Fonts dimuat dari Google Fonts, jadi tanpa internet situs tetap terbaca dengan font bawaan sistem.

## Memasang di GitHub Pages

1. Buat repositori baru di GitHub, misalnya `SWA-BORNE`.
2. Unggah seluruh isi folder ini ke cabang `main`.
3. Buka Settings, lalu Pages. Pada *Source* pilih *Deploy from a branch*, cabang `main`, folder `/ (root)`.
4. Tunggu satu sampai dua menit. Alamatnya berbentuk `https://<username>.github.io/SWA-BORNE/`.

## Memperbarui angka

Lembar Acuan Tunggal adalah satu-satunya sumber angka. Bila ada angka yang berubah:

1. Ubah di lembar acuan dan catat di riwayat revisinya.
2. Samakan di `assets/js/data.js` (biaya) atau `index.html` (angka lain).
3. Jalankan `python tools/check_data.py`. Skrip memeriksa subtotal tiap baris, total prototipe final, total keseluruhan, dan total per kategori. Bila total di lembar acuan berubah, sesuaikan juga angka harapan di bagian atas skrip.

## Hal yang belum ada

- Foto casing final (box hitam). Letakkan di `assets/img/` dan tambahkan ke bagian dokumentasi visual.
- Data hasil pengujian. Rencana pengujian sudah ada, hasilnya menunggu data dari anggota tim pemegang prototipe.
- Kode Arduino. Revisi K1 sampai K9 masih berstatus usulan dan belum diterapkan.
- Sitasi Permenkes versi yang diundangkan.
- Lisensi. Tentukan bersama dosen pembimbing sebelum repositori dibuat publik.

## Tim

- Rendi Prayoga (123430127)
- Suci Aulia Rahmi (123430092)
- Dosen pembimbing: Dr. Aldi Herbanu, S.Si.
