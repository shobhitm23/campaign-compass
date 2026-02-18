import Card from '../common/Card.jsx';
import Badge from '../common/Badge.jsx';

export default function RisksPanel({ risks }) {
  if (!risks?.length) return null;

  return (
    <Card title="Key Risks">
      <ul className="space-y-4">
        {risks.map((risk, i) => (
          <li key={i}>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-900">{risk.title}</span>
              <Badge type="severity" value={risk.severity} />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{risk.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
