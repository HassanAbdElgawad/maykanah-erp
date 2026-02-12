export interface AssetMovement {
  id: number;
  movementNumber: string;
  assetName: string;
  fromLocation: string;
  toLocation: string;
  fromEntity: string;
  toEntity: string;
  date: string;
  movementType: string;
  status: string;
}

export const assetMovementsData: AssetMovement[] = [
  {
    id: 1,
    movementNumber: 'MV-2026-045',
    assetName: 'Laptop Dell 5420',
    fromLocation: 'القسم الرئيسي – IT – مكتب 2',
    toLocation: 'القسم الرئيسي – HR – مكتب 1',
    fromEntity: 'يوسف الصواف',
    toEntity: 'هاجر بترينية',
    date: '30/11/2025',
    movementType: 'نقل عهدة + نقل موقع',
    status: 'مكتمل',
  },
  {
    id: 2,
    movementNumber: 'MV-2026-046',
    assetName: 'مكتب خشبي',
    fromLocation: 'القسم الرئيسي – IT – مكتب 2',
    toLocation: 'القسم الرئيسي – HR – مكتب 1',
    fromEntity: 'يوسف الصواف',
    toEntity: 'هاجر بترينية',
    date: '30/11/2025',
    movementType: 'نقل عهدة + نقل موقع',
    status: 'مكتمل',
  },
  {
    id: 3,
    movementNumber: 'MV-2026-047',
    assetName: 'كرسي مكتب متحرك',
    fromLocation: 'القسم الرئيسي – HR – مكتب 1',
    toLocation: 'القسم الرئيسي – IT – مكتب 2',
    fromEntity: 'يوسف الصواف',
    toEntity: 'هاجر بترينية',
    date: '30/11/2025',
    movementType: 'نقل عهدة + نقل موقع',
    status: 'مكتمل',
  },
  {
    id: 4,
    movementNumber: 'MV-2026-048',
    assetName: 'لوحة مفاتيح + فأرة + سلكية',
    fromLocation: 'القسم الرئيسي – HR – مكتب 1',
    toLocation: 'القسم الرئيسي – IT – مكتب 2',
    fromEntity: 'يوسف الصواف',
    toEntity: 'هاجر بترينية',
    date: '30/11/2025',
    movementType: 'نقل عهدة + نقل موقع',
    status: 'مكتمل',
  },
];
