const computerDis = document.querySelector(".computer-choice");
const playerDis = document.querySelector(".player-choice");

const computerChoiceImg = document.getElementById("computer-choice-img");
const computerPlayerImg = document.getElementById("player-choice-img");

const result = document.getElementById("result");

const winCountElem = document.querySelector(".win-count");
const loseCountElem = document.querySelector(".lose-count");

const playAgain = document.querySelector(".play-again")

const choise = [
  "img/icon-scissors.svg",
  "img/icon-paper.svg",
  "img/icon-rock.svg",
];

let winCount = 0;
let loseCount = 0;

function start(playerChoise) {
  computerDis.classList.add("appear");
  playerDis.classList.add("appear");

  result.textContent = "1 2 3...";
  computerChoiceImg.src = "";
  computerPlayerImg.src = "";

  setTimeout(() => {
    const compuerChoise = Math.floor(Math.random() * 3);
    computerChoiceImg.src = choise[compuerChoise];
    computerPlayerImg.src = choise[playerChoise];

    if (playerChoise == compuerChoise) {
      result.textContent = "Draw";
      playAgain.className = "play-again"
    } else if (playerChoise == 0 && compuerChoise == 1) {
      win();
    } else if (playerChoise == 0 && compuerChoise == 2) {
      lose();
    } else if (playerChoise == 1 && compuerChoise == 2) {
      win();
    } else if (playerChoise == 1 && compuerChoise == 0) {
      lose();
    } else if (playerChoise == 2 && compuerChoise == 0) {
      lose();
    } else if (playerChoise == 2 && compuerChoise == 1) {
      win();
    }

    computerDis.classList.remove("appear");
    playerDis.classList.remove("appear");
  }, 400);
}

function win() {
  winCount++;
  result.textContent = "You Win!";
  winCountElem.textContent = winCount;
  playAgain.className = "play-again win"
}

function lose() {
  loseCount++;
  result.textContent = "You Lose!";
  loseCountElem.textContent = loseCount;
  playAgain.className = "play-again lose"
}
