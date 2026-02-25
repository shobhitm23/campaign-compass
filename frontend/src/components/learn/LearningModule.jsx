import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLearning } from '../../hooks/useLearning.js';
import LearningCard from './LearningCard.jsx';
import LoadingSpinner from '../common/LoadingSpinner.jsx';
import ErrorBanner from '../common/ErrorBanner.jsx';

export default function LearningModule() {
  const { sectorId } = useParams();
  const { data, loading, error } = useLearning(sectorId);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset card index when sector changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [sectorId]);

  // Keyboard navigation
  useEffect(() => {
    if (!data) return;
    const total = data.cards.length;

    function handleKey(e) {
      if (e.key === 'ArrowRight') {
        setCurrentIndex(i => Math.min(i + 1, total - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(i => Math.max(i - 1, 0));
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [data]);

  if (loading) return <LoadingSpinner text="Loading module..." />;
  if (error) return <ErrorBanner message={error} />;
  if (!data) return null;

  const { sectorName, cards } = data;
  const total = cards.length;
  const card = cards[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        ← Back to sectors
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{sectorName}</h1>
        <p className="text-sm text-gray-500 mt-1">Sector Learning Module</p>
      </div>

      {/* Card */}
      <LearningCard card={card} current={currentIndex + 1} total={total} />

      {/* Completion message */}
      {isLast && (
        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-4 text-center">
          <p className="text-sm font-medium text-indigo-700">
            You've completed this module!
          </p>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setCurrentIndex(i => i - 1)}
          disabled={isFirst}
          className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() => setCurrentIndex(i => i + 1)}
          disabled={isLast}
          className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
