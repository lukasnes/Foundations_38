const tower = num => {
    let towerPara = ''

    for(let i = 0; i < num; i++){
        let stars = '*'.repeat(1 + (i * 2))
        // console.log(stars)
        let spaces = ' '.repeat(num - i - 1)
        
        let towerStr = spaces + stars + spaces + '\n'
        towerPara += towerStr
    }

    return towerPara
}

console.log(tower(3))
console.log(tower(7))
console.log(tower(10))

// console.log('Hello World'.repeat(3))