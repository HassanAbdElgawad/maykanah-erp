export interface ItemGroup {
  id: string;
  name: string;
  inventoryAccount: string;
  isActive: boolean;
}

export const mockGroups: Record<string, ItemGroup> = {
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
