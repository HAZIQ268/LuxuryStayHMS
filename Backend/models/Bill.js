const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    bill_id: { type: Number, unique: true, required: true },
    booking_id: { type: Number, required: true },
    // ✅ Allow both ObjectId and String for testing
    guest_id: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    room_charges: { type: Number, default: 0 },
    services: { type: Array, default: [] },
    total: { type: Number, required: true },
    payment_method: { type: String },
    payment_status: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bill", billSchema);


// const mongoose = require('mongoose');

// const billSchema = new mongoose.Schema({
//   bill_id: { type: Number, unique: true, required: true },
//   booking_id: { type: Number, required: true },
//   guest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   room_charges: { type: Number, default: 0 },
//   services: { type: Array, default: [] },
//   total: { type: Number, required: true },
//   payment_method: { type: String },
//   payment_status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' }
// }, { timestamps: true });

// module.exports = mongoose.model("Bill", billSchema);
