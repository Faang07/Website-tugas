const parallaxBackground = document.querySelector('.parallax-background');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallaxBackground.style.transform = `translateY(${offset * 0.5}px)`; // Atur kecepatan paralaks (0.5 = setengah kecepatan scroll)
});

// Mendapatkan elemen-elemen yang dibutuhkan
const loginContainer = document.querySelector('.login-container');
const formWrapper = document.querySelector('.form-wrapper');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('button[type="submit"]');

// Menambahkan event listener pada tombol login
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Mencegah pengiriman formulir default

  // Mendapatkan nilai input email dan password
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validasi input (contoh sederhana)
  if (email === '' || password === '') {
    alert('Email dan Password harus diisi.');
    return;
  }

  // Simulasi pengiriman data ke server (ganti dengan logika sebenarnya)
  console.log('Email:', email);
  console.log('Password:', password);

  // Setelah login berhasil (simulasi)
  alert('Login berhasil!');
  // Redirect ke halaman berikutnya (ganti dengan URL yang sesuai)
  window.location.href = 'index.html'; 
});
