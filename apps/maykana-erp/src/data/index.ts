// Central export for all data files - Organized by module

// Cards - Navigation data
export * from './cards/accounting-cards.data';
export * from './cards/competitions-cards.data';
export * from './cards/purchases-cards.data';
export * from './cards/reports-cards.data';
export * from './cards/sales-cards.data';
export * from './cards/settings-cards.data';
export * from './cards/strategy-cards.data';
export * from './cards/warehouses-cards.data';
export * from './cards/workflow-cards.data';

// Accounting module
export * from './accounting/accounting.data';
export * from './accounting/accounting-entries.data';
export * from './accounting/cash-custody.data';
export * from './accounting/payment-vouchers.data';
export * from './accounting/receipt-vouchers.data';
export * from './accounting/entries.data';

// Purchases module
export * from './purchases/suppliers.data';
export * from './purchases/price-quotes.data';

// Sales module
export * from './sales/customers.data';
export * from './sales/sales-invoices.data';
export * from './sales/delivery-notes.data';
export * from './sales/price-lists.data';
export * from './sales/sales-representatives.data';

// Warehouses module
export * from './warehouses/inventory-count.data';
export * from './warehouses/inventory-materials.data';

// Assets module
export * from './assets/assets.data';
export * from './assets/maintenance.data';

// Competitions module
export * from './competitions/vendor-qualification.data';
export * from './competitions/work-orders.data';

// HR module
export * from './hr/my-requests.data';

// Settings module
export * from './settings/settings.data';

// Reports
export * from './reports/accounting/financial-position.data';
export * from './reports/accounting/general-ledger.data';
export * from './reports/accounting/income-statement.data';
export * from './reports/accounting/trial-balance.data';
export * from './reports/accounting/trial-balance-movement.data';
export * from './reports/purchases/purchase-orders-analysis.data';
export * from './reports/purchases/purchase-prices-by-category.data';
export * from './reports/purchases/purchases-analysis.data';
export * from './reports/purchases/purchases-prices-by-item.data';
export * from './reports/purchases/supplier-quotes-comparison.data';
export * from './reports/purchases/items-required-order-receipt.data';
export * from './reports/sales/sales-reports.data';

// Common data
export * from './common/auth.data';
export * from './common/dashboard.data';
export * from './common/inbox.data';
export * from './common/tasks.data';
export * from './common/support.data';
export * from './common/ui.data';

// Templates
export * from './templates/tax-templates.data';
export * from './templates/terms-conditions-templates.data';
export * from './templates/verification-templates.data';

// Workflows
export * from './workflows/workflows.data';
