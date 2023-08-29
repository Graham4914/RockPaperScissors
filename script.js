console.log("testing");
/*
Pseudocode for Rock Paper Scissors in JavaScript:

1. Initialize the game:
    a. Create an array of choices: ["rock", "paper", "scissors"]
    b. Display game instructions to the user using console.log or alert.

2. Get the user's choice:
    a. Use prompt() to ask the user to select "rock", "paper", or "scissors".
    b. If the user's input is invalid (not one of the three choices), use prompt() again.

3. Generate a random choice for the computer:
    a. Randomly select an item from the choices array using Math.random().

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
