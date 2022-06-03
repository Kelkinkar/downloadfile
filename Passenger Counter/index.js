

//  Calculating dog age
//  let myAge = 23
//  let humanDogRatio =  7 
//  let myDogAge = myAge * humanDogRatio
//  console.log(myDogAge)

//  let bonuspoints = 50
//  bonuspoints += 50
//  console.log(bonuspoints) 
//  bonuspoints -= 75
//  console.log(bonuspoints)
//  bonuspoints += 45 
//  console.log(bonuspoints )
let welcomeEl = document.getElementById("welcome-el")
let name = "kelvin"
let greeting = " Welcome Back "

welcomeEl.innerText = greeting + name
welcomeEl.innerText += " 🤑"

let countEl = document.getElementById("count-el")
let buttonClick = 0

function increment(){
    buttonClick += 1
    countEl.innerText = buttonClick
}

increment() 

function save(){
    console.log(buttonClick) 
    const data = 'Hello world'
    writeFileSync('output.txt', data)
}

