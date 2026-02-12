import { useState, useEffect } from 'react';
import { mockLocations, AssetLocation } from '@/data/settings/asset-locations.data';

export const useAssetLocationsData = () => {
  const [data, setData] = useState<AssetLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(Object.values(mockLocations));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
