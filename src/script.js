document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen tombol hamburger dan menu mobile
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    // Menambahkan event listener untuk mengubah tampilan menu mobile saat tombol hamburger ditekan
    hamburgerIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});