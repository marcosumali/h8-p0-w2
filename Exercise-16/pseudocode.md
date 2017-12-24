// CERITA PETUALANGAN INTERAKTIF HANSEL DAN GRETEL
// EPISODE IBU TIRI, SERIGALA DAN RUMAH KUE NENEK SIHIR - TERDIRI DARI 12 CHAPTER
// PROGRAM INI DIBUAT UNTUK MENCERITAKAN KISAH PETUALANGAN INTERAKTIF HANSEL DAN GRETEL
// DIMANA NASIB HANSEL DAN GRETEL BERGANTUNG PADA INPUT PEMAIN
// FILE PSEUDOCODE

BACA dan SIMPAN "input_1" sampai dengan "input_12"

BACA dan SIMPAN "judul_1"
BACA dan SIMPAN "judul_2"

BACA dan SIMPAN "cerita_1" sampai dengan "cerita_12"
BACA dan SIMPAN "Q1" sampai dengan "Q12"
BACA dan SIMPAN "interlogA" dan interlogB" untuk setiap interlog dari 1 sampai dengan 12
BACA dan SIMPAN "interlog_1" sampai dengan "interlog_12"
BACA dan SIMPAN "ending_1" sampai dengan "ending_12"

TAMPILKAN "judul_1"
TAMPILKAN "judul_2"

PANGGIL FUNGSI "startGame"

BUAT FUNGSI "startGame" tanpa parameter yang berisikan:
    BUAT ARRAY "input" yang terdiri dari "input_1" sampai dengan "input_12"
    BUAT ARRAY "cerita" yang terdiri dari "cerita_1" sampai dengan "cerita_12"
    BUAT ARRAY "question" yang terdiri dari "Q1" sampai dengan "Q12"
    BUAT ARRAY "interlog" yang terdiri dari "interlog_1" sampai dengan "interlog_12" beserta interlogA dan interlogB
    BUAT ARRAY "ending" yang terdiri dari "ending_1" sampai dengan "ending_12"

    ULANGI selama index = 0 sampai dengan index = 12 dengan interval tambah 1 yang berisikan:
        JIKA ARRAY_input sesuai index sama dengan A maka
            TAMPILKAN tulisan "CHAPTER " dan nomor index ditambah 1
            TAMPILKAN ARRAY_cerita sesuai index
            TAMPILKAN baris kosong
            TAMPILKAN ARRAY_question sesuai index
            TAMPILKAN ARRAY_interlogA sesuai index
            TAMPILKAN ARRAY_interlogB sesuai index
            TAMPILKAN baris kosong
        JIKA LAIN ARRAY_input sesuai index sama dengan B maka
            TAMPILKAN tulisan "EPILOGUE"
            TAMPILKAN ARRAY_ending sesuai index
        JIKA LAIN ARRAY_input sesuai index sama dengan kosong maka
            TIDAK perlu TAMPILKAN
        JIKA LAINNYA
            TAMPILKAN tulisan "MAAF, Jawaban yang Anda masukkan salah. Silahkan baca peraturan dan input lagi."

