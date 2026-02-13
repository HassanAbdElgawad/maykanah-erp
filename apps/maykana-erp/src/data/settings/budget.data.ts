// Budget data for Settings module

export interface BudgetItem {
  id: string;
  name: string;
  account: string;
  approvedAmount: number;
  spentAmount: number;
  remainingAmount: number;
  type: string;
  status: 'active' | 'suspended' | 'awaiting';
  children?: BudgetItem[];
}

const budgetsData: BudgetItem[] = [
  { id: '1', name: 'موازنة إيطاليا', account: '---------------', approvedAmount: 50000, spentAmount: 40000, remainingAmount: 10000, type: 'مشروع', status: 'awaiting', children: [{ id: '11', name: 'السوق', account: '📁', approvedAmount: 10000, spentAmount: 10000, remainingAmount: 0, type: '----', status: 'active' }, { id: '12', name: 'حساب 2', account: '📁', approvedAmount: 20000, spentAmount: 10000, remainingAmount: 10000, type: '----', status: 'active' }, { id: '13', name: 'حساب 3', account: '📁', approvedAmount: 20000, spentAmount: 20000, remainingAmount: 0, type: '----', status: 'active' }] },
  { id: '2', name: 'موازنة 2', account: '---------------', approvedAmount: 90000, spentAmount: 80000, remainingAmount: 10000, type: 'مركز تكلفة', status: 'suspended', children: [{ id: '21', name: 'حساب 1', account: '📁', approvedAmount: 50000, spentAmount: 50000, remainingAmount: 0, type: '----', status: 'active' }, { id: '22', name: 'حساب 2', account: '📁', approvedAmount: 10000, spentAmount: 10000, remainingAmount: 10000, type: '----', status: 'active' }, { id: '23', name: 'حساب 3', account: '📁', approvedAmount: 10000, spentAmount: 10000, remainingAmount: 10000, type: '----', status: 'active' }] },
  { id: '3', name: 'موازنة 3', account: '---------------', approvedAmount: 20000, spentAmount: 20000, remainingAmount: 20000, type: 'مركز تكلفة', status: 'awaiting', children: [{ id: '31', name: 'حساب 1', account: '📁', approvedAmount: 10000, spentAmount: 10000, remainingAmount: 0, type: '----', status: 'active' }, { id: '32', name: 'حساب 2', account: '📁', approvedAmount: 10000, spentAmount: 10000, remainingAmount: 10000, type: '----', status: 'active' }] },
];

export const getBudgetsSampleData = (): BudgetItem[] => JSON.parse(JSON.stringify(budgetsData));
