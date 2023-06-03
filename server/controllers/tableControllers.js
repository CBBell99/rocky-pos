const menuItems = require('../models/menuItemsModels');

const getAllTables = async (req, res) => {
  try {
    const items = await menuItems.getAllMenuItems();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error retrieving menus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await menuItems.getTableById(+id);
    res.status(200).json(item);
  } catch (error) {
    console.error('Error retrieving menu item', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createNewTable = async (req, res) => {
  try {
    const { itemName, description, price, category } = req.body;
    const menuItem = await menuItems.createNewTable({
      itemName,
      description,
      price,
      category,
    });
    res.status(201).json(menuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, description, price, category } = req.body;
    const updatedMenuItem = await menuItems.updateTableById(+id, {
      itemName,
      description,
      price,
      category,
    });
    res.status(200).json(updatedMenuItem);
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenuItem = await menuItems.deleteTableById(+id);
    res.status(200).json(deletedMenuItem);
  } catch (error) {
    console.error('Error deleting menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTables,
  getTableById,
  createNewTable,
  updateTableById,
  deleteTableById,
};
