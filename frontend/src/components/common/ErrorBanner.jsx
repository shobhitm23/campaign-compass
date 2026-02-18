export default function ErrorBanner({ message }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
      <span className="text-lg leading-none mt-0.5">⚠️</span>
      <div>
        <p className="text-sm font-medium">Error loading data</p>
        {message && <p className="text-xs mt-1 opacity-75">{message}</p>}
      </div>
    </div>
  );
}
