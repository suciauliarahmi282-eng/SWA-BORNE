# SWA-BORNE

*Smart Water-Borne Disease Risk Detector*, prototipe alat skrining awal kelayakan air berdasarkan pH, TDS, dan kekeruhan terhadap baku mutu Permenkes No. 2 Tahun 2023.

Proyek mata kuliah Perancangan Sistem Biomedis 2 (PSB II), Teknik Biomedis, Institut Teknologi Sumatera (ITERA).

- Tim: Rendi Prayoga (123430127) dan Suci Aulia Rahmi (123430092)
- Dosen pembimbing: Dr. Aldi Herbanu, S.Si.

## Ringkasan

Alat memakai Arduino Uno R3 dengan tiga sensor (pH-4502C, TDS Sensor Meter V1.0, Turbidity Sensor Module). Hasilnya dua kelas, LAYAK atau TIDAK LAYAK, tampil di OLED SSD1306 dan *Serial Monitor*. LED merah hanya menyala bila hasilnya TIDAK LAYAK.

Alat ini bukan pengganti uji laboratorium dan bukan jaminan air aman dikonsumsi. Parameter mikrobiologi dan kimia lain tidak diukur.

## Isi repositori

| Berkas | Keterangan |
|---|---|
| `index.html` | Halaman dokumentasi proyek (satu berkas, tanpa proses *build*) |
| `assets/img/prototipe.jpg` | Foto prototipe (dokumentasi visual) |
| `.nojekyll` | Supaya GitHub Pages menyajikan berkas apa adanya |

Kode Arduino (`.ino`) akan ditambahkan setelah perbaikan kode selesai.

## Mengaktifkan GitHub Pages

1. Buat repositori baru di GitHub, misalnya `swa-borne`.
2. Unggah seluruh isi folder ini ke cabang `main` (bukan folder pembungkusnya).
3. Buka *Settings* → *Pages*.
4. Pada *Build and deployment*, pilih *Deploy from a branch*, cabang `main`, folder `/ (root)`, lalu simpan.
5. Tunggu satu sampai tiga menit. Alamatnya `https://<username>.github.io/swa-borne/`.

## Mengubah isi

Semua teks ada di `index.html`. Daftar komponen dan harga ada di array `rows` pada bagian `<script>`; total biaya dihitung otomatis dari array itu. Bila ada angka yang berubah, ubah di sana, bukan di tempat lain.

## Catatan

Spesifikasi sensor adalah klaim penjual pada listing toko (dilihat 29 Oktober 2026), bukan hasil uji tim. Hasil pengujian akan ditambahkan setelah data tersedia.
