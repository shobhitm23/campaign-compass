import Card from '../common/Card.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const h = Math.floor(diff / 3.6e6);
  if (h < 1) return 'Just now';
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default function NewsFeed({ articles, loading }) {
  return (
    <Card title="Recent News">
      {loading ? (
        <LoadingSpinner text="Loading news..." />
      ) : articles.length === 0 ? (
        <p className="text-sm text-gray-400">No recent news found.</p>
      ) : (
        <ul className="divide-y divide-gray-100 -mx-5">
          {articles.map(article => (
            <li key={article.id} className="px-5 py-4 hover:bg-gray-50 transition-colors">
              <a
                href={article.url !== '#' ? article.url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={article.url !== '#' ? 'group cursor-pointer' : 'cursor-default'}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium text-gray-900 leading-snug mb-1 ${article.url !== '#' ? 'group-hover:text-blue-700' : ''}`}>
                      {article.title}
                    </p>
                    {article.description && (
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>
                    )}
                  </div>
                  {article.url !== '#' && (
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-400">{article.source}</span>
                  <span className="text-gray-200">·</span>
                  <span className="text-xs text-gray-400">{timeAgo(article.publishedAt)}</span>
                  {article.isMock && (
                    <span className="text-[10px] text-gray-300">(mock)</span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
