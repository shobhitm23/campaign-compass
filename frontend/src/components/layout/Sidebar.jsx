import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';
import SectorList from '../sidebar/SectorList.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';

export default function Sidebar() {
  const { sectors, sectorsLoading, sidebarOpen, setSidebarOpen } = useApp();
  const location = useLocation();

  // Close mobile sidebar on navigation
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname, setSidebarOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-14 left-0 bottom-0 z-40 w-64 bg-white border-r border-gray-200 overflow-y-auto
          transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:z-auto
        `}
      >
        <div className="p-3">
          <p className="px-2 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Sectors
          </p>
          {sectorsLoading ? (
            <LoadingSpinner text="Loading sectors..." />
          ) : (
            <SectorList sectors={sectors} />
          )}
        </div>
      </aside>
    </>
  );
}
