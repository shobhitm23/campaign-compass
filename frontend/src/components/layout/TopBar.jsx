import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext.jsx';

export default function TopBar() {
  const { sidebarOpen, setSidebarOpen } = useApp();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-3">
      <button
        onClick={() => setSidebarOpen(o => !o)}
        className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          }
        </svg>
      </button>

      <Link to="/" className="flex items-center gap-2 font-bold text-lg text-blue-700 hover:text-blue-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Capital Compass
      </Link>

      <div className="ml-auto text-xs text-gray-400 hidden sm:block">
        Financial Sector Intelligence
      </div>
    </header>
  );
}
