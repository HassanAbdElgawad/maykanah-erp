import { useState, useEffect } from 'react';
import { awardData, AwardData } from '@/data/competitions/award.data';

export const useAwardData = () => {
  const [data, setData] = useState<AwardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(awardData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
