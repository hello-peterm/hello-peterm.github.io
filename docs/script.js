const options = ["Rock","Paper","Scissors"];

const player = {
  playerChoice : null
}

const computer = {
  computerChoice : null
}

const computerChooses = () => {
  randomNum = Math.floor(Math.random() * 3);
  return randomNum
}

let playerGuess = 0;

player.playerChoice = playerGuess;

const result = (message) => {
  const announcement = document.createElement('h3');
  announcement.innerText = message
  const page = document.querySelector('#resultAnswer');
  page.append(announcement);
}

const compareChoices = (comp, user) => {
  message = "The computer chose " + options[computer.computerChoice] + " and the player chose " + options[player.playerChoice] + ".";
  if ((comp == 1 && user == 3) || (comp == 2 && user == 1) || (comp == 3 && user == 2)) {
    const winner = "computer";
    result ("The " + winner + " wins! " + message);
}
  else if (comp == user) {
    message = "It is a tie!";
    result(message);
}
  else {
    winner = "player";
    result ("The " + winner + " wins! " + message);
}
}

const choseRock = () => {
  const answer = "Rock";
  playersAnswer(answer);
}

const chosePaper = () => {
  const answer = "Paper";
  playersAnswer(answer);
}

const choseScissors = () => {
  const answer = "Scissors"
  playersAnswer(answer);
}

document.querySelector("#rock").addEventListener("click", choseRock);
document.querySelector("#paper").addEventListener("click", chosePaper);
document.querySelector("#scissors").addEventListener("click", choseScissors);

const playersAnswer = (answer) => {
  const previousAnswer = document.querySelector("h3");
  if (previousAnswer) {
    previousAnswer.remove()
  }
  player.playerChoice = options.indexOf(answer);
  computer.computerChoice = computerChooses();
  compareChoices(computer.computerChoice,player.playerChoice);
}