const choices = ['rock', 'paper', 'scissors'];
const exit_choices = ['quit', 'q', 'exit'];
let player_score = 0;
let computer_score = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a Tie! Both chose ${playerSelection}`;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computer_score += 1;
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection == 'scissors') {
            player_score += 1;
            return "You Win! Scissors beats Paper";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computer_score += 1;
            return "You Lose! Scissors beats Paper";
        }
        if (computerSelection == 'rock') {
            player_score += 1;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computer_score += 1;
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection == 'paper') {
            player_score += 1;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = 
            prompt("Rock, Paper, or Scissors? Quit or Q to exit").toLowerCase();
        if (exit_choices.includes(playerSelection)) {
            break;
        }
        while (!(choices.includes(playerSelection))) {
            console.log(`Choice: ${playerSelection}`)
            playerSelection = 
                prompt("Invalid result: Choose Rock, Paper, or Scissors").toLowerCase();
        }
        console.log(playRound(playerSelection, computerPlay()));
    }
    if (player_score > computer_score) {
        console.log(`You won! Your final score is ${player_score}. 
            Computer score is ${computer_score}`)
    } else if (player_score < computer_score) {
        console.log(`You lost. Your final score is ${player_score}. 
            Computer score is ${computer_score}`)
    } else {
        console.log(`The final result is a tie. Score: ${player_score}`)
    }
}

game();