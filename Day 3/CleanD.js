const laporanCabang = [
    "Jakarta | burger-25000-10 , pizza-80000-5",
    "Bandung | burger-25000-8 , fries-15000-20",
    "Surabaya | pizza-80000-2 , fries-15000-10 , burger-25000-5"
];

function checkProfit() {
    return laporanCabang
        .flatMap((baris) => {

            const [ListCity, ListFoodsStr] = baris.trim().split('|')

            const MenuList = ListFoodsStr.split(',')


            return MenuList.map(e => {
                const [name, price, total] = e.split("-")
                return {
                    lokasi: ListCity,
                    makanan: name.trim(),
                    hargaSatuan: Number(price),
                    jumlahTerjual: Number(total),
                    totalProfit: Number(price) * Number(total)
                }


            })
        })


    .filter(e => e.makanan  === 'burger')
    .reduce((acc, curr)=> acc + curr.totalProfit,0)
}

console.log(checkProfit())