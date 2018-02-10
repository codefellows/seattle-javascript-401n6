const asyncSlotMachine = require('./async-slot-machine');

function reportResults(err, wins, losses) {
  if (err) {
    console.log(err);
  } else {
    console.log("  WINS:", wins);
    console.log("LOSSES:", losses);
  }
}

asyncSlotMachine(5, reportResults)
