const dataKotor = "  sabun-5000-3 , sikat-12000-2 , odol-7000-5 , SAMPO-15000-2 ";

function cleanData() {
    return dataKotor
        .split(',') // 1. Pecah jadi array
        .map(e => {
            const bagian = e.trim().toLowerCase().split('-'); // 2. TRIM DI SINI (Tiap elemen)
            const [product, price, qty] = bagian;

            return {
                product: product,
                price: Number(price),
                qty: Number(qty)
            };
        })
        .filter(p => p.price > 6000) // 3. Filter harga > 6000
        .reduce((acc, curr) => acc + (curr.price * curr.qty), 0); // 4. Langsung hajar total
}

console.log(cleanData()); // Hasil: 102000