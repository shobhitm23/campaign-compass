const express = require('express');
const router = express.Router();
const { sectors, sectorMap } = require('../data/sectors');

// GET /api/sectors — all sectors with subsector ids+names
router.get('/', (req, res) => {
  const result = sectors.map(sector => ({
    id: sector.id,
    name: sector.name,
    icon: sector.icon,
    description: sector.description,
    subsectors: sector.subsectors.map(s => ({ id: s.id, name: s.name })),
  }));
  res.json(result);
});

// GET /api/sectors/:sectorId
router.get('/:sectorId', (req, res) => {
  const sector = sectorMap[req.params.sectorId];
  if (!sector) return res.status(404).json({ error: 'Sector not found' });

  const result = {
    id: sector.id,
    name: sector.name,
    icon: sector.icon,
    description: sector.description,
    subsectors: sector.subsectors.map(s => ({ id: s.id, name: s.name })),
  };
  res.json(result);
});

module.exports = router;
