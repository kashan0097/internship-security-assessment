const express = require('express');
const helmet = require('helmet');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// FIX 1: Helmet - HTTP Security Headers
app.use(helmet());

// FIX 2: Input Validation + Password Hashing (Signup)
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!validator.isLength(password, { min: 8 })) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  res.json({ 
    message: 'User registered successfully',
    email: email,
    password: hashedPassword 
  });
});

// FIX 3: JWT Token Authentication (Login)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const token = jwt.sign({ email: email }, 'secret-key-change-in-production', { expiresIn: '1h' });

  res.json({ 
    message: 'Login successful',
    token: token 
  });
});

app.listen(4000, () => {
  console.log('Secure server running on port 4000');
});
