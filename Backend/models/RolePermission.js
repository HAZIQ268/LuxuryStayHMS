const mongoose = require("mongoose");

const rolePermissionSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['admin','manager','receptionist','housekeeping','user'],
    required: true,
    unique: true
  },

  permissions: {
    type: [String],
    default: []
  }

}, { timestamps: true });

module.exports = mongoose.model("RolePermission", rolePermissionSchema);
