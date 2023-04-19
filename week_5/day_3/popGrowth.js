const popGrowth = (p0,percent,growth,final) => {
    let years = 0
    percent = percent / 100

    while(p0 < final){
        p0 = p0 + (p0 * percent) + growth

        years++
    }

    return `In order for the town to reach ${final} population, it will take ${years} years.`
}

console.log(popGrowth(1500, 5, 100, 5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))