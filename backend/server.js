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
  const newsKey = process.env.NEWS_API_KEY;
  const newsConfigured = newsKey && newsKey !== 'your_newsapi_key_here';
  console.log(`[config] NEWS_API_KEY: ${newsConfigured ? 'configured — live news enabled' : 'not set — using mock news'}`);
});

module.exports = app;
