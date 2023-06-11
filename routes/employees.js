const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.use(express.json());

router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createNewEmployee);
router.post('/login', employeeController.adminLogin)
router.get('/:id', employeeController.getEmployeeById);
router.patch('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;
