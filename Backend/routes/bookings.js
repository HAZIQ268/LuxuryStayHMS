const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// CREATE booking
router.post("/", async (req, res) => {
  try {
    const { booking_id, guest_id, room_id, check_in, check_out, status, payment_status } = req.body;

    if (!booking_id || !guest_id || !room_id || !check_in || !check_out) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const booking = new Booking({
      booking_id,
      guest_id,
      room_id,
      check_in,
      check_out,
      status: status || "reserved",
      payment_status: payment_status || "pending",
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ message: "Error creating booking", error: error.message });
  }
});

// READ all bookings
router.get("/", async (req, res) => {
  try {
    const { status, guest_id } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (guest_id) filter.guest_id = guest_id;

    const bookings = await Booking.find(filter);
    res.json(bookings);
  } catch (error) {
    console.error("Booking fetch error:", error);
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
});

// UPDATE booking
router.put("/:id", async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBooking) return res.status(404).json({ message: "Booking not found" });
    res.json(updatedBooking);
  } catch (error) {
    console.error("Booking update error:", error);
    res.status(500).json({ message: "Error updating booking", error: error.message });
  }
});

// DELETE booking
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted" });
  } catch (error) {
    console.error("Booking delete error:", error);
    res.status(500).json({ message: "Error deleting booking", error: error.message });
  }
});

module.exports = router;
