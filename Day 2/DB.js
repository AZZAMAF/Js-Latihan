const pembeli = [
  { nama: "Azzam", belanja: 100000, member: true },
  { nama: "Budi", belanja: 50000, member: false },
  { nama: "Caca", belanja: 200000, member: true },
  { nama: "Dedi", belanja: 30000, member: false }
];

const discountMember = pembeli.
    map(e => {
        return{
            ...e,
            diskon: e.member ? "10%" : "0%"
        }
    })

console.log(discountMember)