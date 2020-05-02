const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets.js')

module.exports = (user) => {
   const payload = {
      subject: user.id,
      username: user.username,
   }

   const options = {
      expiresIn: '1hr'
   }

   return jwt.sign(payload, jwtSecret, options)
}