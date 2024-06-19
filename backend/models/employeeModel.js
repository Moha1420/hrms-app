const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  department: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
