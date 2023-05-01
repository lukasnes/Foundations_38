const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const { getHomePage } = require('./fileSender.js')

app.get('/', getHomePage)

app.listen(4000, console.log('Server running on 4000'))