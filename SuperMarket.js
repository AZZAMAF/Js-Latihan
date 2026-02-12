const keranjang = [
  { produk: "Sabun", harga: 5000, status: "diambil" },
  { produk: "Indomie", harga: 3000, status: "diambil" },
  { produk: "Susu", harga: 15000, status: "batal" }, // Ini jangan dihitung
  { produk: "Beras", harga: 60.000, status: "diambil" }
];

const ongkir = 10000;

const totalAkhir = keranjang
    .filter(({status}) => status === "diambil")
    .map(e=>{
      return{
      ...e,
      harga: parseFloat(e.harga)
      }
    })
    .reduce((acc, {harga}) => acc + harga , ongkir)
console.log(`Total yang harus dibayar: Rp ${totalAkhir}`);


const kotak = [
  { produk: "Sabun", harga: 5000, status: "diambil" },
  { produk: "Beras", harga: 60.000, status: "diambil" } // Ini biang keroknya (60)
];

const hasilStandar = kotak.map(item => {
  return {
    ...item,
    // Kita paksa jadi float. 
    // Kalau mau dianggap 60 ribu, jangan pake titik di input awal!
    harga: parseFloat(item.harga).toFixed(2) 
  };
});

console.log(hasilStandar);