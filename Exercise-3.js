var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1910; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal >= 1 && tanggal <= 31 && bulan >= 1 && bulan <= 12 && tahun >= 1900 && tahun <= 2200) {
    switch(bulan) {
        case 1: { console.log(tanggal + " Januari " + tahun); break; }
        case 2: { console.log(tanggal + " Feruari " + tahun); break; }
        case 3: { console.log(tanggal + " Maret " + tahun); break; }
        case 4: { console.log(tanggal + " April " + tahun); break; }
        case 5: { console.log(tanggal + " Mei " + tahun); break; }
        case 6: { console.log(tanggal + " Juni " + tahun); break; }
        case 7: { console.log(tanggal + " Juli " + tahun); break; }
        case 8: { console.log(tanggal + " Agustus " + tahun); break; }
        case 9: { console.log(tanggal + " September " + tahun); break; }
        case 10: { console.log(tanggal + " Oktober " + tahun); break; }
        case 11: { console.log(tanggal + " November " + tahun); break; }
        case 12: { console.log(tanggal + " Desember " + tahun); break; }
    }
}
else {
    console.log("Harap masukkan informasi tanggal, bulan, dan tahun dengan benar !")
}