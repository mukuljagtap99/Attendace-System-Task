const { Attendance } = require('../models/attendance.js');
const {  Employee } = require('../models/employee.js');
const { Course } = require('../models/course.js');


// Create Attendance
exports.createAttendance = async (req, res) => {
  try {
    const { EmployeeId, CourseId, date } = req.body;
    const attendance = await Attendance.create({ EmployeeId, CourseId, date });
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findAll();
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Attendance by EmployeeId
exports.getAttendanceByEmployeeId = async (req, res) => {
  try {
    const attendance = await Attendance.findAll({ where: { EmployeeId: req.params.employeeId } });
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Attendance by CourseId
exports.getAttendanceByCourseId = async (req, res) => {
  try {
    const attendance = await Attendance.findAll({ where: { CourseId: req.params.courseId } });
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Attendance
exports.updateAttendance = async (req, res) => {
  try {
    const { EmployeeId, CourseId, date } = req.body;
    const attendance = await Attendance.findByPk(req.params.id);
    if (!attendance) throw new Error('Attendance not found');
    attendance.EmployeeId = EmployeeId;
    attendance.CourseId = CourseId;
    attendance.date = date;
    await attendance.save();
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Attendance
exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);
    if (!attendance) throw new Error('Attendance not found');
    await attendance.destroy();
    res.json({ message: 'Attendance deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get attendance for specific month of specific course
exports.getAttendanceByCourseAndMonth = async (req, res) => {
  try {
    const { courseId, month } = req.params;
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(new Date(startDate).setMonth(startDate.getMonth() + 1));

    const attendance = await Attendance.findAll({
      where: {
        CourseId: courseId,
        date: {
          [Op.gte]: startDate,
          [Op.lt]: endDate
        }
      },
      include: [{ model: Employee }]
    });

    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};