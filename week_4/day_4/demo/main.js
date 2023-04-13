const input = document.querySelector('#input')
const userName = document.querySelector('#userName')
const button = document.querySelector('#inputBtn')

const userLogin = document.querySelector('#userLogin')
const passLogin = document.querySelector('#passLogin')
const loginBtn = document.querySelector('#loginBtn')

const submitHandler = ()=>{
    let body = {
        userName: userName.value,
        string: input.value
    }

    axios.post('http://localhost:4000/input',body).then()
}

const loginHandler = ()=>{
    let body = {
        userName: userLogin.value,
        password: passLogin.value
    }
    axios.post('http://localhost:4000/login',body)
}

button.addEventListener('click',submitHandler)
loginBtn.addEventListener('click',loginHandler)