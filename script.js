console.log("Script PEACEKOMPUTER aktif");

const formCari = document.getElementById("form-cari");
const inputCari = document.getElementById("cari");

formCari.addEventListener("submit", function (e) {
  // Cegah halaman reload saat form disubmit
  e.preventDefault();

  const keyword = inputCari.value.toLowerCase().trim();
  const semuaArtikel = document.querySelectorAll("#produk article");

  let jumlahKetemu = 0;

  semuaArtikel.forEach(function (artikel) {
    const teks = artikel.innerText.toLowerCase();

    if (keyword === "" || teks.includes(keyword)) {
      // Tampilkan artikel yang cocok
      artikel.style.display = "";
      jumlahKetemu++;
    } else {
      // Sembunyikan artikel yang tidak cocok
      artikel.style.display = "none";
    }
  });

  // Tampilkan/hapus pesan "tidak ditemukan"
  let pesanTidakDitemukan = document.getElementById("pesan-tidak-ditemukan");

  if (jumlahKetemu === 0) {
    if (!pesanTidakDitemukan) {
      pesanTidakDitemukan = document.createElement("p");
      pesanTidakDitemukan.id = "pesan-tidak-ditemukan";
      pesanTidakDitemukan.textContent = "Part \"" + inputCari.value + "\" tidak ditemukan.";
      document.getElementById("produk").appendChild(pesanTidakDitemukan);
    } else {
      pesanTidakDitemukan.textContent = "Part \"" + inputCari.value + "\" tidak ditemukan.";
    }
  } else {
    if (pesanTidakDitemukan) {
      pesanTidakDitemukan.remove();
    }
  }
});
