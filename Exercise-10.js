// TUGAS 1

var total = 0;

for(i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
        total = total + i
    }
    else if(i % 2 == 0) {
        total = total - i
    }
}

console.log("Tugas1");
console.log("TOTAL: " + total);
console.log("");

// TUGAS 2

var pagar = "";
console.log("Tugas2");

for(i1 = 1; i1 <= 10; i1++) {
    for(i2 = 0; i2 <= 10; i2++) {
        pagar = pagar + "#";
    }
    console.log(pagar);
    var pagar = "";
}
console.log("");

// TUGAS 3

var bintang = "";
console.log("Tugas3");

for(ii1 = 1; ii1 <= 10; ii1++) {
    for(ii2 = 0; ii2 <= ii1; ii2++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
    var bintang = "";
}

