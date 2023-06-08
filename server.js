const { PrismaClient } = require('@prisma/client');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan('dev'));
app.use(cors());

const menuItemRoute = require("./routes/menuItems");
const employeeRoutes = require('./routes/employees')
const tablesRoutes = require('./routes/tables')
const ordersRoutes = require('./routes/orders')
const orderItemsRoutes = require('./routes/orderItems')

app.use('/api/menu', menuItemRoute);
app.use('/api/employees', employeeRoutes);
app.use('/api/tables', tablesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/orderItems', orderItemsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
