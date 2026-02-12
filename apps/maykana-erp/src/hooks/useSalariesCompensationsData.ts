import { useState, useEffect } from 'react';
import { salariesData, Salary } from '@/data/hr/salaries-compensations.data';

export const useSalariesCompensationsData = () => {
  const [data, setData] = useState<Salary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(salariesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
