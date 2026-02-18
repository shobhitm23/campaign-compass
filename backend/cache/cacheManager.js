const NodeCache = require('node-cache');
const { STOCK_CACHE_TTL, NEWS_CACHE_TTL } = require('../config/constants');

const stockCache = new NodeCache({ stdTTL: STOCK_CACHE_TTL, checkperiod: 600 });
const newsCache = new NodeCache({ stdTTL: NEWS_CACHE_TTL, checkperiod: 120 });

module.exports = { stockCache, newsCache };
