const mongoose = require('mongoose');
const superagent = require('superagent');
const User = require('../model/user');
require('dotenv').config();

describe('Testing basic auth routes', function() {
  const BASE = `localhost:${process.env.PORT}`;

  beforeAll((done) => {
    mongoose.Promise = require('bluebird');
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    .then(() => {
      return User.remove();
    })
    .then(() => {
      done();
    })
    .catch(err => {
      console.log('Error with test setup:', err);
    });
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  describe('POST to /api/signup', function() {
    const URL = BASE + `/api/signup`
    test('should return 200 with all params', (done) => {
      let params = {
        username: "user",
        email: "a@b.com",
        password: "hotdog"
      }
      return superagent.post(URL)
      .send(params)
      .then(res => {
        expect(res.status).toBe(200);
        done();
      }).catch(err => {
        console.log('SIGNUP error', err.message)
        expect(true).toBe(false)
        done();
      })
    })

    test('should return token', (done) => {
      let params = {
        username: "user2",
        email: "a@b.com",
        password: "hotdog"
      }
      return superagent.post(URL)
      .send(params)
      .then(res => {
        expect(res.text).toBeTruthy()
        let token = res.text
        let payload = token.split('.')[1]
        let decoded = JSON.parse(Buffer.from(payload, 'base64').toString())
        expect(decoded.username).toEqual(params.username)
        expect(decoded.email).toEqual(params.email)
        expect(decoded.password).not.toEqual(params.password)
        done();
      }).catch(err => {
        expect(true).toBe(false)
        done();
      })
    })

    test('prevent dupe users', (done) => {
      let params = {
        username: "user2",
        email: "a@b.com",
        password: "hotdog"
      }
      return superagent.post(URL)
      .send(params)
      .then(res => {
        // shouldn't be an OK request
        expect(true).toBe(false)
        done();
      }).catch(res => {
        expect(res.status).toBe(400)
        done();
      })
    })

    test('should return 400 if missing username', (done) => {
      let params = {email: "a@b.com", password: "mother"}
      return superagent.post(URL)
      .send(params)
      .then(res => {
        // this shouldn't hit because a 400 should go to .catch
        expect(true).toBe(false)
        done();
      }).catch((err) => {
        expect(err.response.status).toBe(400)
        done();
      })
    })
    test('should return 400 if missing email', (done) => {
      let params = {username: "user", password: "laptop"}
      return superagent.post(URL)
      .send(params)
      .then(res => {
        // this shouldn't hit because a 400 should go to .catch
        expect(true).toBe(false)
        done();
      }).catch((err) => {
        expect(err.response.status).toBe(400)
        done();
      })
    })
    test('should return 400 if missing password', (done) => {
      let params = {username: "user", email: "a@b.com"}
      return superagent.post(URL)
      .send(params)
      .then(res => {
        // this shouldn't hit because a 400 should go to .catch
        expect(true).toBe(false)
        done();
      }).catch((err) => {
        expect(err.response.status).toBe(400)
        done();
      })
    })
  })

  describe('GET or POST to any non-registered route returns 404', function() {
    test('GET to unregistered url 404s', (done) => {
      let params = {username: "user", email: "a@b.com", password: "hotdog"}
      return superagent.post(BASE + '/fdskfsdkj')
      .send(params)
      .then(res => {
        // this shouldn't hit because a 400 should go to .catch
        expect(true).toBe(false)
        done();
      }).catch((err) => {
        expect(err.response.status).toBe(404)
        done();
      })
    })
    test('POST to unregistered url 404s', (done) => {
      let params = {username: "user", email: "a@b.com", password: "hotdog"}
      return superagent.post(BASE + '/dfdfdfdfdf')
      .send(params)
      .then(res => {
        // this shouldn't hit because a 400 should go to .catch
        expect(true).toBe(false)
        done();
      }).catch((err) => {
        expect(err.response.status).toBe(404)
        done();
      })
    })
  })
})
