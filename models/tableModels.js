const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllTables = async () => {
  return await prisma.tables.findMany();
};

const getAvailableTables = async () => { 
  return await prisma.tables.findMany({ where: { status: 'available' } });
}

const createNewTable = async data => {
  return await prisma.tables.create({ data });
};

const getTableById = async id => {
  return await prisma.tables.findUnique({ where: { id } });
};

const updateTableById = async (id, data) => {
  return await prisma.tables.update({ where: { id }, data });
};

const deleteTableById = async id => {
  return await prisma.tables.delete({ where: { id } });
};
module.exports = {
  getAllTables,
  createNewTable,
  getTableById,
  updateTableById,
  deleteTableById,
};
