var x;

for(x = 1; x <= 100; x++) {
    if(x % 2 == 0) {
        console.log(/*x + " - " + */"GENAP")
    }
    else {
        console.log(/*x + " - " + */"GANJIL")
    }
}

console.log("===========================================================")

var y;

for(y = 1; y <= 100; y += 2) {
    if(y % 3 == 0) {
        console.log(y + " KELIPATAN 3")
    }
    else {
    }
}

console.log("===========================================================")

var z;

for(z = 1; z <= 100; z += 5) {
    if(z % 6 == 0) {
        console.log(z + " KELIPATAN 6")
    }
    else {
    }
}

console.log("===========================================================")

var a;

for(a = 1; a <= 100; a += 9) {
    if(a % 10 == 0) {
        console.log(a + " KELIPATAN 10")
    }
    else {
    }
}
