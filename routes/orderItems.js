const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();

router.use(express.json());

// POST a new item to existing order
router.post('/:id/order-items', async (req, res) => {
  const orderId = +req.params.id;
  const newOrderItem = req.body;

  if (!newOrderItem || typeof newOrderItem !== 'object') {
    res.status(400).json({ error: 'Invalid request body' });
    return;
  }

  if (!orderId) {
    res.status(400).json({ error: 'Invalid order ID' });
    return;
  }

  try {
    const createdItem = await prisma.order_items.create({
      data: { ...newOrderItem, orderId: orderId },
    });
    res.status(201).json(createdItem);
  } catch (error) {
    console.error('Error adding order item to order', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update item quantity
router.put('/:orderId/order-items/:itemId', async (req, res) => {
  const orderId = +req.params.orderId;
  const itemId = +req.params.itemId;

  try {
    const updatedFields = req.body;

    if (!orderId || !itemId) {
      res.status(400).json({ error: 'Invalid order ID or item ID' });
      return;
    }

    const updatedOrderItem = await prisma.order_items.update({
      where: {
        id: itemId,
        orderId: orderId,
      },
      data: updatedFields,
    });

    res.status(200).json(updatedOrderItem);
  } catch (error) {
    console.error('Error updating order item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE item from order
router.delete('/:orderId/order-items/:itemId', async (req, res) => {
  const orderId = +req.params.orderId
  const itemId = +req.params.itemId

  if (!orderId) {
    res.status(404).json({ error: "Order does not exist" })
    return
  }
  try {
    await prisma.order_items.delete({
      where: {
        id: itemId
      }
    })
  } catch (error) {
    console.error('Error deleting order item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
 })

module.exports = router;
