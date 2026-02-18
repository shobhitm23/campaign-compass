import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

export default function HomePage() {
  const { sectors, sectorsLoading } = useApp();

  if (sectorsLoading) return <LoadingSpinner text="Loading sectors..." />;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Capital Compass</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Navigate the financial markets with sector-by-sector analysis — outlook, risks, opportunities, and live data.
        </p>
      </div>

      {/* Sector grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map(sector => (
          <div key={sector.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{sector.icon}</span>
                <h2 className="text-base font-semibold text-gray-900">{sector.name}</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{sector.description}</p>
              <div className="flex flex-wrap gap-2">
                {sector.subsectors.map(sub => (
                  <Link
                    key={sub.id}
                    to={`/subsector/${sub.id}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
