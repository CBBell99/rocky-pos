const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllOrders = async () => {
  return await prisma.orders.findMany();
};

const createNewOrder = async data => {
  return await prisma.orders.create({ data });
};

const getOrderById = async id => {
  return await prisma.orders.findUnique({ where: { id } });
};

const updateOrdersById = async (id, data) => {
  return await prisma.orders.update({ where: { id }, data });
};

const deleteOrderById = async id => {
  return await prisma.orders.delete({ where: { id } });
};
module.exports = {
  getAllOrders,
  createNewOrder,
  getOrderById,
  updateOrdersById,
  deleteOrderById,
};
