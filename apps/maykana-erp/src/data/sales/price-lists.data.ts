// Price Lists Data Types and Sample Data

export type PriceListType = 'sales' | 'purchase';

export interface PriceListItem {
  id: number;
  itemCode: string;
  itemName: string;
  unit: string;
  unitPrice: number;
  discount: number;
  tax: number;
  totalPrice: number;
}

export interface PriceList {
  id: number;
  listNumber: string;
  listName: string;
  listType: PriceListType;
  currency: string;
  description: string;
  items: PriceListItem[];
  createdDate: string;
  isActive: boolean;
}

export const priceListsData: PriceList[] = [
  {
    id: 1,
    listNumber: 'PL-2025-001',
    listName: 'قائمة أسعار المبيعات الأساسية',
    listType: 'sales',
    currency: 'ر.س',
    description: 'قائمة الأسعار الأساسية للمبيعات',
    items: [
      {
        id: 1,
        itemCode: 'A5220-SD',
        itemName: 'جهاز كمبيوتر محمول',
        unit: 'قطعة',
        unitPrice: 5000,
        discount: 5,
        tax: 15,
        totalPrice: 5462.5,
      },
      {
        id: 2,
        itemCode: 'B3310-HD',
        itemName: 'شاشة عرض 27 بوصة',
        unit: 'قطعة',
        unitPrice: 1500,
        discount: 0,
        tax: 15,
        totalPrice: 1725,
      },
    ],
    createdDate: '2025-01-15',
    isActive: true,
  },
  {
    id: 2,
    listNumber: 'PL-2025-002',
    listName: 'قائمة أسعار الجملة',
    listType: 'sales',
    currency: 'ر.س',
    description: 'أسعار خاصة لعملاء الجملة',
    items: [
      {
        id: 1,
        itemCode: 'C4420-PD',
        itemName: 'طابعة ليزر',
        unit: 'قطعة',
        unitPrice: 1800,
        discount: 10,
        tax: 15,
        totalPrice: 1863,
      },
    ],
    createdDate: '2025-02-01',
    isActive: true,
  },
  {
    id: 3,
    listNumber: 'PL-2025-003',
    listName: 'قائمة أسعار VIP',
    listType: 'sales',
    currency: 'ر.س',
    description: 'أسعار مميزة للعملاء المميزين',
    items: [
      {
        id: 1,
        itemCode: 'D5530-KD',
        itemName: 'لوحة مفاتيح وماوس',
        unit: 'قطعة',
        unitPrice: 180,
        discount: 15,
        tax: 15,
        totalPrice: 176.85,
      },
      {
        id: 2,
        itemCode: 'E6640-CD',
        itemName: 'كاميرا مراقبة',
        unit: 'قطعة',
        unitPrice: 750,
        discount: 10,
        tax: 15,
        totalPrice: 776.25,
      },
    ],
    createdDate: '2025-02-10',
    isActive: true,
  },
  {
    id: 4,
    listNumber: 'PL-2025-004',
    listName: 'قائمة أسعار الشراء',
    listType: 'purchase',
    currency: 'ر.س',
    description: 'أسعار الشراء من الموردين',
    items: [
      {
        id: 1,
        itemCode: 'F7750-TD',
        itemName: 'جهاز راوتر',
        unit: 'قطعة',
        unitPrice: 400,
        discount: 0,
        tax: 15,
        totalPrice: 460,
      },
    ],
    createdDate: '2025-02-15',
    isActive: true,
  },
  {
    id: 5,
    listNumber: 'PL-2025-005',
    listName: 'قائمة أسعار الموسمية',
    listType: 'sales',
    currency: 'ر.س',
    description: 'عروض موسمية وتخفيضات',
    items: [
      {
        id: 1,
        itemCode: 'G8860-LD',
        itemName: 'إضاءة LED',
        unit: 'علبة',
        unitPrice: 90,
        discount: 20,
        tax: 15,
        totalPrice: 82.8,
      },
    ],
    createdDate: '2025-03-01',
    isActive: false,
  },
  {
    id: 6,
    listNumber: 'PL-2025-006',
    listName: 'قائمة أسعار المشاريع',
    listType: 'sales',
    currency: 'ر.س',
    description: 'أسعار خاصة للمشاريع الكبيرة',
    items: [
      {
        id: 1,
        itemCode: 'H9970-FD',
        itemName: 'أثاث مكتبي',
        unit: 'قطعة',
        unitPrice: 1400,
        discount: 12,
        tax: 15,
        totalPrice: 1418.4,
      },
    ],
    createdDate: '2025-03-10',
    isActive: true,
  },
];
