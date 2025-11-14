const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  role: { 
    type: String, 
    enum: ['admin','manager','receptionist','housekeeping','user'], 
    required: true 
  },

  email: { type: String, required: true, unique: true },
  password: { type: String },
  contact: { type: String },
  image: { type: String, default: '' },
  preferences: { type: Object, default: {} },
  status: { type: String, enum: ['active','inactive'], default: 'active' },

  // ⭐ ADD: Role-Based Permissions
  permissions: {
    type: [String],
    default: []
  }

}, { timestamps: true });

// Password Hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare Password
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
