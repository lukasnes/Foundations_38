const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')

const numContainer = document.querySelector('h1')
const btns = document.querySelectorAll('button')

// ==============GET requests================

const getNames = () => {
    console.log('Get names has been hit')

    axios.get('http://localhost:4000/api/names')
        .then((response) => {
            console.log(response.data)
            displayNames(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const getNum = () => {
    console.log('Get nums has been hit')

    axios.get('http://localhost:4000/api/num')
        .then((response) => {
            console.log(response.data)
            displayNum(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

getNames()
getNum()
// ================Display functions============

const displayNames = arr => {
    list.innerHTML = ''

    arr.forEach((name,index) => {
        const listItem = document.createElement('li')
        const nameSpan = document.createElement('span')
        const deleteBtn = document.createElement('button')

        nameSpan.textContent = name
        deleteBtn.textContent = 'X'
        deleteBtn.id = index

        deleteBtn.addEventListener('click', deleteName)

        listItem.appendChild(nameSpan)
        listItem.appendChild(deleteBtn)

        list.appendChild(listItem)
    })
}

const displayNum = obj => {
    let { num } = obj
    numContainer.textContent = num
}

// =============== DELETE request ============

const deleteName = evt => {
    console.log(evt.target)

    axios.delete(`http://localhost:4000/api/names/${evt.target.id}`)
        .then((response) => {
            console.log(response.data)
            displayNames(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

// =============== POST request ===============

const addName = evt => {
    evt.preventDefault()

    let body = {
        name: input.value
    }

    axios.post('http://localhost:4000/api/names', body)
        .then((response) => {
            console.log(response.data)
            displayNames(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

    input.value = ''
}

form.addEventListener('submit', addName)

// ==============PUT request===============

const updateNum = evt => {
    let type = evt.target.id

    axios.put('http://localhost:4000/api/num', {type})
        .then((response) => {
            console.log(response.data)
            displayNum(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',updateNum)
}