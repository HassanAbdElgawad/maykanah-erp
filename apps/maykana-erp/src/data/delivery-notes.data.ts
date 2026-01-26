// Delivery Notes Data Types and Sample Data

export type DeliveryNoteStatus = 'delivered' | 'pending' | 'in-transit' | 'cancelled';

export interface DeliveryNoteItem {
  id: number;
  itemCode: string;
  itemName: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  totalPrice: number;
}

export interface DeliveryNote {
  id: number;
  noteNumber: string;
  customer: string;
  deliveryDate: string;
  orderNumber: string; // أمر ربح
  invoiceNumber: string; // فاتورة المبيعات
  warehouse: string;
  deliveryAddress: string;
  deliveredBy: string;
  status: DeliveryNoteStatus;
  items: DeliveryNoteItem[];
  subtotal: number;
  taxAmount: number;
  discount: number;
  total: number;
  notes: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
}

export const deliveryNotesData: DeliveryNote[] = [
  {
    id: 1,
    noteNumber: 'DN-2025-001',
    customer: 'شركة الأمل التجارية',
    deliveryDate: '2025-11-10',
    orderNumber: 'WO-2026-001',
    invoiceNumber: 'INV-2025-001',
    warehouse: 'المستودع الرئيسي',
    deliveryAddress: 'الرياض - حي النخيل',
    deliveredBy: 'أحمد محمد',
    status: 'delivered',
    items: [
      {
        id: 1,
        itemCode: 'A5220-SD',
        itemName: 'جهاز كمبيوتر محمول',
        unit: 'قطعة',
        quantity: 2,
        unitPrice: 5000,
        discount: 5,
        tax: 15,
        totalPrice: 10925,
      },
      {
        id: 2,
        itemCode: 'B3310-HD',
        itemName: 'شاشة عرض 27 بوصة',
        unit: 'قطعة',
        quantity: 3,
        unitPrice: 1500,
        discount: 0,
        tax: 15,
        totalPrice: 5175,
      },
    ],
    subtotal: 13500,
    taxAmount: 1600,
    discount: 475,
    total: 14625,
    notes: 'تم التسليم بنجاح',
    discountType: 'percentage',
    discountValue: 5,
  },
  {
    id: 2,
    noteNumber: 'DN-2025-002',
    customer: 'مؤسسة النجاح',
    deliveryDate: '2025-11-15',
    orderNumber: 'WO-2026-002',
    invoiceNumber: 'INV-2025-002',
    warehouse: 'مستودع جدة',
    deliveryAddress: 'جدة - حي الزهراء',
    deliveredBy: 'خالد أحمد',
    status: 'pending',
    items: [
      {
        id: 1,
        itemCode: 'C4420-PD',
        itemName: 'طابعة ليزر',
        unit: 'قطعة',
        quantity: 1,
        unitPrice: 2000,
        discount: 0,
        tax: 15,
        totalPrice: 2300,
      },
    ],
    subtotal: 2000,
    taxAmount: 300,
    discount: 0,
    total: 2300,
    notes: 'في انتظار التسليم',
    discountType: 'percentage',
    discountValue: 0,
  },
  {
    id: 3,
    noteNumber: 'DN-2025-003',
    customer: 'شركة التقنية الحديثة',
    deliveryDate: '2025-11-20',
    orderNumber: 'WO-2026-003',
    invoiceNumber: 'INV-2025-003',
    warehouse: 'المستودع الرئيسي',
    deliveryAddress: 'الدمام - حي الفيصلية',
    deliveredBy: 'محمد علي',
    status: 'in-transit',
    items: [
      {
        id: 1,
        itemCode: 'D5530-KD',
        itemName: 'لوحة مفاتيح وماوس',
        unit: 'قطعة',
        quantity: 10,
        unitPrice: 200,
        discount: 10,
        tax: 15,
        totalPrice: 2070,
      },
    ],
    subtotal: 2000,
    taxAmount: 270,
    discount: 200,
    total: 2070,
    notes: 'قيد النقل',
    discountType: 'percentage',
    discountValue: 10,
  },
  {
    id: 4,
    noteNumber: 'DN-2025-004',
    customer: 'مؤسسة البناء المتطور',
    deliveryDate: '2025-11-25',
    orderNumber: 'WO-2026-004',
    invoiceNumber: 'INV-2025-004',
    warehouse: 'مستودع الرياض الثاني',
    deliveryAddress: 'الرياض - حي السلام',
    deliveredBy: 'أحمد محمد',
    status: 'delivered',
    items: [
      {
        id: 1,
        itemCode: 'E6640-CD',
        itemName: 'كاميرا مراقبة',
        unit: 'قطعة',
        quantity: 5,
        unitPrice: 800,
        discount: 0,
        tax: 15,
        totalPrice: 4600,
      },
    ],
    subtotal: 4000,
    taxAmount: 600,
    discount: 0,
    total: 4600,
    notes: 'تم التسليم والتركيب',
    discountType: 'percentage',
    discountValue: 0,
  },
  {
    id: 5,
    noteNumber: 'DN-2025-005',
    customer: 'شركة الإبداع التقني',
    deliveryDate: '2025-12-01',
    orderNumber: 'WO-2026-005',
    invoiceNumber: 'INV-2025-005',
    warehouse: 'مستودع جدة',
    deliveryAddress: 'جدة - حي الحمراء',
    deliveredBy: 'خالد أحمد',
    status: 'cancelled',
    items: [
      {
        id: 1,
        itemCode: 'F7750-TD',
        itemName: 'جهاز راوتر',
        unit: 'قطعة',
        quantity: 3,
        unitPrice: 500,
        discount: 5,
        tax: 15,
        totalPrice: 1638.75,
      },
    ],
    subtotal: 1500,
    taxAmount: 213.75,
    discount: 75,
    total: 1638.75,
    notes: 'ملغي بناءً على طلب العميل',
    discountType: 'percentage',
    discountValue: 5,
  },
  {
    id: 6,
    noteNumber: 'DN-2025-006',
    customer: 'شركة النور للتجارة',
    deliveryDate: '2025-12-05',
    orderNumber: 'WO-2026-001',
    invoiceNumber: 'INV-2025-006',
    warehouse: 'المستودع الرئيسي',
    deliveryAddress: 'الرياض - حي العليا',
    deliveredBy: 'محمد علي',
    status: 'pending',
    items: [
      {
        id: 1,
        itemCode: 'G8860-LD',
        itemName: 'إضاءة LED',
        unit: 'علبة',
        quantity: 20,
        unitPrice: 100,
        discount: 0,
        tax: 15,
        totalPrice: 2300,
      },
    ],
    subtotal: 2000,
    taxAmount: 300,
    discount: 0,
    total: 2300,
    notes: 'جاهز للتسليم',
    discountType: 'percentage',
    discountValue: 0,
  },
  {
    id: 7,
    noteNumber: 'DN-2025-007',
    customer: 'مؤسسة التميز',
    deliveryDate: '2025-12-10',
    orderNumber: 'WO-2026-002',
    invoiceNumber: 'INV-2025-007',
    warehouse: 'مستودع الدمام',
    deliveryAddress: 'الدمام - حي الشاطئ',
    deliveredBy: 'أحمد محمد',
    status: 'in-transit',
    items: [
      {
        id: 1,
        itemCode: 'H9970-FD',
        itemName: 'أثاث مكتبي',
        unit: 'قطعة',
        quantity: 10,
        unitPrice: 1500,
        discount: 10,
        tax: 15,
        totalPrice: 15525,
      },
    ],
    subtotal: 15000,
    taxAmount: 2025,
    discount: 1500,
    total: 15525,
    notes: 'في الطريق للتسليم',
    discountType: 'percentage',
    discountValue: 10,
  },
  {
    id: 8,
    noteNumber: 'DN-2025-008',
    customer: 'شركة المستقبل المشرق',
    deliveryDate: '2025-12-15',
    orderNumber: 'WO-2026-003',
    invoiceNumber: 'INV-2025-008',
    warehouse: 'المستودع الرئيسي',
    deliveryAddress: 'الرياض - حي الورود',
    deliveredBy: 'خالد أحمد',
    status: 'delivered',
    items: [
      {
        id: 1,
        itemCode: 'I1180-MD',
        itemName: 'شاشة عرض تفاعلية',
        unit: 'قطعة',
        quantity: 2,
        unitPrice: 8000,
        discount: 5,
        tax: 15,
        totalPrice: 17480,
      },
    ],
    subtotal: 16000,
    taxAmount: 2280,
    discount: 800,
    total: 17480,
    notes: 'تم التسليم والتدريب',
    discountType: 'percentage',
    discountValue: 5,
  },
];
