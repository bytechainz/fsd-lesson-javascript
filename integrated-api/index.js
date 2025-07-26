// console.log('start')

// setTimeout(() => {
//     console.log('time out 2 detik')
// }, 2000)

// // setInterval(() => {
// //     console.log('interval 2 detik')
// // }, 2000)

// console.log('end')


// secara default fecth untuk get data dari API

let resultfetchData = []

const fetchData = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => {
        if (res.length === undefined) {
            throw new Error("404")
        }
        else {
            resultfetchData = res
            console.log('sukses')
        }
    })
    .catch((res) => {
        // scope ini ujtuk error
        console.log('error : ', res)
    })
    .finally(() => {
        // tidak peduli sukses atau error
        console.log('finally')
    })
}

fetchData()


const fetchFataOther = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos') // await artinya menunggu data selesai di eksekusi
        res = await res.json()
        console.log(res) 
    } catch (err) {
        console.log('error : ', err)
    } finally {
        console.log('finally')
    }
}