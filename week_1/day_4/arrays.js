const backpack = []

backpack.push('jacket','waterBottle','snack','sunglasses')

let jacket = backpack.splice(0,1)

// let inventory = backpack.slice()
let fannyPack = backpack.splice(0,2)
// console.log(fannyPack)

backpack.unshift('coolstick', 'shinnie rock')


// console.log(backpack)
let inHand = 0


for(i=0; i < backpack.length; i++){
    console.log(backpack[i])

    if(backpack[i] === 'sunglasses'){
        // inHand = backpack.splice(i,1)
        // console.log(backpack[i], i)
    }
}

// console.log(inHand)
// console.log(backpack)

inHand = fannyPack.pop()
// console.log(inHand)

let arr = [123,12344,3432,65547,3432]
//          0     1    2   3     4
for(i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        arr.splice(i,1)
        i--
    }
}

// console.log(arr)

// let guessMe = 54

// while (guessMe < 100) {
//     console.log('----------')
//     if (guessMe % 4 == 0 || guessMe % 5 == 0) {
//         console.log('guessMe is divisible by 4 or 5.  Added 25.')
//         guessMe += 25
//     } else if (guessMe % 3 == 0) {
//         console.log('guessMe is divisible by 3.  Subtracted 27.')
//         guessMe -= 27
//     } else {
//         console.log('Added 3.')
//         guessMe += 3
//     }
//     guessMe += 22
//     console.log(`guessMe is now ${guessMe}.`)
// }