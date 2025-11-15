const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const multer = require('multer');
const path = require('path');

// ===== Multer Setup =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname.replace(/\s/g, '');
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// ===== Create Room =====
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const {
      room_id, type, price,
      title, category, description, capacity, amenities,
      status
    } = req.body;

    const room = new Room({
      room_id,
      type,
      price,
      title,
      category,
      description,
      capacity,
      amenities: JSON.parse(amenities || '[]'), // parse string to array
      status,
      image: req.file ? req.file.filename : null,
    });

    await room.save();
    res.json(room);
  } catch (err) {
    console.error("Create Room Error:", err);
    res.status(500).json({ message: err.message });
  }
});

// ===== Read All Rooms =====
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ===== Update Room =====
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (updateData.amenities) updateData.amenities = JSON.parse(updateData.amenities);
    if (req.file) updateData.image = req.file.filename;

    const room = await Room.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ===== Delete Room =====
router.delete('/:id', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
