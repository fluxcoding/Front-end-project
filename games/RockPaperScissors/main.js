// Variables //
var userChoice;

// for print
var userc;
var watson;

var win = "<p style='color:green;font-weight:bold;'>" + "You Win!</p>";
var lose = "<p style='color:red;font-weight:bold;'>" + "You Lose!</p>";
var tie = "<p style='color:blue;font-weight:bold;'>" + "It's a Tie!</p>";
//----------------------------------------
var audioWinner = new Audio('http://facebook.design/public/sounds/Success 3.mp3');
var audioLoser = new Audio('http://facebook.design/public/sounds/Error 1.mp3');
var audioTied = new Audio('http://facebook.design/public/sounds/Collapse.mp3');
// ---------------------------------------
// Display
var rock = document.getElementById("rock"); // rock button
var paper = document.getElementById("paper"); // paper button
var scissors = document.getElementById("scissors"); // scissors button

var playerScore = document.getElementById("player-score");
var computerScore = document.getElementById("computer-score");
const display = document.getElementById("display");
// ---------------------------------------


// USER'S CHOICE
rock.addEventListener("click", function(){
  userChoice = 0;
  userc = "<p>You chose: </p>" + "<p style=font-weight:bold;'>" + "Rock!</p>";
  checkWatson();
  compare();
});
paper.addEventListener("click", function(){
  userChoice = 1;
  userc = "<p>You chose: </p>" + "<p style=font-weight:bold;'>" + "Paper!</p>";
  checkWatson();
  compare();
});
scissors.addEventListener("click", function(){
  userChoice = 2;
  userc = "<p>You chose: </p>" + "<p style=font-weight:bold;'>" + "Scissors!</p>";
  checkWatson();
  compare();
});

// WATSON'S CHOICE
// ***************
function checkWatson() {
  // generates a random number between 0-2 
  randomNum = Math.floor(Math.random() * 3);

  // generate a random number and assign it to one of the 3 choices
  if (randomNum === 0) { 
    watson = "<p>Watson chose: </p>" + "<p style=font-weight:bold;'>" + "Rock!</p>";
  } else if (randomNum === 1) { 
    watson = "<p>Watson chose: </p>" + "<p style=font-weight:bold;'>" + "Paper!</p>";
  } else { 
    watson = "<p>Watson chose: </p>" + "<p style=font-weight:bold;'>" + "Scissors!</p>";
  }
}


// 3 OUTCOME FUNCTIONS
function displayOutcome(outc){

  display.innerHTML = "";
  display.innerHTML = userc +  watson  + outc;
};


function resultsTie() {
  audioTied.play();
  displayOutcome(tie);
}
function resultsWinner() {
  audioWinner.play();
  playerScore.innerText ++; 
  displayOutcome(win);
}
function resultsLoser() {
  audioLoser.play();
  computerScore.innerText ++;
  displayOutcome(lose);
}

// COMPARE USER VS WATSON
function compare() {
  // user chooses rock
  if (userChoice ===  randomNum) { 
    resultsTie();
  } else if (userChoice === 0 && randomNum === 1) { 
    resultsLoser();
  } else if (userChoice === 0 && randomNum === 2) { 
    resultsWinner();
  }

  // user chooses paper  
  if (userChoice === 1 && randomNum === 0) { 
    resultsWinner();
  }
  else if (userChoice === 1 && randomNum === 2) { 
    resultsLoser();
  }

  // user chooses scissors
  if (userChoice === 2 && randomNum === 0) { 
    resultsLoser();
  } else if (userChoice === 2 && randomNum === 1) { 
    resultsWinner();
  }
}





// function endGameCheck(display) {
//  const player = parseInt(playerScore.innerText);
//  const computer = parseInt(computerScore.innerText);
//   let result = false;

//   if (player === 3 || computer === 3) {
//     endDisplay.innerHTML = player > computer ?
//       `You win ${player} to ${computer}!` : `You lose ${computer} to ${player}!`;
//     result = true;
//   }
//   return result;
// }