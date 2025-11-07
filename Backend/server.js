require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const roomsRoutes = require("./routes/rooms");
const bookingsRoutes = require("./routes/bookings");
const billsRoutes = require("./routes/bills");
const housekeepingRoutes = require("./routes/housekeeping");
const maintenanceRoutes = require("./routes/maintenance_requests");
const feedbackRoutes = require("./routes/feedback");
const servicesRoutes = require("./routes/services");
const settingsRoutes = require("./routes/settings");
const notificationsRoutes = require("./routes/notifications");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();


// Allow front-end origin (change FRONTEND_URL in .env if different)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// =====================
//  Uploads directory (ensure exists)
//  Serve with CORS-safe headers so browser can load images
// =====================
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Add a small middleware to set headers for uploaded static files
app.use("/uploads", (req, res, next) => {
  // Allow frontend origin to load images
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.FRONTEND_URL || "http://localhost:5173"
  );
  // Allow images to be used cross-origin (prevents NotSameOrigin blocking)
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
app.use("/uploads", express.static(uploadDir));

// =====================
//  Temp directory for generated files (pdfs etc.)
// =====================
const TMP_DIR = path.join(__dirname, "tmp");
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
}
app.use("/tmp", express.static(TMP_DIR));

// =====================
//  MongoDB Connection
// =====================
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/Luxury_HMS";
mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// =====================
//  API Routes (all your routes)
// =====================
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/bills", billsRoutes);
app.use("/api/housekeeping", housekeepingRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/dashboard", dashboardRoutes);

// =====================
//  Health Check
// =====================
app.get("/health", (req, res) =>
  res.json({
    ok: true,
    message: "Server is running fine!",
    time: new Date().toISOString(),
  })
);

// =====================
//  Global Error Handler
// =====================
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Server error" });
});

// =====================
//  Start Server
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
