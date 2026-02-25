const express = require('express');
const router = express.Router();

const sectorsRouter = require('./sectors.router');
const subsectorsRouter = require('./subsectors.router');
const companiesRouter = require('./companies.router');
const newsRouter = require('./news.router');
const financialsRouter = require('./financials.router');
const learnRouter = require('./learn.router');

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/sectors', sectorsRouter);
router.use('/subsectors', subsectorsRouter);
router.use('/companies', companiesRouter);
router.use('/news', newsRouter);
router.use('/financials', financialsRouter);
router.use('/learn', learnRouter);

module.exports = router;
