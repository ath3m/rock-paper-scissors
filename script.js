const MOVES = ['rock', 'paper', 'scissors']

const WIN_ROUND = 5

function getPlayerChoice() {
    let playerChoice = prompt("rock, paper, or scissors").toLowerCase()
    choice_index = MOVES.indexOf(playerChoice)
    if (choice_index == -1)
        console.log("Enter valid choice!")
    return MOVES.indexOf(playerChoice)
}

function getComputerChoice() {
    return Math.floor(Math.random() * MOVES.length)
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice){
        console.log("It's a draw!")
        return -1
    }
    if (playerChoice == (computerChoice + 1)%MOVES.length){
        console.log("You win!")
        console.log(`${MOVES[playerChoice]} beats ${MOVES[computerChoice]}`)
        return 1
    }
    console.log("You lose!")
    console.log(`${MOVES[computerChoice]} beats ${MOVES[playerChoice]}`)
    return 0

}

function game() {
    let playerScore = 0
    let computerScore = 0
    let round = 1

    while(playerScore!=WIN_ROUND && computerScore!=WIN_ROUND){
        console.log(`Round ${round}`)
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        if (playerChoice == -1)
            continue
        console.log(`Player choice: ${MOVES[playerChoice]}`)
        console.log(`Computer choice: ${MOVES[computerChoice]}`)
        let res = playRound(playerChoice, computerChoice)
        if (res == -1)
            continue
        else if (res == 0)
            computerScore++
        else
            playerScore++
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
        round++
        console.log("====================")
    }
}

game()

