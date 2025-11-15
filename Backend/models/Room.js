const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  room_id: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },

  title: String,
  category: String,
  description: String,
  capacity: Number,
  // amenities: [String],

  image: String, // NEW IMAGE FIELD

  status: {
    type: String,
    enum: ["available", "occupied", "cleaning", "maintenance"],
    default: "available",
  },
});

module.exports = mongoose.model("Room", roomSchema);
