const MAX_SCORE = 5;

let playerScore = 0;
let computerScore = 0;
let totalThrows = 0;

const iconMapping = {
    rock: document.getElementById("rock").innerHTML,
    paper: document.getElementById("paper").innerHTML,
    scissors: document.getElementById("scissors").innerHTML
};

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return { choice: choices[randomNumber] };
}

function playRound(playerSelection, computerSelection) {
    let totalThrowsCounter = document.getElementById('totalThrows');
    totalThrowsCounter.innerText = parseInt(totalThrowsCounter.innerText) + 1;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) return `It's a tie! Both chose ${playerSelection}.`;

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

function announceOverallWinner() {
    const gameResultDiv = document.getElementById("gameResult");

    if (playerScore === MAX_SCORE) {
        gameResultDiv.innerHTML = "<strong>Game Over - You Won!</strong>";
    } else if (computerScore === MAX_SCORE) {
        gameResultDiv.innerHTML = "<strong>Game Over - You Lost!</strong>";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;

    document.getElementById("playAgain").style.display = "block";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    totalThrows = 0;

    document.getElementById("playerChoice").innerHTML = "";
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("gameResult").textContent = "";
    document.getElementById("results").textContent = ""; 
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById('totalThrows').innerText = totalThrows;
}

function playGameRound(buttonChoice) {
    const startScriptTime = performance.now();
    const computerChoice = getComputerChoice().choice;

    document.getElementById("playerChoice").innerHTML = iconMapping[buttonChoice.toLowerCase()];
    document.getElementById("computerChoice").innerHTML = iconMapping[computerChoice.toLowerCase()];

    let result = playRound(buttonChoice, computerChoice);
    const endScriptTime = performance.now();
    const scriptExecutionTime = (endScriptTime - startScriptTime).toFixed(4);
    
    if (result.includes("win")) {
        result += ` I'm going to crash you next time!`;
        playerScore++;
    } else if (result.includes("lose")) {
        result += ` It took me ${scriptExecutionTime} milliseconds to defeat you!`;
        computerScore++;
    } else {
        result += `You were lucky this time!  I made my choice in ${scriptExecutionTime} milliseconds!`;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = result;
   
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
        announceOverallWinner();
    }
}

rockButton.addEventListener("click", () => playGameRound("rock"));
paperButton.addEventListener("click", () => playGameRound("paper"));
scissorButton.addEventListener("click", () => playGameRound("scissors"));

const buttons = document.querySelectorAll('.game-button');

buttons.forEach(button => {
    const delayClass = 'delay-' + (Math.floor(Math.random() * 3) + 1);
    button.classList.add(delayClass);
    button.addEventListener('click', () => {
        button.classList.add('selected');
        setTimeout(() => {
            button.style.animation = '';
            button.classList.remove('selected');
        }, 2000); 
    });
});

document.getElementById("playAgain").addEventListener("click", function() {
    resetGame();
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    this.style.display = "none";
});
