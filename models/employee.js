'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsToMany(models.Department, {
        through: 'DepartmentEmployees'
      });
      Employee.belongsToMany(models.Course, {
        through: 'EmployeeCourses'
      });
      Employee.hasMany(models.Attendance);
    }
  }
  Employee.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};