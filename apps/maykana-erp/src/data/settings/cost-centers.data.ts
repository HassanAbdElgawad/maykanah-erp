// Cost Centers data for Settings module

export interface CostCenter {
  id: string;
  code: string;
  name: string;
  isPrimary: boolean;
  accountType: string;
  isActive: boolean;
  children?: CostCenter[];
}

const costCentersData: CostCenter[] = [
  { id: '1', code: '1', name: 'مركز تكلفة 1', isPrimary: true, accountType: 'رئيسي', isActive: true, children: [{ id: '11', code: '11', name: 'مركز تكلفة 1-1', isPrimary: false, accountType: '', isActive: true, children: [{ id: '111', code: '111', name: 'مركز تكلفة', isPrimary: false, accountType: '', isActive: false, children: [{ id: '1111', code: '1111', name: 'مركز تكلفة - 1111', isPrimary: false, accountType: '', isActive: false }] }, { id: '112', code: '112', name: 'مركز تكلفة 2-1', isPrimary: false, accountType: 'رئيسي', isActive: true, children: [{ id: '1121', code: '1121', name: 'مركز تكلفة 1-2', isPrimary: false, accountType: '', isActive: true }] }, { id: '113', code: '113', name: 'مركز تكلفة 1-3', isPrimary: false, accountType: '', isActive: true, children: [{ id: '1131', code: '1131', name: 'مركز تكلفة 1-3-', isPrimary: false, accountType: '', isActive: false }] }, { id: '114', code: '114', name: 'مركز تكلفة 4-', isPrimary: false, accountType: '', isActive: true, children: [{ id: '1141', code: '1141', name: 'مركز تكلفة 1-4', isPrimary: false, accountType: '', isActive: false }] }, { id: '115', code: '115', name: 'مركز تكلفة 5', isPrimary: false, accountType: '', isActive: true, children: [{ id: '1151', code: '1151', name: 'مركز تكلفة 1-5', isPrimary: false, accountType: '', isActive: true }] }, { id: '116', code: '116', name: 'مركز تكلفة 6', isPrimary: false, accountType: 'فرعي', isActive: true, children: [{ id: '1161', code: '1161', name: 'مركز تكلفة 1-6', isPrimary: false, accountType: '', isActive: true }] }] }] },
  { id: '2', code: '2', name: 'مركز تكلفة 2', isPrimary: true, accountType: 'رئيسي', isActive: true, children: [{ id: '21', code: '21', name: 'مركز تكلفة 2-1', isPrimary: false, accountType: 'فرعي', isActive: true, children: [{ id: '211', code: '211', name: 'مركز تكلفة 2-1-1', isPrimary: false, accountType: '', isActive: true }, { id: '212', code: '212', name: 'مركز تكلفة 2-1-2', isPrimary: false, accountType: '', isActive: false }] }, { id: '22', code: '22', name: 'مركز تكلفة 2-2', isPrimary: false, accountType: '', isActive: true }] },
  { id: '3', code: '3', name: 'مركز تكلفة 3', isPrimary: true, accountType: 'رئيسي', isActive: true, children: [{ id: '31', code: '31', name: 'مركز تكلفة 3-1', isPrimary: false, accountType: '', isActive: true, children: [{ id: '311', code: '311', name: 'مركز تكلفة 3-1-1', isPrimary: false, accountType: 'فرعي', isActive: true }] }] },
  { id: '4', code: '4', name: 'مركز تكلفة 4', isPrimary: true, accountType: 'رئيسي', isActive: false, children: [{ id: '41', code: '41', name: 'مركز تكلفة 4-1', isPrimary: false, accountType: '', isActive: false }] },
  { id: '5', code: '5', name: 'مركز تكلفة 5', isPrimary: true, accountType: 'رئيسي', isActive: true, children: [{ id: '51', code: '51', name: 'مركز تكلفة 5-1', isPrimary: false, accountType: 'فرعي', isActive: true }, { id: '52', code: '52', name: 'مركز تكلفة 5-2', isPrimary: false, accountType: '', isActive: true }] },
];

export const getCostCentersSampleData = (): CostCenter[] => JSON.parse(JSON.stringify(costCentersData));
