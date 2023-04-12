const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/pokemon/:name', (req,res) => {
    let { name } = req.params
    console.log(name)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            // console.log(response.data)
            let pokeObj = {
                name,
                sprite: response.data.sprites.front_default
            }
            // for(let sprite in response.data.sprites){
            //     if(typeof response.data.sprites[sprite] === 'string'){
            //         pokeObj.sprites.push(response.data.sprites[sprite])
            //     }
            // }
            console.log(pokeObj)
            res.status(200).send(pokeObj)
        })
        .catch(err => console.log(err))
})


app.listen(4000, console.log(`App running on 4000`))