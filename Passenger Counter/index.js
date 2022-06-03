  
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

let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count  += 1
    countEl.innerText = count     
}

increment()

function save(){
console.log(count)

}
save()
 
let messageToUser = "You have three new notifications, per!"


let name  = "Kinuthia"
let greeting = "Hi my name is Kelvin "

let myGreeting = greeting + name 
console.log(myGreeting)

