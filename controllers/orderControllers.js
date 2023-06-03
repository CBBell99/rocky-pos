const orders = require('../models/orderModels');

const getAllOrders = async (req, res) => {
  try {
    const orders = await orders.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orders.getOrderById(+id);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error retrieving order', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createNewOrder = async (req, res) => {
  try {
    const { itemName, description, price, category } = req.body;
    const order = await orders.createNewOrder({
      itemName,
      description,
      price,
      category,
    });
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
  }
};

const updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, description, price, category } = req.body;
    const updatedOrder = await orders.updateOrderById(+id, {
      itemName,
      description,
      price,
      category,
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating  order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenuItem = await orders.deleteOrderById(+id);
    res.status(200).json(deletedMenuItem);
  } catch (error) {
    console.error('Error deleting table:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createNewOrder,
  updateOrderById,
  deleteOrderById,
};
