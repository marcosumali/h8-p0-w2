// CERITA PETUALANGAN INTERAKTIF HANSEL DAN GRETEL
// EPISODE IBU TIRI, SERIGALA DAN RUMAH KUE NENEK SIHIR - TERDIRI DARI 12 CHAPTER
// PROGRAM INI DIBUAT UNTUK MENCERITAKAN KISAH PETUALANGAN INTERAKTIF HANSEL DAN GRETEL
// DIMANA NASIB HANSEL DAN GRETEL BERGANTUNG PADA INPUT PEMAIN DI BAWAH INI
// BACALAH PERATURAN PERMAINAN DAN PILIHLAH JAWABAN ANDA SEBIJAKSANA MUNGKIN

//---------------------------------------INPUT---------------------------------------
                            //PERATURAN PERMAINAN !!
    var input_1 = ""; //A   // 1. SELALULAH ISI input_1 DENGAN A UNTUK MEMULAI PERMAINAN
    var input_2 = "";       // 2. ISILAH SECARA URUT DARI input_2 SAMPAI DENGAN input_12
    var input_3 = "";       // 3. ISILAH SETIAP INPUT DENGAN A ATAU B SESUAI DENGAN PERTANYAAN SETIAP CHAPTER
    var input_4 = "";       // 4. TIPE DATA INPUT HARUS BERUPA STRING
    var input_5 = "";       // 5. JIKA JAWABAN BENAR MAKA CERITA AKAN BERLANJUT
    var input_6 = "";       // 6. JIKA JAWABAN KURANG TEPAT MAKA CERITA AKAN BERAKHIR
    var input_7 = "";       // 7. JANGAN LUPA SAVE SETIAP INPUT SEBELUM RUN CODE
    var input_8 = "";
    var input_9 = "";
    var input_10 = "";
    var input_11 = "";
    var input_12 = "";


//-----------------------------------START GAME-----------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------- 

//---------------------------------------QUESTION---------------------------------------

    var Q1 = "QUESTION: Apa yang akan Ayah lakukan?";
    var Q2 = "QUESTION: Apa yang akan Hans dan Gretel lakukan?";
    var Q3 = "QUESTION:Apa yang akan Hans lakukan?";
    var Q4 = "QUESTION: Apa yang akan Gretel lakukan?";
    var Q5 = "QUESTION: Apa yang akan Hans dan Gretel lakukan?";
    var Q6 = "QUESTION: Apa yang akan Hans dan Gretel lakukan?";
    var Q7 = "QUESTION: Apa yang akan Hans dan Gretel lakukan?";
    var Q8 = "QUESTION:Apa yang akan Hans lakukan?";
    var Q9 = "QUESTION: Apa yang akan Gretel lakukan?";
    var Q10 = "QUESTION: Apa yang akan Gretel lakukan?";
    var Q11 = "QUESTION: Apa yang akan Hans dan Gretel lakukan?";
    var Q12 = "";

