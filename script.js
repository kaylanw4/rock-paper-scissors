

const btns = document.querySelectorAll("button")
btns.forEach(btn => btn.addEventListener('click', playRound))

const results = document.querySelector("#results")
const p = document.createElement('p');
results.appendChild(p)

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
    } else if (player === "rock" && comp === "paper") {
        p.textContent = lose
    } else if (player === "paper" && comp === "rock") {
        p.textContent = win
    } else if (player === "paper" && comp === "scissor") {
        p.textContent = lose
    } else if (player === "scissor" && comp === "paper") {
        p.textContent = win
    } else if (player === "scissor" && comp === "rock") {
        p.textContent = lose
    } else {
        p.textContent = "Tie"
    }
}