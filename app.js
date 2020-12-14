let dm = 0
let hit = 1
let pilot = 0

let upgrades = [
    {
        name: "Laser",
        price: 5,
        quantity: 0,
        multiplier: 1,
        type: "click"
    },
    {
        name: "Blaster",
        price: 100,
        quantity: 0,
        multiplier: 5,
        type: "click"
    },
    {
        name: "Drone", 
        price: 500,
        quantity: 0,
        multiplier: 1,
        type: "auto"
    },
    {
        name: "Squad",
        price: 1000,
        quantity: 0,
        multiplier: 5,
        type: "auto"
    }
]

function myAuto(){
    dm = dm += pilot
    update()
}



function pull(){
    dm += hit
    update()
}

function update(){
    document.getElementById("score").innerHTML = `<h4>DARK MATTER = ${dm}</h4>`
    drawButtons()
    drawUpgrade()
}

function buy(weapon){
    let item = upgrades.find(f => f.name == weapon)
    if(dm >= item.price){
        dm -= item.price
        item.quantity++
        item.price = item.price*2
        if(item.type == "click"){
            hit += item.multiplier
        } else if(item.type == "auto"){
            pilot += item.multiplier
        }
    }
    console.log(hit, pilot)
    update()
}


function drawButtons(){
    let template = ""
    upgrades.forEach(f => 
        template += `<div class="row">
            <div class="col py-3">
            <button class="btn btn-primary" onclick="buy('${f.name}')">Buy ${f.name.toUpperCase()}: ${f.price}</button>
            </div>
        </div>`)
    document.getElementById("buttons").innerHTML = template
}

function drawUpgrade(){
    let template = ""
    upgrades.forEach(f => template += 
        `<div class="row">
            <div class="col">
                <span>${f.name} = ${f.quantity}</span>
            </div>
        </div>`)
    document.getElementById("upgradeCount").innerHTML = template

}

update()

setInterval(myAuto, 2000)
