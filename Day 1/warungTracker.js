const belanjaanHariIni = [
  { barang: "Beras", harga: 15000 },
  { barang: "Telor", harga: 25000 },
  { barang: "Minyak", harga: 20000 }
];

// 1. Variabel Hutang
const hutangKemaren = 10000;

// 2. Kerjakan di sini
const totalTagihan = belanjaanHariIni.reduce((acc, curr) => {
  // Isi logikanya di sini
    return acc + curr.harga
  // Hint: tambahkan harga barang (curr.harga) ke dalam celengan (acc)
}, hutangKemaren ); // <--- Masukin variabel hutangKemaren ke sini sebagai saldo awal

console.log(totalTagihan); 
// Hasil yang diharapkan: 70000 (10rb + 15rb + 25rb + 20rb)


const orderan = [
  { item: "Kabel", price: 50000, status: "ready" },
  { item: "Mouse", price: 150000, status: "kosong" },
  { item: "Keyboard", price: 300000, status: "ready" }
];

const ongkir = 15000;

const totalBayar = orderan
  .filter(e => e.status === "ready") // Saring yang ready
  .reduce((acc, curr)=>{
    return acc + curr.price
  }, ongkir); // Hitung total, saldo awal pake variabel ongkir

console.log(totalBayar); 
// Ekspektasi: 50.000 + 300.000 + 15.000 = 365.000