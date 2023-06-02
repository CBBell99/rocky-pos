const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllEmployees = async () => {
  return await prisma.employees.findMany();
};

const createEmployee = async data => {
  return await prisma.employees.create({ data });
};

const getEmployeeById = async id => {
  return await prisma.employees.findUnique({ where: { id } });
};

const updateEmployeeById = async (id, data) => {
  return await prisma.employees.update({ where: { id }, data });
};

const deleteEmployeeById = async id => {
  return await prisma.employees.delete({ where: { id } });
};
module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById
};
