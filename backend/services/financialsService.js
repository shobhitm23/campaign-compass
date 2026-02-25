const { financialsCache } = require('../cache/cacheManager');

let _yahooFinance = null;
async function getYahooFinance() {
  if (!_yahooFinance) {
    const mod = await import('yahoo-finance2');
    _yahooFinance = mod.default;
  }
  return _yahooFinance;
}

function rawVal(v) {
  if (v == null) return null;
  if (typeof v === 'object' && 'raw' in v) return v.raw;
  return v;
}

function nullSkeleton(ticker) {
  return {
    ticker,
    totalRevenue: null,
    grossMargins: null,
    operatingMargins: null,
    profitMargins: null,
    revenueGrowth: null,
    earningsGrowth: null,
    returnOnEquity: null,
    debtToEquity: null,
    ebitda: null,
    forwardPE: null,
    priceToBook: null,
    beta: null,
  };
}

function normalize(ticker, result) {
  const fd = result.financialData || {};
  const ks = result.defaultKeyStatistics || {};
  return {
    ticker,
    totalRevenue:     rawVal(fd.totalRevenue),
    grossMargins:     rawVal(fd.grossMargins),
    operatingMargins: rawVal(fd.operatingMargins),
    profitMargins:    rawVal(fd.profitMargins),
    revenueGrowth:    rawVal(fd.revenueGrowth),
    earningsGrowth:   rawVal(fd.earningsGrowth),
    returnOnEquity:   rawVal(fd.returnOnEquity),
    debtToEquity:     rawVal(fd.debtToEquity),
    ebitda:           rawVal(fd.ebitda),
    forwardPE:        rawVal(ks.forwardPE),
    priceToBook:      rawVal(ks.priceToBook),
    beta:             rawVal(ks.beta),
  };
}

async function fetchFinancials(tickers) {
  if (!tickers || tickers.length === 0) return [];

  const results = {};
  const uncached = [];

  for (const ticker of tickers) {
    const cached = financialsCache.get(ticker);
    if (cached) {
      results[ticker] = cached;
    } else {
      uncached.push(ticker);
    }
  }

  if (uncached.length > 0) {
    const yahooFinance = await getYahooFinance();
    const fetched = await Promise.all(
      uncached.map(async ticker => {
        try {
          const result = await yahooFinance.quoteSummary(
            ticker,
            { modules: ['financialData', 'defaultKeyStatistics'] },
            { validateResult: false }
          );
          return { ticker, result };
        } catch (err) {
          console.warn(`[financialsService] quoteSummary failed for ${ticker}:`, err.message);
          console.log(`[financialsService] Full error for ${ticker}:`, err);
          return { ticker, result: null };
        }
      })
    );

    for (const { ticker, result } of fetched) {
      const normalized = result ? normalize(ticker, result) : nullSkeleton(ticker);
      financialsCache.set(ticker, normalized);
      results[ticker] = normalized;
    }
  }

  return tickers.map(ticker => results[ticker] || nullSkeleton(ticker));
}

module.exports = { fetchFinancials };
