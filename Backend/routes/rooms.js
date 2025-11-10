const express = require('express');
const router = express.Router();
const Room = require('../models/Room');


// Create room
router.post('/', async (req, res) => {
  try {
    const { room_id, type, price, status } = req.body;
    const room = new Room({ room_id, type, price, status });
    await room.save();
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read all rooms
router.get('/', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

// Update room
router.put('/:id', async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete room
router.delete('/:id', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
