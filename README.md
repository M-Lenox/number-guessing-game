🎯 Number Guessing Game (CLI)
A fun and interactive command-line Number Guessing Game built with Node.js!

You pick a difficulty level, and try to guess the number the computer randomly chose. Can you guess it before your chances run out?

📦 Installation
Make sure you have Node.js installed.

Clone the repository or download the project files.

bash
Copy code
git clone <your-repo-link>
cd number-guessing-game
Make the script executable (optional):

bash
Copy code
chmod +x main.js
🚀 Usage
Run the game using:

bash
Copy code
node main.js
or if you made it executable:

bash
Copy code
./main.js
Follow the on-screen instructions to play.

🕹 How to Play
The computer randomly selects a number between 1 and 100.

Choose your difficulty level:

Easy: 10 attempts

Medium: 5 attempts

Hard: 3 attempts

Enter your guesses one by one.

After each guess, you will be told whether the correct number is greater or lesser than your guess.

Guess the number before you run out of attempts!

You can also type exit at any time to quit the game.

🛠 Features
Three difficulty levels

Input validation

Immediate feedback after each guess

Graceful exit on completion or user request

Friendly CLI messages with emojis 😄

📂 Project Structure
css
Copy code
number-guessing-game/
├── main.js
├── README.md
main.js → The main game logic

README.md → You're reading it!

✨ Example Gameplay
mathematica
Copy code
Welcome ... 👋 to the Number Guessing Game!

I am thinking of a number between 1 and 100
Please select the difficulty level:

1. Easy (10 attempts)
2. Medium (5 attempts)
3. Hard (3 attempts)

Enter your choice: 1
Great! You have selected the Easy difficulty level
Let's start the game

Enter your guess: 50
❌ Incorrect! The number is lesser than 50

Enter your guess: 25
❌ Incorrect! The number is greater than 25

Enter your guess: 35
💯 Congratulations! You guessed the correct number in 3 attempts
Exiting program... goodbye! 👋
💬 Contributing
Feel free to fork this project and submit pull requests if you have ideas to improve it — maybe adding more modes, hints, or a score tracker!

📄 License
This project is open-source and free to use.
