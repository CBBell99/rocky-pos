const express = require('express');
const orderController = require('../controllers/orderItemController');

const router = express.Router();

// Define your routes here
router.post('/:id/order-items', orderController.addOrderItem);
router.put('/:orderId/order-items/:itemId', orderController.updateOrderItem);
router.delete('/:orderId/order-items/:itemId', orderController.deleteOrderItem);

module.exports = router;
