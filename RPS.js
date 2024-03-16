console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("ABESTADO!");
  }
}

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}


function determineWinner(userChoice, computerChoice) {
  if (computerChoice === userChoice){
    return "TIE" 
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'COMPUTER WINS!!!!'
    } else {
      return "USER WON!!!!"
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'COMPUTER WINS!!!!'
    } else {
      return 'USER WON!!!!'
    }
  }
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'COMPUTER WINS!!!!'
    } else {
      return 'USER WON'
    }
   }
   if (userChoice === 'bomb') {
    return 'CABUUUUUUUUM, USER WINS'
   }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
