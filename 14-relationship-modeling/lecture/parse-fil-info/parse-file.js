const fs = require('fs');

const FILEPATH = 'now-music-sorted.csv';
fs.readFile(FILEPATH, (err, data) => {
  if (err) {
    console.log('File Read Error:', err.message);
  }

  // Step 1: 'artist name,song name,1234\nanother artist,another song,988283'
  const lines = data.toString().split('\n');
  console.log('Total Lines:', lines.length);

  // key: 'artist name', value: 0 // count of times we've seen this key
  let tally = {};
  let most = 0;
  let mostKey = undefined;

  for (let i = 0; i < lines.length; i++) {
    // Step 2: ['artist name,song name,1234', 'another artist,another song,988283']
    let line = lines[i];
    let cells = line.split(',');

    if (cells.length !== 3) {
      console.log('Error: bad input:', cells);
    }

    // Step 3: ['artist name', 'song name', '1234']
    let artistName = cells[0];
    let songName = cells[1];
    let duration = cells[2];

    if (tally[artistName] === undefined) {
      tally[artistName] = 0;
    }
    tally[artistName]++;

    if (tally[artistName] >= most) {
      most = tally[artistName];
      mostKey = artistName;
    }

    console.log('Artist:', artistName);
    console.log('  Song:', songName);
    console.log('Length:', duration);
    console.log();
  }

  console.log('Most played artist:', mostKey, 'with', most, 'plays');
});
