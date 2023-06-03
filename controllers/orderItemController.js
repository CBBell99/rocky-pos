const orderModel = require('../models/orderItemModels');

async function addOrderItem(req, res) {
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
    const createdItem = await orderModel.createOrderItem(orderId, newOrderItem);
    res.status(201).json(createdItem);
  } catch (error) {
    console.error('Error adding order item to order', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateOrderItem(req, res) {
  const orderId = +req.params.orderId;
  const itemId = +req.params.itemId;

  try {
    const updatedFields = req.body;

    if (!orderId || !itemId) {
      res.status(400).json({ error: 'Invalid order ID or item ID' });
      return;
    }

    const updatedOrderItem = await orderModel.updateOrderItem(
      orderId,
      itemId,
      updatedFields,
    );

    res.status(200).json(updatedOrderItem);
  } catch (error) {
    console.error('Error updating order item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteOrderItem(req, res) {
  const orderId = +req.params.orderId;
  const itemId = +req.params.itemId;

  if (!orderId) {
    res.status(404).json({ error: 'Order does not exist' });
    return;
  }

  try {
    await orderModel.deleteOrderItem(orderId, itemId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error deleting order item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
