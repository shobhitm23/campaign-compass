const express = require('express');
const router = express.Router();
const { fetchNews } = require('../services/newsService');
const { subsectorMap } = require('../data/sectors');
const { DEFAULT_NEWS_DAYS } = require('../config/constants');

// GET /api/news?subsector=software-saas&days=7
router.get('/', async (req, res) => {
  const { subsector, days } = req.query;
  if (!subsector) {
    return res.status(400).json({ error: 'subsector query parameter required' });
  }

  const sub = subsectorMap[subsector];
  if (!sub) {
    return res.status(404).json({ error: 'Subsector not found' });
  }

  const numDays = parseInt(days, 10) || DEFAULT_NEWS_DAYS;

  try {
    const articles = await fetchNews(subsector, sub.newsQuery, numDays);
    res.json(articles);
  } catch (err) {
    console.error('[news] Error:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
