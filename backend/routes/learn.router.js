const express = require('express');
const router = express.Router();
const { sectorLearningMap } = require('../data/sectorLearning');

router.get('/:sectorId', (req, res) => {
  const entry = sectorLearningMap[req.params.sectorId];
  if (!entry) return res.status(404).json({ error: 'Sector not found' });
  res.json({ sectorId: entry.sectorId, sectorName: entry.sectorName, cards: entry.cards });
});

module.exports = router;
