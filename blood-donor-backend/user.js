const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  phone: { type: String, required: true },
  availability: { type: String, enum: ['available', 'unavailable'], default: 'available' },
  lastDonation: { type: Date },
  avatar: { type: String, default: 'https://via.placeholder.com/150' },
  distance: { type: String, default: '5 km' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);