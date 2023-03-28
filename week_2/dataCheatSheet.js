// ---Strings--- //
let singleQuotes = 'I am a single quote string. I cannot abbreviate, but I can use "double quotes".'
let doubleQuotes = "I'm a double quote string. I can abbreviate, but I can't use double quotes, only 'single quotes'."
let templateString = `
I'm a template string. I'm the best of all worlds. I can use "double quotes", and 'single quotes'.\n
I can even quote my brothers!\n
Single Quote said: '${singleQuotes}'\n
Double Quote said: "${doubleQuotes}"
`

console.log(singleQuotes)
console.log(doubleQuotes)
console.log(templateString)
console.log("=========================================")

// ---Numbers--- //
let one = 1
let two = 2
let three = one + two
console.log(one, two, three)

let sumNum = one + two + three
console.log(`I am sumNum, my value is ${sumNum}`)
sumNum + 4
console.log(`You did not reassign me, I am still ${sumNum}`)
sumNum = sumNum + 4
console.log(`Now that you've reassigned me, my value is ${sumNum}`)
sumNum += 5
console.log(`Reassigning me with 5 added, means I am now ${sumNum}`)
console.log("=========================================")

// ---Booleans--- //
let bool = true
if(bool){
    console.log(`I am a true boolean being used in an if statement`)
} else {
    console.log(`I am a false boolean being used in an if statement`)
}

bool = false
if(bool){
    console.log(`Your reassignment did not work, I am still true`)
} else {
    console.log(`I have now been changed to a false boolean`)
}

bool = !bool
if(bool){
    console.log(`You just used the bang operator to flip my assignment`)
} else {
    console.log(`You changed the cheat sheet, didn't you?`)
}
console.log("=========================================")

// ---Arrays--- //
let arr = [1,2,3]

arr.push(4) // I am now [1,2,3,4]
arr.pop() // I am now [1,2,3]

arr.unshift(0) // I am now [0,1,2,3]
arr.shift() // I am now [1,2,3]

let arrCopy = arr.slice() // I am a copy of the array using the slice method
let alternateCopy = [...arr] // I am a copy of the array using the spread operator
let arrReference = arr // I am NOT a copy of the array. Instead, I am a reference to the original. Anything you do to me, will be done to the original, and anything you do to the original will be done to me.

// ---Objects--- //
let obj = {
    key: "value"
}

for(let key in obj){
    console.log(`I am an object. I have a key of ${key} with a value of ${obj[key]}`)
}

console.log(obj['key']) // I return "value"
console.log(obj.key) // I return "value"

let property = "key"
console.log(obj[property]) // I return "value", you can use a string in my brackets to access me.
console.log(obj.property) // I return "undefined", as I do not have a key named "property".
console.log("=========================================")

// ---Classes--- //
class Car{
    constructor(make,model){
        this.make = make
        this.model = model
    }

    sell = () => {
        console.log(`You sold a ${make} ${model}`)
    }
}

let honda = new Car('Honda','Civic')
honda.sell()
console.log(honda.make)
console.log(honda['model'])

// ---Functions--- //
function declaration(parameter){
    return parameter
}
const expression = function(parameter){
    return parameter
}
const arrow = (parameter) => parameter

// ---Datatypes Visualized--- //
let string = `I am a string`
let number = 25
let boolean = true
let undefinedVar;
let nullVar = null;
let array = [1,2,3]
let object = { key: "value" }
let func = () => {}