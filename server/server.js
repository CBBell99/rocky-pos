const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan('dev'));

const menuItemRoute = require('../server/routes/menuItems');

app.use('/menu', menuItemRoute);

app.get('/employees', async (req, res) => {
  try {
    const employees = await prisma.employees.findMany();
    res.json(employees);
  } catch (error) {
    console.error('Error retrieving employess', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
