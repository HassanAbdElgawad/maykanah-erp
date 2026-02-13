/**
 * =============================================================================
 * CONFIG: حالة التكامل - Integration Status Registry
 * =============================================================================
 *
 * هذا الملف هو الطبقة المركزية (Central Layer) لتتبع أي صفحة أو جزء من التطبيق
 * يعمل ببيانات حقيقية (API) وأيها مازال على بيانات تجريبية (Dummy).
 *
 * عند بدء Integration: غيّر القيمة من 'dummy' إلى 'integrated' للصفحة المعنية.
 *
 * الاستخدام:
 * - import { getIntegrationStatus } from '@/config/integration-status.config';
 * - const status = getIntegrationStatus('reports/inventory-balance');
 * - if (status === 'integrated') { ... fetch from API ... } else { ... use dummy ... }
 *
 * =============================================================================
 */

export type IntegrationStatus = 'dummy' | 'integrated';

export type ScreenKey = string;

/**
 * سجل حالة التكامل لكل صفحة/جزء
 * - dummy: يعمل ببيانات تجريبية من @/data
 * - integrated: متصل بـ API ويعمل ببيانات حقيقية
 */
export const INTEGRATION_STATUS_REGISTRY: Record<ScreenKey, IntegrationStatus> = {
  // ═══ Auth ═══
  'auth/login': 'dummy',
  'auth/forgot-password': 'dummy',

  // ═══ Reports ═══
  'reports/general-ledger': 'dummy',
  'reports/financial-position': 'dummy',
  'reports/trial-balance': 'dummy',
  'reports/income-statement': 'dummy',
  'reports/trial-balance-movement': 'dummy',
  'reports/inventory-balance': 'dummy',
  'reports/item-movement': 'dummy',
  'reports/inventory-variance': 'dummy',
  'reports/damaged-returned': 'dummy',
  'reports/purchases-analysis': 'dummy',
  'reports/purchase-orders-analysis': 'dummy',
  'reports/purchase-prices-by-category': 'dummy',
  'reports/purchases-prices-by-item': 'dummy',
  'reports/supplier-quotes-comparison': 'dummy',
  'reports/items-required-order-receipt': 'dummy',
  'reports/sales/*': 'dummy',

  // ═══ Settings ═══
  'settings/unit-of-measures': 'dummy',
  'settings/company': 'dummy',
  'settings/chart-of-accounts': 'dummy',
  'settings/asset-categories': 'dummy',
  'settings/asset-locations': 'dummy',
  'settings/maintenance-team': 'dummy',
  'settings/warehouse-management': 'dummy',
  'settings/department-management': 'dummy',
  'settings/user-management': 'dummy',
  'settings/*': 'dummy',

  // ═══ Sales ═══
  'sales/customers': 'dummy',
  'sales/sales-invoices': 'dummy',
  'sales/delivery-notes': 'dummy',
  'sales/price-lists': 'dummy',
  'sales/price-quotes': 'dummy',
  'sales/sales-representatives': 'dummy',

  // ═══ Purchases ═══
  'purchases/suppliers': 'dummy',
  'purchases/material-requests': 'dummy',
  'purchases/purchase-invoices': 'dummy',
  'purchases/price-quotes': 'dummy',

  // ═══ Warehouses ═══
  'warehouses/inventory-closing': 'dummy',
  'warehouses/inventory-movements': 'dummy',
  'warehouses/products-list': 'dummy',
  'warehouses/warehouse-batches': 'dummy',
  'warehouses/warehouse-price-lists': 'dummy',
  'warehouses/warehouse-item-price': 'dummy',
  'warehouses/warehouse-good-arrival-cost': 'dummy',
  'warehouses/inventory-categories': 'dummy',
  'warehouses/warehouse-movement': 'dummy',
  'warehouses/inventory-count': 'dummy',
  'warehouses/inventory-materials': 'dummy',

  // ═══ Accounting ═══
  'accounting/entries': 'dummy',
  'accounting/receipt-vouchers': 'dummy',
  'accounting/payment-vouchers': 'dummy',
  'accounting/cash-custody': 'dummy',

  // ═══ Competitions ═══
  'competitions/*': 'dummy',

  // ═══ Workflows ═══
  'workflows': 'dummy',
  'workflows/add-edit': 'dummy',

  // ═══ Strategy ═══
  'strategy/strategic-plans': 'dummy',
  'strategy/projects': 'dummy',
  'strategy/meetings': 'dummy',
  'strategy/documents': 'dummy',
  'strategy/plan-tracking': 'dummy',

  // ═══ Templates ═══
  'templates/tax-templates': 'dummy',
  'templates/terms-conditions-templates': 'dummy',
  'templates/verification-templates': 'dummy',

  // ═══ Assets ═══
  'assets/asset-management': 'dummy',
  'assets/asset-movements': 'dummy',

  // ═══ HR ═══
  'hr/*': 'dummy',

  // ═══ Maintenance ═══
  'maintenance/work-orders': 'dummy',

  // ═══ Common ═══
  'common/dashboard': 'dummy',
  'common/inbox': 'dummy',
  'common/support': 'dummy',
  'common/tasks': 'dummy',
};

/**
 * يحصل على حالة التكامل لصفحة معينة
 */
export const getIntegrationStatus = (screenKey: string): IntegrationStatus => {
  if (INTEGRATION_STATUS_REGISTRY[screenKey] !== undefined) {
    return INTEGRATION_STATUS_REGISTRY[screenKey];
  }
  // Fallback: ابحث عن مطابقة wildcard (مثلاً settings/*)
  const parts = screenKey.split('/');
  for (let i = parts.length; i > 0; i--) {
    const wildcardKey = parts.slice(0, i).join('/') + '/*';
    if (INTEGRATION_STATUS_REGISTRY[wildcardKey] !== undefined) {
      return INTEGRATION_STATUS_REGISTRY[wildcardKey];
    }
  }
  return 'dummy';
};

/**
 * يتحقق هل الصفحة متكاملة (تعمل ببيانات حقيقية)
 */
export const isIntegrated = (screenKey: string): boolean => {
  return getIntegrationStatus(screenKey) === 'integrated';
};
