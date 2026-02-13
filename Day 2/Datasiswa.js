const dataSiswa = [
  { nama: "Azzam", nilai: "85.000", status: "hadir" },
  { nama: "Budi", nilai: "70", status: "bolos" },
  { nama: "Caca", nilai: "90.abc", status: "hadir" },
  { nama: "Dedi", nilai: 65, status: "hadir" }
];

function raportSiswa(data, KKM = 0) {
  // 1. Filter yang HADIR saja
  const dataProses = data
    .filter(s => s.status === "hadir")
    .map(s => {
      // 2. Bersihkan nilai (karena ini string tunggal, jangan gunakan .map)
      const nilaiBersih = Number(String(s.nilai).replace(/\D/g, ''));

      return {
        nama: s.nama,
        rataRata: nilaiBersih,
        lulus: nilaiBersih >= KKM // Biasanya lulus jika >= KKM
      };
    });

  // 3. Hitung rata-rata kelas dari siswa yang diproses
  const totalNilaiKelas = dataProses.reduce((acc, s) => acc + s.rataRata, 0);
  const rataKelas = dataProses.length > 0 ? totalNilaiKelas / dataProses.length : 0;

  return {
    daftarSiswa: dataProses,
    rataRataKelas: rataKelas.toFixed(2)
  };
}

console.log(raportSiswa(dataSiswa));

