// Warehouses Feature Cards Data
import {
  Package,
  Warehouse,
  Lock,
  DollarSign,
  FolderTree,
  ClipboardList,
  Settings,
  ShoppingBag,
  Archive,
} from 'lucide-react';

export interface WarehouseCard {
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  path: string;
  bgColor: string;
  iconColor: string;
  hasContent?: boolean;
}

export const getWarehouseCards = (): WarehouseCard[] => [
  {
    titleKey: 'warehouses.inventory_materials',
    descKey: 'warehouses.inventory_materials_desc',
    icon: Package,
    path: '/warehouses/inventory-materials',
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.product_management',
    descKey: 'warehouses.product_management_desc',
    icon: ShoppingBag,
    path: '/warehouses/product-management',
    bgColor: '#fffef5',
    iconColor: '#f9a825',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.closing_service',
    descKey: 'warehouses.closing_service_desc',
    icon: Lock,
    path: '/warehouses/closing-service',
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.opening_balances',
    descKey: 'warehouses.opening_balances_desc',
    icon: DollarSign,
    path: '/warehouses/opening-balances',
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.warehouse_management',
    descKey: 'warehouses.warehouse_management_desc',
    icon: Warehouse,
    path: '/warehouses/warehouse-management',
    bgColor: '#fef5f8',
    iconColor: '#c2185b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.material_damage',
    descKey: 'warehouses.material_damage_desc',
    icon: Archive,
    path: '/warehouses/material-damage',
    bgColor: '#f0faf9',
    iconColor: '#00897b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.item_groups',
    descKey: 'warehouses.item_groups_desc',
    icon: FolderTree,
    path: '/warehouses/item-groups',
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.inventory_count',
    descKey: 'warehouses.inventory_count_desc',
    icon: ClipboardList,
    path: '/warehouses/inventory-count',
    bgColor: '#fff9f0',
    iconColor: '#f57c00',
    hasContent: true,
  },
  {
    titleKey: 'warehouses.warehouse_settings',
    descKey: 'warehouses.warehouse_settings_desc',
    icon: Settings,
    path: '/warehouses/warehouse-settings',
    bgColor: '#fffef5',
    iconColor: '#f9a825',
    hasContent: false,
  },
];
