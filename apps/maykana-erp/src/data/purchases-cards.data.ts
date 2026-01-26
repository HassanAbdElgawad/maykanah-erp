// Purchases Cards Data - Purchase management feature cards
import {
  Frame,
  ReceiptText,
  FileText,
  DollarSign,
  ShoppingCart,
  Package,
  FileCheck,
  RefreshCcw,
} from 'lucide-react';

export interface PurchaseCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  path: string;
}

export const getPurchaseCards = (t: (key: string) => string): PurchaseCard[] => [
  {
    id: 'suppliers',
    title: t('purchases.suppliers'),
    description: t('purchases.suppliers_desc'),
    icon: Frame,
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    path: '/purchases/suppliers',
  },
  {
    id: 'purchase-requests',
    title: t('purchases.purchase_requests'),
    description: t('purchases.purchase_requests_desc'),
    icon: ReceiptText,
    bgColor: '#fffef5',
    iconColor: '#f9a825',
    path: '/purchases/material-requests',
  },
  {
    id: 'price-quote-requests',
    title: t('purchases.price_quote_requests'),
    description: t('purchases.price_quote_requests_desc'),
    icon: FileText,
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    path: '/purchases/price-quote-requests',
  },
  {
    id: 'supplier-price-quotes',
    title: t('purchases.supplier_price_quotes'),
    description: t('purchases.supplier_price_quotes_desc'),
    icon: DollarSign,
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
    path: '/purchases/supplier-price-quotes',
  },
  {
    id: 'purchase-orders',
    title: t('purchases.purchase_orders'),
    description: t('purchases.purchase_orders_desc'),
    icon: ShoppingCart,
    bgColor: '#fef5f8',
    iconColor: '#c2185b',
    path: '/purchases/purchase-orders',
  },
  {
    id: 'material-receipts',
    title: t('purchases.material_receipts'),
    description: t('purchases.material_receipts_desc'),
    icon: Package,
    bgColor: '#f0faf9',
    iconColor: '#00897b',
    path: '/purchases/material-receipts',
  },
  {
    id: 'purchase-invoices',
    title: t('purchases.purchase_invoices'),
    description: t('purchases.purchase_invoices_desc'),
    icon: FileCheck,
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    path: '/purchases/purchase-invoices',
  },
  {
    id: 'purchase-returns',
    title: t('purchases.purchase_returns'),
    description: t('purchases.purchase_returns_desc'),
    icon: RefreshCcw,
    bgColor: '#fff9f0',
    iconColor: '#f57c00',
    path: '/purchases/purchase-returns',
  },
];
