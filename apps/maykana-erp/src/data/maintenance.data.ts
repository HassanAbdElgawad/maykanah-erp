// Maintenance Data - Sample maintenance records for asset management
export interface MaintenanceRecord {
  id: string;
  maintenanceNumber: string;
  assetName: string;
  maintenanceType: string;
  maintenanceDate: string;
  team: string;
  assignedTechnician: string;
  duration: string;
  cost: string;
  status: 'completed' | 'in_progress';
}

export const MOCK_MAINTENANCE_DATA: MaintenanceRecord[] = [
  {
    id: '1',
    maintenanceNumber: 'MN-12345',
    assetName: 'جهاز الكمبيوتر المحمول',
    maintenanceType: 'تصليح الشاشة',
    maintenanceDate: '2023-10-01',
    team: 'فريق التقنية المتقدمة',
    assignedTechnician: 'أحمد السعيدي',
    duration: '3 أيام',
    cost: '1500',
    status: 'completed',
  },
  {
    id: '2',
    maintenanceNumber: 'MN-67890',
    assetName: 'اسم الأصل',
    maintenanceType: 'تحديث البرمجيات',
    maintenanceDate: '2023-10-05',
    team: 'فريق الدعم الفني',
    assignedTechnician: 'ليلى العلي',
    duration: 'يوم واحد',
    cost: '500',
    status: 'completed',
  },
  {
    id: '3',
    maintenanceNumber: 'MN-54321',
    assetName: 'الطابعة',
    maintenanceType: 'استبدال الحبر',
    maintenanceDate: '2023-10-10',
    team: 'فريق الصيانة السريعة',
    assignedTechnician: 'سامي الجابري',
    duration: 'ساعتان',
    cost: '200',
    status: 'in_progress',
  },
  {
    id: '4',
    maintenanceNumber: 'MN-98765',
    assetName: 'جهاز التوجيه',
    maintenanceType: 'إعادة ضبط المصنع',
    maintenanceDate: '2023-10-15',
    team: 'فريق الشبكات',
    assignedTechnician: 'فاطمة الزهراء',
    duration: '4 ساعات',
    cost: '300',
    status: 'in_progress',
  },
];
