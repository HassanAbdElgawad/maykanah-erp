// Inventory Materials Data - Sample materials for warehouse management
export interface InventoryMaterial {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  category: string;
  unit: string;
  quantity: number;
  minQuantity: number;
  price: number;
  status: 'available' | 'low' | 'out';
}

export const SAMPLE_MATERIALS: InventoryMaterial[] = [
  {
    id: '1',
    code: 'MAT-001',
    nameAr: 'ورق A4',
    nameEn: 'A4 Paper',
    category: 'قرطاسية',
    unit: 'حزمة',
    quantity: 150,
    minQuantity: 50,
    price: 25.00,
    status: 'available',
  },
  {
    id: '2',
    code: 'MAT-002',
    nameAr: 'أقلام جاف',
    nameEn: 'Ballpoint Pens',
    category: 'قرطاسية',
    unit: 'علبة',
    quantity: 30,
    minQuantity: 20,
    price: 15.00,
    status: 'available',
  },
  {
    id: '3',
    code: 'MAT-003',
    nameAr: 'حبر طابعة أسود',
    nameEn: 'Black Printer Ink',
    category: 'مستلزمات طباعة',
    unit: 'قطعة',
    quantity: 5,
    minQuantity: 10,
    price: 120.00,
    status: 'low',
  },
  {
    id: '4',
    code: 'MAT-004',
    nameAr: 'ملفات حفظ',
    nameEn: 'File Folders',
    category: 'قرطاسية',
    unit: 'علبة',
    quantity: 0,
    minQuantity: 15,
    price: 35.00,
    status: 'out',
  },
  {
    id: '5',
    code: 'MAT-005',
    nameAr: 'دباسة مكتبية',
    nameEn: 'Office Stapler',
    category: 'أدوات مكتبية',
    unit: 'قطعة',
    quantity: 25,
    minQuantity: 10,
    price: 45.00,
    status: 'available',
  },
  {
    id: '6',
    code: 'MAT-006',
    nameAr: 'شريط لاصق',
    nameEn: 'Adhesive Tape',
    category: 'أدوات مكتبية',
    unit: 'قطعة',
    quantity: 80,
    minQuantity: 30,
    price: 8.00,
    status: 'available',
  },
];
