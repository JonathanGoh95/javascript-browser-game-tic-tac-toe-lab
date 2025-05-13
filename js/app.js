/*-------------------------------- Constants --------------------------------*/
const section = document.querySelector(".board");
const message = document.getElementById("message");
const circle = document.getElementById("circle");
const cross = document.getElementById("cross");
const reset = document.getElementById("resetButton");
const tiles = [
  document.getElementById("0"),
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
];
const winningPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];
/*---------------------------- Variables (state) ----------------------------*/
let playerChoice = "";
let clicked = true;
const startingMessage = message.textContent;
let gameEnd = false;
let choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const playCircle = () => {
  // console.log("Circle");
  if (clicked) {
    circle.style.display = "none";
    cross.style.display = "none";
    playerChoice = "Circle";
    message.textContent =
      "You have selected ⭕️. Click on any of the tiles below to begin playing.";
    clicked = false;
  } else {
    message.textContent = "";
  }
};

const playCross = () => {
  // console.log("Cross");
  circle.style.display = "none";
  cross.style.display = "none";
  if (clicked) {
    playerChoice = "Cross";
    message.textContent =
      "You have selected ❌. Click on any of the tiles below to begin playing.";
    clicked = false;
  } else {
    message.textContent = "";
  }
};

section.addEventListener("click", (event) => {
  // console.log("Tile");
  if (
    event.target.classList.contains("sqr") &&
    event.target.textContent === "" &&
    !gameEnd
  ) {
    if (playerChoice === "Circle") {
      event.target.textContent = "O";
      choices.splice(choices.indexOf(event.target.id), 1);
      computerPlay();
      winLose();
    } else if (playerChoice === "Cross") {
      event.target.textContent = "X";
      choices.splice(choices.indexOf(event.target.id), 1);
      computerPlay();
      winLose();
    }
  }
});

const computerPlay = () => {
  if (choices.length > 0) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    if (
      playerChoice === "Circle" &&
      document.getElementById(choices[randomIndex]).textContent !== "O" &&
      document.getElementById(choices[randomIndex]).textContent === ""
    ) {
      document.getElementById(choices[randomIndex]).textContent = "X";
      choices.splice(randomIndex, 1);
      playCircle();
      winLose();
    } else if (
      playerChoice === "Cross" &&
      document.getElementById(choices[randomIndex]).textContent !== "X" &&
      document.getElementById(choices[randomIndex]).textContent === ""
    ) {
      document.getElementById(choices[randomIndex]).textContent = "O";
      choices.splice(randomIndex, 1);
      playCross();
      winLose();
    } else {
      computerPlay();
    }
  } else {
    message.innerHTML =
      "It's a Tie!<br />Click the 'Reset Game' button below to play again!";
    gameEnd = true;
  }
};

const checkWin = (symbol) => {
  return winningPatterns.some(
    (
      pattern //Returns true when one of the conditions in the winningPatterns array is fulfulled
    ) => pattern.every((index) => tiles[index].textContent === symbol) //Ensures that the values are consistent in each array
  );
};

const winLose = () => {
  if (playerChoice === "Circle") {
    if (checkWin("O")) {
      message.innerHTML =
        "Congratulations! You Won!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    } else if (checkWin("X")) {
      message.innerHTML =
        "Sorry, You Lost!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    }
  } else if (playerChoice === "Cross") {
    if (checkWin("X")) {
      message.innerHTML =
        "Congratulations! You Won!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    } else if (checkWin("O")) {
      message.innerHTML =
        "Sorry, You Lost!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    }
  }
};

const resetGame = () => {
  reset.style.backgroundColor = "grey";
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).textContent = "";
  }
  playerChoice = "";
  gameEnd = false;
  clicked = true;
  choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  message.textContent = startingMessage;
  circle.style.display = "inline";
  cross.style.display = "inline";
};

/*----------------------------- Event Listeners -----------------------------*/
circle.addEventListener("click", playCircle);
cross.addEventListener("click", playCross);
reset.addEventListener("mousedown", resetGame);
//Addtional styling/behaviour when Reset Game Button is clicked
reset.addEventListener("mouseup", () => {
  reset.style.backgroundColor = "lightcoral";
});
reset.addEventListener("mouseleave", () => {
  reset.style.backgroundColor = "lightcoral";
});
