// Trial Balance Report Data
export interface TrialBalanceEntry {
  id: string;
  accountCode: string;
  accountName: string;
  debit: number;
  credit: number;
}

export const TRIAL_BALANCE_COLUMNS = [
  { key: 'accountCode', labelKey: 'reports.trial_balance.account_code' },
  { key: 'accountName', labelKey: 'reports.trial_balance.account_name' },
  { key: 'debit', labelKey: 'reports.trial_balance.debit' },
  { key: 'credit', labelKey: 'reports.trial_balance.credit' },
] as const;

export const getTrialBalanceSampleData = (): TrialBalanceEntry[] => [
  { id: '1', accountCode: '1001', accountName: 'النقدية بالصندوق', debit: 50000, credit: 0 },
  { id: '2', accountCode: '1002', accountName: 'البنك الأهلي', debit: 250000, credit: 0 },
  { id: '3', accountCode: '1101', accountName: 'المدينون', debit: 180000, credit: 0 },
  { id: '4', accountCode: '1201', accountName: 'المخزون', debit: 320000, credit: 0 },
  { id: '5', accountCode: '1501', accountName: 'الأثاث والمعدات', debit: 150000, credit: 0 },
  { id: '6', accountCode: '2001', accountName: 'الدائنون', debit: 0, credit: 120000 },
  { id: '7', accountCode: '2101', accountName: 'قروض قصيرة الأجل', debit: 0, credit: 80000 },
  { id: '8', accountCode: '3001', accountName: 'رأس المال', debit: 0, credit: 500000 },
  { id: '9', accountCode: '4001', accountName: 'إيرادات المبيعات', debit: 0, credit: 350000 },
  { id: '10', accountCode: '5001', accountName: 'تكلفة البضاعة المباعة', debit: 200000, credit: 0 },
  { id: '11', accountCode: '5101', accountName: 'مصروفات الرواتب', debit: 80000, credit: 0 },
  { id: '12', accountCode: '5201', accountName: 'مصروفات الإيجار', debit: 20000, credit: 0 },
];
