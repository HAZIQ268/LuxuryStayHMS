const mongoose = require('mongoose');

const housekeepingSchema = new mongoose.Schema({
  task_id: { type: Number, unique: true, required: true },
  room_id: { type: Number, required: true },
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending','completed'], default: 'pending' },
  notes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Housekeeping', housekeepingSchema);
