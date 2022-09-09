console.log('Lodash is loaded:', typeof _ !== 'undefined');

/* Solution using function. Can change player and card amount. */

function playGame(players, cards) {
  var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var deck = [];

  function createDeck() {
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        var card = { rank: ranks[j], suit: suits[i] };
        deck.push(card);
      }
    }
  }

  createDeck();

  var shuffled = _.shuffle(deck);
  console.log('shuffled deck:', shuffled);

  function dealOneCard() {
    for (var i = 0; i < players.length; i++) {
      var oneCard = shuffled.pop();
      players[i].hand.push(oneCard);
    }
  }

  for (var c = 0; c < cards; c++) {
    dealOneCard();
  }

  console.log('Players and their hands:', players);

  var scores = [];

  function addPoints() {
    var count = 0;
    for (var i = 0; i < players.length; i++) {
      for (var j = 0; j < players[i].hand.length; j++) {
        var currentCard = players[i].hand[j].rank;
        var cardNumber = parseInt(currentCard);
        if (isNaN(cardNumber) === true) {
          if (currentCard === 'Ace') {
            cardNumber = 11;
          } else {
            cardNumber = 10;
          }
        }
        count += cardNumber;
      }
      console.log('Score:', count);
      scores.push(count);
      count = 0;
    }
  }

  addPoints();

  console.log('List of scores:', scores);

  var highestSort = scores.slice().sort(function (a, b) { return b - a; });
  console.log('Scores sorted highest to lowest:', highestSort);
  var highScore = highestSort[0];

  function findWinner() {
    if (highestSort.lastIndexOf(highScore) === 0) {
      for (var i = 0; i < scores.length; i++) {
        if (highScore === scores[i]) {
          console.log(players[i].name + ' wins!');
        }
      }
    } else {
      console.log("It's a tie between:");
      for (var j = 0; j < scores.length; j++) {
        if (highScore === scores[j]) {
          console.log(players[j].name);
        }
      }
    }
  }

  findWinner();
}

playGame([{ name: 'Player 1', hand: [] }, { name: 'Player 2', hand: [] }, { name: 'Player 3', hand: [] }, { name: 'Player 4', hand: [] }], 2);

/* Below is solution that worked only for 4 players drawing 2 cards each.

var players = [
  { name: 'Player 1', hand: [] },
  { name: 'Player 2', hand: [] },
  { name: 'Player 3', hand: [] },
  { name: 'Player 4', hand: [] }
];

var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];

function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var card = { rank: ranks[j], suit: suits[i] };
      deck.push(card);
    }
  }
}

createDeck();

var shuffled = _.shuffle(deck);
console.log('shuffled deck:', shuffled);

function dealOneCard() {
  for (var i = 0; i < players.length; i++) {
    var oneCard = shuffled.pop();
    players[i].hand.push(oneCard);
  }
}
dealOneCard();
dealOneCard();

console.log('Players and their hands:', players);

var scores = [];

function addPoints() {
  var count = 0;
  for (var i = 0; i < players.length; i++) {
    var card1 = players[i].hand[0].rank;
    console.log('card1:', card1);

    var card1Number = parseInt(card1);

    var card2 = players[i].hand[1].rank;
    console.log('card2:', card2);
    var card2Number = parseInt(card2);

    if (isNaN(card1Number) === true) {
      if (card1 === 'Ace') {
        card1Number = 11;
      } else {
        card1Number = 10;
      }
    }
    if (isNaN(card2Number) === true) {
      if (card2 === 'Ace') {
        card2Number = 11;
      } else {
        card2Number = 10;
      }
    }
    count = card1Number + card2Number;
    console.log('Score:', count);
    scores.push(count);
  }
}

addPoints();

var score1 = scores[0];
var score2 = scores[1];
var score3 = scores[2];
var score4 = scores[3];
console.log('List of scores:', scores);

var highestSort = scores.sort(function (a, b) { return b - a; });
console.log('Scores sorted highest to lowest:', highestSort);
var highScore = highestSort[0];

function findWinner() {
  if (highestSort.lastIndexOf(highScore) === 0) {
    if (highScore === score1) {
      console.log('Player 1 wins!');
    } else if (highScore === score2) {
      console.log('player 2 wins!');
    } else if (highScore === score3) {
      console.log('Player 3 wins!');
    } else if (highScore === score4) {
      console.log('Player 4 wins!');
    }
  } else {
    console.log("It's a tie between:");
    if (highScore === score1) {
      console.log('Player 1');
    }
    if (highScore === score2) {
      console.log('Player 2');
    }
    if (highScore === score3) {
      console.log('Player 3');
    }
    if (highScore === score4) {
      console.log('Player 4');
    }
  }
}

findWinner(); */
