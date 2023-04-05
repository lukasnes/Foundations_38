const form = document.querySelector('form')
const list = document.querySelector('ul')
const message = document.querySelector('#message')

const addMovie = evt => {
    evt.preventDefault()
    const inputField = document.querySelector('input')
    console.log(inputField.value)

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click',deleteMovie)

    movie.appendChild(deleteBtn)

    list.appendChild(movie)

    inputField.value = ""
}

const deleteMovie = evt => {
    let listItem = evt.target.parentNode
    console.log(listItem.children)
    let movieTitle = listItem.children[0].textContent
    console.log(movieTitle)
    message.textContent = `${movieTitle} Deleted!`
    evt.target.parentNode.remove()
    revealMessage()
}

const crossOffMovie = evt => {
    console.log(evt.target)
    let movieTitle = evt.target.textContent
    if(evt.target.classList.contains('checked')){
        message.textContent = `${movieTitle} has been unwatched!`
    } else {
        message.textContent = `${movieTitle} watched!`
    }
    evt.target.classList.toggle('checked')
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

form.addEventListener('submit',addMovie)