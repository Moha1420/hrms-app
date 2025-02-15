const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Leave', LeaveSchema);
