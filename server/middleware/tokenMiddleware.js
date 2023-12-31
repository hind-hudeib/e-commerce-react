const jwt = require('jsonwebtoken')
const {secretKey } = require('../config/config')

function createToken (payload){
    return jwt.sign(payload, secretKey , { expiresIn: '1h' })
}

function verifyToken(token){
    try{
        return jwt.verify(token, secretKey);

    }
 catch (error) {
    return null;
  }
}

module.exports = {
    createToken,
    verifyToken,
}