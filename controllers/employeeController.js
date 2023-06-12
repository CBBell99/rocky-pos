const employees = require('../models/employeeModels');

// POST log in admin/restaurant
const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await employees.findAdminByEmail(email);
    if (!admin) {
      res.status(404).json({ message: 'User email not found' });
    } else if (admin.password !== password) {
      res.status(400).json({ message: 'Password does not match email' });
    } else {
      res.status(200).json({ message: 'Admin successfully logged in' });
    }
  } catch (error) {
    console.error('Error logging in as admin', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST search employees by name
const searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;
    const searchResults = await employees.searchEmployees(query);
    res.status(200).json(searchResults);
  } catch (error) {}
};

// POST log in employee
const employeeLogin = async (req, res) => {
  try {
    const { pin } = req.body;
    const employee = await employees.findEmployeeByPIN(pin);
    if (!employee) {
      res.status(404).json({ message: 'Employee does not exist' });
    }
    if (pin === employee.pin) {
      res.status(200).json({ message: 'Employee login sucessfull', employee });
    }
  } catch (error) {
    console.log('Error logging employee in ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employees.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new employee
const createNewEmployee = async (req, res) => {
  try {
    const { firstName, lastName, role, passcode } = req.body;
    const employeeData = {
      firstName,
      lastName,
      role,
      passcode,
    };
    const employee = await employees.createEmployee(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    console.error('Error creating employee', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// get employee by id
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employees.getEmployeeById(+id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    console.error('Error retrieving employee', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// patch employee by id
const updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, role, pin, email, password } = req.body || {};
    const updateData = {};

    if (firstName) {
      updateData.firstName = firstName;
    }
    if (lastName) {
      updateData.lastName = lastName;
    }
    if (role) {
      updateData.role = role;
    }
    if (pin) {
      updateData.pin = pin;
    }
    if (email) {
      updateData.email = email;
    }
    if (password) {
      updateData.password = password;
    }

    const updatedEmployee = await employees.updateEmployeeById(+id, {
      updateData,
    });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error({ error: 'Error updating employee', error });
    res.status(500).json({ error: 'Internal server error' });
  }
};

// delete employee by id
const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    await employees.deleteEmployeeById(+id);
    res.status(200).end();
  } catch (error) {
    console.error('Error deleting employee', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  adminLogin,
  getAllEmployees,
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  employeeLogin,
  searchEmployees,
};
