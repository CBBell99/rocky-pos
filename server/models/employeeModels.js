const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllEmployees = async () => { 
  return await prisma.employees.findMany()
}

module.exports = {getAllEmployees}