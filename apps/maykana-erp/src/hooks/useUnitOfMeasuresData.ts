import { useState, useEffect } from 'react';
import { getUnitOfMeasuresSampleData, UnitOfMeasure } from '@/data/settings/unit-of-measures.data';

export const useUnitOfMeasuresData = () => {
  const [data, setData] = useState<UnitOfMeasure[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getUnitOfMeasuresSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
