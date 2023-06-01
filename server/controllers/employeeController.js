const employeeModel = require('../models/employeeModel');

// GET all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getAllEmployees };
