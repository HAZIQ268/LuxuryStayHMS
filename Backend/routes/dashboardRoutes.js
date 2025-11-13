const express = require("express");
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const Review = require("../models/Review");


const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const newBookings = await Booking.countDocuments({ status: "reserved" });
    const scheduledRooms = await Room.countDocuments({ status: "occupied" });
    const checkIns = await Booking.countDocuments({ status: "checked_in" });
    const checkOuts = await Booking.countDocuments({ status: "checked_out" });
    const availableRooms = await Room.countDocuments({ status: "available" });

    const bookedRooms = {
      pending: await Booking.countDocuments({ payment_status: "pending" }),
      done: await Booking.countDocuments({ payment_status: "paid" }),
      finish: await Booking.countDocuments({ payment_status: "refunded" }),
    };

    const reviews = await Review.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      newBookings,
      scheduledRooms,
      checkIns,
      checkOuts,
      availableRooms,
      bookedRooms,
      reviews,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Failed to load dashboard stats" });
  }
});

module.exports = router;
