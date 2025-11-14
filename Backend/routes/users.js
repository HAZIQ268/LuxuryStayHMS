const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middlewares/authMiddleware'); // optional if you want secure routes

// -------------------------------
// REGISTER
// -------------------------------
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, contact, status } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashed,
      role,
      contact,
      status,
      permissions: []   // default
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// -------------------------------
// LOGIN
// -------------------------------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        permissions: user.permissions  // ⭐ important
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// -------------------------------------------------
// ⭐ GET STAFF USERS (used in your PermissionsPage)
// -------------------------------------------------
router.get('/staff', async (req, res) => {
  try {
    const users = await User.find({
      role: { $ne: 'user' } // all staff except customers
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff', error });
  }
});

// -------------------------------------------------
// ⭐ UPDATE PERMISSIONS — (matches your UI PUT route)
// -------------------------------------------------
router.put('/:id/permissions', async (req, res) => {
  try {
    const { permissions } = req.body;

    await User.findByIdAndUpdate(req.params.id, { permissions });

    res.json({ message: 'Permissions updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating permissions', error });
  }
});

// -------------------------------
// GET ALL USERS
// -------------------------------
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// -------------------------------
// DELETE USER
// -------------------------------
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

module.exports = router;
