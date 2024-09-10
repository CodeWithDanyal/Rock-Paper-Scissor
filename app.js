// Tracking User,  Bot, Draws
let userScore = 0;
let botScore = 0;
let drawScore = 0;

// Getting DOM Elements
let choice = document.querySelectorAll(".choice"); //choice
let msg = document.querySelector(".win_msg"); //resultMsg
let topMsg = document.querySelector(".choices_msg"); //messageBox About Choices
let user = document.querySelector(".user_score"); //userscore
let bot = document.querySelector(".bot_score"); //botscore
let draws = document.querySelector(".draw_score"); //draws
let reset = document.querySelector(".reset"); //reset Button

// Reset Game Function
reset.addEventListener("click", () => {
  userScore = 0;
  botScore = 0;
  drawScore = 0;
  user.textContent = userScore;
  bot.textContent = botScore;
  draws.textContent = drawScore;
  draws.style.backgroundColor = "transparent";
  msg.textContent = "Result";
  msg.style.backgroundColor = "black";
  user.style.backgroundColor = "transparent";
  bot.style.backgroundColor = "transparent";
  topMsg.textContent = "Play Your Move!";
  topMsg.style.backgroundColor = "transparent";
  topMsg.style.color = "black";
});

// Genrating bot choice
let genBotChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

// Draw Function
let draw = () => {
  draws.style.backgroundColor = "#474242";
  msg.textContent = "Its was a Draw!";
  msg.style.backgroundColor = "#474242";
  topMsg.textContent = "Tie!";
  topMsg.style.backgroundColor = "#474242";
  topMsg.style.color = "white";
};

// PlayGame Function
let playGame = (userChoice) => {
  let botChoice = genBotChoice();
  let userWin;
  if (userChoice === botChoice) {
    draw();
  } else if (userChoice === "rock") {
    // paper scissor
    userWin = botChoice === "scissor" ? true : false;
  } else if (userChoice === "paper") {
    // scissor rock
    userWin = botChoice === "rock" ? true : false;
  } else {
    // paper rock
    userWin = botChoice === "paper" ? true : false;
  }
  showWinner(userWin, userChoice, botChoice);
};

// userChoice
choice.forEach((val) => {
  val.addEventListener("click", () => {
    let userChoice = val.getAttribute("id");
    playGame(userChoice);
  });
});

// ShowWinnerFunction
let showWinner = (userWin, userChoice, botChoice) => {
  if (userWin === undefined) {
    drawScore++;
    draws.textContent = drawScore;
    draw();
  } else if (userWin) {
    userScore++;
    user.textContent = userScore;
    topMsg.textContent = "You Won!";
    topMsg.style.backgroundColor = "green";
    topMsg.style.color = "white";
    user.style.backgroundColor = "green";
    msg.style.backgroundColor = "green";
    msg.textContent = `You Won! Your ${userChoice} Beats ${botChoice}`;
  } else {
    botScore++;
    bot.textContent = botScore;
    topMsg.textContent = "You Lose!";
    topMsg.style.backgroundColor = "red";
    topMsg.style.color = "white";
    bot.style.backgroundColor = "red";
    msg.style.backgroundColor = "red";
    msg.textContent = `Bot Won! Your ${userChoice} Loses To ${botChoice}`;
  }
};
