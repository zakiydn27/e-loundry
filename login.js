// Fungsi untuk mengirimkan OTP
function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Lakukan validasi nomor WhatsApp di sini jika diperlukan
    if (!phoneNumber) {
        alert('Silakan isi nomor WhatsApp Anda.');
        return;
    }
    
    // Kirim OTP ke nomor WhatsApp menggunakan metode yang sesuai (misalnya: API)
    
    // Tampilkan alert bahwa OTP telah dikirim
    alert('OTP WhatsApp Anda 123456.');
    
    // Tampilkan form verifikasi OTP dengan efek slide ke samping
    document.getElementById('otpContainer').classList.remove('slide-out');
}

// Fungsi untuk verifikasi OTP
function verifyOTP() {
    const otp = document.getElementById('otp').value;
    
    // Lakukan verifikasi OTP menggunakan metode yang sesuai (misalnya: API)
    
    // Contoh verifikasi sukses
    const verificationSuccess = otp === '123456'; // Ganti dengan hasil verifikasi dari API
    
    if (verificationSuccess) {
        // Jika verifikasi berhasil, redirect pengguna ke halaman beranda
        window.location.href = "home.html"; // Ganti dengan halaman beranda Anda
    } else {
        // Jika verifikasi gagal, tampilkan pesan kesalahan
        alert('OTP yang dimasukkan salah. Silakan coba lagi.');
    }
}

// Mendapatkan tombol "Kirim OTP"
const sendOTPButton = document.getElementById('sendOTPButton');

// Menambahkan event listener untuk tombol "Kirim OTP"
sendOTPButton.addEventListener('click', sendOTP);

// Mendapatkan tombol "Verifikasi OTP"
const verifyOTPButton = document.getElementById('verifyOTPButton');

// Menambahkan event listener untuk tombol "Verifikasi OTP"
verifyOTPButton.addEventListener('click', verifyOTP);
// Fungsi untuk verifikasi OTP
function verifyOTP() {
    const otp = document.getElementById('otp').value;

    // Lakukan verifikasi OTP menggunakan metode yang sesuai (misalnya: API)

    // Contoh verifikasi sukses
    const verificationSuccess = true; // Ganti dengan hasil verifikasi dari API

    if (verificationSuccess) {
        // Jika verifikasi berhasil, redirect pengguna ke halaman beranda
        window.location.href = "order_form.html"; // Ganti dengan halaman beranda Anda
    } else {
        // Jika verifikasi gagal, tampilkan pesan kesalahan
        document.getElementById('errorMessage').innerText = 'OTP yang dimasukkan salah. Silakan coba lagi.';
    }
}
