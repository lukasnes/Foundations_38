let paragraph = ''
let sentenceOne = ["I","like","to","code"]
let sentenceTwo = ["It","has","its","challenges"]
let sentenceThree = ["Figuring","things","out","is","rewarding"]

// if(typeof variable === 'string'){

// } else {
//     return 'Invalid data type for this function'
// }

const createSentence = (word,index,array) => {
    console.log(`The word at index ${index} in the array [${array}] is ${word}`)
    if(index === array.length - 1){
        paragraph += word + ".\n"
        return
    }
    paragraph += word + " "
}

sentenceOne.forEach(createSentence)
sentenceTwo.forEach(createSentence)
sentenceThree.forEach(createSentence)

console.log(paragraph)

let numArr = [1,2,3,4,5,6,7,8,9]
        //    0 1 2 3 4 5 6 7 8
        //    numArr[4]
let newNumArr = numArr.map((number,index) => {
    console.log(`The number at index ${index} is ${number}`)
    return number * index
})

console.log(numArr)
console.log(newNumArr)

let fruits = ["apple","banana","cherry","durian","eggplant","fig","grape"]

let multipliedFruits = fruits.map((fruit,index) => {
    fruit = fruit + " "
    return fruit.repeat(index + 1)
})

console.log(multipliedFruits)

let clutteredDrawer = [
    {
        item: "pens",
        type: "stationary",
        value: 10
    },
    {
        item: "socks",
        type: "clothes",
        value: 30
    },
    {
        item: "receipts",
        type: "stationary",
        value: 0
    },
    {
        item: "banana",
        type: "food",
        value: 1000000000
    },
    {
        item: "pants",
        type: "clothes",
        value: 400
    },
    {
        item: "shirts",
        type: "clothes",
        value: 800
    },
    {
        item: "cologne",
        type: "cosmetics",
        value: 200
    },
    {
        item: "cockroach",
        type: "insect",
        value: -5
    }
]

let cleanDrawer = clutteredDrawer.filter((itemObj) => {
    // console.log(itemObj['type'])
    // if(itemObj['type'] === "clothes"){
    //     console.log(itemObj['item'])
    //     return itemObj
    // }
    return itemObj['type'] === "clothes"
})

console.log(cleanDrawer)

const getDrawerValue = (acc,currObj,index) => {
    // console.log(`The accumulator's value at index ${index} is ${acc}`)
    // console.log(`The item we are currently accessing is ${currObj['item']}`)
    let { value } = currObj
    return acc + value
}

let dirtyValue = clutteredDrawer.reduce(getDrawerValue, 0)
let cleanValue = cleanDrawer.reduce(getDrawerValue, 0)

console.log(dirtyValue)
console.log(cleanValue)

console.log("====================")

let property = "item"
let index = 1

console.log(cleanDrawer[index][property])
console.log(cleanDrawer[1].property)