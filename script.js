function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    switch (compChoice) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function playRound(player, comp) {
    const win = `You Win! ${player.toUpperCase()} beats ${comp}`
    const lose = `You Lost :( ${comp} beats ${player.toUpperCase()}`
    if (player.toUpperCase() === "ROCK" && comp === "SCISSORS") {
        return win
    } else if (player.toUpperCase() === "ROCK" && comp === "PAPER") {
        return lose
    } else if (player.toUpperCase() === "PAPER" && comp === "ROCK") {
        return win
    } else if (player.toUpperCase() === "PAPER" && comp === "SCISSORS") {
        return lose
    } else if (player.toUpperCase() === "SCISSORS" && comp === "PAPER") {
        return win
    } else if (player.toUpperCase() === "SCISSORS" && comp === "ROCK") {
        return lose
    } else {
        return "TIE"
    }
}

const playerChoice = "rock"
const compSelection = getComputerChoice()
console.log(`player choice: ${playerChoice.toUpperCase()}`)
console.log(`computer choice: ${compSelection}`)
console.log(playRound(playerChoice, compSelection))