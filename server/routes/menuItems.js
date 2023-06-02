const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();
const menuItems = require('../controllers/menuItemController')

router.use(express.json());

// // GET all menu items
// router.get('/', async (req, res) => {
//   try {
//     const menuItems = await prisma.menu_items.findMany();
//     res.status(200).json(menuItems);
//   } catch (error) {
//     console.error('Error retrieving menus:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

router.get('/', menuItems.getAllMenuItems);
router.post('/', menuItems.createMenuItem);
router.get('/:id', menuItems.getMenuItemById);
router.patch('/:id', menuItems.updateMenuItemById);
router.delete('/:id', menuItems.deleteMenuItemById);



module.exports = router;
