const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SHORT_CHOICES = {r: 'rock', p: 'paper', sc: 'scissors', l: 'lizard', sp: 'spock'};

// Main
while (true) {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!')
  displayChoices();

  let shortChoice = readline.question();
  while (!SHORT_CHOICES.hasOwnProperty(shortChoice)) {
    prompt('Please enter a valid choice');
    shortChoice = readline.question();
  }

  let choice = SHORT_CHOICES[shortChoice];

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);

  prompt('Do you want to play one more game? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
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

function displayWinner(choice, computerChoice) {
  if (checkIfWin(choice, computerChoice)) {
    prompt('You win!');
  } else if (checkIfLose(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}
