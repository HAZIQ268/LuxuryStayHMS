const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");


// CREATE
router.post("/", async (req, res) => {
  try {
    const { feedback_id, guest_id, rating, comment } = req.body;

    if (!guest_id || !rating) {
      return res.status(400).json({ message: "Guest ID and Rating are required" });
    }

    const newFeedback = await Feedback.create({
      feedback_id: feedback_id || Date.now(),
      guest_id,
      rating,
      comment,
    });

    res.status(201).json({ message: "Feedback submitted", feedback: newFeedback });
  } catch (error) {
    console.error("❌ Feedback create error:", error);
    res.status(500).json({ message: "Error submitting feedback", error: error.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error: error.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback", error: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Feedback not found" });
    res.json({ message: "Feedback updated", feedback: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating feedback", error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Feedback not found" });
    res.json({ message: "Feedback deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting feedback", error: error.message });
  }
});

module.exports = router;
