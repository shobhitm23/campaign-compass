const Parser = require('rss-parser');
const { tickerNewsCache } = require('../cache/cacheManager');
const { YAHOO_RSS_BASE } = require('../config/constants');

const parser = new Parser({ timeout: 8000 });

async function fetchTickerNews(ticker) {
  const upperTicker = ticker.toUpperCase();
  const cacheKey = `ticker-news:${upperTicker}`;

  const cached = tickerNewsCache.get(cacheKey);
  if (cached) return cached;

  try {
    const url = `${YAHOO_RSS_BASE}?s=${encodeURIComponent(upperTicker)}&region=US&lang=en-US`;
    const feed = await parser.parseURL(url);

    const articles = (feed.items || []).slice(0, 10).map((item, i) => ({
      id: `ticker-${upperTicker}-${i}`,
      title: item.title || '',
      description: item.contentSnippet || item.content || '',
      source: 'Yahoo Finance',
      url: item.link || '',
      publishedAt: item.pubDate || null,
      isMock: false,
    }));

    tickerNewsCache.set(cacheKey, articles);
    return articles;
  } catch (err) {
    console.warn(`[tickerNewsService] RSS fetch failed for ${upperTicker}:`, err.message);
    return [];
  }
}

module.exports = { fetchTickerNews };
