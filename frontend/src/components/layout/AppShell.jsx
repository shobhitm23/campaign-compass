import TopBar from './TopBar.jsx';
import Sidebar from './Sidebar.jsx';

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Sidebar />
      <main className="pt-14 lg:pl-64">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
