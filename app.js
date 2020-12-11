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
        price: 5,
        quantity: 0,
        multiplier: 3
    }
}

let automaticUpgrades = {
    drone: {
        price: 5,
        quantity: 0,
        multiplier: 5
    },
    squad: {
        price: 5,
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
        document.getElementById("laserCost").innerHTML = `Buy Laser $${bl.price}`
        document.getElementById("laserCount").innerHTML = `Lasers = ${bl.quantity}`
    }
}

function buyBlast(){
    let bb = clickUpgrades.blast
    if(dm >= bb.price){
        dm = dm - bb.price
        bb.quantity++
        bb.price=bb.price*bb.multiplier
        update()
        document.getElementById("blastCost").innerHTML = `Buy Blast $${bb.price}`
        document.getElementById("blastCount").innerHTML = `Blasters = ${bb.quantity}`
    }
}

function buyDrone(){
    let bd = automaticUpgrades.drone
    if(dm >= bd.price){
        dm = dm - bd.price
        bd.quantity++
        bd.price=bd.price*bd.multiplier
        update()
        document.getElementById("droneCost").innerHTML = `Buy Drone $${bd.price}`
        document.getElementById("droneCount").innerHTML = `Drones = ${bd.quantity}`
    }
}

function buySquad(){
    let bs = automaticUpgrades.squad
    if(dm >= bs.price){
        dm = dm - bs.price
        bs.quantity++
        bs.price=bs.price*bs.multiplier
        update()
        document.getElementById("squadCost").innerHTML = `Buy Squad $${bs.price}`
        document.getElementById("squadCount").innerHTML = `Squads = ${bs.quantity}`
    }
}