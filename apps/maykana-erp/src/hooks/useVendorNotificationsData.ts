import { useState, useEffect } from 'react';
import { vendorNotificationsData, VendorNotification } from '@/data/competitions/vendor-notifications.data';

export const useVendorNotificationsData = () => {
  const [data, setData] = useState<VendorNotification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(vendorNotificationsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
