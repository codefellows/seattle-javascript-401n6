let CoinFlipper = require('./coin-flipper');

let flipper = new CoinFlipper(10);
flipper.flipToFinish()
.then((result) => {
  console.log('Flipped', result.heads, 'in', result.flips, 'flips');
})
.then(() => {
  console.log();
  console.log('Now starting to flip 3 coins simultaneously');

  let coin1 = new CoinFlipper(10);
  let coin2 = new CoinFlipper(10);
  let coin3 = new CoinFlipper(10);
  let tasks = [
    coin1.flipToFinish(), 
    coin2.flipToFinish(), 
    coin3.flipToFinish()
  ];
  return Promise.all(tasks);
})
.then((results) => {
  results.forEach((coin, i) => {
    console.log('coin', i, 'took', coin.flips, 'flips');
  });
})
.then(() => {
  console.log();
  console.log('Racing three coins. Only the first one wins!');

  let coin1 = new CoinFlipper(10, 'red');
  let coin2 = new CoinFlipper(10, 'blue');
  let coin3 = new CoinFlipper(10, 'yellow');
  let tasks = [
    coin1.flipToFinish(), 
    coin2.flipToFinish(), 
    coin3.flipToFinish()
  ];
  return Promise.race(tasks);
})
.then((winner) => {
  console.log('Race results:', winner.name, 'won in', winner.flips, 'flips');
})
.catch((error) => {
  console.log(error.name, error.message); 
  console.log('Everything aborted.');
});
console.log('async?');
