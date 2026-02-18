import Card from '../common/Card.jsx';
import Badge from '../common/Badge.jsx';

export default function OpportunitiesPanel({ opportunities }) {
  if (!opportunities?.length) return null;

  return (
    <Card title="Opportunities">
      <ul className="space-y-4">
        {opportunities.map((opp, i) => (
          <li key={i}>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-900">{opp.title}</span>
              <Badge type="potential" value={opp.potential} />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{opp.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
