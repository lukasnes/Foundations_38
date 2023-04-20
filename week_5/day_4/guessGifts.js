const guessGifts = (wishArr,presentArr) => {
    let arr = []

    for(let i = 0; i < wishArr.length; i++){
        for(let j = 0; j < presentArr.length; j++){
            let { name, size:wishSize, clatters:wishClatters, weight:wishWeight } = wishArr[i]
            let { size:presentSize, clatters:presentClatters, weight:presentWeight } = presentArr[j]

            if(wishSize === presentSize && wishClatters === presentClatters && wishWeight === presentWeight){
                arr.push(name)
            }
        }
    }

    return arr
}

let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]

console.log(guessGifts(wishlist,presents))