// Income Statement Report Data
export interface IncomeStatementEntry {
  id: string;
  account: string;
  amount: number;
  category: 'revenue' | 'cost' | 'expense' | 'other';
  level: number;
  isTotal?: boolean;
  isGrandTotal?: boolean;
}

export const INCOME_STATEMENT_COLUMNS = [
  { key: 'account', labelKey: 'reports.income_statement.account' },
  { key: 'amount', labelKey: 'reports.income_statement.amount' },
] as const;

export const getIncomeStatementSampleData = (): IncomeStatementEntry[] => [
  // Revenue
  { id: '1', account: 'الإيرادات', amount: 0, category: 'revenue', level: 1, isTotal: true },
  { id: '2', account: 'إيرادات المبيعات', amount: 850000, category: 'revenue', level: 2 },
  { id: '3', account: 'إيرادات الخدمات', amount: 150000, category: 'revenue', level: 2 },
  { id: '4', account: 'إجمالي الإيرادات', amount: 1000000, category: 'revenue', level: 1, isTotal: true },
  
  // Cost of Goods Sold
  { id: '5', account: 'تكلفة المبيعات', amount: 0, category: 'cost', level: 1, isTotal: true },
  { id: '6', account: 'تكلفة البضاعة المباعة', amount: 450000, category: 'cost', level: 2 },
  { id: '7', account: 'تكلفة الخدمات', amount: 50000, category: 'cost', level: 2 },
  { id: '8', account: 'إجمالي تكلفة المبيعات', amount: 500000, category: 'cost', level: 1, isTotal: true },
  
  { id: '9', account: 'مجمل الربح', amount: 500000, category: 'revenue', level: 1, isTotal: true },
  
  // Operating Expenses
  { id: '10', account: 'المصروفات التشغيلية', amount: 0, category: 'expense', level: 1, isTotal: true },
  { id: '11', account: 'مصروفات الرواتب', amount: 180000, category: 'expense', level: 2 },
  { id: '12', account: 'مصروفات الإيجار', amount: 60000, category: 'expense', level: 2 },
  { id: '13', account: 'مصروفات الكهرباء والماء', amount: 25000, category: 'expense', level: 2 },
  { id: '14', account: 'مصروفات الصيانة', amount: 35000, category: 'expense', level: 2 },
  { id: '15', account: 'إجمالي المصروفات التشغيلية', amount: 300000, category: 'expense', level: 1, isTotal: true },
  
  { id: '16', account: 'الربح التشغيلي', amount: 200000, category: 'revenue', level: 1, isTotal: true },
  
  // Other Income/Expenses
  { id: '17', account: 'إيرادات ومصروفات أخرى', amount: 0, category: 'other', level: 1, isTotal: true },
  { id: '18', account: 'إيرادات الفوائد', amount: 15000, category: 'other', level: 2 },
  { id: '19', account: 'مصروفات الفوائد', amount: -10000, category: 'other', level: 2 },
  { id: '20', account: 'صافي إيرادات ومصروفات أخرى', amount: 5000, category: 'other', level: 1, isTotal: true },
  
  { id: '21', account: 'صافي الربح', amount: 205000, category: 'revenue', level: 1, isGrandTotal: true },
];
