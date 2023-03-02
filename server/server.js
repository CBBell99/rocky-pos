require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5005;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
