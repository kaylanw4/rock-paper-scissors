

// Button on click event listeners
const btns = document.querySelectorAll("button")
btns.forEach(btn => btn.addEventListener('click', playRound))

// Results div
const results = document.querySelector("#results")

// add results of individual game
const p = document.createElement('p');
results.appendChild(p)

// add tallied score for player and computer
const score = document.createElement('p')
results.appendChild(score)

// initialize global variables
let playerScore = 0
let compScore = 0


/**
 * Returns a random choice between rock, paper, scissors
 * @returns {string} either "ROCK" "PAPER" or "SCISSOR"
 */
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    switch (compChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
    }
}
/**
 * Plays a round of rps, comparing player's choice to computer's choice
 * Displays the results of the round along with a running tally
 */
function playRound(e) {
    let comp = getComputerChoice()
    let player = e.srcElement.className

    let win = `You Win! ${player} beats ${comp}`
    let lose = `You Lost :( ${comp} beats ${player}`

    if (player === "rock" && comp === "scissor") {
        p.textContent = win
        getScore(0)
    } else if (player === "rock" && comp === "paper") {
        p.textContent = lose
        getScore(1)
    } else if (player === "paper" && comp === "rock") {
        p.textContent = win
        getScore(0)
    } else if (player === "paper" && comp === "scissor") {
        p.textContent = lose
        getScore(1)
    } else if (player === "scissor" && comp === "paper") {
        p.textContent = win
        getScore(0)
    } else if (player === "scissor" && comp === "rock") {
        p.textContent = lose
        getScore(1)
    } else {
        p.textContent = "Tie"
        getScore(2)
    }
}

function getScore(result) {
    
// let currScore = `Player: ${playerScore} Computer: ${compScore}`

    if (result === 0){
        playerScore++
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`
    } else if (result === 1){
        compScore++
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`
    } else {
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`
    }
}