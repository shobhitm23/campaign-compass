const express = require('express');
const router = express.Router();
const { subsectorMap } = require('../data/sectors');

// GET /api/subsectors/:subsectorId
router.get('/:subsectorId', (req, res) => {
  const sub = subsectorMap[req.params.subsectorId];
  if (!sub) return res.status(404).json({ error: 'Subsector not found' });
  res.json(sub);
});

module.exports = router;
