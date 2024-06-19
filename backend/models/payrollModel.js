const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  salary: { type: Number, required: true },
  status: { type: String, default: 'unpaid' },
});

module.exports = mongoose.model('Payroll', PayrollSchema);
