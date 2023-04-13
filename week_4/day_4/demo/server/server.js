const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')


const app = express()
app.use(express.json())
app.use(cors())

let db = []

app.post('/input', (req, res)=>{
    let {userName, string} = req.body
    let hash = bcrypt.hashSync(string)

    let user = {
        userName:userName,
        password:hash
    }

    db.push(user)
    
})

app.post('/login', (req, res)=>{
    let {userName, password} = req.body
    let user = db.filter(element=>element.userName === userName)

    if(bcrypt.compareSync(password,user[0].password)){
        res.status(200).send('user logged in')
    } else{
        res.status(200).send('invalid login info')
    }
})




app.listen(4000, ()=>{console.log(`server live on port 4000`)})