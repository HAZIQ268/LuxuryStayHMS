const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middlewares/authMiddleware");


const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Only JPG and PNG images are allowed"), false);
    }
    cb(null, true);
  },
});


router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, contact } = req.body;

    if (role !== "guest")
      return res.status(403).json({ message: "Only guest registration allowed" });

    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already exists" });

    const user = new User({ name, email, password, role, contact });
    await user.save();

    res.json({
      message: "Guest registered successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await user.comparePassword(password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    if (user.role !== role)
      return res.status(403).json({ message: "Incorrect role selected" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        contact: user.contact,
        image: user.image,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});


router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile", error: err.message });
  }
});


router.put("/profile", auth, upload.single("image"), async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const updates = {
      name: req.body.name,
      contact: req.body.contact,
    };

    if (req.file) {
      if (user.image && fs.existsSync(path.join(__dirname, "..", user.image))) {
        fs.unlinkSync(path.join(__dirname, "..", user.image));
      }

      updates.image = `uploads/${req.file.filename}`;
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
    }).select("-password");

    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Error updating profile", error: err.message });
  }
});

module.exports = router;

