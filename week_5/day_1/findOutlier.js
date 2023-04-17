const outlier = arr => {
    let evens = []
    let odds = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        } else {
            odds.push(arr[i])
        }
    }

    // console.log(evens, odds)
    if(evens.length > odds.length){
        return odds[0]
    } else {
        return evens[0]
    }
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))