const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    stars: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    avatar: { type: String, default: "" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
