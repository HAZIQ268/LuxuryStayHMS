const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// ✅ Create new notification
router.post("/", async (req, res) => {
  try {
    const { notification_id, user_id, title, message, type, status } = req.body;

    const newNotification = new Notification({
      notification_id,
      user_id,
      title,
      message,
      type: type || "general", // e.g., booking, payment, alert
      status: status || "unread", // unread or read
    });

    await newNotification.save();
    res.status(201).json({
      message: "Notification created successfully",
      notification: newNotification,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating notification", error });
  }
});

// ✅ Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications", error });
  }
});

// ✅ Get notifications by user ID
router.get("/user/:user_id", async (req, res) => {
  try {
    const userNotifications = await Notification.find({ user_id: req.params.user_id });
    res.json(userNotifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user notifications", error });
  }
});

// ✅ Mark notification as read
router.put("/:id/read", async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );
    if (!notification)
      return res.status(404).json({ message: "Notification not found" });
    res.json({ message: "Notification marked as read", notification });
  } catch (error) {
    res.status(500).json({ message: "Error updating notification", error });
  }
});

// ✅ Delete notification
router.delete("/:id", async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting notification", error });
  }
});

module.exports = router;
