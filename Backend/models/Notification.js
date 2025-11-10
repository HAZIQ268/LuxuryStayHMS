const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    notification_id: { type: Number, unique: true },
    recipient_role: { type: String, required: true }, 
    recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, default: "general" },
    status: { type: String, enum: ["unread", "read"], default: "unread" },
  },
  { timestamps: true }
);

// ✅ Auto increment notification_id
notificationSchema.pre("save", async function (next) {
  if (!this.notification_id) {
    const last = await this.constructor.findOne().sort({ notification_id: -1 });
    this.notification_id = last ? last.notification_id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("Notification", notificationSchema);
