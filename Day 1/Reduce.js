// 🛠️ Latihan Pendek (Biar gak "Blank" lagi)
// Coba lo kerjain soal kecil ini. Ada array angka: const data = [10, 20, 30, 40];

// Tugas:

// Pakai .reduce() untuk menjumlahkan semua angka itu.

// Kasih saldo awal (initial value) nya 100. 
// Jadi hasilnya harusnya 100 + 10 + 20 + 30 + 40.

const data = [10, 20, 30, 40];


const jumlahAngka = data.reduce((value, data) =>{

    return value + data
}, 100)

console.log(jumlahAngka)

// value (yang lo pake) biasanya disebut 
// acc (singkatan dari Accumulator / Celengan).

// data (yang lo pake) biasanya disebut 
// curr (singkatan dari Current Value / Koin yang lagi dipegang).


