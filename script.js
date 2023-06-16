function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    switch (compChoice) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSOR"
    }
}

function playRound(player, comp) {
    if (player === "ROCK" && comp === "SCISSOR") {
        return 0
    } else if (player === "ROCK" && comp === "PAPER") {
        return 1
    } else if (player === "PAPER" && comp === "ROCK") {
        return 0
    } else if (player === "PAPER" && comp === "SCISSOR") {
        return 1
    } else if (player === "SCISSOR" && comp === "PAPER") {
        return 0
    } else if (player === "SCISSOR" && comp === "ROCK") {
        return 1
    } else {
        return 2
    }
}

function gameLoop(){
    
    let playerCount = 0
    let compCount = 0
    let compSelection

    while (playerCount < 5 && compCount < 5){
        let playerSelection = prompt("Enter rock, paper, or scissor:")
        const playerSelection1 = playerSelection.toUpperCase().trim()
        compSelection = getComputerChoice()
        const win = `You Win! ${playerSelection1} beats ${compSelection}`
        const lose = `You Lost :( ${compSelection} beats ${playerSelection1}`

        if (playerSelection1 === "ROCK" ||
            playerSelection1 === "PAPER" ||
            playerSelection1 === "SCISSOR"
        ) {
            let gameResult = playRound(playerSelection1, compSelection)
            if (gameResult === 0){
                console.log(win)
                console.log(`Current score: Player: ${++playerCount} Computer: ${compCount}`)
            } else if (gameResult === 1) {
                console.log(lose)
                console.log(`Current score: Player: ${playerCount} Computer: ${++compCount}`)
            } else {
                console.log("Tie")
                console.log(`Current score: Player: ${playerCount} Computer: ${compCount}`)
            }
        } else {
            console.error("Invalid Input. Try again")
            continue
        }

    }
    if (playerCount > compCount) {
        console.log("You beat the computer! You must've gotten lucky...")
    } else {
        console.log("You lost lmaooo, ur trash kid ")
    }
}
window.onload=function(){
    var btn = document.getElementById("startBtn")
    btn.addEventListener("click", gameLoop)
}
