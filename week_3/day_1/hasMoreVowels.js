const hasMore = str => {
    str = str.toLowerCase()
    let vowels = ["a","e","i","o","u"]
    let vowelCount = 0

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }
    let remaining = str.length - vowelCount

    return vowelCount > remaining
}

console.log(hasMore("Hello"))
console.log(hasMore("Moose"))
console.log(hasMore("mice"))