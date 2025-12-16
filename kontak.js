// ========== KONTAK.JS ==========

// === FORM KONTAK ===
function showFeedback(message, type) {
  const feedbackDiv = document.getElementById('feedbackMessage');
  feedbackDiv.textContent = message;
  feedbackDiv.className = 'feedback-message show ' + type;
  
  setTimeout(() => {
    feedbackDiv.classList.remove('show');
  }, 5000);
  
  feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('nomorhp').addEventListener('input', function(e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('email').addEventListener('blur', function() {
  const email = this.value.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    this.style.borderColor = '#d32f2f';
  } else if (email) {
    this.style.borderColor = '#2e7d32';
  }
});

document.getElementById('formKontak').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const nomorhp = document.getElementById('nomorhp').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  
  if (!nama || !email || !nomorhp || !pesan) {
    showFeedback('❌ Harap lengkapi semua field!', 'error');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFeedback('❌ Format email tidak valid!', 'error');
    return;
  }
  
  if (nomorhp.length < 10 || nomorhp.length > 13) {
    showFeedback('❌ Nomor HP harus berisi 10-13 digit!', 'error');
    return;
  }
  
  if (!nomorhp.startsWith('08')) {
    showFeedback('❌ Nomor HP harus diawali dengan 08!', 'error');
    return;
  }
  
  console.log('Data Kontak yang dikirim:');
  console.log('Nama:', nama);
  console.log('Email:', email);
  console.log('Nomor HP:', nomorhp);
  console.log('Pesan:', pesan);
  
  showFeedback(`✅ Terima kasih ${nama}! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda melalui ${nomorhp} atau ${email} dalam 1x24 jam.`, 'success');
  
  this.reset();
});

document.getElementById('clearBtn').addEventListener('click', function() {
  if (confirm('Apakah Anda yakin ingin menghapus semua data yang telah diisi?')) {
    document.getElementById('formKontak').reset();
    showFeedback('🗑️ Semua data form telah dihapus!', 'error');
  }
});

// === WEBINAR FORM ===
function showWebinarFeedback(message, type) {
  const feedbackDiv = document.getElementById('webinarFeedback');
  feedbackDiv.textContent = message;
  feedbackDiv.className = 'feedback-message show ' + type;
  
  setTimeout(() => {
    feedbackDiv.classList.remove('show');
  }, 5000);
  
  feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

function updateInputStyle(inputElement, isValid, isWarning = false) {
  inputElement.classList.remove('input-valid', 'input-invalid', 'input-warning');
  
  if (isValid) {
    inputElement.classList.add('input-valid');
  } else if (isWarning) {
    inputElement.classList.add('input-warning');
  } else {
    inputElement.classList.add('input-invalid');
  }
}

// Validasi Real-time
document.getElementById('namaWebinar').addEventListener('input', function() {
  const nama = this.value.trim();
  const minLength = 3;
  
  if (nama.length === 0) {
    hideError('errorNama');
    updateInputStyle(this, false);
  } else if (nama.length < minLength) {
    showError('errorNama', `Nama harus minimal ${minLength} karakter`);
    updateInputStyle(this, false);
  } else {
    hideError('errorNama');
    updateInputStyle(this, true);
  }
});

document.getElementById('emailWebinar').addEventListener('blur', function() {
  const email = this.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email.length === 0) {
    hideError('errorEmail');
    updateInputStyle(this, false);
  } else if (!emailRegex.test(email)) {
    showError('errorEmail', 'Format email tidak valid');
    updateInputStyle(this, false);
  } else if (email.toLowerCase().endsWith('@yahoo.com')) {
    showError('errorEmail', 'Email Yahoo tidak diperbolehkan');
    updateInputStyle(this, false);
  } else {
    hideError('errorEmail');
    updateInputStyle(this, true);
  }
});

document.getElementById('hpWebinar').addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9]/g, '');
  
  const hp = this.value.trim();
  
  if (hp.length === 0) {
    hideError('errorHP');
    updateInputStyle(this, false);
  } else if (hp.length < 10 || hp.length > 13) {
    showError('errorHP', 'Nomor HP harus 10-13 digit');
    updateInputStyle(this, false);
  } else if (!hp.startsWith('08')) {
    showError('errorHP', 'Nomor HP harus diawali dengan 08');
    updateInputStyle(this, false);
  } else {
    hideError('errorHP');
    updateInputStyle(this, true);
  }
});

document.getElementById('topikWebinar').addEventListener('change', function() {
  const topik = this.value;
  
  if (topik === '') {
    showError('errorTopik', 'Pilih topik webinar');
    updateInputStyle(this, false);
  } else {
    hideError('errorTopik');
    updateInputStyle(this, true);
  }
});

document.getElementById('persetujuan').addEventListener('change', function() {
  if (this.checked) {
    hideError('errorPersetujuan');
  } else {
    showError('errorPersetujuan', 'Anda harus menyetujui syarat & ketentuan');
  }
});

