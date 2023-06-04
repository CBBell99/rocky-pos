const express = require('express');
const router = express.Router();
const orders = require('../controllers/orderControllers');

router.use(express.json());

router.get('/', orders.getAllOrders);
router.get('/:id', orders.getOrderById);
router.post('/', orders.createNewOrder);
router.patch('/:id', orders.updateOrderById);
router.delete('/:id', orders.deleteOrderById);

module.exports = router;