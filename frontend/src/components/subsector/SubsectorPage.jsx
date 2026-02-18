import { useParams } from 'react-router-dom';
import { useSubsector } from '../../hooks/useSubsector.js';
import { useCompanies } from '../../hooks/useCompanies.js';
import { useNews } from '../../hooks/useNews.js';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import ErrorBanner from '../common/ErrorBanner.jsx';
import OutlookPanel from './OutlookPanel.jsx';
import RisksPanel from './RisksPanel.jsx';
import OpportunitiesPanel from './OpportunitiesPanel.jsx';
import CompaniesTable from './CompaniesTable.jsx';
import NewsFeed from './NewsFeed.jsx';

export default function SubsectorPage() {
  const { subsectorId } = useParams();
  const { data, loading, error } = useSubsector(subsectorId);
  const { data: companies, loading: companiesLoading } = useCompanies(data?.tickers);
  const { data: news, loading: newsLoading } = useNews(subsectorId);

  if (loading) return <LoadingSpinner text="Loading sector data..." />;
  if (error) return <ErrorBanner message={error} />;
  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
          {data.sectorName}
        </p>
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
      </div>

      {/* Panels */}
      <OutlookPanel outlook={data.outlook} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RisksPanel risks={data.risks} />
        <OpportunitiesPanel opportunities={data.opportunities} />
      </div>

      <CompaniesTable companies={companies} loading={companiesLoading} />

      <NewsFeed articles={news} loading={newsLoading} />
    </div>
  );
}
