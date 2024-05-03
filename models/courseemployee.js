'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseEmployee.init({
    CourseId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseEmployee',
  });
  return CourseEmployee;
};