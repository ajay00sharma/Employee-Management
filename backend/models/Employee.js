const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  EmployeeName: { type: String, required: true },
  EmployeeID: { type: String, required: true, unique: true },
  Designation: { type: String, required: true },
  Department: { type: String, required: true },
  JoiningDate: { type: Date, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
