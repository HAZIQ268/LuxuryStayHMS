const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    tax_rate: { type: Number, default: 0 },
    policies: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", settingsSchema);
