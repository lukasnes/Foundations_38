const sorter = str => {
    let small = ''
    let medium = ''
    let large = ''

    for(let i = 0; i < str.length; i++){
        // if(str[i] === 's'){
        //     small += str[i]
        // } else if (str[i] === 'm'){
        //     medium += str[i]
        // } else if (str[i] === 'l'){
        //     large += str[i]
        // }
        switch(str[i]){
            case 's':
                small += str[i]
                break;
            case 'm':
                medium += str[i]
                break;
            case 'l':
                large += str[i]
                break;
            default:
                break;
        }
    }

    return small + medium + large
}

console.log(sorter('smllms'))
console.log(sorter('mls'))
console.log(sorter('slmslmllsmlmslmlmsmsmsml'))

const sortMethod = str => {
    let sorterObj = {
        'xs': 1,
        's': 2,
        'm': 3,
        'l': 4,
        'xl': 5
    }

    let strArr = str.split(',')

    strArr.sort((a,b) => {
        return sorterObj[a] - sorterObj[b]
    })

    return strArr.join(',')
}
    // let strArr = str.split('')
    // strArr.sort()
    // // console.log(strArr)
    // return strArr.reverse().join('')

console.log('========================')
console.log(sortMethod('s,xs,m,l,xs,xl,l,m,s,xs'))
// console.log(sortMethod('mls'))
// console.log(sortMethod('lmslmslmsmslmslmslsmslsm'))

let arr = [5,15,24,6,43]

arr.sort((a,b) => {
    return a - b
})

console.log(arr)