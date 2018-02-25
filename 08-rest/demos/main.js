let CoinFlipper = require('./coin-flipper');

let flipper = new CoinFlipper(10);
flipper.flipToFinish()
.then((result) => {
  console.log('Flipped', result.heads, 'in', result.flips, 'flips');
})
console.log('async?');
