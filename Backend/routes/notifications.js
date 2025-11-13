const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");


// Create new notification
router.post("/", async (req, res) => {
  try {
    const { recipient_role, recipient_id, title, message, type, status } = req.body;
    const io = req.app.get("io");

    const newNotification = new Notification({
      recipient_role,
      recipient_id,
      title,
      message,
      type: type || "general",
      status: status || "unread",
    });

    await newNotification.save();

    // Emit live notification
    if (recipient_role) io.to(recipient_role).emit("new-notification", newNotification);
    else if (recipient_id) io.to(recipient_id).emit("new-notification", newNotification);
    else io.emit("new-notification", newNotification);

    res.status(201).json({ message: "Notification created", notification: newNotification });
  } catch (err) {
    console.error("❌ Error creating notification:", err);
    res.status(500).json({ message: "Error creating notification", error: err.message });
  }
});

// Get all notifications (admin)
router.get("/", async (req, res) => {
  try {
    const data = await Notification.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notifications", error: err.message });
  }
});

// Get notifications by role
router.get("/role/:role", async (req, res) => {
  try {
    const role = req.params.role.toLowerCase();
    const data = await Notification.find({ recipient_role: role }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching role notifications", error: err.message });
  }
});

// Get notifications by user ID
router.get("/user/:id", async (req, res) => {
  try {
    const data = await Notification.find({ recipient_id: req.params.id }).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user notifications", error: err.message });
  }
});

module.exports = router;
