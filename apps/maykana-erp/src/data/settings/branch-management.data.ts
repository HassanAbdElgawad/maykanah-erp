// Branch Management data for Settings module

export interface Branch {
  id: string;
  code: string;
  name: string;
  address: string;
  phone: string;
  isActive: boolean;
}

const branchesData: Branch[] = [
  { id: '1', code: '12345', name: 'فرع الأمل', address: 'شارع النخيل 45', phone: '050-123-4567', isActive: true },
  { id: '2', code: '67890', name: 'فرع الإبداع', address: 'ميدان الحرية 12', phone: '054-987-6543', isActive: true },
  { id: '3', code: '54321', name: 'فرع النجاح', address: 'شارع الورد 30', phone: '056-321-0987', isActive: false },
  { id: '4', code: '98765', name: 'فرع المستقبل', address: 'شارع الكمبر 78', phone: '050-654-3210', isActive: true },
  { id: '5', code: '13579', name: 'فرع التميز', address: 'شارع السالم 22', phone: '056-321-0987', isActive: true },
  { id: '6', code: '24680', name: 'فرع الإرتياح', address: 'شارع أكتل 99', phone: '053-456-7890', isActive: true },
  { id: '7', code: '86420', name: 'فرع الريادة', address: 'شارع الدولة 55', phone: '052-789-1234', isActive: false },
  { id: '8', code: '11223', name: 'فرع التفوق', address: 'شارع الإبداع 33', phone: '051-234-5678', isActive: true },
  { id: '9', code: '44556', name: 'فرع الأفق', address: 'شارع الفرح 88', phone: '050-987-6543', isActive: false },
];

export const getBranchesSampleData = (): Branch[] => [...branchesData];
