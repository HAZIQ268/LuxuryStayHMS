const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  booking_id: { type: Number, required: true, unique: true },
  guest_id: { type: String, required: true },
  room_id: { type: String, required: true },
  check_in: { type: Date, required: true },
  check_out: { type: Date, required: true },
  status: {
    type: String,
    enum: ["reserved", "checked_in", "checked_out", "cancelled"], // ✅ match logic
    default: "reserved",
  },
  payment_status: {
    type: String,
    enum: ["pending", "paid", "refunded"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
