const nextPerfect = num => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1)**2 : -1
//     if(Number.isInteger(Math.sqrt(num))){
//         return (Math.sqrt(num) + 1)**2
//     } else {
//         return -1
//     }
// }

console.log(nextPerfect(25))
console.log(nextPerfect(3000))
console.log(nextPerfect(100))

let number = 15
number > 10 ? console.log('Number is greater than 10') : console.log('Number is not greater than 10')