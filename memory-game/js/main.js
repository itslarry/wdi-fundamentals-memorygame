var cards = [
  {
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-hearts.png"
  }
]

var cardsInPlay = [];

var currentScore = 0;


function flipCard() {
  var CardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[CardId]);
  this.setAttribute('src',cards[this.getAttribute('data-id')].cardImage);
}


function checkForMatch() {
  console.log(cardsInPlay[0]);
  console.log(cardsInPlay[1]);
  if (cardsInPlay.length === 2 || cardsInPlay.length === 4) {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      console.log("You found a match!");
      currentScore += 50;
      document.getElementById('score').innerHTML = currentScore;
      if(currentScore == 100) {
        alert("Congradulation, you won!");
      }
    } else {
      alert("Sorry, try again.");
    }
  }
}

function reset() {
  document.location.reload();
  console.log("reset!");
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',reset);

createBoard = function() {
for(var i = 0;i < cards.length;i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    cardElement.addEventListener('click',checkForMatch);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
