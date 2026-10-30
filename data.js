/* Data komponen dan biaya SWA-BORNE.
   Sumber tunggal: Lembar Acuan Tunggal v0.2 (29 Oktober 2026), bagian 3.
   Ubah angka di lembar acuan dulu, lalu samakan di sini. */
window.SWA_KOMPONEN = [
  { no: 1, kat: "Komponen elektronik", nama: "Papan mikrokontroler", tipe: "Arduino Uno R3 + kabel USB", toko: "FortunaJogja (Bantul)", jml: "1 set", harga: 60000, sub: 60000, pakai: true },
  { no: 2, kat: "Komponen elektronik", nama: "Sensor pH (modul + elektrode BNC)", tipe: "Modul pH4502C", toko: "FortunaJogja (Bantul)", jml: "1 set", harga: 195000, sub: 195000, pakai: true },
  { no: 3, kat: "Komponen elektronik", nama: "Sensor TDS (adapter + probe)", tipe: "TDS Sensor Meter V1.0 (SEN-0171)", toko: "CNC Store Bandung", jml: "1 set", harga: 113000, sub: 113000, pakai: true },
  { no: 4, kat: "Komponen elektronik", nama: "Sensor kekeruhan (probe + driver)", tipe: "Turbidity Sensor Module (SEN-0175)", toko: "CNC Store Bandung", jml: "1 set", harga: 115000, sub: 115000, pakai: true },
  { no: 5, kat: "Komponen elektronik", nama: "Layar OLED 0,96\"", tipe: "SSD1306, I2C, 128 × 64", toko: "FortunaJogja (Bantul)", jml: "1 buah", harga: 13000, sub: 13000, pakai: true },
  { no: 6, kat: "Komponen elektronik", nama: "Push button switch", tipe: "2 pin (2 kaki)", toko: "Offline", jml: "1 buah", harga: 3000, sub: 3000, pakai: true },
  { no: 7, kat: "Komponen elektronik", nama: "LED merah", tipe: "-", toko: "Offline", jml: "1", harga: 500, sub: 500, pakai: true },
  { no: 8, kat: "Komponen elektronik", nama: "Resistor LED", tipe: "100 kΩ", toko: "Offline", jml: "1", harga: 500, sub: 500, pakai: true },
  { no: 9, kat: "Komponen elektronik", nama: "Breadboard putih", tipe: "Solderless Breadboard MB-102", toko: "FortunaJogja (Bantul)", jml: "1", harga: 15000, sub: 15000, pakai: true },
  { no: 10, kat: "Komponen elektronik", nama: "Kabel jumper 20 cm", tipe: "male to female", toko: "CNC Store Bandung", jml: "40", harga: 300, sub: 12000, pakai: true },
  { no: 11, kat: "Komponen elektronik", nama: "Kabel jumper 20 cm", tipe: "male to male", toko: "CNC Store Bandung", jml: "40", harga: 250, sub: 10000, pakai: true },
  { no: 12, kat: "Komponen elektronik", nama: "Kabel jumper 20 cm", tipe: "female to female", toko: "CNC Store Bandung", jml: "40", harga: 250, sub: 10000, pakai: true },
  { no: 13, kat: "Material casing", nama: "Box proyek hitam", tipe: "-", toko: "Offline", jml: "1", harga: 25000, sub: 25000, pakai: true },
  { no: 14, kat: "Material casing", nama: "Pipa PVC AW 1½\" (1 m)", tipe: "Rucika AW", toko: "Adiyasa Jaya", jml: "1", harga: 35000, sub: 35000, pakai: true },
  { no: 15, kat: "Material casing", nama: "Penutup (dop) PVC abu-abu", tipe: "Rucika AW", toko: "Offline", jml: "2", harga: 15000, sub: 30000, pakai: true },
  { no: 16, kat: "Material casing", nama: "Lem pipa PVC", tipe: "Isarplas", toko: "Adiyasa Jaya", jml: "1", harga: 9500, sub: 9500, pakai: true },
  { no: 17, kat: "Bahan kalibrasi", nama: "Larutan kalibrasi TDS", tipe: "1382 ppm (25 °C)", toko: "Raja Mandiri Shop", jml: "1", harga: 14500, sub: 14500, pakai: true },
  { no: 18, kat: "Bahan kalibrasi", nama: "Larutan kalibrasi pH 25 ml", tipe: "pH 4,0", toko: "Raja Mandiri Shop", jml: "1", harga: 14500, sub: 14500, pakai: true },
  { no: 19, kat: "Bahan kalibrasi", nama: "Larutan kalibrasi pH 25 ml", tipe: "pH 6,86", toko: "Raja Mandiri Shop", jml: "1", harga: 14500, sub: 14500, pakai: true },
  { no: 20, kat: "Bahan kalibrasi", nama: "Aquades 1 liter", tipe: "-", toko: "KIMIA MARKET", jml: "1", harga: 4500, sub: 4500, pakai: true },
  { no: 21, kat: "Alat dan bahan perakitan", nama: "Lem tembak 20–80 W", tipe: "ZT3900X", toko: "Zentor", jml: "1", harga: 35000, sub: 35000, pakai: true },
  { no: 22, kat: "Alat dan bahan perakitan", nama: "Refill lem tembak", tipe: "7 × 200 mm", toko: "Zentor", jml: "10", harga: 1000, sub: 10000, pakai: true },
  { no: 23, kat: "Alat dan bahan perakitan", nama: "Timah", tipe: "Paragon 10 m", toko: "Venus Elektrik", jml: "1", harga: 27000, sub: 27000, pakai: true },
  { no: 24, kat: "Alat dan bahan perakitan", nama: "Obeng 21 in 1", tipe: "-", toko: "Sumbawa Official Store", jml: "1", harga: 15000, sub: 15000, pakai: true },
  { no: 25, kat: "Alat dan bahan perakitan", nama: "Pasta solder", tipe: "Lotfet 10 g", toko: "CNC Store Bandung", jml: "1", harga: 9000, sub: 9000, pakai: true },
  { no: 26, kat: "Alat dan bahan perakitan", nama: "Solder adjustable", tipe: "200–450 °C, 220 V, 60 W (tipe 806)", toko: "Taffware Official Store", jml: "1", harga: 47000, sub: 47000, pakai: true },
  { no: 27, kat: "Lain-lain", nama: "Lain-lain (tambahan)", tipe: "-", toko: "CNC Store Bandung", jml: "-", harga: 35000, sub: 35000, pakai: true },
  { no: 28, kat: "Dibeli, tidak dipakai", nama: "Modul pengisi baterai TP4056", tipe: "USB Type-C, 18650 + proteksi", toko: "Mirorim1", jml: "5", harga: 3000, sub: 15000, pakai: false },
  { no: 29, kat: "Dibeli, tidak dipakai", nama: "Baterai 18650", tipe: "Panasonic NCR/CGR, 2250–2550 mAh", toko: "Kiki Pratama Computer", jml: "2", harga: 17000, sub: 34000, pakai: false },
  { no: 30, kat: "Dibeli, tidak dipakai", nama: "ADS1115", tipe: "16-bit I2C ADC 4 kanal", toko: "Tembalang Instruments", jml: "1", harga: 25000, sub: 25000, pakai: false },
  { no: 31, kat: "Dibeli, tidak dipakai", nama: "ESP32 + kabel micro", tipe: "-", toko: "CNC Store Bandung", jml: "1", harga: 76000, sub: 76000, pakai: false },
  { no: 32, kat: "Dibeli, tidak dipakai", nama: "MT3608 step-up", tipe: "2 A, 2–24 V ke 5–28 V", toko: "CNC Store Bandung", jml: "1", harga: 11000, sub: 11000, pakai: false },
  { no: 33, kat: "Dibeli, tidak dipakai", nama: "Soket baterai", tipe: "-", toko: "CNC Store Bandung", jml: "1", harga: 3500, sub: 3500, pakai: false },
  { no: 34, kat: "Dibeli, tidak dipakai", nama: "Buzzer aktif", tipe: "5 V", toko: "CNC Store Bandung", jml: "1", harga: 2000, sub: 2000, pakai: false }
];

/* Total yang tertulis di lembar acuan, dipakai untuk pemeriksaan silang di tools/check_data.py */
window.SWA_TOTAL = { final: 872500, keseluruhan: 1039000 };
