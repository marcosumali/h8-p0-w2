// TUGAS 1

var nama = "Marco";
var angka_pembilang = 1;
var angka_penyebut = 2;
var hasil_bagi = angka_pembilang / angka_penyebut;

console.log("Tugas 1");
console.log("Halo " + nama + ", " + angka_pembilang + " dibagi " + angka_penyebut + " adalah sama dengan " + hasil_bagi);
console.log("");

// TUGAS 2

var alas_segitiga = 5;
var tinggi_segitiga = 10;
var luas_segitiga = alas_segitiga * tinggi_segitiga / 2;

console.log("Tugas 2");
console.log("Luas Segitiga: " + luas_segitiga);
console.log("");

// TUGAS 3

var tahun = 1900; // Harap masukkan sebuah tahun

console.log("Tugas 3");
if (tahun % 4 == 0) {
    if (tahun % 100 !== 0) {
        console.log(tahun + " adalah tahun kabisat")
    }
    else {
        if (tahun % 400 == 0) {
            console.log(tahun + " adalah tahun kabisat")
        }
        else {
            console.log(tahun + " adalah bukan tahun kabisat")
        }
    }
} 
else {
    console.log(tahun + " adalah bukan tahun kabisat")
}
    

