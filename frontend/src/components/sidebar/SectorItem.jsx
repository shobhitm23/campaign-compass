import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SubsectorLink from './SubsectorLink.jsx';

export default function SectorItem({ sector }) {
  const { subsectorId } = useParams();

  // Auto-expand if a subsector of this sector is active
  const isActive = sector.subsectors.some(s => s.id === subsectorId);
  const [open, setOpen] = useState(isActive);

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="text-base">{sector.icon}</span>
          <span>{sector.name}</span>
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${open ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && (
        <div className="mt-1 ml-4 space-y-0.5">
          {sector.subsectors.map(sub => (
            <SubsectorLink key={sub.id} subsector={sub} />
          ))}
        </div>
      )}
    </div>
  );
}
