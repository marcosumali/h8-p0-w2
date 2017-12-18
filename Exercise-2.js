// Proxytia Game

var Name = "Marco"; // Harap diisi dengan nama Anda
var Peran = "Ksatria"; // Harap diisi diantara Ksatria / Tabib / Penyihir

if (Peran === "" || Peran === undefined) {
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

