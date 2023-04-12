let moviesDB = require('./db.json')
let movieID = 11
module.exports = {
    getMovies: (req,res) => {
        res.status(200).send(moviesDB)
    },
    addMovie: (req,res) => {
        const { params,query,body } = req
        console.log('Params:', params, 'Query:', query, 'Body:', body)
        req.body.id = movieID
        moviesDB.push(req.body)
        res.status(200).send(moviesDB)
        movieID++
    },
    updateRating: (req,res) => {
        const { params,query,body } = req
        console.log('Params:', params, 'Query:', query, 'Body:', body)
        let index = moviesDB.findIndex((movie) => movie.id === +params.id)
        console.log(index)

        if(body.type === 'plus' && moviesDB[index].rating < 5){
            moviesDB[index].rating++
        } else if (body.type === 'minus' && moviesDB[index].rating > 1){
            moviesDB[index].rating--
        }

        res.status(200).send(moviesDB)
    },
    deleteMovie: (req,res) => {
        let { id } = req.params
        let index = moviesDB.findIndex(movie => movie.id === +id)
        moviesDB.splice(index, 1)
        res.status(200).send(moviesDB)
    }
}