//---------------------------------------INTERLOG---------------------------------------

    //INTERLOG 1 - Ayah mau nikah lagi
    var interlog_1A = "[A] Ayah akan menikah lagi untuk membuat Hans dan Gretel bahagia lagi !";
    var interlog_1B = "[B] Ayah akan berhenti bekerja dan menjadi pedangdut Karawang !";
    var interlog_1 = [interlog_1A, interlog_1B];
   
    //INTERLOG 2 - Hans dan Gretel berpikir bersama
    var interlog_2A = "[A] Hans dan Gretel berpikir bersama untuk menyelesaikan masalah !";
    var interlog_2B = "[B] Hans dan Gretel berlatih untuk menjadi Karawang Next Top Dangdut Idol !";
    var interlog_2 = [interlog_2A, interlog_2B];

    //INTERLOG 3 - Hans berbohong
    var interlog_3A = "[A] Hans berpikir lebih baik berbohong !";
    var interlog_3B = "[B] Hans berpikir lebih baik jujur !";
    var interlog_3 = [interlog_3A, interlog_3B];

    //INTERLOG 4 - Gretel pergi mengikuti Hans
    var interlog_4A = "[A] Gretel percaya dan pergi mengikuti Hans pulang ke rumah !";
    var interlog_4B = "[B] Gretel memaksa Hans untuk tinggal di dalam kegelapan Hutan !";
    var interlog_4 = [interlog_4A, interlog_4B];
    
    //INTERLOG 5 - Hans dan Gretel berdoa bersama
    var interlog_5A = "[A] Hans dan Gretel berdoa bersama menurut Agama dan kepercayaan masing-masing !";
    var interlog_5B = "[B] Hans dan Gretel belajar coding bersama !";
    var interlog_5 = [interlog_5A, interlog_5B];

    //INTERLOG 6 - Hans dan Gretel pergi mencari potongan roti
    var interlog_6A = "[A] Hans dan Gretel pergi berjalan mencari potongan roti yang dilempar Hans tadi !";
    var interlog_6B = "[B] Hans dan Gretel memilih untuk diam di tempat !";
    var interlog_6 = [interlog_6A, interlog_6B];

    //INTERLOG 7 - Hans dan Gretel mendekati rumah kue dan memakannya
    var interlog_7A = "[A] Hans dan Gretel sepakat untuk mendekati rumah tersebut dan memakannya karena lapar !";
    var interlog_7B = "[B] Hans dan Gretel kembali ke dalam Hutan !";
    var interlog_7 = [interlog_7A, interlog_7B];

    //INTERLOG 8 - Hans mengelabui nenek sihir
    var interlog_8A = "[A] Hans berpikir untuk mengelabui si nenek sihir dengan menjulurkan tulang ayam tiren !";
    var interlog_8B = "[B] Hans dengan jujur menjulurkan tangannya !";
    var interlog_8 = [interlog_8A, interlog_8B];

    //INTERLOG 9 - Gretel mengelabui nenek sihir
    var interlog_9A = "[A] Gretel berpikir untuk mengelabui si nenek sihir dengan berpura-pura tidak bisa membuka tungku api !";
    var interlog_9B = "[B] Gretel dengan cepat membuka tungku api !";
    var interlog_9 = [interlog_9A, interlog_9B];

    //INTERLOG 10 - Gretel tidak menghiraukan si nenek sihir dan pergi menolong Hans
    var interlog_10A = "[A] Gretel berpikir untuk meninggalkan si nenek sihir dan menolong Hans !";
    var interlog_10B = "[B] Gretel merasa bersalah telah mendorong dan akhirnya menolong si nenek sihir!";
    var interlog_10 = [interlog_10A, interlog_10B];

    //INTERLOG 11 - Hans dan Gretel naik punggung Angsa
    var interlog_11A = "[A] Hans dan Gretel sepakat untuk naik punggung Angsa !";
    var interlog_11B = "[B] Hans dan Gretel sepakat untuk pulang sendiri tanpa bantuan Angsa !";
    var interlog_11 = [interlog_11A, interlog_11B];

    //INTERLOG 12 - Hans dan Gretel bertemu dengan Ayah
    var interlog_12A = "";
    var interlog_12B = "";
    var interlog_12 = [interlog_12A, interlog_12B];

