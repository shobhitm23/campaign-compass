import { useEffect, useState } from 'react';
import client from '../api/client.js';

export function useSubsector(subsectorId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subsectorId) return;

    // sessionStorage cache — static content never changes mid-session
    const cacheKey = `subsector:${subsectorId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    client.get(`/subsectors/${subsectorId}`)
      .then(res => {
        sessionStorage.setItem(cacheKey, JSON.stringify(res.data));
        setData(res.data);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [subsectorId]);

  return { data, loading, error };
}
