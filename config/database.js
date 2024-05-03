
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root', 
  password: 'root',
  database: "attendancesystem"
});

module.exports = sequelize;
