const computerDis = document.querySelector(".computer-choice");
const playerDis = document.querySelector(".player-choice");

const computerChoiceImg = document.getElementById("computer-choice-img");
const playerChoiceImg = document.getElementById("player-choice-img");

const resultElem = document.getElementById("result");

const winCountElem = document.querySelector(".win-count");
const loseCountElem = document.querySelector(".lose-count");

const playAgainElem = document.querySelector(".play-again");

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
  computerChoiceImg.src = "";
  playerChoiceImg.src = "";

  countdown();
  resultElem.offsetHeight;
  setTimeout(() => {
    const compuerChoise = Math.floor(Math.random() * 3);
    computerChoiceImg.src = choise[compuerChoise];
    playerChoiceImg.src = choise[playerChoise];

    if (playerChoise === compuerChoise) {
      resultElem.textContent = "Draw";
      playAgainElem.className = "play-again";
      clearAnimation();
    } else if ((playerChoise + 1) % 3 === compuerChoise) {
      showResult("win");
    } else {
      showResult("lose");
    }

    computerDis.classList.remove("appear");
    playerDis.classList.remove("appear");
  }, 1000);
}

function showResult(result) {
  if (result == "lose") {
    loseCount++;
    loseCountElem.textContent = loseCount;
    playAgainElem.className = "play-again lose";
    resultElem.textContent = "You Lose!";
  } else if (result == "win") {
    winCount++;
    resultElem.textContent = "You Win!";
    playAgainElem.className = "play-again win";
    winCountElem.textContent = winCount;
  }
  clearAnimation();
}

function countdown() {
  const sequence = ["SCISSORS", "PAPER", "ROCK"];

  let i = 0;
  function showNext() {
    if (i >= sequence.length) return;

    resultElem.textContent = sequence[i];
    clearAnimation();

    i++;
    if (i < sequence.length) {
      setTimeout(showNext, 300);
    }
  }
  showNext();
}

function clearAnimation() {
  resultElem.style.animation = "none";
  resultElem.offsetHeight;
  resultElem.style.animation = "";
}

playAgainElem.addEventListener("click", () => {
  resultElem.textContent = "Take your choise";
  computerChoiceImg.src = "";
  playerChoiceImg.src = "";
  playAgainElem.className = "play-again";
});
