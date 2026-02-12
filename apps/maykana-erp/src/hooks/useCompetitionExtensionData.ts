import { useState, useEffect } from 'react';
import { competitionExtensionData, CompetitionExtension } from '@/data/competitions/competition-extension.data';

export const useCompetitionExtensionData = () => {
  const [data, setData] = useState<CompetitionExtension[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(competitionExtensionData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
