const productSort = arr => {
    let sortObj = {}

    for(let i = 0; i < arr.length; i++){
        let index = i + 1
        let product = arr[i] * index
        sortObj[product] = arr[i]
        console.log(sortObj)
    }

    let sortedArr = []
    for(let product in sortObj){
        sortedArr.push(sortObj[product])
    }

    return sortedArr
}

console.log(productSort([23,2,3,4,5]))

const sortByProduct = arr => {
    arr = arr.map((element, index) => {
        return [element, element * (index + 1)]
    })
    console.log(arr)

    arr.sort((a,b) => {
        return a[1] - b[1]
    })
    console.log(arr)

    let sortedArr = arr.map((element) => {
        return element[0]
    })

    return sortedArr
}

console.log(sortByProduct([23,2,3,4,5]))