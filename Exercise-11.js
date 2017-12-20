// Proxytia Game

var Name = "Marco"; // Harap diisi dengan nama Anda
var Peran = "Penyihir"; // Harap diisi diantara Ksatria / Tabib / Penyihir
var tahunLahir = 1990; // Harap diisi dengan tahun lahir Anda
var umurSekarang =  2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()))

if (Name === "" && Peran === "Ksatria" && Peran === "Tabib" && Peran === "Penyihir" && Peran !== "") {
    var Peran = "Kacung";
    console.log(Peran);
}
else if (Peran === "" || Peran === undefined) {
    console.log("Halo " + Name + ", Pilih peranmu untuk memulai game!");
}
else if (Peran === "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, " + Name);
    console.log("Halo Ksatria " + Name + ", kamu dapat menyerang dengan senjatamu!");
}
else if (Peran === "Tabib") {
    console.log("Selamat datang di Dunia Proxytia, " + Name);
    console.log("Halo Tabib " + Name + ", kamu akan membantu temanmu yang terluka.");
}
else if (Peran === "Penyihir") {
    console.log("Selamat datang di Dunia Proxytia, " + Name);
    console.log("Halo Penyihir " + Name + ", ciptakan keajaiban yang membantu kemenanganmu!");
}
else {
    console.log("Halo " + Name + ", Pilih peranmu dengan benar untuk memulai game!");
}

for (i = 1; i <= tahunLahir; i++) {
    if (i % umurSekarang == 0) {
        console.log(Peran + ' ' + Name + ' menyerang monster!');
        monsterHealth = monsterHealth -  umurSekarang;
    }
    else if (i % kodeMonster == 0) {
        console.log('Monster menyerang ' + Peran + ' ' + Name + '!');
        playerHealth = playerHealth - kodeMonster;
    }
    else if (i % umurSekarang == 0 && i % kodeMonster == 0) {
        playerHealth = playerHealth + kodeMonster;
        monsterHealth = monsterHealth + umurSekarang;
        console.log('Health keduanya bertambah')
    }
}

if (playerHealth > monsterHealth) {
    console.log('Selamat, ' + Peran + ' ' + Name + ' memenangkan pertarungan!');
}
else {
    console.log('Sayang sekali, ' + Peran + ' ' + Name + ' dikalahkan monster...');
}

