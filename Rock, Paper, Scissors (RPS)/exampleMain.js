let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board"); 
const result_div = document.querySelector(".result");
const rock_div =document.getElementById("rock");
const paper_div =document.getElementById("paper");
const scissors_div =document.getElementById("scissors");

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(userPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + userPlay + "</strong>. The computer played <strong>" + computerPlay + "</strong>.</p>";
  
  if(userPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>It's a draw.</p>";
    
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose.</p>";
      computerScore++;
    
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win!</p>";
      userScore++; 
    }
  
  } else if (userPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win!</p>";
      userScore++;
    
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>It's a draw.</p>";
    
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose.</p>";
      computerScore++;
    }  
  } else if (userPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose.</p>";
      computerScore++;
    } 
    
    else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win!</p>";
      userScore++;
    }
    
    else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>It's a draw</p>";
    }  
  }
  
  document.getElementById('userScore').innerHTML = user-label;
  document.getElementById('computerScore').innerHTML = computer-label;
}

function getComputerPlay() {
  var plays = ['Rock', 'Paper', 'Scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}