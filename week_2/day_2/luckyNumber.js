//Write a function that receives an integer as the parameter

const luckyNums = (num) => {
    let arr = []

    for(let i = 0; i < num; i++){
        let randInt = Math.ceil(Math.random() * 10)
        while(arr.includes(randInt)){
            randInt = Math.ceil(Math.random() * 10)
        }
        arr.push(randInt)
        // console.log(randInt)
    }

    return arr
}

console.log(luckyNums(6))
console.log("===================")
console.log(luckyNums(2))
console.log("===================")
console.log(luckyNums(10))
console.log("===================")
let arr = [1,2,3,3,3,1,2,5,6,7,7,7]
console.log(new Set(arr))

const luckySet = (num) => {
    let set = new Set()
    while(set.size < num){
        let randInt = Math.ceil(Math.random() * 10)
        console.log(`Our current set: ${[...set]}, our current randInt: ${randInt}`)
        set.add(randInt)
    }
    let numArr = [...set]
    return numArr
}

console.log(luckySet(5))
// console.log(Math.ceil(Math.random() * 10))