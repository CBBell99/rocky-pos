const { PrismaClient } = require('@prisma/client');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan('dev'));

const menuItemRoute = require('../server/routes/menuItems');
const employeeRoutes = require('../server/routes/employees')
const tablesRoutes = require('../server/routes/tables')
const ordersRoutes = require('../server/routes/orders')
const orderItemsRoutes = require('../server/routes/orderItems')

app.use('/api/menu', menuItemRoute);
app.use('/api/employees', employeeRoutes);
app.use('/api/tables', tablesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/orders', orderItemsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
