function balikString(kalimat) {
    var huruf = kalimat.split("");
    var panjang = huruf.length;
    var panjang_1 =  panjang - 1;
    var kosong = "";

    for(i = panjang_1; i >= 0; i--) {
        kosong = kosong + huruf[i];
    }

    console.log(kosong);
}

balikString("Hello World!");
