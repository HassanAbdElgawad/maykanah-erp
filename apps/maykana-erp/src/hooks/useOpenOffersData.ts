import { useState, useEffect } from 'react';
import { openOffersData, OpenOffer } from '@/data/competitions/open-offers.data';

export const useOpenOffersData = () => {
  const [data, setData] = useState<OpenOffer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(openOffersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
