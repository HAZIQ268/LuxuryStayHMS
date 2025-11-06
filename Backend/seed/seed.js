require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Room = require('../models/Room');

async function seed(){
  await mongoose.connect(process.env.MONGO_URI);

  const exists = await User.findOne({ email: 'admin@luxury.com' });
  if (!exists) {
    await User.create({ name:'Super Admin', email:'admin@luxury.com', password:'Admin@123', role:'admin' });
    console.log('Admin created: admin@luxury.com / Admin@123');
  } else console.log('Admin already exists');

  const rcount = await Room.countDocuments();
  if (rcount === 0) {
    await Room.insertMany([
      { room_id:101, type:'Deluxe', price:120.0 },
      { room_id:102, type:'Suite', price:200.0 },
      { room_id:103, type:'Standard', price:80.0 }
    ]);
    console.log('Sample rooms created');
  }
  process.exit();
}
seed();
