let example = ["Hello",true,undefined,null,34]
//               0       1     2       3   4      --- length = 5
// console.log(example[1], example[0])
// for(let i = 0; i < 2; i++){
//     console.log(example[i])
// }

//======================================================

let arr = [1, 4, 11, 2, 37, -4]
//         0  1   2   3  4   5
let smallest = arr[0]
let largest = arr[0]

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    console.log("================================")
    console.log(`The current value at index ${i} is ${arr[i]}`)

    if(arr[i] < smallest){
        console.log(`${arr[i]} is smaller than ${smallest}`)
        smallest = arr[i]
        console.log(`The new smallest value in arr [${arr}] is ${smallest}`)
    } else if (arr[i] > largest){
        console.log(`${arr[i]} is larger than ${largest}`)
        largest = arr[i]
        console.log(`The new largest value in arr [${arr}] is ${largest}`)
    }
}
console.log("================================")
console.log(`Inside the arr [${arr}], the largest value is ${largest}, and the smallest value is ${smallest}`)

// console.log(Math.max(...arr))