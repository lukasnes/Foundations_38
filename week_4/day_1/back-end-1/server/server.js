const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/users/',(req,res)=>{
    let friends =[{name: 'cameron', age: 100},
     {name:'tristan', age:10}, {name:'eliot',
      age:12},{name: 'malika', age:16}]
      
   if(req.query.age){

    let filtered = friends.filter(person=>{
       return person.age > req.query.age
    })
    res.status(200).send(filtered)
   }
   else{res.status(200).send(friends)}
})

app.get('/weather/:temperature', (req,res)=>{
    const {temperature} = req.params
    const html = `<h1>you passed the param of ${temperature}</h1>
    <p>this is another p tag</p>`
    res.status(200).send(html)
})


app.listen(4000, ()=>{console.log('server running on port 4000')})