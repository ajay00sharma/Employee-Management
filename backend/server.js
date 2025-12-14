const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/Employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Add Employee
app.post('/api/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send('Employee added successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Search Employee by ID
app.get('/api/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({ EmployeeID: req.params.id });
    if (!employee) return res.status(404).send('Employee not found');
    res.json(employee);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update Employee Designation
app.put('/api/employees/:id', async (req, res) => {
  try {
    const result = await Employee.findOneAndUpdate(
      { EmployeeID: req.params.id },
      { Designation: req.body.Designation },
      { new: true }
    );
    if (!result) return res.status(404).send('Employee not found');
    res.send('Designation updated successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const result = await Employee.findOneAndDelete({ EmployeeID: req.params.id });
    if (!result) return res.status(404).send('Employee not found');
    res.send('Employee deleted successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
