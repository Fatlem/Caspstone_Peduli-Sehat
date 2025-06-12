# Peduli Sehat

Proyek ini terdiri dari tiga komponen utama: Frontend, Backend, dan ML (Machine Learning). Ikuti petunjuk di bawah ini untuk mengatur dan menjalankan proyek.

## Petunjuk Instalasi

### 1. Pengaturan ML (Machine Learning)

```bash
# Masuk ke direktori ML
cd ML

# Buat virtual environment Python
python -m venv venv

# Aktifkan virtual environment
.\venv\Scripts\activate

# Install dependensi Python
pip install -r requirements.txt

# Install dependensi Node.js
npm install

# Jalankan server ML
npm run start
```

### 2. Pengaturan Backend

```bash
# Masuk ke direktori Backend
cd BackEnd

# Install dependensi
npm install

# Pengaturan Database
1. Jalankan XAMPP dan aktifkan Apache dan MySQL
2. Buka phpMyAdmin (http://localhost/phpmyadmin)
3. Buat database baru dengan nama 'user_auth'
4. Import struktur database dari file BackEnd/Database/user_auth.sql

# Jalankan server backend
npm run start
```

### 3. Pengaturan Frontend

```bash
# Masuk ke direktori Frontend
cd FrontEnd

# Install dependensi
npm install

# Jalankan aplikasi frontend
npm run start
```

## Menjalankan Aplikasi

Pastikan untuk menjalankan semua komponen dengan urutan berikut:

1. Jalankan XAMPP (Apache dan MySQL)
2. Jalankan server Backend (cd BackEnd && npm run start)
3. Jalankan aplikasi Frontend (cd FrontEnd && npm run start)
4. Jalankan server ML (cd ML && npm run start)

Setiap komponen harus dijalankan di jendela terminal yang terpisah dengan virtual environment yang aktif jika diperlukan.

## Catatan Penting

- Pastikan XAMPP sudah berjalan sebelum menjalankan server backend
- Pastikan semua port yang diperlukan tersedia
- Tetap aktifkan virtual environment saat bekerja dengan komponen ML
