require('dotenv').config()

const superagent = require('superagent')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const User = require('../model/user')

describe('Testing basic auth routes', function() {
  const BASE = `localhost:${process.env.PORT}`
  const SIGNUP_URL = BASE + `/api/signup`
  const SIGNIN_URL = BASE + `/api/signin`

  let USER_PARAMS = {
    username: "new_user" + Math.random(),
    email: "new_user@service.com",
    password: "hotdog"
  }

  beforeAll((done) => {
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    .then(() => {
      return User.remove();
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log('Error with test setup:', err);
    });
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  describe('GET /api/signin', function() {
    test('should return 200 with all params', (resolve, reject) => {
      return superagent.post(SIGNUP_URL)
      .set('Content-Type', 'application/json')
      .send(USER_PARAMS)
      .then(res => {
        expect(res.text).toBeTruthy()
        let token = res.text
        let payload = token.split('.')[1]
        let decoded = JSON.parse(Buffer.from(payload, 'base64').toString())
        expect(decoded.username).toEqual(USER_PARAMS.username)
        expect(decoded.email).toEqual(USER_PARAMS.email)
        expect(decoded.password).not.toEqual(USER_PARAMS.password)
      })
      .then(() => {
        let payload = USER_PARAMS.username + ':' + USER_PARAMS.password
        let encoded = btoa(payload)
        return superagent.get(SIGNIN_URL)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Basic ' + encoded)
      })
      .then(res => {
        expect(res.status).toBe(200)
        resolve()
      })
      .catch(err => {
        //console.log('ERROR:', err)
        expect(true).toBe(false)
        reject()
      })
    })
  })
})