// Submit Webinar
document.getElementById('formWebinar').addEventListener('submit', function(e) {
  e.preventDefault();
  
  hideError('errorNama');
  hideError('errorEmail');
  hideError('errorHP');
  hideError('errorTopik');
  hideError('errorPersetujuan');
  
  const nama = document.getElementById('namaWebinar').value.trim();
  const email = document.getElementById('emailWebinar').value.trim();
  const hp = document.getElementById('hpWebinar').value.trim();
  const topik = document.getElementById('topikWebinar').value;
  const persetujuan = document.getElementById('persetujuan').checked;
  
  let isValid = true;
  
  if (nama.length < 3) {
    showError('errorNama', 'Nama harus minimal 3 karakter');
    updateInputStyle(document.getElementById('namaWebinar'), false);
    isValid = false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('errorEmail', 'Format email tidak valid');
    updateInputStyle(document.getElementById('emailWebinar'), false);
    isValid = false;
  } else if (email.toLowerCase().endsWith('@yahoo.com')) {
    showError('errorEmail', 'Email Yahoo tidak diperbolehkan');
    updateInputStyle(document.getElementById('emailWebinar'), false);
    isValid = false;
  }
  
  if (hp.length < 10 || hp.length > 13) {
    showError('errorHP', 'Nomor HP harus 10-13 digit');
    updateInputStyle(document.getElementById('hpWebinar'), false);
    isValid = false;
  } else if (!hp.startsWith('08')) {
    showError('errorHP', 'Nomor HP harus diawali dengan 08');
    updateInputStyle(document.getElementById('hpWebinar'), false);
    isValid = false;
  }
  
  if (topik === '') {
    showError('errorTopik', 'Pilih topik webinar');
    updateInputStyle(document.getElementById('topikWebinar'), false);
    isValid = false;
  }
  
  if (!persetujuan) {
    showError('errorPersetujuan', 'Anda harus menyetujui syarat & ketentuan');
    isValid = false;
  }
  
  if (isValid) {
    processRegistration(nama, email, hp, topik);
  } else {
    showWebinarFeedback('❌ Harap perbaiki error di atas sebelum submit!', 'error');
    
    const firstError = document.querySelector('.error-message[style*="display: block"]');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});

function processRegistration(nama, email, hp, topik) {
  const submitBtn = document.querySelector('#formWebinar .btn-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span>⏳</span> Memproses...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    showPreviewData(nama, email, hp, topik);
    
    showWebinarFeedback(
      `🎉 Pendaftaran berhasil! Konfirmasi telah dikirim ke ${email}. Link webinar akan dikirim H-1.`,
      'success'
    );
    
    document.getElementById('formWebinar').reset();
    
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    
    document.querySelectorAll('#formWebinar input, #formWebinar select').forEach(input => {
      input.classList.remove('input-valid', 'input-invalid', 'input-warning');
    });
    
    console.log('Data Pendaftaran Webinar:');
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('No HP:', hp);
    console.log('Topik:', topik);
    console.log('Waktu Pendaftaran:', new Date().toLocaleString());
    
  }, 2000);
}

function showPreviewData(nama, email, hp, topik) {
  const previewContainer = document.getElementById('previewData');
  const topikText = getTopikText(topik);
  
  document.getElementById('previewNama').textContent = nama;
  document.getElementById('previewEmail').textContent = email;
  document.getElementById('previewHP').textContent = hp;
  document.getElementById('previewTopik').textContent = topikText;
  
  previewContainer.style.display = 'block';
  previewContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  previewContainer.classList.add('success-pulse');
  setTimeout(() => {
    previewContainer.classList.remove('success-pulse');
  }, 600);
}

function getTopikText(value) {
  const topikMap = {
    'strategi': 'Strategi Pemasaran Cendol di Era Digital',
    'resep': 'Rahasia Resep Cendol Autentik Jawa',
    'bisnis': 'Modal dan Analisis Bisnis Minuman Tradisional',
    'inovasi': 'Inovasi Varian Cendol Kekinian'
  };
  return topikMap[value] || value;
}

document.getElementById('resetWebinar').addEventListener('click', function() {
  if (confirm('Apakah Anda yakin ingin mengosongkan semua data form?')) {
    document.getElementById('formWebinar').reset();
    
    hideError('errorNama');
    hideError('errorEmail');
    hideError('errorHP');
    hideError('errorTopik');
    hideError('errorPersetujuan');
    
    document.querySelectorAll('#formWebinar input, #formWebinar select').forEach(input => {
      input.classList.remove('input-valid', 'input-invalid', 'input-warning');
    });
    
    document.getElementById('previewData').style.display = 'none';
    
    showWebinarFeedback('🔄 Form telah direset!', 'error');
  }
});