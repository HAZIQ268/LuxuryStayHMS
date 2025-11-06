const express = require("express");
const router = express.Router();
const Bill = require("../models/Bill");
const User = require("../models/User");
const { generateInvoice } = require("../utils/pdfGenerator");
const { sendInvoiceEmail } = require("../utils/emailService");
const path = require("path");

// ✅ CREATE bill
router.post("/", async (req, res) => {
  try {
    const { bill_id, booking_id, guest_id, room_charges, services, total } = req.body;

    if (!bill_id || !booking_id || !guest_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const bill = new Bill({
      bill_id,
      booking_id,
      guest_id,
      room_charges: room_charges || 0,
      services: services || [],
      total: total || room_charges || 0,
      payment_status: "Pending", // ✅ fixed casing
    });

    await bill.save();
    res.status(201).json(bill);
  } catch (err) {
    console.error("🔥 Bill create error:", err.message);
    res.status(500).json({ message: "Error creating bill", error: err.message });
  }
});

// ✅ READ all bills
router.get("/", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bills", error: err.message });
  }
});

// ✅ UPDATE bill
router.put("/:id", async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.json(bill);
  } catch (err) {
    res.status(500).json({ message: "Error updating bill", error: err.message });
  }
});

// ✅ DELETE bill
router.delete("/:id", async (req, res) => {
  try {
    const bill = await Bill.findByIdAndDelete(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.json({ message: "Bill deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting bill", error: err.message });
  }
});

// ✅ GENERATE INVOICE PDF + optional email

router.post("/:id/generate-invoice", async (req, res) => {
  try {
    const bill = await Bill.findOne({ bill_id: req.params.id });
    if (!bill) return res.status(404).json({ message: "Bill not found" });

    const guest = await User.findById(bill.guest_id).catch(() => null);

    generateInvoice(bill, guest, async (err, filePath, filename) => {
      if (err) return res.status(500).json({ message: err.message });

      if (req.body.emailInvoice) {
        await sendInvoiceEmail(
          guest?.email || "test@example.com",
          `Invoice ${bill.bill_id}`,
          "Please find your invoice attached.",
          filePath,
          filename
        );
      }

      res.download(filePath, filename, (err) => {
        if (err) console.error(err);
      });
    });
  } catch (err) {
    console.error("Invoice error:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
