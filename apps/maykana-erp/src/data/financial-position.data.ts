// Financial Position Report Data
export interface FinancialPositionEntry {
  id: string;
  account: string;
  amount: number;
  category: 'assets' | 'liabilities' | 'equity';
  level: number;
  isTotal?: boolean;
}

export const FINANCIAL_POSITION_COLUMNS = [
  { key: 'account', labelKey: 'reports.financial_position.account' },
  { key: 'amount', labelKey: 'reports.financial_position.amount' },
] as const;

export const getFinancialPositionSampleData = (): FinancialPositionEntry[] => [
  // Assets
  { id: '1', account: 'الأصول المتداولة', amount: 0, category: 'assets', level: 1, isTotal: true },
  { id: '2', account: 'النقدية وما في حكمها', amount: 150000, category: 'assets', level: 2 },
  { id: '3', account: 'المدينون', amount: 250000, category: 'assets', level: 2 },
  { id: '4', account: 'المخزون', amount: 180000, category: 'assets', level: 2 },
  { id: '5', account: 'إجمالي الأصول المتداولة', amount: 580000, category: 'assets', level: 1, isTotal: true },
  
  // Fixed Assets
  { id: '6', account: 'الأصول الثابتة', amount: 0, category: 'assets', level: 1, isTotal: true },
  { id: '7', account: 'الأراضي والمباني', amount: 500000, category: 'assets', level: 2 },
  { id: '8', account: 'المعدات والآلات', amount: 320000, category: 'assets', level: 2 },
  { id: '9', account: 'إجمالي الأصول الثابتة', amount: 820000, category: 'assets', level: 1, isTotal: true },
  
  // Liabilities
  { id: '10', account: 'الالتزامات المتداولة', amount: 0, category: 'liabilities', level: 1, isTotal: true },
  { id: '11', account: 'الدائنون', amount: 120000, category: 'liabilities', level: 2 },
  { id: '12', account: 'قروض قصيرة الأجل', amount: 80000, category: 'liabilities', level: 2 },
  { id: '13', account: 'إجمالي الالتزامات المتداولة', amount: 200000, category: 'liabilities', level: 1, isTotal: true },
  
  // Equity
  { id: '14', account: 'حقوق الملكية', amount: 0, category: 'equity', level: 1, isTotal: true },
  { id: '15', account: 'رأس المال', amount: 1000000, category: 'equity', level: 2 },
  { id: '16', account: 'الأرباح المحتجزة', amount: 200000, category: 'equity', level: 2 },
  { id: '17', account: 'إجمالي حقوق الملكية', amount: 1200000, category: 'equity', level: 1, isTotal: true },
];
