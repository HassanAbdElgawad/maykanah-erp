import { useState, useEffect } from 'react';
import { getItemGroupsSampleData, ItemGroup } from '@/data/settings/item-groups.data';

export const useItemGroupsData = () => {
  const [data, setData] = useState<ItemGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getItemGroupsSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
