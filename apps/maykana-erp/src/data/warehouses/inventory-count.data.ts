// Inventory Count Data - Sample inventory count items for warehouse management
export interface InventoryCountItem {
  id: string;
  nameAr: string;
  nameEn: string;
  countDate: string;
  systemQuantity: number;
  actualQuantity: number;
  notesAr: string;
  notesEn: string;
}

export const SAMPLE_INVENTORY_COUNT: InventoryCountItem[] = [
  {
    id: '1',
    nameAr: 'مستودع مشروع A',
    nameEn: 'Project A Warehouse',
    countDate: '2026-01-15',
    systemQuantity: 500,
    actualQuantity: 498,
    notesAr: 'ملاحظات مستودع مشروع A',
    notesEn: 'Project A Warehouse Notes',
  },
  {
    id: '2',
    nameAr: 'مستودع مشروع B',
    nameEn: 'Project B Warehouse',
    countDate: '2026-01-14',
    systemQuantity: 900,
    actualQuantity: 895,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project B Warehouse Notes',
  },
  {
    id: '3',
    nameAr: 'مستودع مشروع C',
    nameEn: 'Project C Warehouse',
    countDate: '2026-01-13',
    systemQuantity: 145,
    actualQuantity: 145,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project C Warehouse Notes',
  },
  {
    id: '4',
    nameAr: 'مستودع مشروع D',
    nameEn: 'Project D Warehouse',
    countDate: '2026-01-12',
    systemQuantity: 411,
    actualQuantity: 410,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project D Warehouse Notes',
  },
  {
    id: '5',
    nameAr: 'مستودع مشروع E',
    nameEn: 'Project E Warehouse',
    countDate: '2026-01-11',
    systemQuantity: 123,
    actualQuantity: 120,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project E Warehouse Notes',
  },
  {
    id: '6',
    nameAr: 'مستودع مشروع F',
    nameEn: 'Project F Warehouse',
    countDate: '2026-01-10',
    systemQuantity: 200,
    actualQuantity: 200,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project F Warehouse Notes',
  },
  {
    id: '7',
    nameAr: 'مستودع مشروع G',
    nameEn: 'Project G Warehouse',
    countDate: '2026-01-09',
    systemQuantity: 200,
    actualQuantity: 198,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project G Warehouse Notes',
  },
  {
    id: '8',
    nameAr: 'مستودع مشروع H',
    nameEn: 'Project H Warehouse',
    countDate: '2026-01-08',
    systemQuantity: 150,
    actualQuantity: 148,
    notesAr: 'ملاحظات مستودع مشروع Aa',
    notesEn: 'Project H Warehouse Notes',
  },
];
