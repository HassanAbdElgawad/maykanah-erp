import { useState, useEffect } from 'react';
import { startWorkRequestsData, StartWorkRequest } from '@/data/hr/start-work-requests.data';

export const useStartWorkRequestsData = () => {
  const [data, setData] = useState<StartWorkRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(startWorkRequestsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
