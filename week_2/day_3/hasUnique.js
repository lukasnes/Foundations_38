const hasUnique = str => {
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUnique("Monday"))
console.log(hasUnique("Moonday"))
console.log(hasUnique("Bob"))

const unique = str => {
    let compareObj = {}

    for(let i = 0; i < str.length; i++){
        if(compareObj[str[i]]){
            return false
        } else {
            compareObj[str[i]] = 1
        }
    }
    console.log(compareObj)
    return true
}

console.log("========================")
console.log(unique("Monday"))
console.log(unique("Moonday"))
console.log(unique("Bob"))

const uniqueSet = str => new Set(str.split('')).size === str.length
//     let set = new Set(str.split(''))
//     console.log(set)
//     // if(set.size === str.length){
//     //     return true
//     // } else {
//     //     return false
//     // }
//     return set.size === str.length
// }

console.log("========================")
console.log(uniqueSet("Monday"))
console.log(uniqueSet("Moonday"))
console.log(uniqueSet("Bob"))