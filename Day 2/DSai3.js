const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Cici", score: 90 },
  { name: "Doni", score: 60 },
  { name: "Eka", score: 75 },
];

// 1. HITUNG RATA-RATA (Case 2)
const totalSkor = students.reduce((acc, s) => acc + s.score, 0);
const rataRata = totalSkor / students.length;

// 2. URUTKAN & KASIH GRADE (Case 1 & Case 4)
// Kita pake [...students] supaya data asli di atas GAK BERUBAH.
const leaderboard = [...students]
  .sort((a, b) => b.score - a.score) // Urut tinggi ke rendah
  .map(s => {
    // VARIABEL BANTUAN (Biar gak pusing)
    let grade = "";
    if (s.score >= 85) grade = "A";
    else if (s.score >= 70) grade = "B";
    else if (s.score >= 60) grade = "C";
    else grade = "D";

    return { ...s, grade }; // Return objek baru (Safe)
  });

// 3. CARA SISWA DI ATAS RATA-RATA (Case 3)
const siswaHebat = leaderboard
  .filter(s => s.score > rataRata)
  .map(s => s.name);

// === TAMPILIN HASILNYA ===
console.log("=== DumbWays Leaderboard ===");
leaderboard.forEach((s, i) => {
  console.log(`${i + 1}. ${s.name} - ${s.score} (${s.grade})`);
});

console.log(`\nNilai rata-rata: ${rataRata.toFixed(1)}`);
console.log(`Siswa di atas rata-rata: ${siswaHebat.join(", ")}`);