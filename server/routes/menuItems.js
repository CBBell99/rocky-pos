const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();

router.use(express.json());

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await prisma.menu_items.findMany();
    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Error retrieving menus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new menu item
router.post('/', async (req, res) => {
  try {
    const { itemName, description, price, category } = req.body;
    const menuItem = await prisma.menu_items.create({
      data: {
        itemName,
        description,
        price,
        category,
      },
    });
    res.status(201).json(menuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a menu item
router.get('/:id', async (req, res) => {
  try {
    const menuItemId = +req.params.id;
    const menuItem = await prisma.menu_items.findUnique({
      where: { id: menuItemId },
    });

    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json(menuItem);
  } catch (error) {
    console.error('Error retrieving menu item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH an individual menu item
router.patch('/:id', async (req, res) => {
  try {
    const menuItemId = +req.params.id;
    const updatedFields = req.body;

    const updatedMenuItem = await prisma.menu_items.update({
      where: { id: menuItemId },
      data: updatedFields,
    });

    res.status(200).json(updatedMenuItem);
  } catch (error) {
    console.error('Error updating menu item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Delete a menu item
router.delete('/:id', async (req, res) => {
  try {
    const menuItemId = +req.params.id;

    if (!menuItemId) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    await prisma.menu_items.delete({
      where: { id: menuItemId },
    });

    res.status(204).end()
  } catch (error) {
    console.error('Error deleting menu item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
