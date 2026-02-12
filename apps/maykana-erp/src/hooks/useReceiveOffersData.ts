import { useState, useEffect } from 'react';
import { receiveOffersData, ReceiveOffer } from '@/data/competitions/receive-offers.data';

export const useReceiveOffersData = () => {
  const [data, setData] = useState<ReceiveOffer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(receiveOffersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
