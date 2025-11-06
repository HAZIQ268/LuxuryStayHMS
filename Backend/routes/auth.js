const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register (Admin can create other staff) - open for initial seeding or protected later
router.post('/register', async (req, res) => {
  const { name, email, password, role, contact } = req.body;
  try {
    if (await User.findOne({ email })) return res.status(400).json({ message: 'Email exists' });
    const user = new User({ name, email, password, role, contact });
    await user.save();
    res.json({ message: 'User created', user: { id: user._id, name: user.name, role: user.role, email: user.email } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
