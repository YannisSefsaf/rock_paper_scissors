// VARIABLES //
let computerChoice = ["Rock", "Scissors", "Paper"];
let scorePlayer = 0;
let scoreComputer = 0;

// QUERY SELECTORS //
const options = document.querySelectorAll(".option");
const resetGame = document.querySelector(".start__game");
const showPlayerScore = document.querySelector(".player__score");
const showComputerScore = document.querySelector(".computer__score");
const roundResult = document.querySelector(".round__result");
const playto = document.querySelector("#playto");
const result = document.querySelector(".result");
let maxScore = Number(playto.value);
showPlayerScore.innerText = `${scorePlayer}`;
showComputerScore.innerText = `${scoreComputer}`;

// EVENT LISTENERS //
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    game(e.target.innerText);
  });
});

resetGame.addEventListener("click", function (e) {
  scorePlayer = 0;
  scoreComputer = 0;
  keepScore(scorePlayer, scoreComputer);
  result.innerText = "";
  roundResult.innerText = "";
});

playto.addEventListener("click", (e) => {
  maxScore = Number(playto.value);
});

// FUNCTIONS //
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (isDraw(playerSelection, computerSelection)) {
    displayRoundResult(playerSelection, computerSelection);
    return "draw";
  } else if (isWinningPlay(playerSelection, computerSelection)) {
    displayRoundResult(playerSelection, computerSelection);
    return "win";
  } else if (isLosingPlay(playerSelection, computerSelection)) {
    displayRoundResult(playerSelection, computerSelection);
    return "loss";
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  if (isMaxScore(scorePlayer, scoreComputer)) {
    if (playRound(playerSelection, computerSelection) === "win") {
      scorePlayer++;
      keepScore(scorePlayer, scoreComputer);
      isMaxScore(scorePlayer, scoreComputer);
    } else if (playRound(playerSelection, computerSelection) === "loss") {
      scoreComputer++;
      keepScore(scorePlayer, scoreComputer);
      isMaxScore(scorePlayer, scoreComputer);
    }
  } else {
    keepScore(scorePlayer, scoreComputer);
  }
}

function keepScore(scorePlayer, scoreComputer) {
  showPlayerScore.innerText = `${scorePlayer}`;
  showComputerScore.innerText = `${scoreComputer}`;
}

function displayRoundResult(playerSelection, computerSelection) {
  if (isDraw(playerSelection, computerSelection)) {
    roundResult.textContent = `Draw! Both of y'all chose ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    }`;
  } else if (isWinningPlay(playerSelection, computerSelection)) {
    roundResult.textContent = `You won! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    } beats ${computerSelection}`;
  } else if (isLosingPlay(playerSelection, computerSelection)) {
    roundResult.textContent = `You lost! ${computerSelection} beats ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    }`;
  }
}

function isWinningPlay(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    return true;
  } else {
    return false;
  }
}

function isLosingPlay(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock")
  ) {
    return true;
  } else {
    return false;
  }
}

function isDraw(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function isMaxScore(scorePlayer, scoreComputer) {
  if (scorePlayer < maxScore && scoreComputer < maxScore) {
    return true;
  } else if (scorePlayer >= maxScore) {
    result.innerText = "Holy shit you won! Congrats!!!";
    result.style.color = "green";
    return false;
  } else if (scoreComputer >= maxScore) {
    result.innerText = "Damn, son! RIP";
    result.style.color = "red";
    return false;
  }
}
