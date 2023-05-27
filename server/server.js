import { PrismaClient } from '@prisma/client';
import express from 'express';
const PORT = process.env.PORT || 8000;
const prisma = new PrismaClient();

const app = express();

app.get('/menus', async (req, res) => {
  const menus = await prisma.menu_categories.findMany();
  res.json(menus);
});

app.get('/employees', async (req, res) => {
  const employees = await prisma.employees.findMany();
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
