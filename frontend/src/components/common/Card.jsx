export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>
      {title && (
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}
