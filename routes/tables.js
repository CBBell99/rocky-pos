const express = require('express');
const router = express.Router();
const tables = require('../controllers/tableControllers');

router.use(express.json());

router.get('/', tables.getAllTables);
router.get('/:id', tables.getTableById);
router.post('/', tables.createNewTable);
router.patch('/:id', tables.updateTableById);
router.delete('/:id', tables.deleteTableById);

module.exports = router;
