const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();

router.use(express.json());

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await prisma.employees.findMany();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error retrieving employees', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST an employee
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, role, passcode } = req.body;
    const employee = await prisma.employees.create({
      data: {
        firstName,
        lastName,
        role,
        passcode,
      },
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error({ message: 'Error creating employee', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET an employee
router.get('/:id', async (req, res) => {
  try {
    const employeeId = +req.params.id;
    const employee = await prisma.employees.findUnique({
      where: { id: employeeId },
    });
    res.status(200).json(employee);
  } catch (error) {
    const employeeId = req.params.id;

    console.error({
      error: `Error retrieving employee with id: ${employeeId}`,
      error,
    });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Patch existing employee
router.patch('/:id', async (req, res) => {
  try {
    const employeeId = +req.params.id;
    const updatedFields = req.body;
    const employee = await prisma.employees.findUnique({
      where: { id: employeeId },
    });

    if (!employee) {
      res
        .status(404)
        .json({ message: `Employee not with id: ${employeeId} not found` });
    }

    const updatedEmployee = await prisma.employees.update({
      where: { id: employeeId },
      data: updatedFields,
    });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error({ error: 'Error updating employee', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const employeeId = +req.params.id;
    const employee = await prisma.employees.findUnique({
      where: { id: employeeId },
    });

    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
    }

    await prisma.employees.delete({
      where: { id: employeeId },
    });
    return res.status(204).end()
  } catch (error) {
    console.error({ error: 'Error deleting employee' });
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
