const hands = ['Rock', 'Paper', 'Scissors']

function getHand(){
   return hands[Math.floor(Math.random() * hands.length)];
};

var player1 = {
   name: 'Jon',
   getHand: null,
   wins: 0,
};

var player2 = {
   name: 'Jake',
   getHand: null,
   wins: 0,
};

function playRound(player1, player2){
   player1.getHand=getHand()
   player2.getHand=getHand()

   console.log(player1.name + ' has ' + player1.getHand);
   console.log(player2.name + ' has ' + player2.getHand);

   if ((player1.getHand == 'Rock' && player2.getHand == 'Scissors') || (player1.getHand == 'Scissors' && player2.getHand == 'Paper') || (player1.getHand == 'Paper' && player2.getHand == 'Rock')){
       console.log(player1.getHand + ' is the winner of this hand.')
       player1.wins+=1;
   }

   else if
   ((player2.getHand == 'Rock' && player1.getHand == 'Scissors') || (player2.getHand == 'Scissors' && player1.getHand == 'Paper') || (player2.getHand == 'Paper' && player1.getHand == 'Rock')){
       console.log(player2.name + 'is the winner of this hand.');
       player2.wins+=1;
   }

   else {
       console.log('This hand is a draw')
   }
}
playRound (player1, player2);