require('dotenv').config();

const jwt = require('jsonwebtoken');

describe('JSON Web Token', () => {
  it('should be able to sign tokens', () => {
    let data = {username: 'mayor', isAdmin: true};
    let token = jwt.sign(data, process.env.SECRET);

    let numberOfSections = token.split('.').length;
    expect(numberOfSections).toEqual(3);
  });

  it('should be able to verify legitimate tokens', (done) => {
    let data = {username: 'mayor', isAdmin: false};
    let token = jwt.sign(data, process.env.SECRET);

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      expect(decoded.username).toEqual(data.username);
      expect(decoded.isAdmin).toEqual(data.isAdmin);
      done();
    });
  });

  it('should cause an error for illegitimate tokens', (done) => {
    let data = {username: 'mayor', isAdmin: false};
    let token = jwt.sign(data, process.env.SECRET);

    let sections = token.split('.');

    // Try to change isAdmin to true and reput it in the token
    let hackedData = {username: 'mayor', isAdmin: true};

    // JSON stringify the new "hacked" data
    // Base64 encode the data
    // replace the old section with the new, manipulated section
    sections[1] = btoa(JSON.stringify(hackedData));

    // glue the sections together with periods again
    let hackedToken = sections.join('.');

    console.log('Original token:', token);
    console.log('  Hacked token:', hackedToken);

    jwt.verify(hackedToken, process.env.SECRET, (err, decoded) => {
      if (err) {
        expect(err.message).toEqual('invalid token');
        expect(decoded).toEqual(undefined);
      }
      done();
    });
  });
});