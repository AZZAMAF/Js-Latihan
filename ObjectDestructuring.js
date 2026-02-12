const user = {
    username: "ahmad_rpl",
    profile: {
        fullName: "Ahmad JavaScript",
        address: {
            city: "Serang",
            province: "Banten"
        }
    }
};
const {username} = user
console.log(username)

const {profile:{address:{city}}} = user
console.log(city)