// useAccountingEntriesData Hook - Manages accounting entries state
import { useState } from 'react';
import { SAMPLE_ENTRIES, type AccountingEntryItem } from '@/data/accounting/accounting-entries.data';

export const useAccountingEntriesData = () => {
  const [entries, setEntries] = useState<AccountingEntryItem[]>(SAMPLE_ENTRIES);

  return {
    entries,
    setEntries,
  };
};
