/**
 * Warehouse Movement - Data layer
 * حركات المستودعات (تحويل / تلف)
 */

import type { LucideIcon } from 'lucide-react';

export interface MovementTypeConfig {
  type: string;
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  path: string;
}

export const getMovementTypesConfig = (IconTransfer: LucideIcon, IconDamage: LucideIcon): MovementTypeConfig[] => [
  {
    type: 'transfer',
    titleKey: 'warehouses.transfer_stock',
    descriptionKey: 'warehouses.transfer_stock_desc',
    icon: IconTransfer,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    path: '/warehouses/warehouse-movement/transfer/add',
  },
  {
    type: 'damage',
    titleKey: 'warehouses.damage_stock',
    descriptionKey: 'warehouses.damage_stock_desc',
    icon: IconDamage,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    path: '/warehouses/warehouse-movement/damage/add',
  },
];

export interface WarehouseMovement {
  id: string;
  code: string;
  movementNumber: string;
  date: string;
  movementType: 'transfer' | 'damage';
  itemName: string;
  warehouseFrom: string;
  warehouseTo: string;
  costCenter: string;
}

export const getWarehouseMovementSampleData = (): WarehouseMovement[] => [
  {
    id: '1',
    code: '547B12300015',
    movementNumber: '1222236',
    date: '2025-5-20',
    movementType: 'transfer',
    itemName: 'هوائي',
    warehouseFrom: 'مستودع الرياض',
    warehouseTo: 'مستودع جدة',
    costCenter: 'مركز التكلفة الرئيسي',
  },
  {
    id: '2',
    code: '547B12300016',
    movementNumber: '1222237',
    date: '2025-5-21',
    movementType: 'damage',
    itemName: 'مادة تالفة',
    warehouseFrom: 'مستودع الرياض',
    warehouseTo: '-',
    costCenter: 'مركز التكلفة الفرعي',
  },
  {
    id: '3',
    code: '547B12300017',
    movementNumber: '1222238',
    date: '2025-5-22',
    movementType: 'transfer',
    itemName: 'قطع غيار',
    warehouseFrom: 'مستودع مكة',
    warehouseTo: 'مستودع الدمام',
    costCenter: 'مركز التكلفة الرئيسي',
  },
];
