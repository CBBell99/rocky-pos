const express = require('express');
const router = express.Router();
const menuItems = require('../controllers/menuItemController')

router.get('/', menuItems.getAllMenuItems);
router.post('/', menuItems.createMenuItem);
router.get('/:id', menuItems.getMenuItemById);
router.patch('/:id', menuItems.updateMenuItemById);
router.delete('/:id', menuItems.deleteMenuItemById);

module.exports = router;
