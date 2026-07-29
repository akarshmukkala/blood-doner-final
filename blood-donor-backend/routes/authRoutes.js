const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../user');

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, bloodGroup, city, state, phone, availability } = req.body;

    if (!name || !email || !password || !bloodGroup || !city || !state || !phone) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      bloodGroup,
      city,
      state,
      phone,
      availability: availability || 'available'
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bloodGroup: user.bloodGroup,
        city: user.city,
        state: user.state,
        phone: user.phone,
        availability: user.availability
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    let isMatch = false;
    if (typeof user.password === 'string' && user.password.startsWith('$2')) {
      isMatch = await bcrypt.compare(password, user.password);
    } else {
      isMatch = user.password === password;
      if (isMatch) {
        user.password = await bcrypt.hash(password, 10);
        await user.save();
      }
    }

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bloodGroup: user.bloodGroup,
        city: user.city,
        state: user.state,
        phone: user.phone,
        availability: user.availability
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
