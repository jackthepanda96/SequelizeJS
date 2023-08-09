## Belajar Menggunakan Sequelize

Di project ini, kita akan belajar untuk membuat sebuah aplikasi CLI (Command Line Interface) dan mengimplementasikan ORM (Object Relational Mapping) untuk berkomunikasi dengan Database.

### Struktur Folder
```
|   config          - konfigurasi database kalian
|   controllers     - logika fungsi yang digunakan dalam program
|   models          - kerangka utama untuk tabel pada database
    - index.js      - coding utama untuk koneksi dengan database
|   node_modules    - folder utama nodejs
|   index.js        - code utama kita
```


### Langkah kerja
    
1. Buat folder project
2. Masuk ke folder project tersebut
3. Jalankan perintah `npm init -y`
4. Jalankan perintah `npm install mysql2 sequelize` untuk melakukan instalasi keperluan ORM
5. Jalankan perintah `npm install prompt-sync` untuk melakukan instalasi library untuk input CLI
6. Selamat coding ^^