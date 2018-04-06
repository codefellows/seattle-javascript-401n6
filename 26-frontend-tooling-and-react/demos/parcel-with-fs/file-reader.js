const fs = require('fs');

module.exports = {
  read: (name) => {
    return new Promise((resolve, reject) => {
      resolve(fs.readFileSync(name));
    });
  }
}

