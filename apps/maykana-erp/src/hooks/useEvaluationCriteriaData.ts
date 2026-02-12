import { useState, useEffect } from 'react';
import { evaluationCriteriaData, EvaluationCriteria } from '@/data/competitions/evaluation-criteria.data';

export const useEvaluationCriteriaData = () => {
  const [data, setData] = useState<EvaluationCriteria[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(evaluationCriteriaData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
