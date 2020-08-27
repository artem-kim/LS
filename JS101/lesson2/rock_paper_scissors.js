const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SCORE = {userScore: 0, computerScore: 0};
const MAX_SCORE = 5;
const ABBREVIATED_CHOICES = {
  r: 'rock', p: 'paper', sc: 'scissors', l: 'lizard', sp: 'spock'
};
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};


// Main programme
while (true) {
  console.clear();

  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!')
  prompt('First to five wins the game.\n');

  let choice = retrieveUserChoice();

  let computerChoice = retrieveComputerChoice();

  displayWinner(choice, computerChoice);

  computeScore(choice, computerChoice, SCORE);

  displayScore(SCORE);

  let oneMoreGame = isMatchOver(SCORE);

  if (oneMoreGame === 'n') break;
}

displayGrandWinner(SCORE);

function displayGrandWinner(score) {
  if (score.userScore > score.computerScore) {
    prompt('Game over. You are a grand winner!');
  } else if (score.computerScore > score.userScore) {
    prompt('Game over. Computer is a grand winner!');
  } else {
    prompt("Game over. It's a tie.");
  }
}

function isMatchOver(score) {
  if (score.userScore < MAX_SCORE && score.computerScore < MAX_SCORE) {
    prompt('Do you want to play one more game? (y/n)');
    oneMoreGame = readline.question().toLowerCase();
  } else {
    oneMoreGame = 'n';
  }

  while (oneMoreGame !== 'n' && oneMoreGame !== 'y') {
    prompt('Please enter "y" or "n".');
    oneMoreGame = readline.question().toLowerCase();
  }
  return oneMoreGame;
}

function retrieveUserChoice() {
  displayChoices();

  let abbreviatedChoice = readline.question().toLowerCase();

  while (!ABBREVIATED_CHOICES.hasOwnProperty(abbreviatedChoice)) {
    prompt('Please enter a valid choice');
    abbreviatedChoice = readline.question().toLowerCase();
  }
  let choice = ABBREVIATED_CHOICES[abbreviatedChoice];
  return choice;
}

function retrieveComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function displayChoices() {
  prompt('Choose one:');
  for (let index = 0; index < VALID_CHOICES.length; index++) {
    if (VALID_CHOICES[index] === 'scissors') {
      prompt(`${VALID_CHOICES[index].substring(0,2)} for ${VALID_CHOICES[index]}`);
      continue;
    }
    if (VALID_CHOICES[index] === 'spock') {
      prompt(`${VALID_CHOICES[index].substring(0,2)} for ${VALID_CHOICES[index]}`);
      continue;
    }
    prompt(`${VALID_CHOICES[index][0]} for ${VALID_CHOICES[index]}`);
  }
}

function displayScore(score) {
  prompt(`Your score is ${score.userScore}. Computer's score is ${score.computerScore}.`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function computeScore(choice, computerChoice, score) {
  if (checkIfWin(choice, computerChoice)) {
    score.userScore += 1;
  } else if (choice === computerChoice) {
    score.userScore += 0;
  } else {
    score.computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (checkIfWin(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

function checkIfWin(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}
