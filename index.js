let player={
    name: "Per",
    chips: 145
}


let sum = 0
let cards =[]
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips


function getRandomCard(){

    let random_num = Math.floor(Math.random() * 15) + 1
    if (random_num > 10) {
        return 10
    
    }else if (random_num === 1){
        return 11

    }else{
        return random_num
    }

    
}

function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " 
    for (i = 0; i<cards.length; i++){
        cardEl.textContent +=   cards[i] + " "

    }
    sumEl.textContent="Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
   
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        startGame()
    }


}







