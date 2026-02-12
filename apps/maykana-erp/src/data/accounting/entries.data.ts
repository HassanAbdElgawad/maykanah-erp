// Accounting entries table data
export interface AccountingEntry {
  id: string;
  date: string;
  type: string;
  debitAmount: number;
  creditAmount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export const mockAccountingEntries: AccountingEntry[] = [
  {
    id: 'ENT-001',
    date: '2026-01-10',
    type: 'قيد عادي',
    debitAmount: 15000,
    creditAmount: 15000,
    status: 'approved',
  },
  {
    id: 'ENT-002',
    date: '2026-01-11',
    type: 'قيد تسوية',
    debitAmount: 8500,
    creditAmount: 8500,
    status: 'pending',
  },
  {
    id: 'ENT-003',
    date: '2026-01-12',
    type: 'قيد افتتاحي',
    debitAmount: 25000,
    creditAmount: 25000,
    status: 'approved',
  },
];

// Table columns configuration
export const tableColumns = [
  { key: 'date', label: 'تاريخ القيد', align: 'right' as const },
  { key: 'type', label: 'نوع القيد', align: 'right' as const },
  { key: 'debitAmount', label: 'المبلغ المدين', align: 'right' as const },
  { key: 'creditAmount', label: 'المبلغ الدائن', align: 'right' as const },
  { key: 'status', label: 'حالة القيد', align: 'right' as const },
];

// Breadcrumb data
export const accountingBreadcrumbs = [
  { label: 'إدارة الحسابات', hasDropdown: true },
  { label: 'الخدمات', hasDropdown: true },
  { label: 'القيود المحاسبية', hasDropdown: false },
];
