export const breadcrumbRoutes = [
  // Main Routes
  { path: "/home", label: "sidebar.home" },
  { path: "/inbox", label: "sidebar.inbox" },
  
  // Accounting Module
  { path: "/accounting", label: "sidebar.accounting" },
  { path: "/accounting/entries", label: "accounting.entries.title" },
  { path: "/accounting/entries/create", label: "accounting.entries.create_new" },
  { path: "/accounting/cash-custody", label: "accounting.cash_custody" },
  { path: "/accounting/receipt-documents", label: "accounting.receipt_documents" },
  { path: "/accounting/payment-documents", label: "accounting.payment_documents" },
  
  // Purchases Module
  { path: "/purchases", label: "sidebar.purchases" },
  { path: "/purchases/suppliers", label: "purchases.suppliers" },
  { path: "/purchases/purchase-requests", label: "purchases.purchase_requests" },
  { path: "/purchases/price-quote-requests", label: "purchases.price_quote_requests" },
  { path: "/purchases/supplier-price-quotes", label: "purchases.supplier_price_quotes" },
  { path: "/purchases/purchase-orders", label: "purchases.purchase_orders" },
  { path: "/purchases/material-receipts", label: "purchases.material_receipts" },
  { path: "/purchases/purchase-invoices", label: "purchases.purchase_invoices" },
  { path: "/purchases/purchase-returns", label: "purchases.purchase_returns" },
  
  // Other Modules
  { path: "/sales", label: "sidebar.sales" },
  { path: "/competitions", label: "sidebar.competitions" },
  { path: "/assets", label: "sidebar.assets" },
  { path: "/hr", label: "sidebar.hr" },
  { path: "/projects", label: "sidebar.projects" },
  { path: "/strategy", label: "sidebar.strategy" },
  { path: "/warehouses", label: "sidebar.warehouses" },
  { path: "/workflow", label: "sidebar.workflow" },
  { path: "/reports", label: "sidebar.reports" },
  { path: "/settings", label: "sidebar.settings" },
  { path: "/support", label: "sidebar.support" },
];
