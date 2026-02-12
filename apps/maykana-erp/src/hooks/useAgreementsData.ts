import { useState, useEffect } from 'react';
import { agreementsData, Agreement } from '@/data/competitions/agreements.data';

export const useAgreementsData = () => {
  const [data, setData] = useState<Agreement[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(agreementsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
