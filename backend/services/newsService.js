const axios = require('axios');
const { newsCache } = require('../cache/cacheManager');
const { getMockNews } = require('../mock/newsMock');
const { NEWS_API_BASE, DEFAULT_NEWS_DAYS } = require('../config/constants');

function normalize(article, i) {
  return {
    id: `live-${i}-${Date.now()}`,
    title: article.title,
    description: article.description || '',
    source: article.source?.name || 'Unknown',
    url: article.url,
    publishedAt: article.publishedAt,
    isMock: false,
  };
}

async function fetchNews(subsectorId, newsQuery, days = DEFAULT_NEWS_DAYS) {
  const cacheKey = `${subsectorId}:${days}`;
  const cached = newsCache.get(cacheKey);
  if (cached) return cached;

  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey || apiKey === 'your_newsapi_key_here') {
    const mock = getMockNews(subsectorId, days);
    return mock;
  }

  try {
    const from = new Date();
    from.setDate(from.getDate() - days);

    const response = await axios.get(`${NEWS_API_BASE}/everything`, {
      params: {
        q: newsQuery,
        from: from.toISOString().split('T')[0],
        sortBy: 'publishedAt',
        pageSize: 10,
        language: 'en',
        apiKey,
      },
      timeout: 5000,
    });

    const articles = (response.data.articles || [])
      .filter(a => a.title && a.title !== '[Removed]')
      .map(normalize);

    newsCache.set(cacheKey, articles);
    return articles;
  } catch (err) {
    console.warn('[newsService] NewsAPI error, using mock:', err.message);
    return getMockNews(subsectorId, days);
  }
}

module.exports = { fetchNews };
