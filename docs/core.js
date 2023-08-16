// generate a random in integer for the computer's guess
const computerChooses = () => {
    randomNum = Math.floor(Math.random() * 3);
    return randomNum
  }

// determine the winner by comparing the hierarchy of the choices
const compareChoices = (computer, user) => {
  message = "The computer chose " + options[computer.computerChoice] + " and the player chose " + options[player.playerChoice] + ".";
  if ((computer == 1 && user == 3) || (computer == 2 && user == 1) || (computer == 3 && user == 2)) {
    return "computer";
  }
  else if (computer == user) {
    return 0
  }
  else {
    return "player";
  }
}

// generate a string declaring a winner and the selections the player's made
const resultMessage = (winner) => {
  message = "The computer chose " + options[computer.computerChoice] + " and the player chose " + options[player.playerChoice] + ".";
  if (winner === 0) {
    message = "It is a tie!";
    displayResult(message);
  }
  else {
    displayResult("The " + winner + " wins! " + message);
  }
};

  module.exports = computerChooses;
  module.exports = compareChoices;
  module.exports = resultMessage;

