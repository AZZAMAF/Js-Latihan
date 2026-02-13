const candidates = [
  { name: "Ahmad", age: 22, skills: ["HTML", "JavaScript"] },
  { name: "Siti", age: 19, skills: ["JavaScript", "CSS"] },
  { name: "Budi", age: 25, skills: ["PHP", "Laravel"] }
];

// function hiringCandidat(candidates){
//   if(candidates.filter(candidat => candidat.age > 20 )
//   && candidates.includes("JavaScript")){
//     candidates.map(user => {
//     return{
//       ...user,
//       name: name.user,
//       age: age.user,
//       skills: skills[1]
//     }  
//    })
//   } 
// }

const hiringCandidats = ({candidates}) => {
  const candidat = candidates
  if (candidat.filter(candidat => candidat.age > 20)
    && candidat.includes("JavaScript"))
    candidat.map(user => {
      return {
        ...user,
        name: name.user,
        age: age.user,
        skills: skills[1]
      }
    })
}


function hiring(candidat){
  candidat
.filter(candidat => candidat.age > 20)
.includes("JavaScript")
.map(user => {
      return {
        ...user,
        name: name.user,
        age: age.user,
        skills: skills[1]
      }
    })
}


// orang biasa
 const hired = candidates.filter(candidat => {
    // Syarat 1: Umur > 20
    const checkAge = candidat.age > 20;
    
    // Syarat 2: Punya skill JavaScript
    const checkSkill = candidat.skills.includes("JavaScript");

    // Satpam cuma bolehin masuk kalau DUA-DUANYA true
    return checkAge && checkSkill;
});
// anak Startup
const hireds = candidates.filter(c => c.age > 20 && c.skills.includes("JavaScript"));
console.log(hired);