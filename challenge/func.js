
// parking rate
const typeVehicle = "mobil"
const duration = 2
const calculate = (type, duration) => {
    if (type === 'motor') {
        return duration <= 2 ? 4000 : 4000 + (Math.ceil(duration) - 2) * 1000
    }
    else if (type === 'mobil') {
        return duration <= 2 ? 10000 : 10000 + (Math.ceil(duration) - 2) * 4000
    } 

    return 0
}

console.log('Harga : Rp.', calculate(typeVehicle.toLocaleLowerCase(), duration))


// login
const username = "admin"
const password = "admin"
const checkLogin = (username, password) => {
    const user = username.toLowerCase().trim()
    const pass = password.toLowerCase().trim()

    if (user === 'admin') {
        return pass === 'admin' ? 'Login Success' : 'Password Salah'
    }
    return 'Username dan password salah'
}

console.log('result : ', checkLogin(username, password))