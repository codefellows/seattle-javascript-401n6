require('dotenv').config()

const bcrypt = require('bcrypt')
const User = require('../model/user')

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

describe('mongodb', () => {
  beforeAll((done) => {
    mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    // clear the database before the tests are run
    return User.remove()
    .then(() => {
      done();
    });
  });

  afterAll(()=> {
    mongoose.disconnect()
  });

  let USER_DATA = {
    username: 'penguinguy42',
    password: 'password123',
    email: 'user@aol.com'
  };

  test('should be able to create new unique users', () => {
    let user = new User(USER_DATA)
    return new Promise((resolve, reject) => {
      return user.save((err, user) => {
        if (err) {
          reject(err)
        }
        expect(user).toBeTruthy()
        expect(user.username).toBe(USER_DATA.username)
        expect(user.email).toBe(USER_DATA.email)
        expect(user.password).not.toBe(USER_DATA.password)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  })
  test('should not allow users to be created twice', () => {
    let user = new User(USER_DATA)
    return new Promise((resolve, reject) => {
      return user.save((err, user) => {
        reject('Duplicate users should not be created')
      }).catch(err => {
        expect(err.errmsg.includes('duplicate key')).toBeTruthy()
        resolve()
      })
    })
  })

  test('user password attempt matches', (resolve, reject) => {
    return User.findOne({username: 'penguinguy42'})
    .then(user => {
      expect(user.username).toBe(USER_DATA.username)
      expect(user.email).toBe(USER_DATA.email)

      bcrypt.compare(USER_DATA.password, user.password, (err, valid) => {
        if(err) {
          reject({error: 'Error comparing password: ' + err})
        }
        expect(valid).toBe(true)
        resolve()
      })
    })
  })

  test('wrong password attempt fails', (resolve, reject) => {
    return User.findOne({username: 'penguinguy42'})
    .then(user => {
      expect(user.username).toBe(USER_DATA.username)
      expect(user.email).toBe(USER_DATA.email)

      bcrypt.compare('wrong password', user.password, (err, valid) => {
        if(err) {
          reject({error: 'Error comparing password: ' + err})
        }
        expect(valid).toBe(false)
        resolve()
      })
    })
  })
})