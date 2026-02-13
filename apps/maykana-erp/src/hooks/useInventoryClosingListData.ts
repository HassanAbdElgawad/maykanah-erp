import { useState, useEffect } from 'react';
import {
  getInventoryClosingListSampleData,
  type InventoryClosing,
} from '@/data/warehouses/inventory-closing-list.data';

export const useInventoryClosingListData = () => {
  const [data, setData] = useState<InventoryClosing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getInventoryClosingListSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
