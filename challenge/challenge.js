
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