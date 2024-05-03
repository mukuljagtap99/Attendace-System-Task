const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController.js');

// Create a new course
router.post('/', courseController.createCourse);

// Get all courses
router.get('/', courseController.getAllCourses);

// Get course by ID
router.get('/:id', courseController.getCourseById);

// Update course
router.put('/:id', courseController.updateCourse);

// Delete course
router.delete('/:id', courseController.deleteCourse);

// Get all departments of a specific course
router.get('/:courseId/departments', courseController.getDepartmentsOfCourse);

// Get all employees assigned to a specific course
router.get('/:courseId/employees', courseController.getEmployeesOfCourse);

module.exports = router;
