// const title = document.getElementById("title")
// title.textContent = "hello there"



// const container = document.getElementById("container")
// // container.innerHTML = `
// //     <h1>heloooo</h1>
// // `



// // container.appendChild(p)

// // const container2 = document.getElementById("container2")
// const h1 = document.createElement("h1")
// h1.textContent = "This is header 1"

// const p = document.createElement("p")
// p.textContent = "mas adul"
// p.style.color = "red"

// // h1.className = "title"
// // h1.id = "title"

// // container2.appendChild(h1)

// const fragment = document.createDocumentFragment()
// fragment.appendChild(h1)
// fragment.appendChild(p)

// container.appendChild(fragment)


const showPage = () => {
    const container = document.getElementById("container")
    const paragraph = document.createElement('p')
    paragraph.textContent = "uty"
    container.appendChild(paragraph)
}


let isShow = false
const hidePage = () => {
    const container = document.getElementById("container")
    container.innerHTML = ""
}

const buttonShowPage = document.getElementById("buttonShowPage")
buttonShowPage.addEventListener("click", () => {
    if (isShow) {
        hidePage()
        buttonShowPage.textContent = "show page"
    }
    else 
    {
        showPage()
        buttonShowPage.textContent = "hide page"
    }
    isShow = !isShow
})


// console.log(title.textContent)