export interface AssetLocation {
  id: string;
  code: string;
  name: string;
  city: string;
  branch: string;
  department: string;
  notes: string;
  isActive: boolean;
}

export const mockLocations: Record<string, AssetLocation> = {
  '1': {
    id: '1',
    code: 'LOC-RYD-001',
    name: 'مستودع الرياض',
    city: 'الرياض',
    branch: 'الفرع الرئيسي',
    department: 'تقنية المعلومات',
    notes: 'مستودع رئيسي للمعدات التقنية',
    isActive: false,
  },
  '2': {
    id: '2',
    code: 'LOC-JED-002',
    name: 'مستودع جدة',
    city: 'جدة',
    branch: 'جدة الرئيسي',
    department: 'المالية',
    notes: 'مستودع فرع جدة',
    isActive: true,
  },
  '3': {
    id: '3',
    code: 'LOC-RYD-003',
    name: 'مستودع الرياض',
    city: 'الرياض',
    branch: 'الفرع الرئيسي',
    department: 'التشغيل',
    notes: '',
    isActive: true,
  },
};
