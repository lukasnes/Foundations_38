const circle = document.querySelector('#circle')
const btns = document.querySelectorAll('.color-change')

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff"
// }
// console.log(btn[0].parentNode)
// const btns = document.querySelector('#button-container')
console.log(btns)

const changeColor = (evt) => {
    console.log(evt.target)

    circle.style.backgroundColor = evt.target.id
}

for(let i = 0; i < btns.length; i++){
    console.log(btns[i])
    btns[i].addEventListener('click', changeColor)
}
// btn.addEventListener('click', changeColor)

//===============================================================
const form = document.querySelector('form')
const list = document.querySelector('ul')
const input = document.querySelector('input')


const submitHandler = evt => {
    evt.preventDefault()
    console.log(input.value)

    let listItem = document.createElement('li')
    listItem.textContent = input.value
    console.log(listItem)

    list.appendChild(listItem)

    input.value = ""
}


form.addEventListener('submit', submitHandler)