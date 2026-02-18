import Card from '../common/Card.jsx';

export default function OutlookPanel({ outlook }) {
  if (!outlook) return null;

  return (
    <Card title="Outlook">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Time Horizon: <span className="font-medium text-gray-700">{outlook.timeHorizon}</span>
        </div>

        <p className="text-gray-700 leading-relaxed">{outlook.summary}</p>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Drivers</h3>
          <ul className="space-y-2">
            {outlook.keyDrivers.map((driver, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {driver}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
