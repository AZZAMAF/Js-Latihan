const pembeli = [
  { nama: "Azzam", belanja: 100000, member: true },
  { nama: "Budi", belanja: 50000, member: false }
];

const discountMember = pembeli.map(e=>{
    const nilaiPotongan = e.member ? (0.1 * e.belanja) : 0

    return{
        ...e,
        potongan: nilaiPotongan
    }
})

console.log(discountMember)