import { useState, useEffect } from 'react';
import { financialClaimData, FinancialClaim } from '@/data/competitions/financial-claim.data';

export const useFinancialClaimData = () => {
  const [data, setData] = useState<FinancialClaim[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(financialClaimData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
