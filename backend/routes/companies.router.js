const express = require('express');
const router = express.Router();
const { fetchStocks } = require('../services/stockService');

// GET /api/companies?tickers=MSFT,AAPL
router.get('/', async (req, res) => {
  const { tickers: tickersParam } = req.query;
  if (!tickersParam) {
    return res.status(400).json({ error: 'tickers query parameter required' });
  }

  const tickers = tickersParam.split(',').map(t => t.trim().toUpperCase()).filter(Boolean);
  if (tickers.length === 0) {
    return res.status(400).json({ error: 'No valid tickers provided' });
  }

  try {
    const data = await fetchStocks(tickers);
    res.json(data);
  } catch (err) {
    console.error('[companies] Error:', err);
    res.status(500).json({ error: 'Failed to fetch company data' });
  }
});

module.exports = router;
