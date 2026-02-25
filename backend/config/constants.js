module.exports = {
  PORT: process.env.PORT || 3001,
  STOCK_CACHE_TTL: 6 * 60 * 60,        // 6 hours in seconds
  NEWS_CACHE_TTL: 1 * 60 * 60,         // 1 hour in seconds
  FINANCIALS_CACHE_TTL: 24 * 60 * 60,  // 24 hours in seconds
  TICKER_NEWS_CACHE_TTL: 2 * 60 * 60,  // 2 hours in seconds
  NEWS_API_BASE: 'https://newsapi.org/v2',
  YAHOO_RSS_BASE: 'https://feeds.finance.yahoo.com/rss/2.0/headline',
  DEFAULT_NEWS_DAYS: 7,
  MAX_TICKERS_PER_REQUEST: 20,
};
