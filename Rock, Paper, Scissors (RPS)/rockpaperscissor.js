// Cache the DOM
let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {          // Establishing potential outcomes or hands
    const choices = ["r", "p", "s"]; 
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    return "Scissors";
}
function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;  
    result_p.innerHTML = '${convertToWord(userChoice)) beats $(convertToWord(computerChoice))$. You win';
}
function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = '${convertToWord(userChoice)) loses to $(convertToWord(computerChoice))$. You lost';
    
}
function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = '${convertToWord(userChoice)) equals $(convertToWord(computerChoice))$. It's a draw;
    
}
function game(userChoice){
    const computerChoice = getComputerChoice();
}
function lost(computerChoice, userChoice){

}
function main(){
rock_div.addEventListener('click', function(){
game("r");  
})

paper_div.addEventListener('click', function(){ 
paper("p");  
})

scissor_div.addEventListener('click', function(){ game("s");   
})
}



