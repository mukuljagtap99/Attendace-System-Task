'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartmentEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DepartmentEmployee.init({
    DepartmentId: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DepartmentEmployee',
  });
  return DepartmentEmployee;
};