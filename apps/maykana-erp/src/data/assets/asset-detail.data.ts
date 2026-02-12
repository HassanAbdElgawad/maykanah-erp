export interface AssetDetail {
  id: string;
  code: string;
  name: string;
  category: string;
  group: string;
  department: string;
  costCenter: string;
  supplier: string;
  purchaseDate: string;
  usageDate: string;
  warranty: string;
  depreciationType: string;
  originalValue: number;
  currentValue: number;
  depreciationRate: number;
  custodyHolder: string;
  isActive: boolean;
  image: string;
}

export const assetDetailData: AssetDetail = {
  id: '1',
  code: 'AS-IT-2023-0054',
  name: 'Laptop Dell Latitude 5420',
  category: 'الأجهزة الإلكترونية',
  group: 'حواسيب محمولة',
  department: 'IT Department',
  costCenter: 'CC-IT-001',
  supplier: 'SaudiTech Distribution',
  purchaseDate: '2023-04-10',
  usageDate: '2023-04-15',
  warranty: 'فعال حتى 10-04-2025',
  depreciationType: 'جاري',
  originalValue: 9800,
  currentValue: 6790,
  depreciationRate: 31,
  custodyHolder: 'IT Support - يوسف الحمراني',
  isActive: true,
  image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop',
};
