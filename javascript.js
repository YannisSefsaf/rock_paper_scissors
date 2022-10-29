function getComputerChoice() {
  let num = Math.random();
  if (num <= 1 / 3) {
    return "Rock";
  } else if (num > 2 / 3) {
    return "Scissors";
  } else {
    return "Paper";
  }
  console.log(getComputerChoice);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "scissors")
  ) {
    return "draw";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    return "win";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "rock")
  ) {
    return "loss";
  }
}

function game(num) {
  let scorePlayer = 0;
  let scoreComputer = 0;
  while (scorePlayer < num && scoreComputer < num) {
    let playerSelection = prompt("Choose pls");
    let computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === "win") {
      console.log(
        `You won! ${
          playerSelection[0].toUpperCase() +
          playerSelection.slice(1).toLowerCase()
        } beats ${computerSelection}`
      );
      scorePlayer++;
      console.log(
        `Player score: ${scorePlayer} - Computer score: ${scoreComputer}`
      );
    } else if (playRound(playerSelection, computerSelection) === "loss") {
      console.log(
        `You lost! ${computerSelection} beats ${
          playerSelection[0].toUpperCase() +
          playerSelection.slice(1).toLowerCase()
        }`
      );
      scoreComputer++;
      console.log(
        `Player score: ${scorePlayer} - Computer score: ${scoreComputer}`
      );
    } else {
      console.log(playRound(playerSelection, computerSelection));
      console.log(
        `Draw! Both of y'all chose ${
          playerSelection[0].toUpperCase() +
          playerSelection.slice(1).toLowerCase()
        }`
      );
      console.log(
        `Player score: ${scorePlayer} - Computer score: ${scoreComputer}`
      );
    }
  }
  if (scorePlayer === num) {
    return "You won the game!!!";
  } else if (scoreComputer === num) {
    return "You lost lmao";
  }
}