//---------------------------------------STORY LINE---------------------------------------
    
    var judul_1 = "CERITA PETUALANGAN INTERAKTIF HANSEL DAN GRETEL";
    var judul_2 = "EPISODE IBU TIRI, SERIGALA DAN RUMAH KUE NENEK SIHIR";

    var cerita_1 = ["Di sebuah desa pada zaman dahulu hiduplah sebuah keluarga bahagia.", 
                    "Mereka mempunyai dua orang anak yang manis, namanya Hans dan Gretel.",
                    "Suatu ketika Ibu tercinta, yang selalu mengenakan bros angsa, meninggal karena sakit.",
                    "Sejak kematian sang Ibu, mereka selalu bersedih sepanjang hari."]

    //------------- Interlog 1

    var cerita_2 = ["Agar mereka tidak bersedih, kemudian Ayah mengambil Ibu baru untuk menghibur mereka.",
                    "Ternyata Ibu baru ini sangat jahat dan memperlakukan mereka dengan buruk.",
                    "Dari pagi hingga petang mereka disuruh terus bekerja dan hanya diberi makan satu kali.",
                    "Musim kemarau pun tiba, dan mereka tidak mempunyai makanan apa-apa.",
                    "Sang Ibu menyuruh anak-anak untuk dibawa ke hutan dan meninggalkannya di sana.",
                    "Ayah sangat terkejut mendengarnya ' Bicara apa kau, apa kau ingin anak-anak mati ?! '", 
                    "' Kau ini memang bodoh, kalau kita tidak melakukannya, kita semua akan mati ! '",
                    "Sementara itu dari balik kamar , Hans dan Gretel mendengarkan pembicaraan mereka.",
                    "Mereka ketakutan dan Gretel pun menangis.",
                    "Akhirnya Ayah tidak bisa berbuat apa-apa karena istrinya terus mendesaknya."]

    //-------------  Interlog 2

    var cerita_3 = ["' Ah… apa kita akan mati di hutan ?! ' ucap Gretel.",
                    "' Ssst.., aku punya ide bagus, ' ucap Hans.", 
                    "Lalu ia keluar rumah dan mengumpulkan batu-batu kecil putih yang bila terkena cahaya bulan, akan bersinar.", 
                    "Pada esok paginya dengan berteriak keras, Ibunya membangunkan Hans dan Gretel.",
                    "Sebelum berangkat ia memberikan sepotong roti kepada mereka.",
                    "Setelah itu semua berangkat menuju hutan.",
                    "Sambil berjalan Hans membuang batu kecil putih satu per satu yang ada dalam kantongnya.",
                    "Karena berjalan sambil menoleh ke belakang, Ayah menjadi curiga.",
                    "' Sedang apa, Hans ? ' Ucap sang Ayah." ]  

    //-------------  Interlog 3

    var cerita_4 = ["'Aku sedang memandang kucing yang ada di atas rumah,' jawab Hans berbohong.", 
                    "Lalu tibalah mereka di tengah hutan.",
                    "Ayah dan Ibunya pergi ke hutan yang lebih jauh lagi untuk menebang kayu dan meninggalkan mereka.", 
                    "Rasa sedihpun berganti gembira setelah di tengah hutan Hans menemukan seekor kupu-kupu dan Gretel membuat kalung dari bunga.", 
                    "Mereka sangat gembira karena bisa bermain- main bersama teman baru mereka seperti kelinci, bajing dan burung-burung kecil.",
                    "Tanpa terasa waktu berlalu, mataharipun mulai tenggelam dan hari mulai gelap.",
                    "Suara burung-burung yang indah kini berganti dengan suara angin yang berdesir.",
                    "Gretel menangis tersedu-sedu karena takut.",
                    "Hans berkata menenangkan, ' Jangan menangis, jika cahaya bulan muncul, kita pasti akan pulang dengan selamat. '",
                    "Tak lama kemudian, dari sela-sela pohon muncullah cahaya bulan yang bersinar dengan terang.", 
                    "Hans segera mengajak Gretel untuk pulang ke rumah."] 

    //-------------  Interlog 4

    var cerita_5 = ["Hans memegang tangan Gretel dan menyusuri jalan di hutan tanpa ragu-ragu.",
                    " ' Kak, kok bisa berjalan tanpa bingung di hutan yang gelap begini? '",
                    " ' Oh… batu kecil putih yang kujatuhkan ketika kita datang, bersinar karena kena sinar bulan dan itu akan menolong kita pulang ke rumah. '", 
                    "Tibalah mereka di rumah, sang Ibu heran melihatnya dan mencari tahu bagaimana mereka bisa sampai di rumah dengan mudah.", 
                    "Ketika ia membuka pintu, ia melihat batu kecil putih yang bersinar.", 
                    "Agar mereka tidak bisa mengumpulkan batu putih itu lagi, Ibu mengunci pintu kamar mereka.",
                    "Hans dan Gretel menjadi panik karenanya."]

    //-------------  Interlog 5

    var cerita_6 = ["Sebelum tidur mereka berdoa pada Tuhan, meminta perlindungan.",
                    "Keesokan harinya seperti kemarin, Ibu membangunkan mereka dan membawa mereka ke hutan.",
                    "Hans tidak kehabisan akal. Dengan terpaksa ia mencuil-cuil potongan roti dan menjatuhkannya di jalan sambil berjalan.", 
                    "Tapi malang, jejak yang sudah dIbuatnya susah payah dimakan oleh burung-burung kecil.",
                    "Sampailah mereka di dalam hutan.",
                    "Kembali Ayah dan Ibunya meninggalkan mereka dan masuk ke hutan yang lebih jauh.",
                    "Merekapun bermain-main dengan binatang-binatang di dalam hutan.",
                    "Akhirnya malampun tiba.",
                    "Ketika cahaya bulan mulai bersinar mereka beranjak pulang."]

    //-------------  Interlog 6

    var cerita_7 = ["Dengan susah payah dicarinya potongan-potongan roti sebagai petunjuk jalan untuk pulang ke rumah.", 
                    "' Kak, apa yang telah terjadi dengan potongan-potongan roti itu ? ' teriak Gretel cemas.", 
                    "' Mungkin dimakan oleh burung -burung kecil '",
                    "' Uhh.., kalau begitu kita tidak bisa pulang ke rumah. '", 
                    "Di dalam hutan bergema suara lolongan keras.",
                    "Mereka berdua amat ketakutan.",
                    "' Kak, aku takut, kita akan mati ! ' Gretel mulai menangis.", 
                    "' Jangan khawatir dik, Ibu yang ada di surga pasti menolong kita.'",
                    "Karena lelah, mereka akhirnya tertidur dengan pulas di bawah pohon.",
                    "Cahaya matahari pun mulai bersinar dan mengenai wajah mereka.",
                    "Hans dan Gretel terbangun dan disambut suara kicauan burung.",
                    "Tiba-tiba mereka mencium bau masakan yang lezat.",
                    "Segera mereka berlari ke arah datangnya bau lezat itu.", 
                    "Seperti mimpi mereka melihat rumah kue, atapnya terbuat dari tart, pintunya dari coklat, dan dindingnya dari biskuit."]

    //-------------  Interlog 7

    var cerita_8 = ["Cepat-cepat mereka mendekati rumah itu dan memakannya.",
                    "Tiba-tiba terdengar suara keras yang bergetar.",
                    "'Siapa itu, berani memakan rumah kue kesayanganku ? ', muncullah seorang nenek sihir tua dengan wajah menyeramkan serta mata merah yang bersinar, lalu menangkap mereka berdua.", 
                    "' Hi… Hi…. Hi…. anak-anak yang lezat, sebagai hukuman karena telah memakan rumput kue kesukaanku, aku akan memakan kalian. '",
                    "Dengan kasar nenek sihir itu menyeret Hans masuk ke dalam penjara.",
                    "Setelah itu ia berkata kepada Gretel, ' Mula-mula aku akan menggemukkan anak laki-laki itu, lalu aku akan memakannya. '", 
                    "' Sekarang kau buat makanan yang enak biar makannya banyak ! '", 
                    "Nenek sihir itu sudah tua sekali dan matanya mulai rabun.",
                    "Pada saat itu Hans dan Gretel saling berpegangan tangan memberi semangat supaya mereka tabah.",
                    "' Tabahlah Gretel, Ibu yang ada di surga pasti melindungi kita '.", 
                    "Suatu hari nenek mendekati penjara Hans untuk melihat apakah tubuh Hans sudah menjadi gemuk atau belum.",
                    "' Aku lapar, sudah seberapa gemuk tubuhmu, ayo ulurkan tanganmu ! '"] 

    //-------------  Interlog 8

    var cerita_9 = ["Hans yang pintar tidak kehilangan akal, ia mengetahui kalau mata nenek sudah rabun segera dikeluarkannya tulang sisa makanan kepada nenek yang rabun lalu nenek memegangnya.",
                    "Betapa kecewanya nenek karena sedikitpun Hans tidak bertambah gemuk.",
                    "Karena kecewa lalu ia bermaksud untuk memakan Gretel.",
                    "Kemudian Gretel disuruh membakar roti.",
                    "Selagi Gretel menyalakan api di tungku, si nenek mencoba mendorongnya ke nyala api.",
                    "Untunglah Gretel mengetahui maksud nenek, cepat-cepat ia berbalik pergi ke depan tungku."] 

    //-------------  Interlog 9

    var cerita_10 = ["' Nek, aku tidak bisa membuka tutup tungku ini. ' Ucap Gretel.", 
                    "Nenek sihir tidak sadar kalau ia sedang diperdaya Gretel dan ia membuka tutup tungku.",
                    "Tanpa membuang kesempatan, Gretel mendorong nenek ke tungku.",
                    "' Ahh… tolong…. panas ! ' teriak nenek kesakitan."]

    //-------------  Interlog 10

    var cerita_11 = ["Gretel tidak memperdulikan teriakan nenek malah dengan cepat ia menutup pintu tungku, lalu berlari ke arah penjara untuk menolong Hans.", 
                    "' Gretel, kau berhasil. Ibu yang di surga telah melindungi kita. '",
                    "Karena bahagia mereka berpelukan.",
                    "Ketika akan pergi dari rumah kue tanpa sengaja mereka menemukan banyak harta karun.",
                    "Setelah itu mereka keluar rumah, tetapi malang jalan itu terpotong oleh sungai besar.", 
                    "Mereka menjadi bingung.",
                    "Saat itu entah dari mana datangnya tiba-tiba muncul seekor angsa cantik.",
                    "' Ayo, naiklah ke punggungku, ' ucap angsa itu ramah."]

    //-------------  Interlog 11

    var cerita_12 = ["Satu per satu angsa itu mengantarkan mereka menyeberang sungai.", 
                    "Setelah sampai, angsa itu menunjuk-kan jalan bagi mereka berdua dari atas langit.",
                    "Sampailah mereka di batas hutan.",
                    "Tanpa mereka ketahui sebenarnya angsa itu adalah Ibu mereka yang ada di surga.",
                    "Angsa itu kemudian menghilang.",
                    "Setelah itu muncullah Ayah mereka yang sangat cemas.",
                    "Hans dan Gretel saling berpandangan seolah tidak percaya telah melihat Ayah mereka dan takut itu tipuan nenek sihir.",
                    "' Anak-anakku tersayang, maafkanlah Ayah. Ayah tidak akan meninggalkan kalian lagi. '", 
                    "Lalu Ayah menceritakan kepada mereka bahwa Ibu tiri yang jahat sudah meninggal karena sakit.",
                    "Akhirnya mereka pun hidup bahagia selamanya.",
                    "THE END - HAPPY ENDING <3"]

    //-------------  Interlog 12

