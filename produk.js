// ========== PRODUK.JS ==========

// === HITUNG TOTAL BELANJA ===
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

function formatRupiah(angka) {
  return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.getElementById('formBelanja').addEventListener('submit', function(e) {
  e.preventDefault();
  const harga = parseFloat(document.getElementById('harga').value);
  const jumlah = parseInt(document.getElementById('jumlah').value);

  if (harga < 1000 || jumlah < 1) {
    alert('Harga minimal Rp 1.000 dan jumlah minimal 1!');
    return;
  }

  const total = hitungTotal(harga, jumlah);
  const hasilDiv = document.getElementById('hasilTotal');
  const totalAmount = document.getElementById('totalAmount');
  
  totalAmount.textContent = formatRupiah(total);
  hasilDiv.style.display = 'block';
  
  hasilDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// === CEK KATEGORI USIA ===
document.getElementById('cekUsia').addEventListener('click', function() {
  const usiaInput = document.getElementById('usia');
  const usia = parseInt(usiaInput.value);
  const hasilElement = document.getElementById('hasilUsia');
  
  if (isNaN(usia) || usia < 1 || usia > 120) {
    hasilElement.textContent = "❌ Masukkan usia yang valid (1-120)";
    hasilElement.style.color = '#d32f2f';
    hasilElement.style.backgroundColor = '#ffebee';
    return;
  }

  let kategori = "";
  let color = "";
  let bgColor = "";

  if (usia < 13) {
    kategori = "Anak-anak 🧒";
    color = '#1976d2';
    bgColor = '#e3f2fd';
  } else if (usia >= 13 && usia <= 17) {
    kategori = "Remaja 👦";
    color = '#388e3c';
    bgColor = '#e8f5e9';
  } else if (usia >= 18 && usia <= 60) {
    kategori = "Dewasa 👨";
    color = '#2e7d32';
    bgColor = '#f1f8e9';
  } else {
    kategori = "Lansia 👴";
    color = '#5d4037';
    bgColor = '#efebe9';
  }

  hasilElement.textContent = `Kategori: ${kategori}`;
  hasilElement.style.color = color;
  hasilElement.style.backgroundColor = bgColor;
});