const mongoose = require('mongoose');

const adminDataSchema = new mongoose.Schema({
  name: { type: String }
});

module.exports = mongoose.model('AdminData', adminDataSchema); 