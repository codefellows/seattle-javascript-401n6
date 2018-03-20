const bcrypt = require('bcrypt');

const password = 'elephant'
const rounds = 20;
console.log('Hashing password:');
bcrypt.hash(password, rounds, (err, hash) => {
  bcrypt.compare(password, hash, (err, isValid) => {
    console.log('Password:', password);
    console.log('    Hash:', hash);
    console.log('  Match?:', isValid);
  });
});

let pass1 = 'laptop';
let pass2 = 'elephant';
let myhash = '$2a$10$KJCcjrpVpPDqJlcbU/Bx/e0RNwuiDxR1K7LIDxepR5RwIb.zn2Z.C';
bcrypt.compare(pass1, myhash, (err, isValid) => {
  console.log('Password:', pass1);
  console.log('    Hash:', myhash);
  console.log('  Match?:', isValid);
});
bcrypt.compare(pass2, myhash, (err, isValid) => {
  console.log('Password:', pass2);
  console.log('    Hash:', myhash);
  console.log('  Match?:', isValid);
});


