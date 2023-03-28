let fruitsArr = ['apple','banana','cherry']

for(let i = 0; i < fruitsArr.length; i++){
    let fruit = fruitsArr[i]

    // console.log(fruit[0])
    fruit = fruit[0].toUpperCase() + fruit.slice(1)
    // console.log(fruit)
    // console.log(fruitsArr[i])
    fruitsArr[i] = fruit
}

console.log(fruitsArr)

// ================================================

let nouns = ["Fox","Elephant","Dog","Cheeta","Giraffe"]                 // x
let adjectives = ["big","burly","mean","sweet","lovely","wonderful"]    // y
let verbs = ["hops","runs","swims","jumps","skips"]                     // z

// console.log(randInt)
const randomArrayValue = (arr) => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

console.log(randomArrayValue(nouns))

let madlib = `The y x z over the y x `
while(madlib.includes(' x ') || madlib.includes(' y ') || madlib.includes(' z ')){
    madlib = madlib.replace(' x ', ' ' + randomArrayValue(nouns) + ' ')
                    .replace(' y ', ' ' + randomArrayValue(adjectives) + ' ')
                    .replace(' z ', ' ' + randomArrayValue(verbs) + ' ')
}

// madlib = madlib.replaceAll('x', randomArrayValue(nouns))
//                 .replaceAll('y', randomArrayValue(adjectives))
//                 .replaceAll('z', randomArrayValue(verbs))

console.log(madlib)