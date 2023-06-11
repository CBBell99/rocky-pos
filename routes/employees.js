const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.use(express.json());

router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createNewEmployee);
router.post('/admin/login', employeeController.adminLogin)
router.post('/login', employeeController.employeeLogin)
router.get('/:id', employeeController.getEmployeeById);
router.patch('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;
