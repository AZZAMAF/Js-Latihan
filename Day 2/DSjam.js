const dataSiswa = [
    { nama: "Azzam", nilai: "85.000", status: "hadir" },
    { nama: "Budi", nilai: "70", status: "bolos" },
    { nama: "Caca", nilai: "90.abc", status: "hadir" },
    { nama: "Dedi", nilai: 65, status: "hadir" }
];

function siswaRaport(data) {
    let prosesData = data
        .filter(s => s.status === "hadir")
        .map(d => {
            const nilaiBersih = parseFloat(d.nilai);

            return {
                ...d,
                nilaiLulus: nilaiBersih >= 75,
            }

        })
    const siswaLulus = prosesData.filter(n => n === true)
    const Namasiswa = prosesData.map(n => n.nama)

    switch (siswaLulus) {
        case false:
            return (`Tetap semanga ${Namasiswa} Mengulang tahun depan`)
        default:
                return (`selamat lulus ${Namasiswa}`)
    }
}
    

 

console.log(siswaRaport(dataSiswa, 75))