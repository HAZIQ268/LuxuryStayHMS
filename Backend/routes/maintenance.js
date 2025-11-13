const express = require("express");
const router = express.Router();
const MaintenanceRequest = require("../models/MaintenanceRequest");


// CREATE
router.post("/", async (req, res) => {
  try {
    const { request_id, room_id, reported_by, issue, status, priority } = req.body;

    if (!room_id || !issue) {
      return res.status(400).json({ message: "Room ID and Issue are required" });
    }

    const newRequest = new MaintenanceRequest({
      request_id: request_id || Date.now(),
      room_id,
      reported_by: reported_by || "",
      issue,
      status: status || "pending",
      priority: priority || "medium",
    });

    await newRequest.save();
    res.status(201).json({ message: "Maintenance request created", request: newRequest });
  } catch (err) {
    console.error("❌ Create error:", err);
    res.status(500).json({ message: "Error creating request", error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ message: "Error fetching maintenance requests", error: err.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const request = await MaintenanceRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Request not found" });
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: "Error fetching request", error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await MaintenanceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Request not found" });
    res.json({ message: "Maintenance request updated", request: updated });
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(500).json({ message: "Error updating maintenance request", error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await MaintenanceRequest.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Request not found" });
    res.json({ message: "Maintenance request deleted successfully" });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ message: "Error deleting maintenance request", error: err.message });
  }
});

module.exports = router;
