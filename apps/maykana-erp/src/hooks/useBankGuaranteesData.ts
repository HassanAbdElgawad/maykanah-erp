import { useState, useEffect } from 'react';
import { bankGuaranteeData, BankGuarantee } from '@/data/competitions/bank-guarantees.data';

export const useBankGuaranteesData = () => {
  const [data, setData] = useState<BankGuarantee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(bankGuaranteeData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
