import { useState, useEffect } from 'react';
import { competitionLaunchData, CompetitionLaunch } from '@/data/competitions/competition-launch.data';

export const useCompetitionLaunchData = () => {
  const [data, setData] = useState<CompetitionLaunch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(competitionLaunchData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
