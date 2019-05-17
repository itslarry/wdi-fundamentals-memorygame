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

function flipCard() {
  var CardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[CardId]);
  this.setAttribute('src',cards[this.getAttribute('data-id')].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}


function checkForMatch() {

    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      console.log("You found a match!");
    } else {
      alert("Sorry, try again.");
    }



}

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
