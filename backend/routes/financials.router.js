const express = require('express');
const router = express.Router();
const { fetchFinancials } = require('../services/financialsService');
const { MAX_TICKERS_PER_REQUEST } = require('../config/constants');

// GET /api/financials?tickers=MSFT,AAPL
router.get('/', async (req, res) => {
  const { tickers: tickersParam } = req.query;
  if (!tickersParam) {
    return res.status(400).json({ error: 'tickers query parameter required' });
  }

  const tickers = tickersParam
    .split(',')
    .map(t => t.trim().toUpperCase())
    .filter(Boolean)
    .slice(0, MAX_TICKERS_PER_REQUEST);

  if (tickers.length === 0) {
    return res.status(400).json({ error: 'No valid tickers provided' });
  }

  try {
    const data = await fetchFinancials(tickers);
    res.json(data);
  } catch (err) {
    console.error('[financials] Error:', err);
    res.status(500).json({ error: 'Failed to fetch financials' });
  }
});

module.exports = router;
