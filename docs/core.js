const computerChooses = () => {
    randomNum = Math.floor(Math.random() * 3);
    return randomNum
  }

  module.exports = computerChooses;

  /*const playersAnswer = (answer) => {
    const previousAnswer = document.querySelector("h3");
    if (previousAnswer) {
      previousAnswer.remove()
    }
    player.playerChoice = options.indexOf(answer);
    computer.computerChoice = computerChooses();
    compareChoices(computer.computerChoice,player.playerChoice);
  }

  module.exports = playersAnswer;*/

