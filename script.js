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
    if (player.toUpperCase() === "ROCK" && comp === "SCISSORS") {
        return `You Win! ${player.toUpperCase()} beats ${comp}`

    } else if (player.toUpperCase() === "ROCK" && comp === "PAPER") {
        return `You Lost :( ${comp} beats ${player.toUpperCase()}`

    } else if (player.toUpperCase() === "PAPER" && comp === "ROCK") {
        return `You Win! ${player.toUpperCase()} beats ${comp}`

    } else if (player.toUpperCase() === "PAPER" && comp === "SCISSORS") {
        return `You Lost :( ${comp} beats ${player.toUpperCase()}`

    } else if (player.toUpperCase() === "SCISSORS" && comp === "PAPER") {
        return `You Win! ${player.toUpperCase()} beats ${comp}`

    } else if (player.toUpperCase() === "SCISSORS" && comp === "ROCK") {
        return `You Lost :( ${comp} beats ${player.toUpperCase()}`

    } else {
        return "TIE"
    }
}

const playerChoice = "rock"
const compSelection = getComputerChoice()
console.log(`computer choice: ${compSelection}`)
console.log(playRound(playerChoice, compSelection))