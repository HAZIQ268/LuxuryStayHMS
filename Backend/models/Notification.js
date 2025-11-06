const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notification_id: { type: Number, unique: true, required: true },
  recipient_role: { type: String, required: true }, // e.g., "admin", "housekeeping", or a specific user id if you prefer
  recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional specific recipient
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  read_status: { type: Boolean, default: false },
  meta: { type: Object, default: {} } // optional extra data (booking_id etc.)
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
