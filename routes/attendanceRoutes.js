const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController.js');

// Create a new attendance
router.post('/', attendanceController.createAttendance);

// Get all attendance
router.get('/', attendanceController.getAllAttendance);

// Get attendance by EmployeeId
router.get('/employee/:employeeId', attendanceController.getAttendanceByEmployeeId);

// Get attendance by CourseId
router.get('/course/:courseId', attendanceController.getAttendanceByCourseId);

// Update attendance
router.put('/:id', attendanceController.updateAttendance);

// Delete attendance
router.delete('/:id', attendanceController.deleteAttendance);

// Get attendance for specific month of specific course
router.get('/course/:courseId/month/:month', attendanceController.getAttendanceByCourseAndMonth);


module.exports = router;
