
const typeVehicle = "motor"
const duration = 2

if (typeVehicle.toLowerCase() === "motor") {
    if (duration > 0 && duration <= 2) {
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


const vehicleType = "mobil"
const parkingTime = 2

const rates = {
    motor : {base: 4000, extra: 1000 },
    mobil : {base: 10000, extra: 4000 }
}

if(rates[vehicleType]) {
    const {base, extra} = rates[vehicleType]
    
    if (parkingTime > 0 && parkingTime <= 2) {
        console.log(base)
    } else if (parkingTime > 2) {
        console.log(base + (parkingTime - 2) * extra)
    } else {
        console.log(0)
    }
} else {
    console.log("jenis kendaraan tidak dikenali")
}