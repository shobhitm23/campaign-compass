import { useEffect, useState } from 'react';
import client from '../api/client.js';

export function useCompanies(tickers) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tickers || tickers.length === 0) return;

    setLoading(true);
    setError(null);

    client.get('/companies', { params: { tickers: tickers.join(',') } })
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [tickers?.join(',')]);

  return { data, loading, error };
}
