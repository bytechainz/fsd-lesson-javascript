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


// const typeVehicle = "motor"
// const duration = 2

// if (typeVehicle.toLowerCase() === "motor") {
//     if (duration <= 2) {
//         console.log("Harga : 4000")
//     } else {
//         console.log("Harga :", `${4000 + (Math.ceil(duration) - 2) * 1000}`)
//     }
// } else if (typeVehicle.toLowerCase() === "mobil") {
//     if (duration <= 2) {
//         console.log("Harga : 10000")
//     } else {
//          console.log("Harga :", `${10000 + (Math.ceil(duration) - 2) * 4000}`)
//     }
// }
// else {
//     console.log("invalid input")
// }

// function funcVoid() {
//     console.log('hello world')
// }

// const funcVoid = () => {
//     console.log('haha')
// }

// const funcReturn = () => {
//     return 'hello world'
// }

// console.log('void', funcVoid())
// console.log('return', funcReturn())

// const luasTanah = (panjang, lebar) => {
//     console.log('ini func void', panjang * lebar)
// }

// luasTanah(10, 2)

// const resultLuasTanah = (panjang, lebar) => {
//     console.log('ini func return')
//     return panjang * lebar
// }

 
// const totalLuasTanah = resultLuasTanah(10, 2) + resultLuasTanah(20, 2)
// console.log(totalLuasTanah)


// const returnFunc = () => {
//     return () => {
//         console.log('inside')
//         return () => {
//         console.log('inside 2')
//     }
//     }
// }

// returnFunc()()()

// const helloWorld = () => {
//     console.log('hello world')
// }

// const helloWorldFunc = () => {
//     helloWorld()    
//     helloWorld()
//     helloWorld()
//     helloWorld()
// }

// helloWorldFunc()

// // function dengan nilai default
// const callName = (name) => {
//     console.log(name)
// }

// callName('hi tama')

// // undefined yakni belum di set nilai/ tidak memiliki nilainya
// // null sudah kita set dengan tidak memiliki nilai

// // ARRAY
// const array = [true, 200, ['arief','yusron', 'jamal']]
// // array[1] = 400
// console.log(array)

// // array.push('yusuf')
// // console.log(array)

// // array.unshift('yamal')
// // console.log(array)

// const newArray = [...array, 'hanif', 'tama']
// console.log(newArray)

// console.log(array[2][1])

// let object = {
//     name : "arif didu",
//     age : 18,
//     member : [
//         {
//             name : 'jamal',
//             saldo : 100
//         },
//         {
//             name : 'yusuf',
//             saldo : 200
//         }
//     ]
// }

// object = {
//     ...object,
//     kelas : 10,
//     name : 'hanif0' // ini akan mereplace 
// }

// console.log(object.kelas)


// // console.log(object['age'])
// // console.log(object.name)
// // console.log(object.member[0].saldo)


// // BUILD IN FUNCTION
// let name = 'arief yusron'
// console.log(name.replaceAll('r', '10'))

// // for (let i = 0; i < 10; i = i+2) {
// //     console.log('loop', i)
// // }

// const dataArray = [
//     'arief yusron',
//     'dani',
//     'jamal',
//     'yusuf',
//     'mamat',
//     'putri',
//     'yamal'
// ]

// // for(let i = 0;i < dataArray.length; i++) {
// //     console.log(dataArray[i])
// // }

// // .map mengembalikan nilai array
// dataArray.map((item, index) => {
//     console.log(item, index)
// })

// const resultMap = dataArray.map((item, index) => {
//     return 'hallo'
// })

// console.log(resultMap)

// // sama seperti map , tapi tidak mengembalikan nilai
// // pada data array lebih ideal menggunakan foreach
// dataArray.forEach((item, index) => {
//     console.log(item, index)
// })

let dataTodoList = []

console.log(dataTodoList)

const addTodoList = (desc) => {
    dataTodoList = [
        ...dataTodoList,
        {
            desc : desc,
            status: 'todo'
        }
    ]
}

// filter akan mengembalikan nilai sama seperti foreach
const deleteData = (index) => {
    dataTodoList = dataTodoList.filter((e, i) => {
        return i !== index
    })
}

const deleteAllData = () => {
    dataTodoList = []
}

addTodoList('cuci motor')
console.log(dataTodoList)

addTodoList('cuci baju')
console.log(dataTodoList)

deleteData(0)
console.log(dataTodoList)

deleteAllData()
console.log(dataTodoList)

addTodoList('cuci sepeda brompton')
console.log(dataTodoList)









