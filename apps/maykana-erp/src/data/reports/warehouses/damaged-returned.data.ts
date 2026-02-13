/**
 * Damaged Returned Report - Data layer
 * تقرير التالف أو المرتجع
 */

export interface DamagedReturnedItem {
  id: string;
  itemCode: string;
  itemName: string;
  warehouse: string;
  unit: string;
  quantity: number;
  damageReason: string;
  movementType: string;
  inspectionStatus: string;
  operationDate: string;
}

export const getDamagedReturnedSampleData = (): DamagedReturnedItem[] => [
  { id: '1', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 500, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '500' },
  { id: '2', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 966, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '966' },
  { id: '3', itemCode: 'كود الصنف', itemName: 'اسم الصنف', warehouse: 'المستودع', unit: 'وحدة القياس', quantity: 215, damageReason: 'سبب التلف', movementType: 'نوع الحركة', inspectionStatus: 'حالة الفحص', operationDate: '215' },
  { id: '4', itemCode: 'SR-001', itemName: 'قطعة غيار', warehouse: 'الرياض', unit: 'قطعة', quantity: 50, damageReason: 'تلف أثناء النقل', movementType: 'تالف', inspectionStatus: 'تم الفحص', operationDate: '1/15/2025' },
  { id: '5', itemCode: 'SR-002', itemName: 'جهاز إلكتروني', warehouse: 'جدة', unit: 'جهاز', quantity: 12, damageReason: 'عيب مصنعي', movementType: 'مرتجع', inspectionStatus: 'قيد الفحص', operationDate: '2/20/2025' },
  { id: '6', itemCode: 'SR-003', itemName: 'مواد خام', warehouse: 'الدمام', unit: 'كيلو', quantity: 300, damageReason: 'انتهاء الصلاحية', movementType: 'تالف', inspectionStatus: 'تم الفحص', operationDate: '3/10/2025' },
  { id: '7', itemCode: 'SR-004', itemName: 'أدوات صيانة', warehouse: 'الجبيل', unit: 'طقم', quantity: 25, damageReason: 'عدم مطابقة المواصفات', movementType: 'مرتجع', inspectionStatus: 'تم الفحص', operationDate: '4/05/2025' },
  { id: '8', itemCode: 'SR-005', itemName: 'مستلزمات مكتبية', warehouse: 'الرياض', unit: 'علبة', quantity: 100, damageReason: 'تلف بسبب الرطوبة', movementType: 'تالف', inspectionStatus: 'قيد الفحص', operationDate: '5/18/2025' },
];
