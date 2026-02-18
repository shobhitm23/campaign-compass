require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/constants');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Capital Compass API running on port ${PORT}`);
});

module.exports = app;
