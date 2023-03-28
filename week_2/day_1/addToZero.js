let arr = [1, 4, 11, 2, 37, -4]
// let arr = [0, 21, 33, 6, 0, -9] 
// let arr = [0, 1, 2, 3, 4, 5]

//Loop over our array
let addToZero = false

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        // console.log(`The value of i is ${i}, the value of j is ${j}`)
        if(arr[i] + arr[j] === 0){
            addToZero = true
        }
    }
}

console.log(typeof addToZero)