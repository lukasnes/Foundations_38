// for(let i = 10; i > 0; i--){
//     console.log(`My current loop is at index ${i}`)
// }

// let num = 5

// num++

// console.log(num)

for(let i = 1; i <= 50; i++){
    // console.log(i)
    if(/*i % 3 === 0 && i % 5 === 0*/ i % 15 === 0){
        console.log('fizzbuzz')
    } else if (i % 5 === 0){
        console.log('buzz')
    } else if (i % 3 === 0){
        console.log('fizz')
    } else {
        console.log(i)
    }
}