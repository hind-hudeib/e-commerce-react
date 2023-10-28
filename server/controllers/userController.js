// controllers/userController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {

  const { username, email, password } = req.body;

  try {
      const user = await User.findOne({ email: email });
      if (user) {
          return res.status(401).send("Email already taken");
      }
  } catch (error) {
      errorHandler(error, req, res);
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const newUser = new User({
      username: username,
      email: email,
      password: hashedPwd,
  });

  const user = await newUser.save();

  req.body = user;
};
// login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by their username
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify the provided password against the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password); // Added await here

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // If the username and password are correct, generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id, username: user.username }, 'your_secret_key', {
      expiresIn: '1h', // You can adjust the token expiration time
    });

    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
