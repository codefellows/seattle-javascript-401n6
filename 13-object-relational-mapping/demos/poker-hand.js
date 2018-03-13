const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poker');

let SUITS = ['hearts', 'diamonds', 'spades', 'clubs'];

let CardSchema = new mongoose.Schema({
  face: {type: Number, min: 1, max: 13},
  suit: {type: String, enum: SUITS}
});

let HandSchema = new mongoose.Schema({
  cards: {
    type: [CardSchema],
    validate: {
      message: 'A poker hand must have five cards!',
      validator: function() {
        return this.cards.length === 5;
      }
    }
  }
});

let Card = mongoose.model('Card', CardSchema);
let Hand = mongoose.model('Hand', HandSchema);

let saves = [];
SUITS.forEach(suit => {
  for (let i = 1; i <= 13; i++) {
    let card = new Card({face: i, suit: suit});
    saves.push(card.save());
  }
});

Promise.all(saves)
.then(deck => {
  let hand = new Hand();
  for (let i = 0; i < 4; i++) {
    let index = Math.floor((Math.random() * deck.length));
    hand.cards.push(deck[index]);
  }

  return hand.save();
})
.then(hand => {
  console.log('hand:', hand);
})
.then(hand => {
  mongoose.disconnect();
})
.catch(err => {
  console.log('Caught error:', err.message);
  mongoose.disconnect();
});

