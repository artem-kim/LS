const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATED_CHOICES = {r: 'rock', p: 'paper', sc: 'scissors', l: 'lizard', sp: 'spock'};
let score = 0;
let computerScore = 0;
const MAX_SCORE = 5;

// Main programme
while (true) {
  console.clear();

  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!')
  displayChoices();
  let abbreviatedChoice = readline.question();

  while (!ABBREVIATED_CHOICES.hasOwnProperty(abbreviatedChoice)) {
    prompt('Please enter a valid choice');
    abbreviatedChoice = readline.question();
  }

  let choice = ABBREVIATED_CHOICES[abbreviatedChoice];

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);

  computeScore(choice, computerChoice)
  prompt(`Your score is ${score}. Computer's score is ${computerScore}.`)
  let oneMoreGame;

  if (score < MAX_SCORE && computerScore < MAX_SCORE) {
    prompt('Do you want to play one more game? (y/n)');
    oneMoreGame = readline.question().toLowerCase();
  } else {
    oneMoreGame = 'n';
  }

  while (oneMoreGame[0] !== 'n' && oneMoreGame[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    oneMoreGame = readline.question().toLowerCase();
  }
  if (oneMoreGame[0] === 'n') break;
}

// final message
if (score > computerScore) {
  prompt('Game over. You are a grand winner!');
} else if (computerScore > score) {
  prompt('Game over. Computer is a grand winner!');
} else {
  prompt("Game over. It's a tie.");
}

// Function that displays message with choices
function displayChoices() {
  prompt('Choose one:')
  for (let i = 0; i < VALID_CHOICES.length; i++) {
    if (VALID_CHOICES[i] === 'scissors') {
      prompt(`${VALID_CHOICES[i].substring(0,2)} for ${VALID_CHOICES[i]}`);
      continue;
    }
    if (VALID_CHOICES[i] === 'spock') {
      prompt(`${VALID_CHOICES[i].substring(0,2)} for ${VALID_CHOICES[i]}`);
      continue;
    }
    prompt(`${VALID_CHOICES[i][0]} for ${VALID_CHOICES[i]}`);
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function computeScore(choice, computerChoice) {
  if (checkIfWin(choice, computerChoice)) {
    score += 1;
  } else if (checkIfLose(choice, computerChoice)) {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  if (checkIfWin(choice, computerChoice)) {
    prompt('You win!');
  } else if (checkIfLose(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function checkIfWin(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return true;
  }
  return false;
}

function checkIfLose(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
             (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
             (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
             (choice === 'lizard' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
             (choice === 'spock' && (computerChoice === 'lizard' || computerChoice === 'paper'))) {
    return true;
  }
  return false;
}
