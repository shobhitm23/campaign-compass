import { useEffect, useState } from 'react';
import client from '../api/client.js';

export function useNews(subsectorId, days = 7) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subsectorId) return;

    setLoading(true);
    setError(null);

    client.get('/news', { params: { subsector: subsectorId, days } })
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [subsectorId, days]);

  return { data, loading, error };
}
