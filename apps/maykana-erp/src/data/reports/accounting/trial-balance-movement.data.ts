// Trial Balance Movement Report Data
export interface TrialBalanceMovementEntry {
  id: string;
  accountCode: string;
  accountName: string;
  openingDebit: number;
  openingCredit: number;
  periodDebit: number;
  periodCredit: number;
  closingDebit: number;
  closingCredit: number;
}

export const TRIAL_BALANCE_MOVEMENT_COLUMNS = [
  { key: 'accountCode', labelKey: 'reports.trial_balance_movement.account_code' },
  { key: 'accountName', labelKey: 'reports.trial_balance_movement.account_name' },
  { key: 'openingDebit', labelKey: 'reports.trial_balance_movement.opening_debit' },
  { key: 'openingCredit', labelKey: 'reports.trial_balance_movement.opening_credit' },
  { key: 'periodDebit', labelKey: 'reports.trial_balance_movement.period_debit' },
  { key: 'periodCredit', labelKey: 'reports.trial_balance_movement.period_credit' },
  { key: 'closingDebit', labelKey: 'reports.trial_balance_movement.closing_debit' },
  { key: 'closingCredit', labelKey: 'reports.trial_balance_movement.closing_credit' },
] as const;

export const getTrialBalanceMovementSampleData = (): TrialBalanceMovementEntry[] => [
  {
    id: '1',
    accountCode: '1001',
    accountName: 'النقدية بالصندوق',
    openingDebit: 40000,
    openingCredit: 0,
    periodDebit: 15000,
    periodCredit: 5000,
    closingDebit: 50000,
    closingCredit: 0,
  },
  {
    id: '2',
    accountCode: '1002',
    accountName: 'البنك الأهلي',
    openingDebit: 200000,
    openingCredit: 0,
    periodDebit: 80000,
    periodCredit: 30000,
    closingDebit: 250000,
    closingCredit: 0,
  },
  {
    id: '3',
    accountCode: '1101',
    accountName: 'المدينون',
    openingDebit: 150000,
    openingCredit: 0,
    periodDebit: 50000,
    periodCredit: 20000,
    closingDebit: 180000,
    closingCredit: 0,
  },
  {
    id: '4',
    accountCode: '1201',
    accountName: 'المخزون',
    openingDebit: 300000,
    openingCredit: 0,
    periodDebit: 40000,
    periodCredit: 20000,
    closingDebit: 320000,
    closingCredit: 0,
  },
  {
    id: '5',
    accountCode: '2001',
    accountName: 'الدائنون',
    openingDebit: 0,
    openingCredit: 100000,
    periodDebit: 10000,
    periodCredit: 30000,
    closingDebit: 0,
    closingCredit: 120000,
  },
  {
    id: '6',
    accountCode: '3001',
    accountName: 'رأس المال',
    openingDebit: 0,
    openingCredit: 500000,
    periodDebit: 0,
    periodCredit: 0,
    closingDebit: 0,
    closingCredit: 500000,
  },
  {
    id: '7',
    accountCode: '4001',
    accountName: 'إيرادات المبيعات',
    openingDebit: 0,
    openingCredit: 250000,
    periodDebit: 0,
    periodCredit: 100000,
    closingDebit: 0,
    closingCredit: 350000,
  },
  {
    id: '8',
    accountCode: '5001',
    accountName: 'تكلفة البضاعة المباعة',
    openingDebit: 150000,
    openingCredit: 0,
    periodDebit: 50000,
    periodCredit: 0,
    closingDebit: 200000,
    closingCredit: 0,
  },
];
