const balanced = str => {
    let count = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            count++
        } else if(str[i] === ')'){
            count--
        }
        if(count < 0){
            return false
        }
    }

    return count === 0
}

console.log(balanced('(this is a balanced string)'))
console.log(balanced('(This ( is an unbalanced ) string'))
console.log(balanced(')('))