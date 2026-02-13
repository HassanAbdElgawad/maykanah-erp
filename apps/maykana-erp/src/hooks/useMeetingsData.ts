import { useState, useEffect } from 'react';
import { getMeetingsSampleData, Meeting } from '@/data/strategy/meetings.data';

export const useMeetingsData = () => {
  const [data, setData] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getMeetingsSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
