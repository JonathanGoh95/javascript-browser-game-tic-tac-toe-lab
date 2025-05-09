/*-------------------------------- Constants --------------------------------*/
const section = document.querySelector(".board");
const message = document.getElementById("message");
const circle = document.getElementById("circle");
const cross = document.getElementById("cross");
const reset = document.getElementById("resetButton");
const tile0 = document.getElementById("0");
const tile1 = document.getElementById("1");
const tile2 = document.getElementById("2");
const tile3 = document.getElementById("3");
const tile4 = document.getElementById("4");
const tile5 = document.getElementById("5");
const tile6 = document.getElementById("6");
const tile7 = document.getElementById("7");
const tile8 = document.getElementById("8");
/*---------------------------- Variables (state) ----------------------------*/
let playerChoice = "";
let clicked = true;
let startingMessage = message.innerHTML;
let gameEnd = false;
let choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const playCircle = () => {
  section.style.cursor = "pointer";
  if (clicked) {
    playerChoice = "Circle";
    message.textContent =
      "You have selected ⭕️. Click on any of the tiles below to begin playing.";
  } else {
    message.textContent = "";
  }
  section.addEventListener("click", (event) => {
    clicked = false;
    if (
      event.target.classList.contains("sqr") &&
      event.target.textContent === "" &&
      gameEnd === false
    ) {
      event.target.textContent = "O";
      choices.splice(choices.indexOf(event.target.id), 1);
      computerPlay();
      winLose();
      console.log(choices);
    }
  });
};

const playCross = () => {
  section.style.cursor = "pointer";
  if (clicked) {
    playerChoice = "Cross";
    message.textContent =
      "You have selected ❌. Click on any of the tiles below to begin playing.";
  } else {
    message.textContent = "";
  }
  section.addEventListener("click", (event) => {
    clicked = false;
    if (
      event.target.classList.contains("sqr") &&
      event.target.textContent === "" &&
      gameEnd === false
    ) {
      event.target.textContent = "X";
      choices.splice(choices.indexOf(event.target.id), 1);
      computerPlay();
      winLose();
      console.log(choices);
    }
  });
};

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

const winLose = () => {
  if (playerChoice === "Circle") {
    if (
      (tile0.textContent === "O" &&
        tile1.textContent === "O" &&
        tile2.textContent === "O") ||
      (tile3.textContent === "O" &&
        tile4.textContent === "O" &&
        tile5.textContent === "O") ||
      (tile6.textContent === "O" &&
        tile7.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile0.textContent === "O" &&
        tile3.textContent === "O" &&
        tile6.textContent === "O") ||
      (tile1.textContent === "O" &&
        tile4.textContent === "O" &&
        tile7.textContent === "O") ||
      (tile2.textContent === "O" &&
        tile5.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile0.textContent === "O" &&
        tile4.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile2.textContent === "O" &&
        tile4.textContent === "O" &&
        tile6.textContent === "O")
    ) {
      message.innerHTML =
        "Congratulations! You Won!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    } else if (
      (tile0.textContent === "X" &&
        tile1.textContent === "X" &&
        tile2.textContent === "X") ||
      (tile3.textContent === "X" &&
        tile4.textContent === "X" &&
        tile5.textContent === "X") ||
      (tile6.textContent === "X" &&
        tile7.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile0.textContent === "X" &&
        tile3.textContent === "X" &&
        tile6.textContent === "X") ||
      (tile1.textContent === "X" &&
        tile4.textContent === "X" &&
        tile7.textContent === "X") ||
      (tile2.textContent === "X" &&
        tile5.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile0.textContent === "X" &&
        tile4.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile2.textContent === "X" &&
        tile4.textContent === "X" &&
        tile6.textContent === "X")
    ) {
      message.innerHTML =
        "Sorry, You Lost!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    }
  } else if (playerChoice === "Cross") {
    if (
      (tile0.textContent === "X" &&
        tile1.textContent === "X" &&
        tile2.textContent === "X") ||
      (tile3.textContent === "X" &&
        tile4.textContent === "X" &&
        tile5.textContent === "X") ||
      (tile6.textContent === "X" &&
        tile7.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile0.textContent === "X" &&
        tile3.textContent === "X" &&
        tile6.textContent === "X") ||
      (tile1.textContent === "X" &&
        tile4.textContent === "X" &&
        tile7.textContent === "X") ||
      (tile2.textContent === "X" &&
        tile5.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile0.textContent === "X" &&
        tile4.textContent === "X" &&
        tile8.textContent === "X") ||
      (tile2.textContent === "X" &&
        tile4.textContent === "X" &&
        tile6.textContent === "X")
    ) {
      message.innerHTML =
        "Congratulations! You Won!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    } else if (
      (tile0.textContent === "O" &&
        tile1.textContent === "O" &&
        tile2.textContent === "O") ||
      (tile3.textContent === "O" &&
        tile4.textContent === "O" &&
        tile5.textContent === "O") ||
      (tile6.textContent === "O" &&
        tile7.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile0.textContent === "O" &&
        tile3.textContent === "O" &&
        tile6.textContent === "O") ||
      (tile1.textContent === "O" &&
        tile4.textContent === "O" &&
        tile7.textContent === "O") ||
      (tile2.textContent === "O" &&
        tile5.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile0.textContent === "O" &&
        tile4.textContent === "O" &&
        tile8.textContent === "O") ||
      (tile2.textContent === "O" &&
        tile4.textContent === "O" &&
        tile6.textContent === "O")
    ) {
      message.innerHTML =
        "Sorry, You Lost!<br />Click the 'Reset Game' button below to play again!";
      gameEnd = true;
      section.style.cursor = "default";
    }
  }
};

const resetGame = () => {
  /* for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).textContent = "";
  }
    playerChoice = "";
    gameEnd = false;
  message.innerHTML = startingMessage; */
  location.reload();
};
/*----------------------------- Event Listeners -----------------------------*/
circle.addEventListener("click", playCircle);
cross.addEventListener("click", playCross);
reset.addEventListener("click", resetGame);
