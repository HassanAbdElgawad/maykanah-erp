import { useState, useEffect } from 'react';
import { completionCertificateData, CompletionCertificate } from '@/data/competitions/completion-certificate.data';

export const useCompletionCertificateData = () => {
  const [data, setData] = useState<CompletionCertificate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(completionCertificateData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
