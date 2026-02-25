import { useState } from 'react';
import { useTickerNews } from '../../hooks/useTickerNews.js';

// Total number of columns in CompaniesTable (keep in sync with th count)
const TOTAL_COLS = 10;

function formatMarketCap(val) {
  if (!val) return '—';
  if (val >= 1e12) return `$${(val / 1e12).toFixed(1)}T`;
  if (val >= 1e9) return `$${(val / 1e9).toFixed(1)}B`;
  if (val >= 1e6) return `$${(val / 1e6).toFixed(0)}M`;
  return `$${val}`;
}

function fmtPct(val) {
  return val != null ? `${(val * 100).toFixed(1)}%` : '—';
}

function fmtRevGrowth(val) {
  if (val == null) return '—';
  const pct = (val * 100).toFixed(1);
  return val >= 0 ? `+${pct}%` : `${pct}%`;
}

function timeAgo(dateStr) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 1) return 'just now';
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default function CompanyRow({ company, financials, financialsLoading }) {
  const [expanded, setExpanded] = useState(false);
  const { data: tickerNews, loading: newsLoading, error: newsError } = useTickerNews(company.ticker, expanded);

  const changePositive = company.change >= 0;
  const changeColor = changePositive ? 'text-emerald-600' : 'text-red-500';
  const changeSign = changePositive ? '+' : '';

  const fin = financials;
  const revGrowthColor = fin?.revenueGrowth != null
    ? (fin.revenueGrowth >= 0 ? 'text-emerald-600' : 'text-red-500')
    : 'text-gray-400';

  return (
    <>
      <tr
        className="hover:bg-gray-50 transition-colors cursor-pointer"
        onClick={() => setExpanded(prev => !prev)}
      >
        {/* Chevron */}
        <td className="px-2 py-3 text-gray-400">
          <svg
            className={`w-3 h-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </td>

        {/* Ticker */}
        <td className="px-4 py-3 font-mono text-sm font-semibold text-blue-700 whitespace-nowrap">
          {company.ticker}
          {company.isMock && (
            <span className="ml-1 text-[10px] text-gray-400 font-normal">(mock)</span>
          )}
        </td>

        {/* Name */}
        <td className="px-4 py-3 text-sm text-gray-800 hidden sm:table-cell">
          {company.name}
        </td>

        {/* Price */}
        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right whitespace-nowrap">
          {company.price != null ? `$${Number(company.price).toFixed(2)}` : '—'}
        </td>

        {/* Chg% */}
        <td className={`px-4 py-3 text-sm text-right whitespace-nowrap ${changeColor}`}>
          {company.changePct != null
            ? `${changeSign}${Number(company.changePct).toFixed(2)}%`
            : '—'
          }
        </td>

        {/* Revenue (TTM) */}
        <td className="px-4 py-3 text-sm text-gray-600 text-right hidden sm:table-cell">
          {financialsLoading ? (
            <span className="text-gray-300 text-xs">…</span>
          ) : (
            formatMarketCap(fin?.totalRevenue)
          )}
        </td>

        {/* Gross Margin */}
        <td className="px-4 py-3 text-sm text-gray-600 text-right hidden md:table-cell">
          {financialsLoading ? (
            <span className="text-gray-300 text-xs">…</span>
          ) : (
            fmtPct(fin?.grossMargins)
          )}
        </td>

        {/* Op Margin */}
        <td className="px-4 py-3 text-sm text-gray-600 text-right hidden lg:table-cell">
          {financialsLoading ? (
            <span className="text-gray-300 text-xs">…</span>
          ) : (
            fmtPct(fin?.operatingMargins)
          )}
        </td>

        {/* Rev Growth */}
        <td className={`px-4 py-3 text-sm text-right hidden xl:table-cell ${financialsLoading ? '' : revGrowthColor}`}>
          {financialsLoading ? (
            <span className="text-gray-300 text-xs">…</span>
          ) : (
            fmtRevGrowth(fin?.revenueGrowth)
          )}
        </td>

        {/* Mkt Cap */}
        <td className="px-4 py-3 text-sm text-gray-600 text-right hidden xl:table-cell">
          {formatMarketCap(company.marketCap)}
        </td>
      </tr>

      {/* Expandable ticker news row */}
      {expanded && (
        <tr>
          <td colSpan={TOTAL_COLS} className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            {newsLoading ? (
              <p className="text-xs text-gray-400">Loading news…</p>
            ) : (newsError || tickerNews.length === 0) ? (
              <p className="text-xs text-gray-400">No recent news.</p>
            ) : (
              <ul className="space-y-2">
                {tickerNews.slice(0, 5).map(article => (
                  <li key={article.id} className="flex items-start gap-2">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-700 hover:underline flex-1 leading-snug"
                      onClick={e => e.stopPropagation()}
                    >
                      {article.title}
                    </a>
                    <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                      {timeAgo(article.publishedAt)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
