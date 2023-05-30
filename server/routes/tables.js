const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const router = express.Router();

router.use(express.json());

// GET all tables
router.get('/', async (req, res) => {
  try {
    const tables = await prisma.tables.findMany();
    res.status(200).json(tables);
  } catch (error) {
    console.error({ error: 'Error retrieving tables', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a table by id
router.get('/:id', async (req, res) => {
  const tableId = +req.params.id;
  try {
    const table = await prisma.tables.findUnique({
      where: {
        id: tableId,
      },
    });
    if (!table) {
      return res.status(404).json({ error: `Cannot find table` });
    }
    res.status(200).json(table);
  } catch (error) {
    console.error({ error: 'Error retrieving tables', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST create new table
router.post('/', async (req, res) => {
  try {
    const table = await prisma.tables.create();
    res.status(200).json(table);
  } catch (error) {
    console.error({ error: 'Error creating new table', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH existing table
router.patch('/:id', async (req, res) => {
  try {
    const tableId = +req.params.id;
    const updatedFields = req.body;

    const updatedTable = await prisma.table.update({
      where: { id: tableId },
      data: updatedFields,
    });

    if (!updatedTable) {
      return res.status(404).json({ error: 'Table not found' });
    }

    res.status(200).json(updatedTable);
  } catch (error) {
    console.error({ error: 'Error updating table', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tableId = +req.params.id;
    console.log(tableId);
    if (!tableId) {
      return res.status(404).json({ error: 'Table not found' });
    }
    await prisma.tables.delete({
      where: { id: tableId },
    });
    res.status(204).end()
  } catch (error) {
    console.error({ error: 'Error deleting table', error });
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
