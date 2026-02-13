// Warehouse Management data for Settings module

export interface Warehouse {
  id: string;
  code: string;
  name: string;
  date: string;
  accountName: string;
  isActive: boolean;
}

const warehousesData: Warehouse[] = [
  { id: '1', code: 'MR-001', name: 'المستودع A', date: '13/11/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '2', code: 'MR-002', name: 'المستودع Aa', date: '01/11/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '3', code: 'MR-003', name: 'المستودع ة', date: '10/04/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '4', code: 'MR-004', name: 'المستودع Add', date: '10/05/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '5', code: 'MR-005', name: 'المستودع A4', date: '11/03/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '6', code: 'MR-006', name: 'المستودع Av', date: '10/01/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '7', code: 'MR-007', name: 'المستودع Z', date: '10/03/2025', accountName: 'اسم الحساب', isActive: true },
  { id: '8', code: 'MR-008', name: 'المستودع And', date: '10/05/2025', accountName: 'اسم الحساب', isActive: true },
];

export const getWarehousesSampleData = (): Warehouse[] => [...warehousesData];
