// ========== SCRIPT.JS - GLOBAL FUNCTIONS ==========

// Welcome message dengan delay
window.addEventListener('load', function() {
  setTimeout(function() {
    alert('Selamat datang di website Profil UMKM Cendol Jawa!');
  }, 500);
});

// Variabel dan console log
const namaUMKM = 'Cendol Jawa';
console.log('Nama UMKM: ', namaUMKM);

let produk = 3;
console.log('Jumlah produk yang tersedia: ', produk);
produk += 2;
console.log('Setelah penambahan: ', produk);

// Animasi scroll reveal
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
});