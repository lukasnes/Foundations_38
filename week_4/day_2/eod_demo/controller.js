const makeCapital = str => {
    let strArr = str.split(' ')
    strArr = strArr.map(word => {
        word = word[0].toUpperCase() + word.slice(1)
        return word
    })
    return strArr.join(' ')
}

// console.log(makeCapital("hi my name is lukas"))
let fruitBasket = ['apples','bananas','cherries']

module.exports = {
    makeCapital,
    fruitBasket
}