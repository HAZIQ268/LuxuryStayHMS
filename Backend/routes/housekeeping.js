const express = require("express");
const router = express.Router();
const Housekeeping = require("../models/Housekeeping");


// Create new  
router.post("/", async (req, res) => {
  try {
    const { task_id, room_id, staff_id, date, status } = req.body;
    const task = new Housekeeping({ task_id, room_id, staff_id, date, status });
    await task.save();
    res.status(201).json({ message: "Housekeeping task created", task });
  } catch (error) {
    res.status(500).json({ message: "Error creating housekeeping task", error });
  }
});

// Get all housekeeping 
router.get("/", async (req, res) => {
  try {
    const tasks = await Housekeeping.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

// Update housekeeping 
router.put("/:id", async (req, res) => {
  try {
    const updated = await Housekeeping.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task updated successfully", task: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
});

// Delete housekeeping 
router.delete("/:id", async (req, res) => {
  try {
    await Housekeeping.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
});

module.exports = router;
