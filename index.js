// === | ==
// > | <
// >= | <=

// and &&
// or ||


// console.log('yusron')

// const isStudent = false
// const age = 30

// if (isStudent && age === 18) {
//     console.log('anda adalah sisws')
// } else if (!isStudent && age >= 18) {
//     console.log('Anda adalah mas mas 18 tahun lebih')
// } else {
//     console.log('bocil')
// }


const typeVehicle = "motor"
const duration = 2

if (typeVehicle.toLowerCase() === "motor") {
    if (duration <= 2) {
        console.log("Harga : 4000")
    } else {
        console.log("Harga :", `${4000 + (Math.ceil(duration) - 2) * 1000}`)
    }
} else if (typeVehicle.toLowerCase() === "mobil") {
     if (duration <= 2) {
        console.log("Harga : 10000")
    } else {
         console.log("Harga :", `${10000 + (Math.ceil(duration) - 2) * 4000}`)
    }
}
else {
    console.log("invalid input")
}
