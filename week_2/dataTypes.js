// ------------------- Strings --------------------- //

// Strings enable you to store words, phrases, and other typed data
// Initiate a string using one of the three quotation types:

let singleQuotes = ''
let doubleQuotes = ""
let templateString = ``

// Single quotes are rarely useful, as they interfere with English grammar.
// However, if you wanted to use double quotes inside your string, this would enable that.

singleQuotes = 'Do not, it is, let us, is not, are not'
singleQuotes = 'Lukas said, "Single quotes are not great."'

// Double quotes allow us to abbreviate things, plus we can simply use single quotes to quote someone.

doubleQuotes = "Don't, it's, let's, isn't, aren't"
doubleQuotes = "Lukas said, 'Double quotes can be more handy.'"

// The most useful string in JavaScript is a template string. It enables use of both other quote types, abbreviations
// It also allows us to insert other data types into it.

let name = "Lukas"
templateString = `${name} said, "This string type lets us use other quote types, y'all"`

// ------------------- Integers --------------------- //

// Integers are simple: They're numbers.
let three = 3
let twenty = 20

let twentyThree = twenty + three

// ------------------- Booleans --------------------- //

// Booleans are the 0s and 1s of coding. They can only exist in 2 states: true or false
let codingIsGreat = true
let charizardBestPokemon = false

// We can utilize these values in if statements, loops, and anything else checking for a condition.

// ------------------- Undefined, Null --------------------- //


// Undefined and null are similar in that they are placeholders for empty values
// They do have a key difference, however:
// Undefined means that the variable has not been given any value
// A variable can be declared without a value in JavaScript:

let undefinedVar;

// Null, on the other hand, is descriptive of a variable whose value is specifically, intentionally empty.

let nullVar = null

// nullVar -has- a value, that value is null.

// ---------------- Primitive vs Object ----------------------- //
console.log("=========================================")

// The datatypes listed above are all considered "Primitive" datatypes. 
// This means that they cannot be affect directly
// IE: They have to be reassigned in order to be changed.

templateString.toUpperCase() // This does not affect the value except on this line. Once it is called beyond this line, it will reset.
console.log(templateString) // `${name} said, "This string type lets us use other quote types, y'all"`

templateString = templateString.toUpperCase() // This reassignment DOES change the variable.
console.log(templateString) // `${name} SAID, "THIS STRING TYPE LETS US USE OTHER QUOTE TYPES, Y'ALL"`

// This is true for numbers, booleans, undefined, and null.

twenty + three // This does not change the value of twenty.
twenty = twenty + three // This DOES change the value of twenty.
twenty += three // This is the shorthand for the above calculation.
// Twenty is now equal to 26.

// ------------------- Objects ----------------------- //
// Object data types can have actions performed on them without reassignment.
// Arrays, objects, and classes are all considered object datatypes.

// ---Arrays--- //
console.log("=========================================")

let arr = [1,2,3]

// We can perform actions on this array directly:

arr.push(4) // This pushes the number 4 to the end of our array
arr.pop() // This removes the value we just added.

arr.unshift(0) // This unshifts the number 0 to the beginning of the array.
arr.shift() // This removes the value we just added.

// Arrays can be accessed using square brackets:

console.log(arr[0]) // logs 1 to the terminal
console.log(arr[arr.length - 1]) // logs 3 to the terminal

// Arrays are 0 indexed, meaning the first value is at position 0, and the last value is at the array's length - 1.

// ---Objects--- //
console.log("=========================================")

let obj = {
    key: "value"
}

// Objects are made up of key value pairs.
// We can access this object's values in 2 ways:

console.log(obj['key'])
// Bracket notation is useful because we can pass strings into the brackets to access the object's properties.

console.log(obj.key)
// Dot notation is more rigid, because we can't use other variables to access the object.
// Dot notation ONLY works with the specific name of the key, not a variable passed.
// IE:

let property = 'key'
console.log(obj[property]) 
// This will log "value" to the console.

console.log(obj.property) 
// This will log undefined to the console because JavaScript is specifically looking for a key named "property"

// ---Classes--- //
console.log("=========================================")

// Classes are object factories. They enable you to create the same object structure over and over again.
// They also allow you to attach methods -- Things your object can do.

class Car{
    constructor(make,model,year,color) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    paintJob = (color) => {
        console.log(`The ${this.make} ${this.model} got a paintjob. Its color is now ${color}`)
        this.color = color
    }
}

// To use the class, we have to instantiate it into a variable.

let honda = new Car('Honda','Accord',2016,'White')
console.log(honda) // This will log our new car to the console.

// We can access them just like objects:

console.log(honda.model) // This will log the model of the car to the console.
console.log(honda['color']) // This will log the color of the car to the console.

// And we can call their methods, using the variable they're stored in:
honda.paintJob('Red')
console.log(honda.color)

// ---------------------- Functions --------------------------- //
console.log("=========================================")

// Functions are also datatypes! We can store them inside variables using function expression or arrow functions.
// We can also use function declaration to declare their names using the function keyword.

// ---Function Declarations--- //
console.log("=========================================")

// A function declaration uses the function keyword. The syntax is as follows:

function funcName(parameter){
    return `This function's parameter is ${parameter}`
}

// In order to invoke this function, we call its name, invoke using you parentheses, and pass any arguments the function demands.
console.log(funcName("Banana"))
console.log(funcName("The Pope"))

// ---Function Expressions--- //
console.log("=========================================")

// A function expression also uses the function keyword. 
// But instead of declaring the function name afterwards, we store the function into a variable.
// Function variables should always be constant. You will never reassign a function.

const funcExpress = function(parameter){
    return `This function expression's parameter is ${parameter}`
}

//We invoke the function the same way:
console.log(funcExpress("Cats"))
console.log(funcExpress("I love functions"))

// ---Arrow Functions--- //
console.log("=========================================")

// Arrow functions are the most useful, as they enable us to access the "this" keyword, similarly to a class.
// This means that we can internally define properties for the function.
// This is an advanced way of utilizing functions, however, so for now, just get used to the syntax.

// We can also use arrow functions to shorten our syntax. Arrow functions utilize "implicit returns".
// This means that anything following directly after the arrow can be the function's return.
// We do not HAVE to use curly braces, although for now, it is recommended for bug fixing.
// You will want to use arrow functions as a rule. They enable you to visualize functions as just another datatype:

const arrowFunc = (parameter) => {
    return `This arrow function's parameter is ${parameter}`
}

const arrowReturn = (parameter) => `This function utilizes implicit return. Its parameter is ${parameter}`

console.log(arrowFunc("Arrows for days!"))
console.log(arrowReturn("Return me immediately!"))