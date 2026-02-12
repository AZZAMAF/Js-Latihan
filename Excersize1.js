// soal 1
const name = "Budi";

function change() {
    const name = "Siti";
    console.log(name);
}

change();
console.log(name);

// soal 2
const jobs = [
  { title: "Frontend", salary: 8000000, remote: true },
  { title: "Backend", salary: 12000000, remote: false },
  { title: "DevOps", salary: 15000000, remote: true }
];

const RemoteJobs = jobs.filter(e =>{
    const checkRemote = e.remote ===true;
    const checkSalary = e.salary > 10000000;
    return checkRemote && checkSalary
})
console.log(RemoteJobs)
// soal 3
const jobTitles = jobs.map(e => e.title)
console.log(jobTitles)
// soal 4
const response = {
  data: {
    user: {
      details: {
        email: "ahmad@mail.com"
      }
    }
  }
};

const {data:{user:{details:{email}}}} = response
console.log(email)

// soal 5
const cart = [
  { item: "Kopi", qty: 2, price: 5000 },
  { item: "Gula", qty: 1, price: 10000 },
  { item: "Susu", qty: 3, price: 15000 }
];

// Tugas: Hitung Total Harga yang harus dibayar Ahmad 
// (Total dari qty * price semua item). Kamu boleh pakai 
// .forEach() atau .reduce() atau for biasa.

const Total = cart.map(e =>{
    return{
        ...e,
        qty: e.qty * e.price
    }
})
console.log(Total)

let totalBayar = 0;
cart.forEach(e => {
    totalBayar += e.qty * e.price;
});
console.log(totalBayar); // 65000

const Bayar = cart.reduce((acc, e) => acc + (e.qty * e.price), 0);
console.log(Bayar);
// soal 1
// soal 2
// soal 3
// soal 4
// soal 5