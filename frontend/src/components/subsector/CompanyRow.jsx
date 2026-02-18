function formatMarketCap(val) {
  if (!val) return '—';
  if (val >= 1e12) return `$${(val / 1e12).toFixed(1)}T`;
  if (val >= 1e9) return `$${(val / 1e9).toFixed(1)}B`;
  if (val >= 1e6) return `$${(val / 1e6).toFixed(0)}M`;
  return `$${val}`;
}

function fmt(val, decimals = 2, prefix = '') {
  if (val == null) return '—';
  return `${prefix}${Number(val).toFixed(decimals)}`;
}

export default function CompanyRow({ company }) {
  const changePositive = company.change >= 0;
  const changeColor = changePositive ? 'text-emerald-600' : 'text-red-500';
  const changeSign = changePositive ? '+' : '';

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 font-mono text-sm font-semibold text-blue-700 whitespace-nowrap">
        {company.ticker}
        {company.isMock && (
          <span className="ml-1 text-[10px] text-gray-400 font-normal">(mock)</span>
        )}
      </td>
      <td className="px-4 py-3 text-sm text-gray-800 hidden sm:table-cell">
        {company.name}
      </td>
      <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right whitespace-nowrap">
        {company.price != null ? `$${Number(company.price).toFixed(2)}` : '—'}
      </td>
      <td className={`px-4 py-3 text-sm text-right whitespace-nowrap ${changeColor}`}>
        {company.changePct != null
          ? `${changeSign}${Number(company.changePct).toFixed(2)}%`
          : '—'
        }
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 text-right hidden md:table-cell">
        {formatMarketCap(company.marketCap)}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 text-right hidden lg:table-cell">
        {fmt(company.peRatio, 1)}
      </td>
      <td className="px-4 py-3 text-xs text-gray-400 text-right hidden xl:table-cell whitespace-nowrap">
        {company.week52Low != null && company.week52High != null
          ? `$${Number(company.week52Low).toFixed(0)} – $${Number(company.week52High).toFixed(0)}`
          : '—'
        }
      </td>
    </tr>
  );
}
