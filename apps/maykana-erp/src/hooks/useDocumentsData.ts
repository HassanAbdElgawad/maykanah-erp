import { useState, useEffect } from 'react';
import { getDocumentsSampleData, Document } from '@/data/strategy/documents.data';

export const useDocumentsData = () => {
  const [data, setData] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      setData(getDocumentsSampleData());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
