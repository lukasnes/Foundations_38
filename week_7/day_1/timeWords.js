const createHours = hours => {
    let words = [
        'twelve',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven'
    ]

    hours = parseInt(hours)
    if(hours >= 12){
        hours -= 12
    }
    
    return words[hours]
}

const createMinutes = minutes => {
    const belowTwenties = [
        "o'clock",
        "oh one",
        "oh two",
        "oh three",
        "oh four",
        "oh five",
        "oh six",
        "oh seven",
        "oh eight",
        "oh nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]

    let ones = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]

    let tens = [
        'twenty',
        'thirty',
        'fourty',
        'fifty'
    ]

    minutes = parseInt(minutes)
    if(minutes < 20){
        return belowTwenties[minutes]
    } else {
        let minuteArr = String(minutes).split('')
        console.log(minuteArr)
        return tens[+minuteArr[0] - 2] + ' ' + ones[minuteArr[1]]
    }
}

const timeWords = str => {
    if(str === '12:00'){
        return 'noon'
    } else if(str === '00:00'){
        return 'midnight'
    }

    let timeArr = str.split(':')

    let hourWord = createHours(timeArr[0])
    let minuteWord = createMinutes(timeArr[1])

    let timeOfDay = timeArr[0] < 12 ? 'am' : 'pm'

    // if(timeArr[0] < 12){
    //     'am'
    // } else {
    //     'pm'
    // }

    console.log(timeOfDay)
    return `${hourWord} ${minuteWord} ${timeOfDay}`
}

console.log(timeWords('12:00'))
console.log(timeWords('00:00'))
console.log(timeWords('09:07'))
console.log(timeWords('12:15'))
console.log(timeWords('20:45'))
console.log(timeWords('14:00'))
console.log(timeWords('16:20'))