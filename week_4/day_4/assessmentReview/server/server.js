const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getNames,getNum,deleteName,addName,updateNum } = require('./controller.js')
//==========GET requests==============
app.get('/api/names', getNames)
app.get('/api/num', getNum)
//==========DELETE request============
app.delete('/api/names/:index', deleteName)
//==========POST request==============
app.post('/api/names', addName)
//==========PUT request===============
app.put('/api/num', updateNum)

app.listen(4000, console.log('Server running on 4000'))