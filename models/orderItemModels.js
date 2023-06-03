const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createOrderItem(orderId, newItem) {
  try {
    const createdItem = await prisma.order_items.create({
      data: { ...newItem, orderId: orderId },
    });
    return createdItem;
  } catch (error) {
    console.error('Error adding order item to order', error);
    throw error;
  }
}

async function updateOrderItem(orderId, itemId, updatedFields) {
  try {
    const updatedOrderItem = await prisma.order_items.update({
      where: {
        id: itemId,
        orderId: orderId,
      },
      data: updatedFields,
    });
    return updatedOrderItem;
  } catch (error) {
    console.error('Error updating order item', error);
    throw error;
  }
}

async function deleteOrderItem(orderId, itemId) {
  try {
    await prisma.order_items.delete({
      where: {
        id: itemId,
      },
    });
  } catch (error) {
    console.error('Error deleting order item', error);
    throw error;
  }
}

module.exports = {
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
