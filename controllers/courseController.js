const { Course } = require('../models/course.js');
const { Department } = require('../models/department.js');


// Create Course
exports.createCourse = async (req, res) => {
  try {
    const { name, DepartmentId } = req.body;
    const course = await Course.create({ name, DepartmentId });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Course by Id
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) throw new Error('Course not found');
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const { name, DepartmentId } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (!course) throw new Error('Course not found');
    course.name = name;
    course.DepartmentId = DepartmentId;
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) throw new Error('Course not found');
    await course.destroy();
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all departments of a specific course
exports.getDepartmentsOfCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findByPk(courseId);
    if (!course) throw new Error('Course not found');
    const departments = await course.getDepartments();
    res.json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all employees assigned to a specific course
exports.getEmployeesOfCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findByPk(courseId);
    if (!course) throw new Error('Course not found');
    const employees = await course.getEmployees();
    res.json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
