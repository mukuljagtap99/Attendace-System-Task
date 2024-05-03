const { Department } = require('../models/department.js');

// Create Department
exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = await Department.create({ name });
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Departments
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Department by Id
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) throw new Error('Department not found');
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Department
exports.updateDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = await Department.findByPk(req.params.id);
    if (!department) throw new Error('Department not found');
    department.name = name;
    await department.save();
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Department
exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) throw new Error('Department not found');
    await department.destroy();
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
