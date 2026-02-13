import { useState, useEffect } from 'react';
import { getMaintenanceTeamsSampleData, MaintenanceTeam } from '@/data/settings/maintenance-team.data';

export const useMaintenanceTeamData = () => {
  const [data, setData] = useState<MaintenanceTeam[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getMaintenanceTeamsSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
