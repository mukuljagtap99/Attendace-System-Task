const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController.js');

// Create a new employee
router.post('/', employeeController.createEmployee);

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Get employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update employee
router.put('/:id', employeeController.updateEmployee);

// Delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
