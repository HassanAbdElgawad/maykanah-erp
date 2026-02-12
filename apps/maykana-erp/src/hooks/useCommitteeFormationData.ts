import { useState, useEffect } from 'react';
import { committeeFormationData, CommitteeFormation } from '@/data/competitions/committee-formation.data';

export const useCommitteeFormationData = () => {
  const [data, setData] = useState<CommitteeFormation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(committeeFormationData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
