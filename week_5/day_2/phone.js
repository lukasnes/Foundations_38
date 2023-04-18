const phoneNumber = (arr,str) => {
    // return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    for(let i = 0; i < arr.length; i++){
        str = str.replace('x',arr[i])
        console.log(str)
    }

    return str
}

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0],'(xxx) xxx-xxxx'))
console.log(phoneNumber([1,2,3,4,5,6,7,8],'xx xx xx xx'))