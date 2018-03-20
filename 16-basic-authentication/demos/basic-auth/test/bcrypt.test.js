const bcrypt = require('bcrypt')

describe('Password Hashing', () => {
  test('bcrypt matches correct password', () => {
    return new Promise((resolve, reject)=> {
      let password = 'elephant'
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          reject({error: 'Error hashing password: ' + err})
        }

        bcrypt.compare(password, hash, (err, valid) => {
          if(err) {
            reject({error: 'Error comparing password: ' + err})
          }
          expect(valid).toBe(true)
          resolve()
        })
      })
    })
  })
  test('bcrypt fails incorrect password', () => {
    return new Promise((resolve, reject)=> {
      let password = 'elephant'
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          reject({error: 'Error hashing password: ' + err})
        }

        bcrypt.compare('incorrect', hash, (err, valid) => {
          if(err) {
            reject({error: 'Error comparing password: ' + err})
          }
          expect(valid).toBe(false)
          resolve()
        })
      })
    })
  })

})
