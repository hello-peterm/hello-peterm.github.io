const options = ["Rock","Paper","Scissors"];

const player = {
  playerChoice : null
}

const computer = {
  computerChoice : null
}

const playerChoseRock = () => {
  submitPlayersAnswer("Rock");
}

const playerChosePaper = () => {
  submitPlayersAnswer("Paper");
}

const playerChoseScissors = () => {
  submitPlayersAnswer("Scissors");
}

document.querySelector("#rock").addEventListener("click", playerChoseRock);
document.querySelector("#paper").addEventListener("click", playerChosePaper);
document.querySelector("#scissors").addEventListener("click", playerChoseScissors);

// clear the previous message and submit the answers for comparision
const submitPlayersAnswer = (answer) => {
  const previousAnswer = document.querySelector("h3");
  if (previousAnswer) {
    previousAnswer.remove()
  }
  player.playerChoice = options.indexOf(answer);
  computer.computerChoice = computerChooses();
  resultMessage(compareChoices(computer.computerChoice, player.playerChoice));
}

// display the winner and description in a new header element
const displayResult = (message) => {
  const announcement = document.createElement('h3');
  announcement.innerText = message
  const page = document.querySelector('#resultAnswer');
  page.append(announcement);
}

// add functionality to keep track of scores
// and test how often each player wins
// also add a graph to track player vs computer wins / losses
// and a self playing mode where the game just executes
// update pics!