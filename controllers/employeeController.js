const { Employee } = require('../models/employee.js');

// Create Employee
exports.createEmployee = async (req, res) => {
  try {
    const { name } = req.body;
    const employee = await Employee.create({ name });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Employee by Id
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) throw new Error('Employee not found');
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
    const { name } = req.body;
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) throw new Error('Employee not found');
    employee.name = name;
    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) throw new Error('Employee not found');
    await employee.destroy();
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
