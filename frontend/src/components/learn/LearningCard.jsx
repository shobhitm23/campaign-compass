function renderBody(body) {
  // Split on newlines first, then handle **bold** within each segment
  return body.split('\n').map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <span key={lineIdx}>
        {rendered}
        {lineIdx < body.split('\n').length - 1 && <br />}
      </span>
    );
  });
}

export default function LearningCard({ card, current, total }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {current} / {total}
        </span>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{renderBody(card.body)}</p>
    </div>
  );
}
