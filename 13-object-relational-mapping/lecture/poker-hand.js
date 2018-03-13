const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poker-2018-03-12');

let CardSchema = new mongoose.Schema({
  suit: String,
  value: Number,
  value: {
    type: Number,
    validate: {$gt: 4, $lt: 14}
  }
});

let HandSchema = new mongoose.Schema({
  cards: [CardSchema]
});

let Card = mongoose.model('Card', CardSchema);
let Hand = mongoose.model('Hand', HandSchema);

let ace = new Card({suit: 'hearts', value: 1});
let ten = new Card({suit: 'hearts', value: 10});
let jack = new Card({suit: 'hearts', value: 11});
let queen = new Card({suit: 'hearts', value: 12});
let king = new Card({suit: 'hearts', value: 13});

// Promise.all([
//   ace.save(),
//   ten.save(),
//   jack.save(),
//   queen.save(),
//   king.save()
// ])
//.then(cards => {
console.log('CREATING HAND');
let cards = [ace, ten, jack, queen, king];
let hand = new Hand({cards: cards});
hand.save()
.then(hand => {
  console.log('Hand:', hand);
  mongoose.disconnect();
});
