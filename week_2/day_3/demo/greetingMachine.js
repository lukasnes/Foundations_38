const hello = name => `Hello, ${name}!`
const yo = name => `Yo, ${name}!`
const sup = name => `'Sup, ${name}?`

// console.log(hello("Lukas"))
const greetingMachine = (greeting,name) => {
    console.log(greeting(name))
}

greetingMachine(yo, "Tristan")
greetingMachine(sup, "Eliot")
greetingMachine(hello, "Nicholas")

let greeting = hello()
console.log(typeof greeting)

greetingMachine(hello, "Malika")
// greetingMachine(name => `Hello, ${name}!`, "Malika")

const addFive = num => num + 5

greetingMachine(addFive, "Cameron")

const discount = itemTotal => itemTotal - 5
const blackFriday = itemTotal => itemTotal / 2

let shoppingCart = [7,9,3,4,7]
let shoppingSpree = [200,330,440,22,3,4,20]
                //  2,4,3,4,2
const cartTotal = (coupon,cart,tax) => {
    let total = 0
    for(let i = 0; i < cart.length; i++){
        if(cart[i] > 5){
            cart[i] = coupon(cart[i])
        }
        total += cart[i]
    }
    total = total + (total * tax)
    return `The total of your cart is: $${total.toFixed(2)}`
}

console.log(cartTotal(discount,shoppingCart,0.085))
console.log(cartTotal(blackFriday,shoppingSpree,0.085))