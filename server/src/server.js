require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');

const app = express();
const PORT = process.env.PORT || 5005;

const pool = new Pool(dbParams);
pool
  .connect()
  .then(() => console.log('Connected to Client'))
  .catch(error => console.error('Error connecting to database', error));

app.get('/menus', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
