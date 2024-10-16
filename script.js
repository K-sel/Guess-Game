"use strict";

const game = {
  answer: Math.floor(Math.random() * 20 + 1),
  tries: 0,
  highscore: undefined,

  tooHigh() {
    document.querySelector("p#hint").textContent = "Too high!";
  },
  tooLow() {
    document.querySelector("p#hint").textContent = "Too low!";
  },
  correct() {
    button.disabled = true;
    document.querySelector("h1").textContent = "Correct !";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("p#hint").textContent =
      "Click again to play a new game!";
    document.querySelector("#answer").textContent = this.answer;
    this.score();
  },
  score() {
    if (this.highscore === undefined || this.tries < this.highscore) {
      this.highscore = this.tries;
      document.querySelector("#highscore").textContent = `${this.highscore}`;
    }
    document.querySelector("#score").textContent = `${this.tries}`;
  },
  checkValue() {
    let value = document.querySelector("input").value;
    this.tries++;

    if (value == "") {
      document.querySelector("p#hint").textContent = "Please enter a number!";
    } else if (value == this.answer) {
      this.correct();
    } else if (value < this.answer) {
      this.tooLow();
    } else {
      this.tooHigh();
    }
  },
  again() {
    button.disabled = false;
    this.answer = Math.floor(Math.random() * 20 + 1);
    this.tries = 0;
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector("#score").textContent = "";
    document.querySelector("#answer").textContent = "?";
    document.querySelector("p#hint").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("p#hint").style.color = "white";
    document.querySelector("#guess").value = "";
  },
};
document.querySelector("#score").textContent = "";
document.querySelector("#highscore").textContent = "";

const button = document.querySelector("#check");
button.addEventListener("click", game.checkValue.bind(game));

const again = document.querySelector("#again");
again.addEventListener("click", game.again.bind(game));
