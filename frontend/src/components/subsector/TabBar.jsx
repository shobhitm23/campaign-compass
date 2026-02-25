const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'companies', label: 'Companies' },
  { id: 'news', label: 'News' },
];

export default function TabBar({ activeTab, onChange }) {
  return (
    <div className="flex gap-1 border-b border-gray-200 pb-0 -mb-px">
      {TABS.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium rounded-t transition-colors
            ${activeTab === tab.id
              ? 'bg-brand-600 text-white'
              : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
