const peserta = [
  { nama: "Azzam", eskul: "Coding" },
  { nama: "Budi", eskul: "Basket" },
  { nama: "Caca", eskul: "Coding" },
  { nama: "Dedi", eskul: "Musik" }
];

const pesertaCoding = peserta
    .filter(e => e.eskul === "Coding")
    .map(e =>{
        return{
            ...e,
            status: 'siap Beasiswa'
        }
    })
console.log(pesertaCoding)