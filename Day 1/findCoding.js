//Kalau saya punya array const hobi = ["Mancing", "Coding", "Tidur"], 
// gimana cara ngecek pakai if apakah di dalam hobi itu ada "Coding"?

 const hobi = ["Mancing", "Coding", "Tidur"]
 if(hobi[1] == hobi[1]){
    return console.log('coding ada')
 }


//AI
if (hobi.includes("Coding")) {
    console.log("Coding ada!");
}