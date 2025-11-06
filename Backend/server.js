require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// =====================
//  Import Route Files
// =====================
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const roomsRoutes = require('./routes/rooms');
const bookingsRoutes = require('./routes/bookings');
const billsRoutes = require('./routes/bills');
const housekeepingRoutes = require('./routes/housekeeping');
const maintenanceRoutes = require('./routes/maintenance_requests');
const feedbackRoutes = require('./routes/feedback');
const servicesRoutes = require('./routes/services');
const settingsRoutes = require("./routes/settings");
const notificationsRoutes = require('./routes/notifications');
const dashboardRoutes = require('./routes/dashboardRoutes'); 

// =====================
//  App Setup
// =====================
const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// =====================
//  Temp directory
// =====================
const TMP_DIR = path.join(__dirname, 'tmp');
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
}
app.use('/tmp', express.static(TMP_DIR)); // serve generated files

// =====================
//  MongoDB Connection
// =====================
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/Luxury_HMS';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// =====================
//  API Routes
// =====================
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/bills', billsRoutes);
app.use('/api/housekeeping', housekeepingRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/services', servicesRoutes);
app.use("/api/settings", settingsRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/dashboard', dashboardRoutes); // ✅ working dashboard routes

// =====================
//  Health Check
// =====================
app.get('/health', (req, res) => res.json({
  ok: true,
  message: 'Server is running fine!',
  time: new Date().toISOString(),
}));

// =====================
//  Global Error Handler
// =====================
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Server error' });
});

// =====================
//  Start Server
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
