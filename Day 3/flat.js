const dataDalem = [1, [2, [3, [4]]]];

console.log(dataDalem.flat(3)); 
// Hasil: [1, 2, 3, [4]] (Bongkar 2 lapis)

console.log(dataDalem.flat(Infinity)); 
// Hasil: [1, 2, 3, 4] (Bongkar SEMUA sampe rata, mau sedalem apa pun)