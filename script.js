console.log("testing");
/*
Pseudocode for Rock Paper Scissors in JavaScript:


1. Initialize the game:
    
    a. Display game instructions to the user using console.log or alert.

1.1 Get computer choice
    Generate a random choice for the computer:
    a. Create an array of choices: ["rock", "paper", "scissors"]
    b. Randomly select an item from the choices array using Math.random().
*/
function getComputerChoice() {
    const choices = ["Rock", "Paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    /*converts selections to lower case*/

    if (playerSelection === computerSelection) {   
        return `You chose ${playerSelection} and i chose ${computerSelection } so I'ts a tie!`;

} else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
        return `You chose ${playerSelection} and i chose ${ computerSelection } so you win! Rock beats Scissors`;
    } else {return `You chose ${playerSelection} and i chose ${computerSelection } so you loose! Paper beats Rock`;
    }

} else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        return "you win! Paper beats Rock.";
    } else {return "You loose! Scissors beats Paper.";
}

} else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
        return "You win! Scissors beats paper"
    } else {
        return "you loose! Rock beats Scissors";
}
} else {
    return "Invalid selection. please choose Rock, paper, or scissors"
}
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
      const computerSelection = getComputerChoice();
      
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie! No winner.");
    }
  }
  
  game();

  
  
  
  


/*
2. Get the user's choice:
    a. Use prompt() to ask the user to select "rock", "paper", or "scissors".
    b. If the user's input is invalid (not one of the three choices), use prompt() again.



4. Determine the winner:
    a. If user's choice is the same as computer's choice:
         - It's a tie! Use console.log or alert to inform the user.
    b. Else if user's choice is "rock" and computer's choice is "scissors", OR
         user's choice is "scissors" and computer's choice is "paper", OR
         user's choice is "paper" and computer's choice is "rock":
         - User wins! Use console.log or alert to inform the user.
    c. Else:
         - Computer wins! Use console.log or alert to inform the user.

5. Display the results:
    a. Use console.log or alert to show the user's choice, the computer's choice, and the result.

6. Ask if the user wants to play again:
    a. Use confirm() to ask if the user wants another round.
    b. If yes, go back to step 2.
    c. If no, end the game and say goodbye using console.log or alert.
*/
