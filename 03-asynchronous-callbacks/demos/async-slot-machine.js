// Only execute the callback in two cases:
// 1. if there's an error and the machine broke.
// 2. once ALL EVERY SINGLE ONE has finished.
function asyncSlotMachine(n, cb) {
  let wins = [];
  let losses = [];
  let totalFinished = 0;

  for (let i = 0; i < n; i++) {
    let maxWait = 5 * 1000;
    let randomTime = Math.random() * maxWait;
    console.log('This spin will take:', randomTime);

    let isMachineBroken = false;

    setTimeout(() => {
      let machineBroke = Math.random();
      if (machineBroke < .1) {
        isMachineBroken = true;
        cb("Error: machine broke.")
      }

      // don't try to roll numbers if the machine is broken
      if (isMachineBroken) {
        return;
      }

      let roll1 = 1 + Math.floor(Math.random() * 7);
      let roll2 = 1 + Math.floor(Math.random() * 7);
      let roll3 = 1 + Math.floor(Math.random() * 7);
      console.log('Spin was', roll1, roll2, roll3)
      if (roll1 === 7 && roll2 === 7 && roll3 === 7) {
        wins.push([roll1, roll2, roll3])
      } else {
        losses.push([roll1, roll2, roll3])
      }

      totalFinished++;
      if (totalFinished === n) {
        cb(false, wins, losses);
      }
    }, randomTime);
  }
}

module.exports = asyncSlotMachine;
