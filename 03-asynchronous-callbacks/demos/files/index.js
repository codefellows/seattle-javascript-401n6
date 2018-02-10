"use strict";

const fs = require('fs');

fs.readFile('./assets/short.txt', (err, result) => {
  let str = result.toString()
  showLines(str)
})

fs.readFile('./assets/sherlock.txt', (err, result) => {
  let str = result.toString()
})

function showLines(str) {
  let lines = str.split('\n');
  for (var i = 0; i < lines.length; i++) {
    console.log("Line", i, lines[i]);
  }
}
