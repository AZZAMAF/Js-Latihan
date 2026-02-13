const orders = [
  { product: "Laptop", status: "delivered", price: 7000000 },
  { product: "Mouse", status: "pending", price: 150000 },
  { product: "Monitor", status: "delivered", price: 2000000 },
  { product: "Keyboard", status: "delivered", price: 500000 },
  { product: "Headset", status: "cancelled", price: 300000 }
];

// Tulis kode lo di sini
const totalPendapatan = orders
  .filter(e => e.status == "delivered") // Step 1: Ambil yang delivered
  .map(e => e.price - 50000)    // Step 2: Kurangi harga dengan diskon 50rb
//   .reduce((acc, curr) => acc + curr, 0); // lebih Pro
  .reduce((acc, curr) =>{
    return acc + curr
  },0) // Step 3: Jumlahin semua

console.log(totalPendapatan);