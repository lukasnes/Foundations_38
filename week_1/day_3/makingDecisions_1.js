let bot1Attack = 30
let bot2Attack = 40

let bot1Health = 100
let bot2Health = 100

if (bot1Attack > bot2Attack){
    console.log('bot 1 has more attack power than bot 2')
} else if (bot2Attack > bot1Attack){
    console.log('bot 2 has more attack power than bot 1')
} else {
    console.log('bot 1 and bot 2 have the same attack power')
}

if (bot1Health <= bot2Attack){
    console.log('bot 1 has been destroyed')
} else {
    bot1Health -= bot2Attack
    console.log(`bot 1s health is ${bot1Health}`)
}

let bot1Defense = 25

if(bot1Health <= bot2Attack - bot1Defense){
    console.log('bot 1 has been destroyed')
} else {
    bot1Health -= bot2Attack - bot1Defense
    console.log(`bot 1s health is now ${bot1Health} `)
}

if((bot1Health + 60) >= 100){
    bot1Health = 100
} else {
    bot1Health += 60
}

console.log(`bot 1 has done some repairs and its health is now ${bot1Health}`)

let threat = bot1Health > 30

if (threat !== false){
    console.log('bot 2 will continue attacking bot 1')
} else {
    console.log('bot 2 will let bot 1 flee')
}

let attacks = 0

while(threat){
    bot2Health -= bot1Attack
    bot1Health -= (bot2Attack - bot1Defense)
    attacks++
    
    if(bot2Health < 0){
        bot2Health = 0
    } else if(bot1Health < 0){
        bot1Health = 0
    }
    
    threat = bot1Health > 30 && bot2Health > 0
    console.log(attacks)
    console.log(`bot 1s health is ${bot1Health} and bot 2s health is ${bot2Health}`)
}

// this is a new message