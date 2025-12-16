// ===== FITUR ES6 #1 & #2: let & const + Arrow Function =====
document.addEventListener('DOMContentLoaded', () => {
  
  // Menggunakan const untuk variabel yang tidak berubah
  const galeriSection = document.querySelector('#galeri');
  const galeriCards = galeriSection.querySelectorAll('.card');
  
  // ===== FITUR ES6 #3: Template Literal =====
  console.log(`✅ Galeri.js berhasil dimuat!`);
  console.log(`📌 Total ${galeriCards.length} card galeri terdeteksi`);
  
  // Loop setiap card menggunakan forEach dengan Arrow Function
  galeriCards.forEach((card) => {
    const img = card.querySelector('img');
    const paragraph = card.querySelector('p');
    
    // ========================================
    // FITUR 1: Tampilkan nama produk saat gambar diklik
    // ========================================
    img.addEventListener('click', function() {
      // ===== FITUR ES6 #4: Destructuring =====
      // Destructuring untuk mengambil atribut alt dari gambar
      const {alt} = this;
      
      // Cari atau buat elemen untuk menampilkan nama produk
      let productName = card.querySelector('.product-name');
      
      if (!productName) {
        productName = document.createElement('div');
        productName.classList.add('product-name');
        card.appendChild(productName);
      }
      
      // ===== FITUR ES6 #3: Template Literal =====
      // Menggunakan template literal untuk menampilkan nama produk
      productName.textContent = `📸 ${alt}`;
      productName.style.display = 'block';
      productName.classList.add('fade-in');
      
      // ===== FITUR ES6 #2: Arrow Function dalam setTimeout =====
      setTimeout(() => {
        productName.classList.remove('fade-in');
      }, 500);
      
      // Tambahkan efek animasi klik
      card.classList.add('success-pulse');
      setTimeout(() => {
        card.classList.remove('success-pulse');
      }, 600);
    });
    
    // ========================================
    // FITUR 2: Efek hover menggunakan classList
    // ========================================
    
    // Event saat mouse masuk ke card (hover)
    card.addEventListener('mouseenter', () => {
      card.classList.add('card-hover');
      img.classList.add('img-zoom');
    });
    
    // Event saat mouse keluar dari card
    card.addEventListener('mouseleave', () => {
      card.classList.remove('card-hover');
      img.classList.remove('img-zoom');
    });
    
    // Event hover khusus pada gambar
    img.addEventListener('mouseenter', () => {
      img.classList.add('img-glow');
    });
    
    img.addEventListener('mouseleave', () => {
      img.classList.remove('img-glow');
    });
  });
  
  // ===== FITUR ES6 #3: Template Literal untuk logging info =====
  // Hitung total gambar di galeri
  let totalGambar = 0;
  galeriCards.forEach((card) => {
    const img = card.querySelector('img');
    if (img) {
      totalGambar++;
    }
  });
  
  console.log(`🖼️ Total gambar di galeri: ${totalGambar}`);
  console.log(`✨ Fitur galeri aktif: Klik gambar & Hover effect`);
});

// ===== RINGKASAN FITUR ES6 YANG DIGUNAKAN =====
/*
1. let & const: 
   - const untuk variabel yang tidak berubah (galeriSection, galeriCards, dll)
   - let untuk variabel yang bisa berubah (productName, totalGambar)

2. Arrow Function:
   - () => {} digunakan di addEventListener
   - () => {} digunakan di forEach
   - () => {} digunakan di setTimeout

3. Template Literal:
   - `Total ${galeriCards.length} card` untuk string interpolation
   - `📸 ${alt}` untuk menampilkan nama produk
   - Console.log dengan backtick

4. Destructuring:
   - const {alt} = this; untuk mengambil properti alt dari objek gambar
*/