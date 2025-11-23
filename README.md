Portofolio Web
Desain portofolio menggunakan pendekatan modern, responsif, dan didukung dengan dark mode (mode gelap), yang merupakan praktik terbaik saat ini.

🎨 Tampilan & Estetika
Framework CSS: Anda menggunakan Tailwind CSS secara ekstensif (seperti yang terlihat dari banyak kelas utilitas seperti dark:bg-bg-dark, text-primary, md:grid-cols-2).

Tema Warna: Palet warna utama terdiri dari:

Primary: #007BFF (Biru cerah)

Secondary: #FFA500 (Oranye cerah)

Terdapat transisi warna yang halus untuk mode terang/gelap (transition-colors duration-300).

Font: Menggunakan Poppins sebagai sans-serif utama, memberikan tampilan yang bersih dan modern.

Loading Screen: Ada layar loading awal (#loading-screen) yang menampilkan spinner beranimasi, memberikan pengalaman pengguna yang lebih baik saat aset dimuat.

⚙️ Struktur Utama (Berdasarkan ID)
Halaman ini terstruktur dengan baik menggunakan ID yang jelas untuk navigasi:

#hero: Bagian awal/pembuka. Berisi avatar, nama, dan judul.

#about: Deskripsi singkat tentang diri Anda ("Tentang Saya").

#projects: Daftar proyek Anda. Menggunakan kartu proyek (project-card) yang memiliki efek hover yang menarik dan memicu modal untuk detail ("Jalankan").

#pendidikan: Riwayat pendidikan yang disajikan dalam format Timeline responsif (berbeda untuk tampilan desktop dan mobile).

#skills: Daftar kemampuan teknis (Visual Studio Code, HTML, CSS, JavaScript, Java, Python, Tailwind CSS, Figma, dll.) yang ditampilkan dalam bentuk tag yang menarik.

#organization: Aktivitas organisasi menggunakan desain kartu flip 3D yang keren untuk menampilkan tanggung jawab.

#contact: Formulir kontak (formspree.io) dan tautan media sosial.

✨ Fungsionalitas Interaktif (Berdasarkan JavaScript & CSS)
Kode Anda mengimplementasikan beberapa fitur canggih:

Dark Mode (Mode Gelap):

Menggunakan checkbox tersembunyi (#dark-mode-toggle) dan label kustom untuk beralih mode.

CSS Tailwind (misalnya dark:bg-bg-dark) secara otomatis menangani perubahan gaya.

Responsif Navigasi:

Menggunakan hamburger menu (#hamburger) untuk toggle navigasi di perangkat seluler.

Navigasi mobile (.main-nav) muncul dari kanan dan mengambil tinggi penuh viewport (height: 100vh).

Animasi Scroll Reveal:

Menggunakan kelas .reveal dan .visible untuk menerapkan efek animasi (fade dan translateY) saat pengguna scroll ke bagian-bagian baru di halaman.

Animasi Ketik (Typing Effect):

Terdapat elemen <span class="typing-effect text-secondary font-semibold"></span> yang menyarankan akan ada efek pengetikan untuk judul/jabatan Anda, kemungkinan diimplementasikan dalam script.js.

Modal Proyek:

Anda menyiapkan struktur modal (#project-modal) yang akan digunakan untuk menampilkan detail proyek ketika tombol "Jalankan" pada kartu proyek diklik.

Desain Kartu Flip 3D:

Bagian #organization menggunakan properti CSS 3D (perspective, transform-style: preserve-3d, backface-visibility: hidden) untuk menciptakan efek kartu berbalik saat di-hover.

🛠️ Potensi Peningkatan
Meskipun kode Anda sangat baik dan modern, berikut beberapa area yang mungkin dapat Anda periksa di file script.js Anda:

Implementasi Typing Effect: Pastikan script untuk elemen .typing-effect berfungsi dengan baik dan memiliki loop yang halus.

Aksesibilitas (A11y): Pastikan semua elemen interaktif (seperti tombol dark mode dan navigasi hamburger) dapat diakses dan dioperasikan dengan keyboard (menggunakan atribut tabindex jika perlu) dan memiliki label aria yang tepat.

Fungsionalitas Modal: Detail proyek saat ini hanya didefinisikan dalam atribut data-title, data-description, dll. di HTML. Pastikan script yang menangani klik pada .project-card mengambil data ini dan menyuntikkannya ke dalam #project-modal sebelum ditampilkan.

Optimasi Aset: Gambar seperti main.jpg dan latar belakang parallax harus dioptimalkan untuk waktu muat yang lebih cepat.
