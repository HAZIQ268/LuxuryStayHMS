const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['admin','manager','receptionist','housekeeping','guest'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  contact: { type: String },
  preferences: { type: Object, default: {} },
  status: { type: String, enum: ['active','inactive'], default: 'active' }
}, { timestamps: true });

// password hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  if (!this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function(candidate) {
  const bcrypt = require('bcryptjs');
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);
