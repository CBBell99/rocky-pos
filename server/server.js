// require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || 5005;
const express = require('express');
const prisma = new PrismaClient();
// const dbParams = require('./lib/db');

const app = express();

app.get('/menus', async (req, res) => {
  const menus = await prisma.menu_categories.findMany();
  res.json(menus);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
