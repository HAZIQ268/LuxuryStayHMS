const express = require("express");
const router = express.Router();
const Settings = require("../models/Settings");


/**
 * Get current settings
 */
router.get("/", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({ tax_rate: 0, policies: "" });
    }
    res.json(settings);
  } catch (err) {
    console.error("❌ Error fetching settings:", err);
    res
      .status(500)
      .json({ message: "Error fetching settings", error: err.message });
  }
});

/**
 * Save/update settings
 */
router.post("/", async (req, res) => {
  try {
    const { tax_rate, policies } = req.body;
    let settings = await Settings.findOne();

    if (settings) {
      settings.tax_rate = tax_rate;
      settings.policies = policies;
      await settings.save();
    } else {
      settings = await Settings.create({ tax_rate, policies });
    }

    res.json({ message: "Settings saved successfully", settings });
  } catch (err) {
    console.error("❌ Error saving settings:", err);
    res
      .status(500)
      .json({ message: "Error saving settings", error: err.message });
  }
});

/**
 * Reset settings to defaults
 */
router.post("/reset", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (settings) {
      settings.tax_rate = 0;
      settings.policies = "";
      await settings.save();
    } else {
      settings = await Settings.create({ tax_rate: 0, policies: "" });
    }
    res.json({ message: "Settings reset to default values!", settings });
  } catch (err) {
    console.error("❌ Error resetting settings:", err);
    res
      .status(500)
      .json({ message: "Error resetting settings", error: err.message });
  }
});

module.exports = router;
