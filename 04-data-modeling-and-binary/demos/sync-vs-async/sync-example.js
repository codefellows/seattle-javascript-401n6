function createReminderSync(message, delay) {
  let cycles = 0;
  let start = new Date();
  while(difference < delay) {
    cycles++
    let now =  new Date();
    var difference = now - start;
  }
  console.log(cycles, "Reminder:", message)
}

// Synchronous is "blocking."
// The console.log won't execute until the function returns because the
// function stays processing in the while loop.
createReminderSync("watch jurassic park", 2000)
console.log("Reminder set!");
