import { useState, useEffect } from 'react';
import { materialRequestsListData, MaterialRequest } from '@/data/warehouses/material-requests-list.data';

export const useMaterialRequestsListData = () => {
  const [data, setData] = useState<MaterialRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(materialRequestsListData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
