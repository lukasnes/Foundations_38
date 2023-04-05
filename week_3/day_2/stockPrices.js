const best = arr => {
    let profit = 0
    let lowest = arr[0]

    for(let i = 0; i < arr.length; i++){
       if(arr[i] < lowest){
        lowest = arr[i]
       } 

       let difference = arr[i] - lowest
       if(difference > profit){
        profit = difference
       }
    }

    return profit
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([2, 3, 10, 6, 4, 8, 1]))
console.log(best([5, 4 , 3, 2, 1]))