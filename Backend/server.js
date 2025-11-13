require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const http = require("http");
const { Server } = require("socket.io");

// ===== Routes =====
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

// ===== Security & Middleware =====
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

// ===== Upload Directory =====
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

app.use("/uploads", (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.FRONTEND_URL || "http://localhost:5173"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
app.use("/uploads", express.static(uploadDir));

// ===== Temp Directory =====
const TMP_DIR = path.join(__dirname, "tmp");
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
app.use("/tmp", express.static(TMP_DIR));

// ===== MongoDB Connection =====
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/Luxury_HMS";
mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });


const server = http.createServer(app);

// ===== Socket.IO Setup =====
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`🟢 Socket connected: ${socket.id}`);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`📡 User joined room: ${room}`);
  });

  socket.on("sendNotification", (data) => {
    console.log("📨 Notification received:", data);
    io.to(data.recipient_role).emit("receiveNotification", data);
  });

  socket.on("disconnect", () => {
    console.log(`🔴 Socket disconnected: ${socket.id}`);
  });
});


app.set("io", io);

// ===== API Routes =====
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

// ===== Health Check =====
app.get("/health", (req, res) =>
  res.json({
    ok: true,
    message: "Server is running fine!",
    time: new Date().toISOString(),
  })
);

// ===== Global Error Handler =====
app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Server error" });
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
