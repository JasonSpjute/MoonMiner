let dm = 0
let hit = 1
let auto = 1

let clickUpgrades = {
    laser: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    blast: {
        price: 300,
        quantity: 0,
        multiplier: 3
    }
}

let automaticUpgrades = {
    drone: {
        price: 1000,
        quantity: 0,
        multiplier: 5
    },
    squad: {
        price: 5000,
        quantity: 0,
        multiplier: 5
    }
}

function pull(){
    dm++
    update()
}

function update(){
    document.getElementById("score").innerHTML = `DARK MATTER = ${dm}`
}

function buyLaser(){
    let bl = clickUpgrades.laser
    if(dm >= bl.price){
        dm = dm - bl.price
        bl.quantity++
        bl.price=bl.price*bl.multiplier
        update()
        console.log(bl.price, bl.quantity)
    }
}