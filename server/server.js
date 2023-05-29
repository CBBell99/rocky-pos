const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan('dev'));

const menuItemRoute = require('../server/routes/menuItems');

app.use('/api/menu', menuItemRoute);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
