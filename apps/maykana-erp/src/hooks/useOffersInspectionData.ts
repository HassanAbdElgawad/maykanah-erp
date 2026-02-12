import { useState, useEffect } from 'react';
import { offersInspectionData, OffersInspection } from '@/data/competitions/offers-inspection.data';

export const useOffersInspectionData = () => {
  const [data, setData] = useState<OffersInspection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(offersInspectionData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
