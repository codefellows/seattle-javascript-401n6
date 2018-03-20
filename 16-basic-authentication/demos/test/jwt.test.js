const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

describe('JWT', () => {
  test('it should generate tokens', () => {
    return new Promise((resolve, reject)=> {
      let password = 'elephant'
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          reject({error: 'Error hashing password: ' + err})
        }
        let token = jwt.sign({ token: hash }, process.env.APP_SECRET)
        expect(token).toBeTruthy()
        resolve()
      })
    })
  })

  test('tokens should contain user information', () => {
    // Website with good info docs on structure of token
    // https://jwt.io/
    return new Promise((resolve, reject)=> {
      let password = 'elephant'
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          reject({error: 'Error hashing password: ' + err})
        }
        let data = {token: hash, username: 'user', email:'user@dot.com'}
        let token = jwt.sign(data, process.env.APP_SECRET)

        // token is eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IiQyYSQxMCRKZVZJZy41bS9ubXhHdWF4Z2M0R3pPUHJxbm90OXBodlc2dElreWVhTDR5UTNzM3pvbC44ZSIsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBkb3QuY29tIiwiaWF0IjoxNTE1NzA0NzU5fQ.JvvLSACdvdXABeNvUCg0MdGqwoIC6aFkQg3IhA_MXhI
        let payload = token.split('.')[1]
        let decoded = JSON.parse(Buffer.from(payload, 'base64').toString())

        expect(decoded).toBeTruthy()
        expect(decoded.username).toBe(data.username)
        expect(decoded.email).toBe(data.email)
        resolve()
      })
    })
  })
})