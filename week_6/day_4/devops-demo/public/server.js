const express = require('express')
const app = express()
const path = require('path')

var Rollbar = require('rollbar')

var rollbar = new Rollbar({
  accessToken: 'a6e30b3a212440fdb762c3e9a1ac4357',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('site has been deployed')

app.use(express.json())

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    rollbar.log('site has been visited')
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    rollbar.info('list of students sent',students)
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '') {
            rollbar.info('new student added')
           students.push(name)
           res.status(200).send(students)
       } else if (name === ''){
            rollbar.error('attamped blank name')
           res.status(400).send('You must enter a name.')
       } else {
            rollbar.error('attempted duplicate name')
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
        rollbar.error(err)
       console.log(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
