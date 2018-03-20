require('dotenv').config();

const superagent = require('superagent');
const jwt = require('jsonwebtoken');

const User = require('../model/user');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe('Testing basic auth routes', function() {
  const BASE = `localhost:${process.env.PORT}`;
  const SIGNUP_URL = BASE + '/api/signup';
  const SIGNIN_URL = BASE + '/api/signin';
  const PROFILE_URL = BASE + '/profile';

  let USER_PARAMS = {
    username: "new_user",
    email: "new_user@service.com",
    password: "hotdog"
  };

  beforeAll((done) => {
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    .then(() => {
      return User.remove();
    })
    .then(() => {
      done();
    });
    // clear the database before the tests are run
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  describe('GET /profile', () => {
    test('should not allow access without signin', (resolve, reject) => {
      return superagent.post(SIGNUP_URL)
      .set('Content-Type', 'application/json')
      .then(res => {
        console.log("RES", res.text);
        reject();
      })
      .catch((err) => {
        expect(err.status).toBe(400);
        resolve();
      });
    });

    test('allow access without signin', (resolve, reject) => {
      return superagent.post(SIGNUP_URL)
      .set('Content-Type', 'application/json')
      .send(USER_PARAMS)
      .then(res => {
        expect(res.text).toBeTruthy();
        let token = res.text;
        let payload = token.split('.')[1];
        let decoded = JSON.parse(Buffer.from(payload, 'base64').toString());
        expect(decoded.username).toEqual(USER_PARAMS.username);
        expect(decoded.email).toEqual(USER_PARAMS.email);
        expect(decoded.password).not.toEqual(USER_PARAMS.password);
        return token;
      })
      .then((token) => {
        return superagent.get(PROFILE_URL)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Basic ' + token);
      })
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.email).toBe(USER_PARAMS.email);
        resolve();
      })
      .catch(err => {
        console.log('ERROR:', err);
        expect(true).toBe(false);
        reject();
      });
    });
  });
});
