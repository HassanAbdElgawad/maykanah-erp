// Warehouses Feature Cards Data
import {
  Package,
  Warehouse,
  Lock,
  DollarSign,
  FolderTree,
  ClipboardList,
  ArrowRightLeft,
  ShoppingBag,
  Tag,
  Layers,
  Calculator,
  Hash,
  TrendingUp,
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
    titleKey: 'warehouses.products_list',
    descKey: 'warehouses.products_list_desc',
    icon: ShoppingBag,
    path: '/warehouses/products-list',
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.inventory_movements',
    descKey: 'warehouses.inventory_movements_desc',
    icon: ArrowRightLeft,
    path: '/warehouses/inventory-movements',
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
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
    titleKey: 'warehouses.warehouse_movement',
    descKey: 'warehouses.warehouse_movement_desc',
    icon: Warehouse,
    path: '/warehouses/warehouse-movement',
    bgColor: '#fef5f8',
    iconColor: '#c2185b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.inventory_closing',
    descKey: 'warehouses.inventory_closing_desc',
    icon: Lock,
    path: '/warehouses/inventory-closing',
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.material_requests',
    descKey: 'warehouses.material_requests_desc',
    icon: Package,
    path: '/warehouses/material-requests',
    bgColor: '#f0faf9',
    iconColor: '#00897b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.inventory_categories',
    descKey: 'warehouses.inventory_categories_desc',
    icon: FolderTree,
    path: '/warehouses/inventory-categories',
    bgColor: '#fffef5',
    iconColor: '#f9a825',
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
    titleKey: 'warehouses.price_lists',
    descKey: 'warehouses.price_lists_desc',
    icon: Tag,
    path: '/warehouses/price-lists',
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.batches',
    descKey: 'warehouses.batches_desc',
    icon: Layers,
    path: '/warehouses/batches',
    bgColor: '#fef5f8',
    iconColor: '#c2185b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.item_price',
    descKey: 'warehouses.item_price_desc',
    icon: Calculator,
    path: '/warehouses/item-price',
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.serial_number',
    descKey: 'warehouses.serial_number_desc',
    icon: Hash,
    path: '/warehouses/serial-number',
    bgColor: '#f0faf9',
    iconColor: '#00897b',
    hasContent: false,
  },
  {
    titleKey: 'warehouses.goods_arrival_cost',
    descKey: 'warehouses.goods_arrival_cost_desc',
    icon: TrendingUp,
    path: '/warehouses/goods-arrival-cost',
    bgColor: '#fff9f0',
    iconColor: '#f57c00',
    hasContent: false,
  },
];
