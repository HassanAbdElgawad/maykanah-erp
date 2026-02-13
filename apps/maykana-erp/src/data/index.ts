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
export * from './warehouses/inventory-closing-list.data';
export * from './warehouses/warehouse-movement.data';
export * from './warehouses/inventory-movements.data';
export * from './warehouses/products.data';
export * from './warehouses/warehouse-serial-number.data';
export * from './warehouses/warehouse-price-lists.data';
export * from './warehouses/warehouse-batches.data';
export * from './warehouses/warehouse-item-price.data';
export * from './warehouses/warehouse-goods-arrival-cost.data';
export * from './warehouses/inventory-categories.data';
export * from './warehouses/inventory-movement-form.data';
export * from './warehouses/inventory-movement-view.data';
export * from './warehouses/goods-arrival-cost-form.data';

// Assets module
export * from './assets/assets.data';
export * from './assets/maintenance.data';
export * from './assets/add-asset-form.data';

// Competitions module
export * from './competitions/vendor-qualification.data';
export * from './competitions/work-orders.data';

// HR module
export * from './hr/my-requests.data';

// Settings module
export * from './settings/settings.data';
export * from './settings/unit-of-measures.data';
export * from './settings/maintenance-team.data';
export * from './settings/asset-locations.data';
export * from './settings/asset-categories.data';
export * from './settings/item-groups.data';
export * from './settings/warehouse-management.data';
export * from './settings/user-management.data';
export * from './settings/department-management.data';
export * from './settings/terms-template.data';
export * from './settings/terms-conditions.data';
export * from './settings/currencies.data';
export * from './settings/tax-settings.data';
export * from './settings/payment-methods.data';
export * from './settings/fiscal-year.data';
export * from './settings/cost-centers.data';
export * from './settings/chart-of-accounts.data';
export * from './settings/budget.data';
export * from './settings/branch-management.data';

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
export * from './reports/warehouses/damaged-returned.data';
export * from './reports/warehouses/inventory-variance.data';
export * from './reports/warehouses/item-movement.data';
export * from './reports/warehouses/inventory-balance.data';

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

// Strategy
export * from './strategy/strategic-plans.data';
export * from './strategy/projects.data';
export * from './strategy/meetings.data';
export * from './strategy/documents.data';
export * from './strategy/plan-tracking.data';
export * from './strategy/plan-link-details.data';
export * from './strategy/new-plan-link.data';
export * from './strategy/new-project.data';
