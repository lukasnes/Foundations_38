const { makeCapital, fruitBasket } = require('./controller')
const { makeUnique } = require('../makeUnique')

console.log(makeCapital("This string is being made capital in a different file"))
console.log(fruitBasket)
console.log(require('./controller'))
console.log(makeUnique('this is not a unique string whatsoever'))