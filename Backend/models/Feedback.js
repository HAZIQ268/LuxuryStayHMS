const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedback_id: { type: Number, unique: true, required: true },
    guest_id: { type: String, required: true }, 
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, default: "" },
    replied: { type: Boolean, default: false },
    reply_message: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
