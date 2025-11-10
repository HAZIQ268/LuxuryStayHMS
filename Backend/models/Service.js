const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    service_id: { type: Number, unique: true, required: true },
    guest_id: { type: String, required: true },
    service_type: { type: String, required: true },
    request_time: { type: Date, default: Date.now },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    details: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
