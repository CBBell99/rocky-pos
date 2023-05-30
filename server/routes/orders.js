const { PrismaClient } = require('@prisma/client');
const express = require('express');
const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await prisma.orders.findMany();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error retrieving orders', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET order by id
router.get('/:id', async (req, res) => {
  try {
    const orderId = +req.params.id;
    const order = await prisma.orders.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error({ error: 'Error retreiving order', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new order.  How does it feel?
router.post('/', async (req, res) => {
  try {
    const { employeeId, tableId, guestCount } = req.body;
    const order = await prisma.orders.create({
      data: { employeeId, tableId, guestCount },
    });
    res.status(200).json(order);
  } catch (error) {
    console.error({ error: 'Error creating new order', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH existing order
router.patch('/:id', async (req, res) => {
  try {
    const orderId = +req.params.id;
    const updatedFields = req.body;

    if (!orderId) {
      res.status(404).json({ error: 'Order not found' });
    }

    const updatedOrder = await prisma.orders.update({
      where: { id: orderId },
      data: updatedFields,
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error({ error: 'Error updating order', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE existing order
router.delete('/:id', async (req, res) => {
  try {
    const orderId = +req.params.id;

    if (!orderId) {
      res.status(404).json({ error: 'Order not found' });
    }

    await prisma.orders.delete({
      where: { id: orderId },
    });
    return res.status(204).end();
  } catch (error) {
    console.error({ error: 'Error deleting order' });
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
