const makeUnique = str => [...new Set(str)].join('')
    // let unique = ''

    // for(let i = 0; i < str.length; i++){
    //     if(!unique.includes(str[i])){
    //         unique += str[i]
    //     }
    // }

    // return unique

//     let uniqueSet = new Set(str)
//     console.log(uniqueSet)
//     let uniqueArr = [...uniqueSet]
//     console.log(uniqueArr)
//     return uniqueArr.join('')
// }

console.log(makeUnique('helloworld'))
console.log(makeUnique('iwanttoclimbamountain'))

// let name = "lukas nesittka"
// let nameArr = name.split(' ')
// for(let i = 0; i < nameArr.length; i++){
//     nameArr[i] = nameArr[i][0].toUpperCase() + nameArr[i].slice(1)
// }
// console.log(nameArr.join(' '))
module.exports = {
    makeUnique
}