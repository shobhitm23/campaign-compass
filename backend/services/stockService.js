const { stockCache } = require('../cache/cacheManager');
const { getMockStocks } = require('../mock/stockMock');
const { MAX_TICKERS_PER_REQUEST } = require('../config/constants');

let _yahooFinance = null;
async function getYahooFinance() {
  if (!_yahooFinance) {
    const mod = await import('yahoo-finance2');
    _yahooFinance = mod.default;
  }
  return _yahooFinance;
}

function normalize(quote) {
  return {
    ticker: quote.symbol,
    name: quote.longName || quote.shortName || quote.symbol,
    price: quote.regularMarketPrice ?? null,
    change: quote.regularMarketChange ?? null,
    changePct: quote.regularMarketChangePercent ?? null,
    marketCap: quote.marketCap ?? null,
    peRatio: quote.trailingPE ?? null,
    week52High: quote.fiftyTwoWeekHigh ?? null,
    week52Low: quote.fiftyTwoWeekLow ?? null,
    isMock: false,
  };
}

async function fetchStocks(tickers) {
  if (!tickers || tickers.length === 0) return [];

  // Enforce max
  const batch = tickers.slice(0, MAX_TICKERS_PER_REQUEST);

  // Split into cached vs uncached
  const results = {};
  const uncached = [];

  for (const ticker of batch) {
    const cached = stockCache.get(ticker);
    if (cached) {
      results[ticker] = cached;
    } else {
      uncached.push(ticker);
    }
  }

  if (uncached.length > 0) {
    try {
      const yahooFinance = await getYahooFinance();
      const quotes = await Promise.all(
        uncached.map(ticker =>
          yahooFinance.quote(ticker, {}, { validateResult: false }).catch(() => null)
        )
      );

      uncached.forEach((ticker, i) => {
        const quote = quotes[i];
        if (quote && quote.regularMarketPrice) {
          const normalized = normalize(quote);
          stockCache.set(ticker, normalized);
          results[ticker] = normalized;
        } else {
          // fallback to mock for this ticker
          const mock = getMockStocks([ticker])[0];
          results[ticker] = mock;
        }
      });
    } catch (err) {
      console.warn('[stockService] Yahoo Finance error, using mock:', err.message);
      const mocks = getMockStocks(uncached);
      mocks.forEach(m => { results[m.ticker] = m; });
    }
  }

  return batch.map(ticker => results[ticker] || getMockStocks([ticker])[0]);
}

module.exports = { fetchStocks };
