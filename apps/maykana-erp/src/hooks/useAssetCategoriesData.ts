import { useState, useEffect } from 'react';
import { getAssetCategoriesSampleData, AssetCategory } from '@/data/settings/asset-categories.data';

export const useAssetCategoriesData = () => {
  const [data, setData] = useState<AssetCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getAssetCategoriesSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
