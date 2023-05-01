const path = require('path')

module.exports = {
    getHomePage: (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/home.html'))
    }
}