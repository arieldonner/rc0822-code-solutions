console.log('Lodash is loaded:', typeof _ !== 'undefined');

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
console.log(deck);

var shuffled = _.shuffle(deck);
console.log(shuffled);

function dealOneCard() {
  for (var i = 0; i < players.length; i++) {
    var oneCard = shuffled.pop();
    players[i].hand.push(oneCard);
  }
}
dealOneCard();
dealOneCard();

console.log(players);

// var counts = [];

function addPoints() {
  var count = 0;
  for (var i = 0; i < players.length; i++) {
    var card1 = players[i].hand[0].rank;
    console.log('card1:', card1);

    var card1Number = parseInt(card1);
    console.log('card1Number:', card1Number);

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
    console.log('count:', count);
  }
}

addPoints();
