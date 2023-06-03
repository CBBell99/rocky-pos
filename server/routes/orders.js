const express = require('express');
const router = express.Router();
const orders = require('../models/orderModels');

router.use(express.json());

router.get('/', orders.getAllOrders);
router.get('/:id', orders.getOrderById);
router.post('/', orders.createNewOrder);
router.patch('/:id', orders.updateOrdersById);
router.delete('/:id', orders.deleteOrderById);