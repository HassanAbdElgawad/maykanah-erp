import { useState, useEffect } from 'react';
import { assetMovementsData, AssetMovement } from '@/data/assets/asset-movements.data';

export const useAssetMovementsData = () => {
  const [data, setData] = useState<AssetMovement[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(assetMovementsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
