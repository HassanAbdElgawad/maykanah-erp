import { useState, useEffect } from 'react';
import { awardConfirmationData, AwardConfirmation } from '@/data/competitions/award-confirmation.data';

export const useAwardConfirmationData = () => {
  const [data, setData] = useState<AwardConfirmation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(awardConfirmationData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
