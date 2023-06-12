const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllMenuItems = async () => {
  return await prisma.menu_items.findMany();
};

const createMenuItem = async data => {
  return await prisma.menu_items.create({ data });
};

const getMenuItemById = async id => {
  return await prisma.menu_items.findUnique({ where: { id } });
};

const updateMenuItemById = async (id, data) => {
  return await prisma.menu_items.update({ where: { id }, data });
};

const getMenuItemsByCategory = async category => {
   const menuItems = await prisma.menu_items.findMany({
    where: { category }});
  return menuItems
}

const deleteMenuItemById = async id => {
  return await prisma.menu_items.delete({ where: { id } });
};


module.exports = {
  getAllMenuItems,
  createMenuItem,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById,
getMenuItemsByCategory
};
