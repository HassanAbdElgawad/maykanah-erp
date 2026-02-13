// Department Management data for Settings module

export interface Department {
  id: string;
  code: string;
  name: string;
  isPrimary: boolean;
  accountType: string;
  isActive: boolean;
  children?: Department[];
}

const departmentsData: Department[] = [
  {
    id: '1',
    code: 'CC-1',
    name: 'قسم-1',
    isPrimary: true,
    accountType: 'رئيسي',
    isActive: true,
    children: [
      { id: '11', code: 'CC-11', name: 'قسم-2', isPrimary: false, accountType: '', isActive: true },
      { id: '12', code: 'CC-12', name: 'قسم-3', isPrimary: false, accountType: '', isActive: false },
    ],
  },
  {
    id: '2',
    code: 'CC-2',
    name: 'قسم-1',
    isPrimary: true,
    accountType: 'رئيسي',
    isActive: true,
    children: [
      { id: '21', code: 'CC-21', name: 'قسم-2', isPrimary: false, accountType: '', isActive: true },
      { id: '22', code: 'CC-22', name: 'قسم-3', isPrimary: false, accountType: '', isActive: true },
      { id: '23', code: 'CC-23', name: 'قسم-4', isPrimary: false, accountType: '', isActive: false },
      { id: '24', code: 'CC-24', name: 'قسم-5', isPrimary: false, accountType: '', isActive: true },
    ],
  },
  { id: '3', code: 'CC-2', name: 'قسم-1', isPrimary: true, accountType: 'رئيسي', isActive: false },
];

export const getDepartmentsSampleData = (): Department[] => JSON.parse(JSON.stringify(departmentsData));
