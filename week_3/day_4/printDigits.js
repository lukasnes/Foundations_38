const printDigits = num => {
    while(num > 0){
        let digit = num % 10
        console.log(`The digit in the ones place is ${digit}`)
        num -= digit
        console.log(`The number minus ${digit} is ${num}`)
        num /= 10
        console.log(`The number divided by 10 is ${num}`)
    }
}

console.log(printDigits(314))
console.log("================")
console.log(printDigits(123456789))

console.log(525 % 10)