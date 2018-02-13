function createReminderAsync(message, delay) {
  let cycles = 0;
  setTimeout(() => {
    cycles++
    console.log(cycles, "Reminder:", message)
  }, delay)
}

// This function is async and non-blocking.
// It uses setTimeout with a callback.
// The function will return immediately and the console.log will run.
// under the hood JavaScript will keep checking the time to see if
// it should call the callback.
// It will allow other code to run while it waits for the time to
// execute the callback function.
createReminderAsync("watch jurassic park", 2000)
console.log("Reminder set!");
