import { useState, useEffect } from 'react';
import { assetDetailData, AssetDetail } from '@/data/assets/asset-detail.data';

export const useAssetDetailsData = () => {
  const [data, setData] = useState<AssetDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData([assetDetailData]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
