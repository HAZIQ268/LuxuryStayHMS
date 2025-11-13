const express = require("express");
const router = express.Router();
const MaintenanceRequest = require("../models/MaintenanceRequest");


// Create new 
router.post("/", async (req, res) => {
  try {
    const { request_id, room_id, reported_by, issue, reported_date, status } = req.body;

    const newRequest = new MaintenanceRequest({
      request_id,
      room_id,
      reported_by,
      issue,
      reported_date: reported_date || new Date(),
      status: status || "pending",
    });

    await newRequest.save();
    res.status(201).json({ message: "Maintenance request created successfully", newRequest });
  } catch (error) {
    res.status(500).json({ message: "Error creating maintenance request", error });
  }
});

// Get all 
router.get("/", async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching maintenance requests", error });
  }
});

// Update maintenance
router.put("/:id", async (req, res) => {
  try {
    const updated = await MaintenanceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Request not found" });
    res.json({ message: "Maintenance request updated successfully", updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating maintenance request", error });
  }
});

// Delete 
router.delete("/:id", async (req, res) => {
  try {
    await MaintenanceRequest.findByIdAndDelete(req.params.id);
    res.json({ message: "Maintenance request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting maintenance request", error });
  }
});

module.exports = router;
