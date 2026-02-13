const keranjang = [
  { produk: "Kemeja", harga: 200000, jumlah: 2 },
  { produk: "Celana", harga: 150000, jumlah: 1 },
  { produk: "Topi", harga: 50000, jumlah: 3 }
];

const kasir = keranjang
.map(e=>{
    const totalHargaPerItem = e.harga * e.jumlah
    return{
        ...e,
        subTotal: totalHargaPerItem
    }
})
.reduce((total, {subTotal}) =>  total + subTotal,0)

console.log(kasir)