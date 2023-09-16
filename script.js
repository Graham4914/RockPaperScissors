
const MAX_SCORE = 5;

// initialise scores
let playerScore = 0;
let computerScore = 0;
// Function that randomly selects the computer's choice.
function getComputerChoice() {
    const startTime = performance.now();  // Start timer

    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    const endTime = performance.now();  // End timer
    const timeTaken = ((endTime - startTime)).toFixed(5); // Calculate time taken

    return {
        choice: computerChoice,
        time: timeTaken
    };
}


// Function that compares player's choice against computer's to determine the winner of a round.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}.`;
    }

    switch (playerSelection) {
        case "rock":
            return computerSelection === "scissors" ? "You win! Rock beats Scissors." : "You lose! Paper beats Rock.";
        case "paper":
            return computerSelection === "rock" ? "You win! Paper beats Rock." : "You lose! Scissors beats Paper.";
        case "scissors":
            return computerSelection === "paper" ? "You win! Scissors beats Paper." : "You lose! Rock beats Scissors.";
        default:
            return "Invalid selection. Please choose Rock, Paper, or Scissors.";
    }
}

// Announce winner
function announceOverallWinner() {
    const gameResultDiv = document.getElementById("gameResult");
    const playAgainButton = document.getElementById("playAgain");
    if (playerScore === MAX_SCORE) {
        gameResultDiv.innerHTML = "<strong>Game Over - You Won!</strong>";
    } else if (computerScore === MAX_SCORE) {
        gameResultDiv.innerHTML = "<strong>Game Over - You Lost!</strong>";
    }
        
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    
        // Show the "Play Again" button
        playAgainButton.style.display = "block";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    
     // Clear the game result and the results of the last round
     document.getElementById("gameResult").textContent = "";
     document.getElementById("results").textContent = ""; 
     // Update the DOM elements for scores:
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
     // Hide the "Play Again" button
    //  document.getElementById("playAgain").style.display = "none";

     // Enable the game buttons
   
}

// Function to handle a round when a button is clicked.
function playGameRound(buttonChoice) {
    const computerData = getComputerChoice();
    const computerChoice = computerData.choice;
    const computerTime = computerData.time;
    
    let result = playRound(buttonChoice, computerChoice);
    if (result.includes("win")) {
        result += ` I'm going to crash you into the fence next time!`;
        playerScore++;
    } else if (result.includes("lose")) {
        result += ` You suck! How are your ribs? I beat you in less than ${computerTime} milliseconds!`;
        computerScore++;
    } else {
        result += ` You're only human. I made my choice in less than ${computerTime} milliseconds!`;
    }

    console.log(result);
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = result; // Updating the results div with the game result

   
    // Update the DOM with the scores
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    // Check if someone won the game
    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
        announceOverallWinner();
    }
}

// Button references.
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

// Event listeners for game buttons.
rockButton.addEventListener("click", () => playGameRound("rock"));
paperButton.addEventListener("click", () => playGameRound("paper"));
scissorButton.addEventListener("click", () => playGameRound("scissors"));

//Event listners for Play Again
document.getElementById("playAgain").addEventListener("click", function() {
    resetGame();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    this.style.display = "none";  // Hide the Play Again button
});
