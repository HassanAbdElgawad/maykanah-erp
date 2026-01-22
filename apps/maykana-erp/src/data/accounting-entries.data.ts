// Accounting Entries Data - Sample accounting entries for financial management
export interface AccountingEntryItem {
  id: string;
  entryNumber: string;
  date: string;
  type: 'daily' | 'expense' | 'revenue' | 'closing';
  debit: number;
  credit: number;
  status: 'approved' | 'rejected' | 'pending';
}

export const SAMPLE_ENTRIES: AccountingEntryItem[] = [
  {
    id: '1',
    entryNumber: 'E-001',
    date: '2023-11-01',
    type: 'daily',
    debit: 1500.0,
    credit: 0.0,
    status: 'approved',
  },
  {
    id: '2',
    entryNumber: 'E-002',
    date: '2023-11-05',
    type: 'closing',
    debit: 500.0,
    credit: 0.0,
    status: 'approved',
  },
  {
    id: '3',
    entryNumber: 'E-003',
    date: '2023-11-10',
    type: 'expense',
    debit: 0.0,
    credit: 2000.0,
    status: 'rejected',
  },
  {
    id: '4',
    entryNumber: 'E-004',
    date: '2023-11-15',
    type: 'revenue',
    debit: 2000.0,
    credit: 0.0,
    status: 'pending',
  },
  {
    id: '5',
    entryNumber: 'E-005',
    date: '2023-11-20',
    type: 'daily',
    debit: 3000.0,
    credit: 0.0,
    status: 'approved',
  },
  {
    id: '6',
    entryNumber: 'E-006',
    date: '2023-11-30',
    type: 'expense',
    debit: 0.0,
    credit: 1000.0,
    status: 'pending',
  },
  {
    id: '7',
    entryNumber: 'E-007',
    date: '2023-11-25',
    type: 'expense',
    debit: 250.0,
    credit: 0.0,
    status: 'approved',
  },
  {
    id: '8',
    entryNumber: 'E-008',
    date: '2023-12-01',
    type: 'revenue',
    debit: 1200.0,
    credit: 0.0,
    status: 'approved',
  },
];
