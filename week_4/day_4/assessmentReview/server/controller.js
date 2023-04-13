let namesArr = ["Lukas","Cameron","Tristan","Taylor","Rian","Justin"]
let num = 0
module.exports = {
    getNames: (req,res) => {
        res.status(200).send(namesArr)
    },
    getNum: (req,res) => {
        res.status(200).send({num})
    },
    deleteName: (req,res) => {
        let { index } = req.params
        console.log(index)
        namesArr.splice(+index,1)
        res.status(200).send(namesArr)
    },
    addName: (req,res) => {
        let { name } = req.body
        namesArr.push(name)
        res.status(200).send(namesArr)
    },
    updateNum: (req,res) => {
        let { type } = req.body
        if(type === 'minus'){
            num--
        } else if (type === 'plus'){
            num++
        }
        res.status(200).send({num})
    }
}