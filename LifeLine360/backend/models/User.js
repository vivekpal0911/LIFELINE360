const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  appointments: [
    {
      doctor: String,
      date: String,
      type: String,
      status: String
    }
  ],
  prescriptions: [
    {
      medicine: String,
      refill: String,
      pharmacy: String,
      delivery: String
    }
  ],
  history: [
    {
      test: String,
      date: String,
      result: String
    }
  ]
});

module.exports = mongoose.model('User', userSchema); 