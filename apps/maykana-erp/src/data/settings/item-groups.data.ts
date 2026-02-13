export interface ItemGroup {
  id: string;
  name: string;
  inventoryAccount: string;
  isActive: boolean;
}

export interface ItemGroupListItem {
  id: string;
  name: string;
  nameAr: string;
  status: string;
  owner: string;
  linkedAccount: string;
  inventoryAccount: string;
  salesAccount: string;
  costOfGoodsSoldAccount: string;
  importsAccount: string;
  expensesAccount: string;
  isActive: boolean;
}

const mockGroups: Record<string, ItemGroup> = {
  '1': {
    id: '1',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: true,
  },
  '2': {
    id: '2',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: true,
  },
  '3': {
    id: '3',
    name: 'اسم المجموعة',
    inventoryAccount: 'حساب المخزون',
    isActive: false,
  },
};

export const getItemGroupById = (id: string): ItemGroup | null => mockGroups[id] ?? null;
export const getItemGroupsSampleData = (): ItemGroup[] => Object.values(mockGroups);

const listGroupsData: ItemGroupListItem[] = [
  { id: '1', name: 'اسم المجموعة', nameAr: 'اسم المجموعة', status: 'حساب الخصومات او', owner: '', linkedAccount: '', inventoryAccount: 'حساب المخزون', salesAccount: 'حساب المبيعات', costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة', importsAccount: 'حساب الواردات', expensesAccount: 'حساب المروفات', isActive: true },
  { id: '2', name: 'اسم المجموعة', nameAr: 'اسم المجموعة', status: 'حساب الخصومات او', owner: '', linkedAccount: '', inventoryAccount: 'حساب المخزون', salesAccount: 'حساب المبيعات', costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة', importsAccount: 'حساب الواردات', expensesAccount: 'حساب المروفات', isActive: true },
  { id: '3', name: 'اسم المجموعة', nameAr: 'اسم المجموعة', status: 'حساب الخصومات او', owner: '', linkedAccount: '', inventoryAccount: 'حساب المخزون', salesAccount: 'حساب المبيعات', costOfGoodsSoldAccount: 'حساب تكلفة البضاعة المباعة', importsAccount: 'حساب الواردات', expensesAccount: 'حساب المروفات', isActive: false },
];
export const getItemGroupsListSampleData = (): ItemGroupListItem[] => [...listGroupsData];
