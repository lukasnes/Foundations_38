const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getMovies,addMovie,updateRating,deleteMovie } = require('./controller')

app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)
app.put('/api/movies/:id', updateRating)
app.delete('/api/movies/:id', deleteMovie)


app.listen(4004, console.log(`Server running on 4004`))