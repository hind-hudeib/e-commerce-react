const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { createToken } = require('../middleware/tokenMiddleware');

// signup
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(409).json({ error: 'Email already taken' });
    }


    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPwd,
    });

    const savedUser = await newUser.save();

    // Create token for the registered user
    const payload = {
      userId: savedUser._id,
      email: savedUser.email,
      username: savedUser.username,
    };

    const token = createToken(payload);

    // Send user data and token in the response
    res.status(201).json({ user: payload, token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};


// login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const payload = {
      userId: user._id,
      email: user.email,
      username: user.username,
    };

    const token = createToken(payload);
    // Set the JWT token as an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
    });

    // Send user data and token in the response
    res.status(200).json({ user: payload, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};


const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
  registerUser,
  loginUser,
  getUser,
};
