const dataKotor = "  sabun-5000-3 , sikat-12000-2 , odol-7000-5 , SAMPO-15000-2 ";

function clean(){
    const clean = dataKotor.trim().split(',')
    .map(e => {
        const [product, price, total] = e.split('-')
        return {
            product: product.toLowerCase(),
            price: Number(price),
            Jumlah: Number(total)

        }
    })
    .filter(p => p.price > 6000)
    .map(e => {
        const totalPrice = e.price * e.Jumlah
        return{
            ...e,
            Total: totalPrice
        }
    })
    .reduce((acc, {Total}) => acc + Total,0)
    
    return clean
    
}


console.log(clean())