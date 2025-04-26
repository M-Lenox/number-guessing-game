#!/usr/bin/env node

// Import the readline module from Node.js
const readline = require("node:readline");

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Handle the event when readline is closed
rl.on("close", () => {
  console.log("Exiting program . . . goodbye!👋");
  process.exit(0);
});

// Greet the user
console.log(" \nWelcome ... 👋 to the Number Guessing Game!\n ");

// Define difficulty levels with their corresponding attempts
const levels = {
  1: { name: "Easy", chances: 10 },
  2: { name: "Medium", chances: 5 },
  3: { name: "Hard", chances: 3 },
};

// Variables to track number of attempts and the random number
let attempts, compChoice;

// Function to handle user guesses
function askGuess(chances) {
  if (attempts > chances) {
    // If user exceeds the allowed chances, end the game
    console.log(
      `❌ You've used all your chances. The number was ${compChoice}`
    );
    rl.close();
    return;
  } else {
    // Prompt user to enter their guess
    rl.question("Enter your guess: ", (answer) => {
      // Determine if the guess should be higher or lower
      const lessOrGreater = compChoice < answer ? "lesser" : "greater";

      if (compChoice != answer) {
        // Wrong guess: give feedback and allow another guess
        console.log(
          `❌ Incorrect! The number is ${lessOrGreater} than ${answer} \n`
        );
        attempts++;
        askGuess(chances);
      } else {
        // Correct guess: congratulate and end the game
        console.log(
          `💯 Congratulations! You guessed the correct number in ${attempts} attempts`
        );
        rl.close();
      }
    });
  }
}

// Main function to start the game
function main() {
  // Display intro and instructions
  console.log("I am thinking of a number between 1 and 100");
  console.log("Please select the difficulty level.");
  console.log("1. Easy (10 attempts)");
  console.log("2. Medium (5 attempts)");
  console.log("3. Hard (3 attempts) \n");

  // Generate a random number between 0 and 100
  compChoice = (function getRandomInt() {
    return Math.floor(Math.random() * 101);
  })();

  // Initialize attempt counter
  attempts = 1;

  // Prompt user to select difficulty level
  rl.question("Enter your choice: ", (levelChoice) => {
    const selectedLevel = levels[levelChoice];

    if (selectedLevel) {
      // Valid choice: start the game
      console.log(
        `\nGreat! You have selected the ${selectedLevel.name} diffuculty level \nLet's start the game \n`
      );
      askGuess(selectedLevel.chances);
    } else {
      // Invalid choice: display error and exit
      console.log("You entered an invalid choice.");
      console.log("Choice can either be 1, 2 or 3.");
      rl.close();
    }
  });
}

// Start the program
main();
