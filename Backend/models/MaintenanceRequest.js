const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema(
  {
    request_id: { type: Number, required: true },
    room_id: { type: Number, required: true },
    reported_by: { type: String, default: "" }, 
    issue: { type: String, required: true },
    reported_date: { type: Date, default: Date.now },
    status: { type: String, enum: ["pending", "resolved"], default: "pending" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    resolution_notes: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MaintenanceRequest", maintenanceRequestSchema);
