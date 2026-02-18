import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <p className="text-6xl mb-4">🧭</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6">This sector doesn't appear to be on the map.</p>
      <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
