const express = require('express');
const Employee = require('../models/Employee');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const employees = await Employee.find().populate('user', 'name email');
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  const { user, department, position, salary } = req.body;
  try {
    const employee = new Employee({
      user,
      department,
      position,
      salary
    });
    await employee.save();
    res.status(201).json({ msg: 'Employee added successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  const { department, position, salary } = req.body;
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { department, position, salary },
      { new: true }
    );
    res.json({ msg: 'Employee updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Employee removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