//---------------------------------------ENDING---------------------------------------

    // Ending 2 - Ayah menjadi pedangdut profesional

    var ending_1 = "MAAF, Harap baca peraturan No.1 dan input ulang.";

    var ending_2 = ["Ayah beralih profesi menjadi Pedangdut Profesional Karawang.",
                    "Ayah akhirnya terkenal dan sering meninggalkan rumah dalam jangka waktu lama untuk tur.",
                    "Hans dan Gretel pun terlantar dan menjadi pengemis miskin.",
                    "Mereka pun akhirnya mati mengenaskan karena overdosis cireng.",
                    "THE END - TRY AND TRY AGAIN FELLAS $$."]

    // Ending 3 - Hans dan Gretel menjadi pedangdut profesional

    var ending_3 = ["Hans dan Gretel berlatih keras untuk mengikuti ajang Karawang Next Top Dangdut Idol.",
                    "Mereka pun akhirnya memenangkan kontes tersebut dan meraih hadiah 1 juta dollar Zimbabwe.",
                    "Karena mereka masih di bawah umur, akhirnya uang tersebut diserahkan ke Ibu tiri sebagai wali mereka.",
                    "Mereka pun akhirnya dibuang oleh Ibu tiri mereka di Karawang dan akhirnya mati kelaparan.",   
                    "THE END - TRY AND TRY AGAIN FELLAS $$."]

    // Ending 4 - Hans jujur kepada Ayah

    var ending_4 = ["Ayah memahami perasaan mereka dan membiarkannya.",
                    "Tetapi teryata Ibu tiri mengikuti mereka ke hutan dan mengetahui rencana tersebut.",
                    "Ibu tiri pun akhirnya mengumpulkan batu tersebut tanpa diketahui dan pulang ke rumah.",
                    "Ketika malam tiba, Hans dan Gretel berusaha untuk mencari batu tersebut untuk pulang tetapi tidak ada.",
                    "Terdengar suara lolongan serigala raksasa yang akhirnya memakan Hans dan Gretel.",   
                    "THE END - TRY AND TRY AGAIN FELLAS $$."]

    // Ending 4561112 - Hans dan Gretel dimakan serigala

    var ending_5 = ["Hans dan Gretel pun terjebah di tengah hutan belantara penuh kegelapan.",
                      "Mereka pun memilih untuk tidur di bawah pohon rindang di tengah hutan.",
                      "Ternyata pohon itu adalah sarang serigala ganas sakti di hutan itu dan mereka pun terperangkap.",
                      "Mereka pun akhirnya mati mengenaskan dimakan oleh serigala tersebut.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    var ending_6 = ["Hans dan Gretel pun terjebah di tengah hutan belantara penuh kegelapan.",
                      "Mereka pun memilih untuk tidur di bawah pohon rindang di tengah hutan.",
                      "Ternyata pohon itu adalah sarang serigala ganas sakti di hutan itu dan mereka pun terperangkap.",
                      "Mereka pun akhirnya mati mengenaskan dimakan oleh serigala tersebut.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    var ending_7 = ["Hans dan Gretel pun terjebah di tengah hutan belantara penuh kegelapan.",
                      "Mereka pun memilih untuk tidur di bawah pohon rindang di tengah hutan.",
                      "Ternyata pohon itu adalah sarang serigala ganas sakti di hutan itu dan mereka pun terperangkap.",
                      "Mereka pun akhirnya mati mengenaskan dimakan oleh serigala tersebut.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]
                      
    var ending_12 = ["Hans dan Gretel pun terjebah di tengah hutan belantara penuh kegelapan.",
                      "Mereka pun memilih untuk tidur di bawah pohon rindang di tengah hutan.",
                      "Ternyata pohon itu adalah sarang serigala ganas sakti di hutan itu dan mereka pun terperangkap.",
                      "Mereka pun akhirnya mati mengenaskan dimakan oleh serigala tersebut.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    // Ending 7-10 - Hans dan Gretel dimakan nenek sihir

    var ending_8 = ["Si nenek sihir yang sudah kelaparan menjadi ingat bahwa dia mempunyai kacamata pembesar.",
                      "Si nenek sihir pun akhirnya mengenakan kacamata tersebut dan melihat Hans serta Gretel yang gemuk.",
                      "Hans dan Gretel pun akhirnya mati dimakan hidup-hidup oleh si nenek sihir.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    var ending_9 = ["Si nenek sihir yang sudah kelaparan menjadi ingat bahwa dia mempunyai kacamata pembesar.",
                      "Si nenek sihir pun akhirnya mengenakan kacamata tersebut dan melihat Hans serta Gretel yang gemuk.",
                      "Hans dan Gretel pun akhirnya mati dimakan hidup-hidup oleh si nenek sihir.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]


    var ending_10 = ["Si nenek sihir yang sudah kelaparan menjadi ingat bahwa dia mempunyai kacamata pembesar.",
                      "Si nenek sihir pun akhirnya mengenakan kacamata tersebut dan melihat Hans serta Gretel yang gemuk.",
                      "Hans dan Gretel pun akhirnya mati dimakan hidup-hidup oleh si nenek sihir.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    var ending_11 = ["Si nenek sihir yang sudah kelaparan menjadi ingat bahwa dia mempunyai kacamata pembesar.",
                      "Si nenek sihir pun akhirnya mengenakan kacamata tersebut dan melihat Hans serta Gretel yang gemuk.",
                      "Hans dan Gretel pun akhirnya mati dimakan hidup-hidup oleh si nenek sihir.",
                      "THE END - TRY AND TRY AGAIN FELLAS $$."]

    // Good Ending - Hans dan Gretel bertemu dengan Ayah

//---------------------------------------CODING---------------------------------------

    console.log(judul_1);
    console.log(judul_2);
    console.log("");
    
    startGame ();

    function startGame () {
        var input = [input_1, input_2, input_3, input_4, input_5, input_6,
            input_7, input_8, input_9, input_10, input_11, input_12];
        
        var cerita = [cerita_1, cerita_2, cerita_3, cerita_4, cerita_5, cerita_6,
                        cerita_7, cerita_8, cerita_9, cerita_10, cerita_11, cerita_12];
        
        var question = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12];

        var interlog = [interlog_1, interlog_2, interlog_3, interlog_4, interlog_5, interlog_6,
                        interlog_7, interlog_8, interlog_9, interlog_10, interlog_11, interlog_12];
        
        var ending = [ending_1, ending_2, ending_3, ending_4, ending_5, ending_6,
                        ending_7, ending_8, ending_9, ending_10, ending_11, ending_12];
               
        for (i = 0; i <= input.length - 1; i++) {
            if (input[i] === "A") {
                console.log("CHAPTER " + [i+1]);
                console.log(cerita[i]);
                console.log("");
                console.log(question[i])
                console.log(interlog[i][0]);
                console.log(interlog[i][1]);
                console.log("");
            } else if (input[i] === "B") {
                console.log("EPILOGUE")
                console.log(ending[i]);
            } else if (input[i] === "") { 

            } else {
                console.log("MAAF, Jawaban yang Anda masukkan salah. Silahkan baca peraturan dan input lagi.")
            }
        }   
    }
