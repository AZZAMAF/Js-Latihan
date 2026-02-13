const dataSiswa = [
    { nama: "Azzam", nilai: "85.000", status: "hadir" },
    { nama: "Budi", nilai: "70", status: "bolos" },
    { nama: "Caca", nilai: "90.abc", status: "hadir" },
    { nama: "Dedi", nilai: 65, status: "hadir" }
];

function prosesRapor(data) {
    return data
        .filter(s => s.status === "hadir") // 1. Buang yang bolos
        .map(d => {
            // 2. Nyuci data pake cara Regex + Split (Aman dari huruf & titik desimal)
            const nilaiBersih = Number(String(d.nilai).split('.')[0].replace(/\D/g, '')) || 0;
            const lulus = nilaiBersih >= 75;

            // 3. Kita return objek baru (Data asli d TIDAK berubah)
            return {
                ...d,
                nilai: nilaiBersih,
                hasil: lulus ? "✅ LULUS" : "❌ REMEDIAL"
            };
        });
}

// 4. Kita eksekusi dan tampilin hasilnya
const hasilRapor = prosesRapor(dataSiswa);

console.log("=== HASIL RAPOR KELAS ===");
hasilRapor.forEach(s => {
    console.log(`${s.hasil} | Nama: ${s.nama} | Nilai: ${s.nilai}`);
});