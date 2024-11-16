"use strict";

// Game object to hold game state and methods
const game = {
    // Randomly generated answer between 1 and 20
    answer: Math.floor(Math.random() * 20 + 1),
    // Number of tries the user has made
    tries: 0,
    // Highscore, initially undefined
    highscore: undefined,

    // Method to display "Too high!" message
    tooHigh() {
        document.querySelector("#hint").textContent = "Too high!";
    },
    // Method to display "Too low!" message
    tooLow() {
        document.querySelector("#hint").textContent = "Too low!";
    },
    // Method to handle correct guess
    correct() {
        button.disabled = true; // Disable the button
        document.querySelector("h1").textContent = "Correct !"; // Update heading
        document.body.style.backgroundColor = "green"; // Change background color
        document.querySelector("#hint").textContent = "Click again to play a new game!"; // Update hint
        document.querySelector("#answer").textContent = this.answer; // Show the correct answer
        this.score(); // Update the score
    },
    // Method to update the score and highscore
    score() {
        // Update highscore if it's undefined or current tries are less than highscore
        if (this.highscore === undefined || this.tries < this.highscore) {
            this.highscore = this.tries;
            document.querySelector("#highscore").textContent = `${this.highscore}`;
        }
        // Update the current score
        document.querySelector("#score").textContent = `${this.tries}`;
    },
    // Method to check the user's input value
    checkValue() {
        let value = document.querySelector("input").value; // Get the input value
        this.tries++; // Increment tries

        // Handle different cases based on the input value
        if (typeof value !== "number" || value === "") {
            document.querySelector("#hint").textContent = "Please enter a number!";
        } else if (value == this.answer) {
            this.correct();
        } else if (value < this.answer) {
            this.tooLow();
        } else {
            this.tooHigh();
        }
    },
    // Method to reset the game for a new round
    again() {
        button.disabled = false; // Enable the button
        this.answer = Math.floor(Math.random() * 20 + 1); // Generate a new answer
        this.tries = 0; // Reset tries
        document.querySelector("h1").textContent = "Guess My Number!"; // Reset heading
        document.querySelector("#score").textContent = ""; // Clear score
        document.querySelector("#answer").textContent = "?"; // Reset answer display
        document.querySelector("#hint").textContent = "Start guessing..."; // Reset hint
        document.body.style.backgroundColor = "#222"; // Reset background color
        document.querySelector("#hint").style.color = "white"; // Reset hint color
        document.querySelector("#guess").value = ""; // Clear input field
    },
};

// Initialize score and highscore display
document.querySelector("#score").textContent = "";
document.querySelector("#highscore").textContent = "";

// Get the check button and add click event listener
const button = document.querySelector("#check");
button.addEventListener("click", game.checkValue.bind(game));

// Get the again button and add click event listener
const again = document.querySelector("#again");
again.addEventListener("click", game.again.bind(game));
