// General Ledger Report Data
export interface GeneralLedgerEntry {
  id: string;
  account: string;
  openingDebit: number;
  openingCredit: number;
  debit: number;
  credit: number;
  closingDebit: number;
  closingCredit: number;
}

export const GENERAL_LEDGER_COLUMNS = [
  { key: 'account', labelKey: 'reports.general_ledger.account' },
  { key: 'openingDebit', labelKey: 'reports.general_ledger.opening_debit' },
  { key: 'openingCredit', labelKey: 'reports.general_ledger.opening_credit' },
  { key: 'debit', labelKey: 'reports.general_ledger.debit' },
  { key: 'credit', labelKey: 'reports.general_ledger.credit' },
  { key: 'closingDebit', labelKey: 'reports.general_ledger.closing_debit' },
  { key: 'closingCredit', labelKey: 'reports.general_ledger.closing_credit' },
] as const;

export const getGeneralLedgerSampleData = (): GeneralLedgerEntry[] => [
  {
    id: '1',
    account: 'شركة الأمان',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
  {
    id: '2',
    account: 'شركة التقدم',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
  {
    id: '3',
    account: 'شركة الأفنان',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
  {
    id: '4',
    account: 'شركة التقدم',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
  {
    id: '5',
    account: 'شركة التقدم',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
  {
    id: '6',
    account: 'شركة التقدم',
    openingDebit: 0,
    openingCredit: 252805.35,
    debit: 0,
    credit: 252805.35,
    closingDebit: 0,
    closingCredit: 252805.35,
  },
];
