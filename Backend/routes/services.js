const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// ✅ Create new service
router.post("/", async (req, res) => {
  try {
    const { service_id, guest_id, service_type, details, status } = req.body;

    const newService = new Service({
      service_id,
      guest_id,
      service_type,
      details,
      status: status || "pending",
    });

    const saved = await newService.save();
    res.status(201).json({ message: "Service created successfully", service: saved });
  } catch (error) {
    console.error("❌ Error creating service:", error);
    res.status(500).json({ message: "Error creating service", error: error.message });
  }
});

// ✅ Get all
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
});

// ✅ Update (edit)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Service not found" });
    res.json({ message: "Service updated successfully", service: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
});

// ✅ Delete
router.delete("/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error: error.message });
  }
});

module.exports = router;
