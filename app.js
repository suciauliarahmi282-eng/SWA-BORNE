/* SWA-BORNE | skrip situs
   1) tabel komponen dan biaya dari data.js
   2) simulator aturan keputusan LAYAK / TIDAK LAYAK
   3) penanda navigasi aktif */
(function () {
  "use strict";

  var rupiah = function (n) { return n.toLocaleString("id-ID"); };
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- Tabel komponen ---------- */
  var data = window.SWA_KOMPONEN || [];
  var body = $("komponen-body");
  var foot = $("komponen-foot");
  var kategoriBody = $("kategori-body");
  var sumBox = $("cost-sum");

  function jumlah(rows) { return rows.reduce(function (a, r) { return a + r.sub; }, 0); }
  var final = data.filter(function (r) { return r.pakai; });
  var tidak = data.filter(function (r) { return !r.pakai; });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function renderRows(filter) {
    var rows = filter === "final" ? final : filter === "tidak" ? tidak : data;
    body.innerHTML = rows.map(function (r) {
      return '<tr class="' + (r.pakai ? "" : "tidak") + '">' +
        '<td class="num">' + r.no + "</td>" +
        "<td>" + esc(r.kat) + "</td>" +
        "<td>" + esc(r.nama) + "</td>" +
        "<td>" + esc(r.tipe) + "</td>" +
        "<td>" + esc(r.toko) + "</td>" +
        "<td>" + esc(r.jml) + "</td>" +
        '<td class="num">' + rupiah(r.harga) + "</td>" +
        '<td class="num">' + rupiah(r.sub) + "</td></tr>";
    }).join("");
    var label = filter === "final" ? "Total biaya prototipe final" :
                filter === "tidak" ? "Total dibeli, tidak dipakai" : "Total pengeluaran keseluruhan (tanpa ongkir)";
    foot.innerHTML = '<tr><td colspan="7">' + label + '</td><td class="num">' + rupiah(jumlah(rows)) + "</td></tr>";
  }

  if (body) {
    renderRows("final");
    var buttons = document.querySelectorAll(".toolbar button");
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(buttons, function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        renderRows(b.getAttribute("data-f"));
      });
    });

    sumBox.innerHTML =
      "<div><dt>Prototipe final</dt><dd>Rp " + rupiah(jumlah(final)) + "</dd></div>" +
      "<div><dt>Dibeli, tidak dipakai</dt><dd>Rp " + rupiah(jumlah(tidak)) + "</dd></div>" +
      "<div><dt>Pengeluaran keseluruhan</dt><dd>Rp " + rupiah(jumlah(data)) + "</dd></div>" +
      "<div><dt>RAB semester 6 (pembanding)</dt><dd>Rp 1.155.000</dd></div>";

    var perKat = {};
    final.forEach(function (r) { perKat[r.kat] = (perKat[r.kat] || 0) + r.sub; });
    kategoriBody.innerHTML = Object.keys(perKat).map(function (k) {
      return "<tr><td>" + esc(k) + '</td><td class="num">Rp ' + rupiah(perKat[k]) + "</td></tr>";
    }).join("");
  }

  /* ---------- Simulator keputusan ---------- */
  var inPh = $("in-ph"), inTds = $("in-tds"), inNtu = $("in-ntu");
  if (inPh) {
    var fmt1 = function (n) { return n.toFixed(1).replace(".", ","); };

    // Aturan sesuai Lembar Acuan bagian 2
    function layak(ph, tds, ntu) {
      return ph >= 6.5 && ph <= 8.5 && tds < 300 && ntu < 3;
    }

    function update() {
      var ph = parseFloat(inPh.value), tds = parseFloat(inTds.value), ntu = parseFloat(inNtu.value);
      $("out-ph").textContent = fmt1(ph);
      $("out-tds").textContent = String(tds);
      $("out-ntu").textContent = fmt1(ntu);

      var ok = layak(ph, tds, ntu);
      $("oled").innerHTML =
        "pH  : " + fmt1(ph) + "<br>TDS : " + tds + " ppm<br>NTU : " + fmt1(ntu) +
        '<div class="big">' + (ok ? "LAYAK" : "TIDAK LAYAK") + "</div>";

      var led = $("led");
      led.classList.toggle("on", !ok);
      $("led-label").textContent = ok ? "LED merah mati (bukan tanda air aman)" : "LED merah menyala";

      var gagal = [];
      if (!(ph >= 6.5 && ph <= 8.5)) gagal.push("pH " + fmt1(ph) + " di luar 6,5 sampai 8,5");
      if (!(tds < 300)) gagal.push("TDS " + tds + " tidak kurang dari 300");
      if (!(ntu < 3)) gagal.push("kekeruhan " + fmt1(ntu) + " tidak kurang dari 3 NTU");

      var catatan = [];
      if (Math.abs(ph - 6.5) <= 0.2 || Math.abs(ph - 8.5) <= 0.2)
        catatan.push("pH berada dalam ± 0,2 dari batas. Hasilnya bisa berbalik karena alkali error sensor.");
      if (tds >= 200 && tds <= 400)
        catatan.push("TDS berada dalam ± 100 ppm dari 300. Sensor tidak bisa membedakan dengan pasti di zona ini.");
      if (ntu < 33)
        catatan.push("Sensor kekeruhan ± 30 NTU. Nilai di bawah 3 NTU tidak bisa dipastikan; alat hanya mendeteksi keruh yang jelas.");

      var html = "";
      if (!ok) html += "<strong>Alasan TIDAK LAYAK:</strong><ul><li>" + gagal.join("</li><li>") + "</li></ul>";
      else html += "<strong>Ketiga parameter memenuhi aturan.</strong> Itu belum berarti air aman: parameter lain tidak diukur.";
      if (catatan.length) html += '<ul class="hint-warn"><li>' + catatan.join("</li><li>") + "</li></ul>";
      $("verdict").innerHTML = html;
    }

    [inPh, inTds, inNtu].forEach(function (el) { el.addEventListener("input", update); });
    update();
  }

  /* ---------- Navigasi aktif ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll("a.l"));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && map[e.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          map[e.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }
})();
