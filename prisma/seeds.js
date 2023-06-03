const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Delete all existing data
    await prisma.order_items.deleteMany();
    await prisma.orders.deleteMany();
    await prisma.menu_items.deleteMany();
    await prisma.employees.deleteMany();
    await prisma.tables.deleteMany();

    const employees = await prisma.employees.createMany({
      data: [
        { firstName: 'John', lastName: 'Doe', role: 'HOST' },
        { firstName: 'Jane', lastName: 'Smith', role: 'KITCHEN' },
        { firstName: 'Admin', lastName: 'User', role: 'ADMIN' },
        { firstName: 'Michael', lastName: 'Johnson', role: 'HOST' },
      ],
    });

    const menuItems = await prisma.menu_items.createMany({
      data: [
        {
          itemName: 'Pancakes',
          description: 'Fluffy pancakes with syrup',
          price: 8,
          category: 'BREAKFAST',
        },
        {
          itemName: 'Burger',
          description: 'Juicy beef burger with fries',
          price: 12,
          category: 'LUNCH',
        },
        {
          itemName: 'Cheesecake',
          description: 'Creamy cheesecake with strawberry topping',
          price: 6,
          category: 'DESSERT',
        },
      ],
    });

    const tables = await prisma.tables.createMany({
      data: [{ available: true }, { available: false }, { available: true }],
    });

    const orders = await prisma.orders.createMany({
      data: [
        {
          employeeId: 1,
          tableId: 1,
          guestCount: 2,
          createdAt: new Date('2023-05-01T10:00:00Z'),
        },
        {
          employeeId: 1,
          tableId: 3,
          guestCount: 4,
          createdAt: new Date('2023-05-01T12:30:00Z'),
        },
        {
          employeeId: 4,
          tableId: 2,
          guestCount: 3,
          createdAt: new Date('2023-05-02T09:15:00Z'),
        },
        {
          employeeId: 1,
          tableId: 1,
          guestCount: 2,
          createdAt: new Date('2023-05-03T11:45:00Z'),
        },
        {
          employeeId: 4,
          tableId: 3,
          guestCount: 5,
          createdAt: new Date('2023-05-03T18:30:00Z'),
        },
      ],
    });

    const orderItems = await prisma.order_items.createMany({
      data: [
        { orderId: 1, menuItemId: 1 },
        { orderId: 1, menuItemId: 2 },
        { orderId: 2, menuItemId: 2 },
        { orderId: 2, menuItemId: 3 },
        { orderId: 3, menuItemId: 1 },
        { orderId: 3, menuItemId: 3 },
        { orderId: 4, menuItemId: 1 },
        { orderId: 4, menuItemId: 2 },
        { orderId: 5, menuItemId: 2 },
        { orderId: 5, menuItemId: 3 },
      ],
    });

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed()
  .catch(e => {
    console.error(e.message, e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
