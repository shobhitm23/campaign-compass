import { useEffect, useState } from 'react';
import client from '../api/client.js';

export function useTickerNews(ticker, enabled) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !ticker) return;

    setLoading(true);
    setError(null);

    client.get(`/news/ticker/${encodeURIComponent(ticker)}`)
      .then(res => setData(res.data))
      .catch(err => {
        console.error('[useTickerNews] error:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [ticker, enabled]);

  return { data, loading, error };
}
