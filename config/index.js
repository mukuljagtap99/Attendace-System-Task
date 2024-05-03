// index.js

const express = require('express');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const sequelize = require('./config/database');

// Initialize Express
const app = express();

// Parse application/json
app.use(bodyParser.json());

// Routes
app.use(courseRoutes);
app.use(departmentRoutes);
app.use(employeeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sync database
sequelize
  .sync()
  .then(() => console.log('Database & tables created!'))
  .catch(error => console.error('Error connecting to database: ', error));
