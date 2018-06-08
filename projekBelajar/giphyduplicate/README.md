## Preview
Preview:

![preview 1](./images/preview1.gif)

## Deskripsi
Projek belajar ini digunakan untuk melatih kemampuan asynchronous, *request* API dangan *ajax*, dan menggunakan *public* API yang tersedia secara gratis. *Public* API yang digunakan adalah [*Giphy API*](https://developers.giphy.com/). 

Hasil dari Projek belajar ini merupakan *website giphy duplicate*.

## Permasalahan yang Belum Selesai
* Saat di inspect dengan chrome, ul di header tetap menampilkan margin padahal seluruh element sudah direset marginnya ke 0. Solusi sementara adalah menggunakan display: flex agar elemen *li*-nya rata secara horizontal.
* Ada yang aneh di button login. Ketika height di set 100%, button malah mengecil, padahal height sudah otomatis ada(walaupun tidak didefenisikan). Sedangkan jika definisi height pada button dihilangkan, heightnya jadi normal kembali(menampilkan sesuai yang diinginkan).