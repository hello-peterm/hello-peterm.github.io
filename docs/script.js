const options = ["Lapis","Papyrus","Scalpellus"];

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

while (playerGuess  < 0 || playerGuess > 2) {
  playerGuess = prompt("Pick a number between 0 and 2");
}

player.playerChoice = playerGuess;

const result = (message) => {
  const announcement = document.createElement('h3');
  announcement.innerText = message
  const page = document.querySelector('body');
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

const choseLapis = () => {
  const answer = document.querySelector("#lapis").innerText;
  playersAnswer(answer);
}

const chosePapyrus = () => {
  const answer = document.querySelector("#papyrus").innerText;
  playersAnswer(answer);
}

const choseScalpellus = () => {
  const answer = document.querySelector("#scalpellus").innerText;
  playersAnswer(answer);
}

document.querySelector("#lapis").addEventListener("click", choseLapis);
document.querySelector("#papyrus").addEventListener("click", chosePapyrus);
document.querySelector("#scalpellus").addEventListener("click", choseScalpellus);

const playersAnswer = (answer) => {
  const previousAnswer = document.querySelector("h3");
  if (previousAnswer) {
    previousAnswer.remove()
  }
  player.playerChoice = options.indexOf(answer);
  computer.computerChoice = computerChooses();
  compareChoices(computer.computerChoice,player.playerChoice);
}