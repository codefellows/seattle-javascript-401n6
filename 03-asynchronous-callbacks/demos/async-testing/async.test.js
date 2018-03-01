// Sets a timeout to call a function with a message
// with the given amount of delay, in milliseconds.
//
// message: a string
// delay: an integer representing the delay in milliseconds
// cb: a callback function that accepts the message as a parameter
function createReminder(message, delay, cb) {
  setTimeout(() => {
    cb('Reminder: ' + message);
  }, delay)
}


// WARNING: jest might be showing your tests as false positives!
//          Study this example to prevent this error.
// Leaving this code with the comments produces a false positive.
// Notice that there's `expect(92).toBe(40)`.
// createReminder is an async function. It runs in the background.
// Observe the console.log statements.
// You'll see "it() finished" print before "reminder arrived"
// If you don't include `resolve, reject` as paremeters
// then jest doesn't know you're testing an async function.
// Jest Doesn't know it's supposed to wait until the function
// is totally resolved.
// Jest assumes the test is finished as soon as the main block
// of the it() function completes.
// If you accept `resolve, reject` as parameters in the `it()`
// function then jest will detect that and know that you're
// planning to test an async function.
describe('Reminders', () => {
  it('should return a message', (/*resolve, reject*/) => {
    let message = 'buy milk';
    createReminder(message, 1000, (reminder) => {
      console.log('reminder arrived:', reminder);
      expect(reminder).toBe('Reminder: ' + message);
      expect(92).toBe(40);
      //resolve();
    });
    console.log('it() finished');
  });
});
