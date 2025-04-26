#!/usr/bin/env node

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => {
  console.log("Exiting program . . . goodbye!👋");
  process.exit(0);
});

console.log(" \nWelcome ... 👋 to the Number Guessing Game!\n ");
const levels = {
  1: { name: "Easy", chances: 10 },
  2: { name: "Medium", chances: 5 },
  3: { name: "Hard", chances: 3 },
};
const easyChances = 10;
const mediumChances = 5;
const hardChances = 3;

let attempts, compChoice;

function askGuess(chances) {
  if (attempts > chances) {
    console.log(
      `❌ You've used all your chances. The number was ${compChoice}`
    );
    rl.close();
    return;
  } else {
    rl.question("Enter your guess: ", (answer) => {
      const lessOrGreater = compChoice < answer ? "lesser" : "greater";
      if (compChoice != answer) {
        console.log(
          `❌ Incorrect! The number is ${lessOrGreater} than ${answer} \n`
        );
        attempts++;
        askGuess(chances);
      } else {
        console.log(
          `💯 Congratulations! You guessed the correct number in ${attempts} attempts`
        );
        rl.close();
      }
    });
  }
}

function main() {
  console.log("I am thinking of a number between 1 and 100");
  console.log("Please select the difficulty level.");
  console.log("1. Easy (10 attempts)");
  console.log("2. Medium (5 attempts)");
  console.log("3. Hard (3 attempts) \n");

  compChoice = (function getRandomInt() {
    return Math.floor(Math.random() * 101);
  })();

  attempts = 1;

  rl.question("Enter your choice: ", (levelChoice) => {
    const selectedLevel = levels[levelChoice];

    if (selectedLevel) {
      console.log(
        `\nGreat! You have selected the ${selectedLevel.name} diffuculty level \nLet's start the game \n`
      );
      askGuess(selectedLevel.chances);
    } else {
      console.log("You entered an invalid choice.");
      console.log("Choice can either be 1, 2 or 3.");
      rl.close();
    }
  });
}

main();
