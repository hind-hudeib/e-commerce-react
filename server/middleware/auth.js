// auth.js (custom middleware)
const jwt = require('jsonwebtoken');

// Middleware to create a JWT token
function createTokenMiddleware(req, res, next) {
  const userData = req.body;
  const secretKey = 'ASDHAUEBCSNUSHDWDNCIO'; // Replace with your secret key

  const token = jwt.sign(userData, secretKey, {
    expiresIn: '1h', // Token expiration time
  });

  // Attach the token to the request for future use
  req.token = token;
  next();
}

// Middleware to verify a JWT token
function verifyTokenMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token is missing' });
  }

  const secretKey = 'ASDHAUEBCSNUSHDWDNCIO'; // Replace with your secret key

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Token is invalid' });
    }

    // Token is valid, you can access the user data in `decoded`
    req.userData = decoded;
    next();
  });
}

module.exports = {
  createTokenMiddleware,
  verifyTokenMiddleware,
};
