import Card from '../common/Card.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import CompanyRow from './CompanyRow.jsx';

export default function CompaniesTable({ companies, loading }) {
  return (
    <Card title="Key Companies">
      {loading ? (
        <LoadingSpinner text="Loading quotes..." />
      ) : companies.length === 0 ? (
        <p className="text-sm text-gray-400">No company data available.</p>
      ) : (
        <div className="overflow-x-auto -mx-5">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Ticker</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Name</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Price</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Chg%</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Mkt Cap</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">P/E</th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide hidden xl:table-cell">52W Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {companies.map(company => (
                <CompanyRow key={company.ticker} company={company} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
