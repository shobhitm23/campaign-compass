module.exports = {
  PORT: process.env.PORT || 3001,
  STOCK_CACHE_TTL: 6 * 60 * 60,   // 6 hours in seconds
  NEWS_CACHE_TTL: 1 * 60 * 60,    // 1 hour in seconds
  NEWS_API_BASE: 'https://newsapi.org/v2',
  DEFAULT_NEWS_DAYS: 7,
  MAX_TICKERS_PER_REQUEST: 20,
};
