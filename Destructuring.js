const orderan = [
  { item: "Kabel", price: 50000, status: "ready" },
  { item: "Keyboard", price: 300000, status: "ready" }
];

const ongkir = 15000;

const totalBayar = orderan
  .filter(({ status }) => status === "ready") // Gue udah bantu destructuring di filter nih
  .reduce((acc, { price }) => { 
    // Tulis satu baris di sini tanpa nulis 'curr'
    return acc + price
  }, ongkir);

console.log(totalBayar);