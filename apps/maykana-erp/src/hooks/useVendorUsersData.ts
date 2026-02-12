import { useState, useEffect } from 'react';
import { vendorUsersData, VendorUser } from '@/data/competitions/vendor-users.data';

export const useVendorUsersData = () => {
  const [data, setData] = useState<VendorUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(vendorUsersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
