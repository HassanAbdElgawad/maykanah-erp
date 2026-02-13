import { useState, useEffect } from 'react';
import { getStrategicPlansSampleData, Plan } from '@/data/strategy/strategic-plans.data';

export const useStrategicPlansData = () => {
  const [data, setData] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getStrategicPlansSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
