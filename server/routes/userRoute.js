// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// get all users
    router.get('/users', userController.getAllUsers);

// Register a new user
router.post('/register', userController.registerUser);

// User login with token generation
router.post('/login', userController.loginUser);


// router.get('/getUser', userController.getUser);



module.exports = router;
