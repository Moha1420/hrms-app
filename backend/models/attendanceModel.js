const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  checkIn: { type: Date },
  checkOut: { type: Date },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
