const palindrome = str => str === str.split("").reverse().join("")
    // let reverseStr = str.split("").reverse().join("")
    // if(str === reverseStr) {
    //     return true
    // } else {
    //     return false
    // }
    // return str === str.split("").reverse().join("")
// }
console.log(palindrome("a"))
console.log(palindrome("racecar"))
console.log(palindrome("hello"))
console.log(palindrome("Racecar"))

const frontAndBack = arr => {
    // let arr = str.split('')
    console.log(arr)
    while(arr.length > 1){
        if(arr[0] === arr[arr.length - 1]){
            arr.pop()
            arr.shift()
            console.log(arr)
        } else {
            return false
        }
    }
    return true
}
// console.log(frontAndBack("a"))
// console.log(frontAndBack("racecar"))
// console.log(frontAndBack("oh no"))
// console.log(frontAndBack("hello"))
// console.log(frontAndBack("Racecar"))

let arr = ["bob","matilda","bob"]
console.log(frontAndBack(arr))