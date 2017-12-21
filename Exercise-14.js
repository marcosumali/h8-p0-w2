var input = ["0001", "Sebastian Marco Sumali", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 2, "Pria", "SMA Internasional Metro");
    console.log(input);

    var tanggal_full = input[3];
    var bulan_1 = tanggal_full.split("/");
    var bulan_2 = tanggal_full.split("/");
    var bulan_switch = bulan_1[1];
    switch(bulan_switch) {
        case '01': { console.log("Januari"); break; }
        case '02': { console.log("Februari"); break; }
        case '03': { console.log("Maret"); break; }
        case '04': { console.log("April"); break; }
        case '05': { console.log("Mei"); break; }
        case '06': { console.log("Juni"); break; }
        case '07': { console.log("Juli"); break; }
        case '08': { console.log("Agustus"); break; }
        case '09': { console.log("September"); break; }
        case '10': { console.log("Oktober"); break; }
        case '11': { console.log("November"); break; }
        case '12': { console.log("Desember"); break; }
    }

    bulan_1.sort(function(value1, value2) { return value2 - value1 });
    console.log(bulan_1);

    console.log(bulan_2.join("-"));

    var name = input[1];
    var name_irisan = name.toString().slice(0,15);
    console.log(name_irisan);

}

dataHandling2(input);
