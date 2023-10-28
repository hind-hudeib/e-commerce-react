// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { createTokenMiddleware, verifyTokenMiddleware } = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);

// User login with token generation
router.post('/login', createTokenMiddleware, userController.loginUser);

// Protected route that requires token verification
router.get('/protectedRoute', verifyTokenMiddleware, (req, res) => {
  // This route is protected and can only be accessed with a valid token
  res.status(200).json({ message: 'Access granted' });
});

module.exports = router;
