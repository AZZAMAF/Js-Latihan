const inventory = [
  { id: 1, name: "Kaos", price: "150000" }, // String
  { id: 2, name: "Topi", price: 80000 },    // Murah (abaikan)
  { id: 1, name: "Kaos", price: "150000" }, // Duplikat (abaikan)
  { id: 3, name: "Jaket", price: "250000" }, // String
  { id: 4, name: "Tas", price: 300000 }      // Angka
];

// CLUE: 
// 1. Pake .filter() buat buang ID yang duplikat (Susah nih! Lo bisa pake index)
// 2. Pake .map() buat ubah string harga jadi Number pake: Number()
// 3. Pake .filter() lagi buat ambil yang > 100.000
// 4. Pake .reduce() buat totalin.

const totalStok = inventory
  .filter((item, index, self) => {
    // Tips: self adalah array inventory itu sendiri. 
    // Cari index pertama di mana item.id ini muncul.
    return self.findIndex(t => t.id === item.id) === index;
  })
  .map(e => {
    // Ubah harga string jadi number di sini
    return { ...e, price: Number(e.price) };
  })
  // ... lanjutin filternya
  .filter(e =>  e.price > 100000)
  // ... lanjutin reducenya
  .reduce((acc,curr)=> acc + curr.price,0)

console.log(totalStok);