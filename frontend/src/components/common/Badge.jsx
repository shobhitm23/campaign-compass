const severityStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-green-100 text-green-700',
};

const potentialStyles = {
  high: 'bg-emerald-100 text-emerald-700',
  medium: 'bg-blue-100 text-blue-700',
  low: 'bg-gray-100 text-gray-600',
};

export default function Badge({ type, value }) {
  const styles = type === 'severity' ? severityStyles : potentialStyles;
  const style = styles[value] || 'bg-gray-100 text-gray-600';

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${style}`}>
      {value}
    </span>
  );
}
