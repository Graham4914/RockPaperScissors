// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
    // Convert selections to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Compare player's and computer's choices to determine the outcome
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and I chose ${computerSelection}. It's a tie!`;
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return `You chose ${playerSelection} and I chose ${computerSelection}. You win! Rock beats Scissors.`;
        } else {
            return `You chose ${playerSelection} and I chose ${computerSelection}. You lose! Paper beats Rock.`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock.";
        } else {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats Paper.";
        } else {
            return "You lose! Rock beats Scissors.";
        }
    } else {
        return "Invalid selection. Please choose Rock, Paper, or Scissors.";
    }
}

// Get player's choice and a random computer choice
const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
const computerSelection = getComputerChoice();

// Function to play a 5-round game and keep score
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 rounds
    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
        const computerSelection = getComputerChoice();

        // Play a round and display the result
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        // Update scores based on round result
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! No winner.");
    }
}

// Call the game function to start the game
game();

