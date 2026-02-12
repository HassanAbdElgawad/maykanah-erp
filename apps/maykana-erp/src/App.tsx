import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Accounting } from './screens/Accounting/Accounting';
import { AccountingEntries } from './screens/Accounting/AccountingEntries';
import { AccountingEntryForm } from './screens/Accounting/AccountingEntryForm';
import { ReceiptVouchers, ReceiptVoucherForm } from './screens/Accounting/ReceiptVouchers';
import { PaymentVouchers, PaymentVoucherForm } from './screens/Accounting/PaymentVouchers';
import { CashCustody, CashCustodyForm } from './screens/Accounting/CashCustody';
import { Purchases } from './screens/Purchases/Purchases';
import { Suppliers } from './screens/Purchases/Suppliers';
import { PurchaseInvoices, PurchaseInvoiceForm } from './screens/Purchases/PurchaseInvoices';
import { PurchaseSettings } from './screens/Purchases/PurchaseSettings';
import {
  MaterialRequests,
  MaterialRequestForm,
  MaterialRequestsReview,
  MaterialReceipts,
  MaterialReceiptsForm,
  MaterialRequestsList,
  MaterialRequestsListForm,
  AddEditMaterialRequest,
} from './screens/Purchases/MaterialRequests';
import {
  PriceQuoteRequests,
  PriceQuoteRequestFormPage,
  PriceQuoteDetailPage,
} from './screens/Purchases/PriceQuoteRequests';
import { SupplierPriceQuotes } from './screens/Purchases/SupplierPriceQuotes';
import { Sales } from './screens/Sales/Sales';
import { Customers, AddEditCustomer } from './screens/Sales/Customers';
import { PriceQuotes, AddEditPriceQuote } from './screens/Purchases/PriceQuotes';
import { WorkOrders, AddEditWorkOrder } from './screens/Maintenance/WorkOrders';
import { SalesInvoices, AddEditSalesInvoice } from './screens/Sales/SalesInvoices';
import { DeliveryNotes, AddEditDeliveryNote } from './screens/Sales/DeliveryNotes';
import { PriceLists, AddEditPriceList } from './screens/Sales/PriceLists';
import { SalesRepresentatives } from './screens/Sales/SalesRepresentatives';
import { Competitions } from './screens/Competitions/Competitions';
import { VendorQualification, AddEditVendorQualification } from './screens/Competitions/VendorQualification';
import { VendorUsers, AddEditVendorUser } from './screens/Competitions/VendorUsers';
import {
  VendorNotifications,
  AddEditVendorNotification,
} from './screens/Competitions/VendorNotifications';
import {
  CommitteeFormation,
  AddEditCommitteeFormation,
} from './screens/Competitions/CommitteeFormation';
import {
  EvaluationCriteria,
  AddEditEvaluationCriteria,
} from './screens/Competitions/EvaluationCriteria';
import {
  CompetitionLaunch,
  AddEditCompetitionLaunch,
} from './screens/Competitions/CompetitionLaunch';
import {
  CompetitionExtension,
  AddEditCompetitionExtension,
} from './screens/Competitions/CompetitionExtension';
import { ReceiveOffers, AddEditReceiveOffers } from './screens/Competitions/ReceiveOffers';
import { OpenOffers, AddEditOpenOffers } from './screens/Competitions/OpenOffers';
import { OffersInspection, AddEditOffersInspection } from './screens/Competitions/OffersInspection';
import { Award, AddEditAward } from './screens/Competitions/Award';
import {
  AwardConfirmation,
  AddEditAwardConfirmation,
} from './screens/Competitions/AwardConfirmation';
import { Agreements, AgreementsForm } from './screens/Competitions/Agreements';
import { WorkOrder, WorkOrderForm } from './screens/Competitions/WorkOrder';
import { Contract, ContractForm } from './screens/Competitions/Contract';
import { FinancialClaim, FinancialClaimForm } from './screens/Competitions/FinancialClaim';
import {
  CompletionCertificate,
  CompletionCertificateForm,
} from './screens/Competitions/CompletionCertificate';
import { BankGuarantees, BankGuaranteesForm } from './screens/Competitions/BankGuarantees';
import { Assets } from './screens/Assets';
import { AssetMovements, AssetMovementsForm } from './screens/Assets/AssetMovements';
import { AssetDetail, AssetManagement } from './screens/Assets/AssetManagement';
import { AddAssetForm } from './screens/Assets/AssetManagement/AddAssetForm';
import { AssetValueAdjustment } from './screens/Assets/AssetValueAdjustment';
import { SaleDisposal } from './screens/Assets/SaleDisposal';
import { Maintenance } from './screens/Maintenance/Maintenance';
import { Strategy } from './screens/Strategy/Strategy';
import { Tasks, AddTask } from './screens/Common/Tasks';
import { Meetings, NewMeeting } from './screens/Strategy/Meetings';
import { Documents, NewDocument } from './screens/Strategy/Documents';
import { PlanTracking, NewPlanLink, PlanLinkDetails } from './screens/Strategy/PlanTracking';
import {
  StrategicPlans,
  NewStrategicPlan,
  StrategicPlanDetails,
} from './screens/Strategy/StrategicPlans';
import { Projects, NewProject, ProjectDetails } from './screens/Strategy/Projects';
import { Workflows, AddEditWorkflow } from './screens/Workflows';
import {
  VerificationTemplates,
  AddEditVerificationTemplate,
} from './screens/Templates/VerificationTemplates';
import { Warehouses } from './screens/Warehouses';
import { ProductsList, AddEditProduct, ViewProduct } from './screens/Warehouses/ProductsList';
import {
  InventoryMovementsList,
  AddEditInventoryMovement,
  ViewInventoryMovement,
} from './screens/Warehouses/InventoryMovements';
import {
  WarehouseMovementList,
  SelectMovementType,
  TransferStock,
  DamageStock,
} from './screens/Warehouses/WarehouseMovement';
import { InventoryClosingList, AddEditInventoryClosing } from './screens/Warehouses/InventoryClosing';
import { InventoryMaterials } from './screens/Warehouses/InventoryMaterials';
import { InventoryCount, AddEditInventoryCount } from './screens/Warehouses/InventoryCount';
import { InventoryCategories, InventoryCategoryForm } from './screens/Warehouses/InventoryCategories';
import { OpeningBalances, OpeningBalanceForm } from './screens/Accounting/OpeningBalances';
import { WarehousePriceLists, WarehousePriceListForm } from './screens/Warehouses/WarehousePriceLists';
import { WarehouseBatches, WarehouseBatchForm } from './screens/Warehouses/WarehouseBatches';
import { WarehouseItemPrice, WarehouseItemPriceForm } from './screens/Warehouses/WarehouseItemPrice';
import { WarehouseSerialNumber, WarehouseSerialNumberForm } from './screens/Warehouses/WarehouseSerialNumber';
import { WarehouseGoodsArrivalCost, WarehouseGoodsArrivalCostForm } from './screens/Warehouses/WarehouseGoodsArrivalCost';
import { HR } from './screens/HR';
import { EmployeeCenter, AddEmployee } from './screens/HR/EmployeeCenter';
import { MyRequests, NewRequest } from './screens/HR/MyRequests';
import { EmployeeSectionPage, StartWorkRequests, NewStartWorkRequest, ContractRenewalRequests, NewContractRenewal, ResignationRequests, NewResignation, LeavesAttendanceEmp, NewLeaveRequest, NewCompensatoryLeave, NewPermissionRequest, NewAttendanceCorrection, RemoteWorkPolicies, RemoteWorkAssignment, SecondmentRequests, SalariesCompensations, NewAdvanceRequest as EmpNewAdvanceRequest, NewPromotionRequest as EmpNewPromotionRequest, EvaluationsTraining, NewTrainingRequest, NewEvaluationRequest } from './screens/HR/EmployeeSection';
import { LeavesAttendance, LeaveRequestForm } from './screens/HR/LeavesAttendance';
import { RemoteWork } from './screens/HR/RemoteWork';
import {
  SalariesRewards,
  NewSalaryPayroll,
  SalaryPayrollDetails,
  NewAdvanceRequest,
  NewPromotionRequest,
} from './screens/HR/SalariesRewards';
import { PerformanceDevelopment, AddEvaluation } from './screens/HR/PerformanceDevelopment';
import { CommunicationLibrary, NewAnnouncement } from './screens/HR/CommunicationLibrary';
import { Recruitment, NewRecruitmentRequest } from './screens/HR/Recruitment';
import { AlertsRequests, NewAlert } from './screens/HR/AlertsRequests';
import { Dashboard } from './screens/Common/Dashboard';
import { Inbox, ChecklistDetails, NewEntry } from './screens/Common/Inbox';
import { LoginPage } from './screens/Auth/LoginPage';
import { ForgotPasswordPage } from './screens/Auth/ForgotPasswordPage';
import {
  Reports,
  GeneralLedgerReport,
  FinancialPositionReport,
  TrialBalanceReport,
  IncomeStatementReport,
  TrialBalanceMovementReport,
  InventoryBalanceReport,
  ItemMovementReport,
  InventoryVarianceReport,
  DamagedReturnedReport,
} from './screens/Reports';
import {
  SalesRepresentativeCommissionReport,
  InactiveCustomersReport,
  CustomerAcquisitionReport,
  SalesReport,
  CustomerAgingReport,
} from './screens/Reports/Sales/SalesReports';
import {
  SettingsPage,
  CompanySettings,
  ChartOfAccounts,
  AccountSettings,
  Currencies,
  TaxSettings,
  FiscalYear,
  AccountingPeriods,
  PaymentMethods,
  TermsConditions,
  CostCenters,
  Budget,
  BudgetForm,
  BudgetEditForm,
  SalesSettings,
  TermsTemplate,
  AssetCategories,
  AssetCategoryForm,
  AssetCategoryEdit,
  AssetCategoryDetails,
  AssetLocations,
  AssetLocationForm,
  AssetLocationEdit,
  MaintenanceTeam,
  MaintenanceTeamForm,
  MaintenanceTeamEdit,
  MaintenanceTeamView,
  WarehousesGeneralSettings,
  UnitOfMeasures,
  UnitOfMeasureForm,
  UnitOfMeasureEdit,
  ItemGroups,
  WarehouseManagement,
  WarehouseManagementForm,
  WarehouseManagementEdit,
  DepartmentManagement,
  UserManagement,
  BranchManagement,
} from './screens/Settings';
import { TaxTemplates } from './screens/Templates/TaxTemplates';
import { TermsConditionsTemplates } from './screens/Templates/TermsConditionsTemplates';
import { SupplierQuotesComparison } from './screens/Reports/Purchases/SupplierQuotesComparison';
import { PurchaseOrdersAnalysis } from './screens/Reports/Purchases/PurchaseOrdersAnalysis';
import { PurchasePricesByCategory } from './screens/Reports/Purchases/PurchasePricesByCategory';
import { ItemsRequiredOrderReceipt } from './screens/Reports/Purchases/ItemsRequiredOrderReceipt';
import { PurchasesAnalysis } from './screens/Reports/Purchases/PurchasesAnalysis';
import { PurchasesPricesByItem } from './screens/Reports/Purchases/PurchasesPricesByItem';
import { SupportPage } from './screens/Common/SupportPage';
import { ComingSoon } from './screens/Common/ComingSoon';
import { ErrorPage } from './screens/Common/ErrorPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PresentationView } from './screens/Presentation';

const router = createBrowserRouter([
  {
    path: '/login-page',
    element: <LoginPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/presentation',
    element: <PresentationView />,
  },
  {
    path: '/presentation/:slideNumber',
    element: <PresentationView />,
  },
  {
    path: '/inbox',
    element: (
      <ProtectedRoute>
        <Inbox />
      </ProtectedRoute>
    ),
  },
  {
    path: '/inbox/checklist/:id',
    element: (
      <ProtectedRoute>
        <ChecklistDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/inbox/new',
    element: (
      <ProtectedRoute>
        <NewEntry />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting',
    element: (
      <ProtectedRoute>
        <Accounting />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/entries',
    element: (
      <ProtectedRoute>
        <AccountingEntries />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/entries/create',
    element: (
      <ProtectedRoute>
        <AccountingEntryForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/receipt-vouchers',
    element: (
      <ProtectedRoute>
        <ReceiptVouchers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/receipt-vouchers/create',
    element: (
      <ProtectedRoute>
        <ReceiptVoucherForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/payment-vouchers',
    element: (
      <ProtectedRoute>
        <PaymentVouchers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/payment-vouchers/create',
    element: (
      <ProtectedRoute>
        <PaymentVoucherForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/cash-custody',
    element: (
      <ProtectedRoute>
        <CashCustody />
      </ProtectedRoute>
    ),
  },
  {
    path: '/accounting/cash-custody/create',
    element: (
      <ProtectedRoute>
        <CashCustodyForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/accounting/general-ledger',
    element: (
      <ProtectedRoute>
        <GeneralLedgerReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/accounting/financial-position',
    element: (
      <ProtectedRoute>
        <FinancialPositionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/accounting/trial-balance',
    element: (
      <ProtectedRoute>
        <TrialBalanceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/accounting/income-statement',
    element: (
      <ProtectedRoute>
        <IncomeStatementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/accounting/trial-balance-movement',
    element: (
      <ProtectedRoute>
        <TrialBalanceMovementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/supplier-quotes-comparison',
    element: (
      <ProtectedRoute>
        <SupplierQuotesComparison />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/purchase-orders-analysis',
    element: (
      <ProtectedRoute>
        <PurchaseOrdersAnalysis />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/prices-by-category',
    element: (
      <ProtectedRoute>
        <PurchasePricesByCategory />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/items-required-order-receipt',
    element: (
      <ProtectedRoute>
        <ItemsRequiredOrderReceipt />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/purchases-analysis',
    element: (
      <ProtectedRoute>
        <PurchasesAnalysis />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/purchases/purchases-prices-by-item',
    element: (
      <ProtectedRoute>
        <PurchasesPricesByItem />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/representatives-commission',
    element: (
      <ProtectedRoute>
        <SalesRepresentativeCommissionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/inactive-customers',
    element: (
      <ProtectedRoute>
        <InactiveCustomersReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/customer-acquisition',
    element: (
      <ProtectedRoute>
        <CustomerAcquisitionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/sales-analysis',
    element: (
      <ProtectedRoute>
        <SalesReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/customer-aging',
    element: (
      <ProtectedRoute>
        <CustomerAgingReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/representatives-commission',
    element: (
      <ProtectedRoute>
        <SalesRepresentativeCommissionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/inactive-customers',
    element: (
      <ProtectedRoute>
        <InactiveCustomersReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/customer-acquisition',
    element: (
      <ProtectedRoute>
        <CustomerAcquisitionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/sales-analysis',
    element: (
      <ProtectedRoute>
        <SalesReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/sales/customer-aging',
    element: (
      <ProtectedRoute>
        <CustomerAgingReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases',
    element: (
      <ProtectedRoute>
        <Purchases />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/purchases/purchase-settings',
    element: (
      <ProtectedRoute>
        <PurchaseSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/suppliers',
    element: (
      <ProtectedRoute>
        <Suppliers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests',
    element: (
      <ProtectedRoute>
        <MaterialRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests/create',
    element: (
      <ProtectedRoute>
        <MaterialRequestForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests/:id',
    element: (
      <ProtectedRoute>
        <MaterialRequestForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests-list',
    element: (
      <ProtectedRoute>
        <MaterialRequestsList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests-list/create',
    element: (
      <ProtectedRoute>
        <MaterialRequestsListForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests-list/:id',
    element: (
      <ProtectedRoute>
        <MaterialRequestsListForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-requests-review',
    element: (
      <ProtectedRoute>
        <MaterialRequestsReview />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-receipts',
    element: (
      <ProtectedRoute>
        <MaterialReceipts />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-receipts/create',
    element: (
      <ProtectedRoute>
        <MaterialReceiptsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/material-receipts/:id',
    element: (
      <ProtectedRoute>
        <MaterialReceiptsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/purchase-invoices',
    element: (
      <ProtectedRoute>
        <PurchaseInvoices />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/purchase-invoices/create',
    element: (
      <ProtectedRoute>
        <PurchaseInvoiceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/purchase-invoices/:id',
    element: (
      <ProtectedRoute>
        <PurchaseInvoiceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/price-quote-requests',
    element: (
      <ProtectedRoute>
        <PriceQuoteRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/price-quote-requests/create',
    element: (
      <ProtectedRoute>
        <PriceQuoteRequestFormPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/price-quote-requests/:id',
    element: (
      <ProtectedRoute>
        <PriceQuoteDetailPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/purchases/supplier-price-quotes',
    element: (
      <ProtectedRoute>
        <SupplierPriceQuotes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales',
    element: (
      <ProtectedRoute>
        <Sales />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/customers',
    element: (
      <ProtectedRoute>
        <Customers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/customers/add',
    element: (
      <ProtectedRoute>
        <AddEditCustomer />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/customers/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCustomer />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes',
    element: (
      <ProtectedRoute>
        <PriceQuotes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes/add',
    element: (
      <ProtectedRoute>
        <AddEditPriceQuote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditPriceQuote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders',
    element: (
      <ProtectedRoute>
        <WorkOrders />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders/add',
    element: (
      <ProtectedRoute>
        <AddEditWorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditWorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices',
    element: (
      <ProtectedRoute>
        <SalesInvoices />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices/add',
    element: (
      <ProtectedRoute>
        <AddEditSalesInvoice />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditSalesInvoice />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes',
    element: (
      <ProtectedRoute>
        <DeliveryNotes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes/add',
    element: (
      <ProtectedRoute>
        <AddEditDeliveryNote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditDeliveryNote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists',
    element: (
      <ProtectedRoute>
        <PriceLists />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists/add',
    element: (
      <ProtectedRoute>
        <AddEditPriceList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditPriceList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-representatives',
    element: (
      <ProtectedRoute>
        <SalesRepresentatives />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes',
    element: (
      <ProtectedRoute>
        <PriceQuotes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes/add',
    element: (
      <ProtectedRoute>
        <AddEditPriceQuote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-quotes/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditPriceQuote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders',
    element: (
      <ProtectedRoute>
        <WorkOrders />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders/add',
    element: (
      <ProtectedRoute>
        <AddEditWorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/work-orders/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditWorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices',
    element: (
      <ProtectedRoute>
        <SalesInvoices />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices/add',
    element: (
      <ProtectedRoute>
        <AddEditSalesInvoice />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-invoices/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditSalesInvoice />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes',
    element: (
      <ProtectedRoute>
        <DeliveryNotes />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes/add',
    element: (
      <ProtectedRoute>
        <AddEditDeliveryNote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/delivery-notes/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditDeliveryNote />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists',
    element: (
      <ProtectedRoute>
        <PriceLists />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists/add',
    element: (
      <ProtectedRoute>
        <AddEditPriceList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/price-lists/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditPriceList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/sales/sales-representatives',
    element: (
      <ProtectedRoute>
        <SalesRepresentatives />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions',
    element: (
      <ProtectedRoute>
        <Competitions />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-qualification',
    element: (
      <ProtectedRoute>
        <VendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-qualification/add',
    element: (
      <ProtectedRoute>
        <AddEditVendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-qualification/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users',
    element: (
      <ProtectedRoute>
        <VendorUsers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users/add',
    element: (
      <ProtectedRoute>
        <AddEditVendorUser />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVendorUser />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications',
    element: (
      <ProtectedRoute>
        <VendorNotifications />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications/add',
    element: (
      <ProtectedRoute>
        <AddEditVendorNotification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVendorNotification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation',
    element: (
      <ProtectedRoute>
        <CommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation/add',
    element: (
      <ProtectedRoute>
        <AddEditCommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria',
    element: (
      <ProtectedRoute>
        <EvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria/add',
    element: (
      <ProtectedRoute>
        <AddEditEvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditEvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch',
    element: (
      <ProtectedRoute>
        <CompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch/add',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension',
    element: (
      <ProtectedRoute>
        <CompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension/add',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers',
    element: (
      <ProtectedRoute>
        <ReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers/add',
    element: (
      <ProtectedRoute>
        <AddEditReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers',
    element: (
      <ProtectedRoute>
        <OpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers/add',
    element: (
      <ProtectedRoute>
        <AddEditOpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditOpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection',
    element: (
      <ProtectedRoute>
        <OffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection/add',
    element: (
      <ProtectedRoute>
        <AddEditOffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditOffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award',
    element: (
      <ProtectedRoute>
        <Award />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award/add',
    element: (
      <ProtectedRoute>
        <AddEditAward />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditAward />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation',
    element: (
      <ProtectedRoute>
        <AwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation/add',
    element: (
      <ProtectedRoute>
        <AddEditAwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditAwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements',
    element: (
      <ProtectedRoute>
        <Agreements />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements/add',
    element: (
      <ProtectedRoute>
        <AgreementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements/edit/:id',
    element: (
      <ProtectedRoute>
        <AgreementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order',
    element: (
      <ProtectedRoute>
        <WorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order/add',
    element: (
      <ProtectedRoute>
        <WorkOrderForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order/edit/:id',
    element: (
      <ProtectedRoute>
        <WorkOrderForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract',
    element: (
      <ProtectedRoute>
        <Contract />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract/add',
    element: (
      <ProtectedRoute>
        <ContractForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract/edit/:id',
    element: (
      <ProtectedRoute>
        <ContractForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim',
    element: (
      <ProtectedRoute>
        <FinancialClaim />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim/add',
    element: (
      <ProtectedRoute>
        <FinancialClaimForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim/edit/:id',
    element: (
      <ProtectedRoute>
        <FinancialClaimForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate',
    element: (
      <ProtectedRoute>
        <CompletionCertificate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate/add',
    element: (
      <ProtectedRoute>
        <CompletionCertificateForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate/edit/:id',
    element: (
      <ProtectedRoute>
        <CompletionCertificateForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees',
    element: (
      <ProtectedRoute>
        <BankGuarantees />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees/add',
    element: (
      <ProtectedRoute>
        <BankGuaranteesForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees/edit/:id',
    element: (
      <ProtectedRoute>
        <BankGuaranteesForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users',
    element: (
      <ProtectedRoute>
        <VendorUsers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users/add',
    element: (
      <ProtectedRoute>
        <AddEditVendorUser />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-users/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVendorUser />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications',
    element: (
      <ProtectedRoute>
        <VendorNotifications />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications/add',
    element: (
      <ProtectedRoute>
        <AddEditVendorNotification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/vendor-notifications/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVendorNotification />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation',
    element: (
      <ProtectedRoute>
        <CommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation/add',
    element: (
      <ProtectedRoute>
        <AddEditCommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/committee-formation/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCommitteeFormation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria',
    element: (
      <ProtectedRoute>
        <EvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria/add',
    element: (
      <ProtectedRoute>
        <AddEditEvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/evaluation-criteria/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditEvaluationCriteria />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch',
    element: (
      <ProtectedRoute>
        <CompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch/add',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-launch/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionLaunch />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension',
    element: (
      <ProtectedRoute>
        <CompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension/add',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/competition-extension/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditCompetitionExtension />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers',
    element: (
      <ProtectedRoute>
        <ReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers/add',
    element: (
      <ProtectedRoute>
        <AddEditReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/receive-offers/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditReceiveOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers',
    element: (
      <ProtectedRoute>
        <OpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers/add',
    element: (
      <ProtectedRoute>
        <AddEditOpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/open-offers/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditOpenOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection',
    element: (
      <ProtectedRoute>
        <OffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection/add',
    element: (
      <ProtectedRoute>
        <AddEditOffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/offers-inspection/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditOffersInspection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award',
    element: (
      <ProtectedRoute>
        <Award />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award/add',
    element: (
      <ProtectedRoute>
        <AddEditAward />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditAward />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation',
    element: (
      <ProtectedRoute>
        <AwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation/add',
    element: (
      <ProtectedRoute>
        <AddEditAwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/award-confirmation/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditAwardConfirmation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements',
    element: (
      <ProtectedRoute>
        <Agreements />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements/add',
    element: (
      <ProtectedRoute>
        <AgreementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/agreements/edit/:id',
    element: (
      <ProtectedRoute>
        <AgreementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order',
    element: (
      <ProtectedRoute>
        <WorkOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order/add',
    element: (
      <ProtectedRoute>
        <WorkOrderForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/work-order/edit/:id',
    element: (
      <ProtectedRoute>
        <WorkOrderForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract',
    element: (
      <ProtectedRoute>
        <Contract />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract/add',
    element: (
      <ProtectedRoute>
        <ContractForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/contract/edit/:id',
    element: (
      <ProtectedRoute>
        <ContractForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim',
    element: (
      <ProtectedRoute>
        <FinancialClaim />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim/add',
    element: (
      <ProtectedRoute>
        <FinancialClaimForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/financial-claim/edit/:id',
    element: (
      <ProtectedRoute>
        <FinancialClaimForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate',
    element: (
      <ProtectedRoute>
        <CompletionCertificate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate/add',
    element: (
      <ProtectedRoute>
        <CompletionCertificateForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/completion-certificate/edit/:id',
    element: (
      <ProtectedRoute>
        <CompletionCertificateForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees',
    element: (
      <ProtectedRoute>
        <BankGuarantees />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees/add',
    element: (
      <ProtectedRoute>
        <BankGuaranteesForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/competitions/bank-guarantees/edit/:id',
    element: (
      <ProtectedRoute>
        <BankGuaranteesForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets',
    element: (
      <ProtectedRoute>
        <Assets />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management',
    element: (
      <ProtectedRoute>
        <AssetManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management/add',
    element: (
      <ProtectedRoute>
        <AddAssetForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management/:id',
    element: (
      <ProtectedRoute>
        <AssetDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements',
    element: (
      <ProtectedRoute>
        <AssetMovements />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/add',
    element: (
      <ProtectedRoute>
        <AssetMovementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/add/asset-detail/:id',
    element: (
      <ProtectedRoute>
        <AssetDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/:id',
    element: (
      <ProtectedRoute>
        <AssetMovementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management',
    element: (
      <ProtectedRoute>
        <AssetManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management/add',
    element: (
      <ProtectedRoute>
        <AddAssetForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-management/:id',
    element: (
      <ProtectedRoute>
        <AssetDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements',
    element: (
      <ProtectedRoute>
        <AssetMovements />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/add',
    element: (
      <ProtectedRoute>
        <AssetMovementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/add/asset-detail/:id',
    element: (
      <ProtectedRoute>
        <AssetDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-movements/:id',
    element: (
      <ProtectedRoute>
        <AssetMovementsForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/maintenance',
    element: (
      <ProtectedRoute>
        <Maintenance />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-value-adjustment',
    element: (
      <ProtectedRoute>
        <AssetValueAdjustment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/sale-disposal',
    element: (
      <ProtectedRoute>
        <SaleDisposal />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/asset-value-adjustment',
    element: (
      <ProtectedRoute>
        <AssetValueAdjustment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/assets/sale-disposal',
    element: (
      <ProtectedRoute>
        <SaleDisposal />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr',
    element: (
      <ProtectedRoute>
        <HR />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee-center',
    element: (
      <ProtectedRoute>
        <EmployeeCenter />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee-center/add',
    element: (
      <ProtectedRoute>
        <AddEmployee />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/my-requests',
    element: (
      <ProtectedRoute>
        <MyRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/start-work',
    element: (
      <ProtectedRoute>
        <StartWorkRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/start-work/new',
    element: (
      <ProtectedRoute>
        <NewStartWorkRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/contract-renewal',
    element: (
      <ProtectedRoute>
        <ContractRenewalRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/contract-renewal/new',
    element: (
      <ProtectedRoute>
        <NewContractRenewal />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/resignation',
    element: (
      <ProtectedRoute>
        <ResignationRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/resignation/new',
    element: (
      <ProtectedRoute>
        <NewResignation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/leaves-attendance',
    element: (
      <ProtectedRoute>
        <LeavesAttendanceEmp />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/leaves-attendance/new',
    element: (
      <ProtectedRoute>
        <NewLeaveRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/leaves-attendance/new-compensatory',
    element: (
      <ProtectedRoute>
        <NewCompensatoryLeave />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/leaves-attendance/new-permission',
    element: (
      <ProtectedRoute>
        <NewPermissionRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/leaves-attendance/new-attendance-correction',
    element: (
      <ProtectedRoute>
        <NewAttendanceCorrection />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/remote-work-policies',
    element: (
      <ProtectedRoute>
        <RemoteWorkPolicies />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/remote-work-assignment',
    element: (
      <ProtectedRoute>
        <RemoteWorkAssignment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/secondment-requests',
    element: (
      <ProtectedRoute>
        <SecondmentRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/salaries-compensations',
    element: (
      <ProtectedRoute>
        <SalariesCompensations />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/salaries-compensations/new-advance',
    element: (
      <ProtectedRoute>
        <EmpNewAdvanceRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/salaries-compensations/new-promotion',
    element: (
      <ProtectedRoute>
        <EmpNewPromotionRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/evaluations-training',
    element: (
      <ProtectedRoute>
        <EvaluationsTraining />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/evaluations-training/new-training',
    element: (
      <ProtectedRoute>
        <NewTrainingRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/evaluations-training/new-evaluation',
    element: (
      <ProtectedRoute>
        <NewEvaluationRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/employee/:section',
    element: (
      <ProtectedRoute>
        <EmployeeSectionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/my-requests',
    element: (
      <ProtectedRoute>
        <MyRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/my-requests/new',
    element: (
      <ProtectedRoute>
        <NewRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/leaves-attendance',
    element: (
      <ProtectedRoute>
        <LeavesAttendance />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/leaves-attendance/new',
    element: (
      <ProtectedRoute>
        <LeaveRequestForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/remote-work',
    element: (
      <ProtectedRoute>
        <RemoteWork />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards',
    element: (
      <ProtectedRoute>
        <SalariesRewards />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/new',
    element: (
      <ProtectedRoute>
        <NewSalaryPayroll />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/:id',
    element: (
      <ProtectedRoute>
        <SalaryPayrollDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/advance/new',
    element: (
      <ProtectedRoute>
        <NewAdvanceRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/promotion/new',
    element: (
      <ProtectedRoute>
        <NewPromotionRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/performance-development',
    element: (
      <ProtectedRoute>
        <PerformanceDevelopment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/performance-development/add-evaluation',
    element: (
      <ProtectedRoute>
        <AddEvaluation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/communication-library',
    element: (
      <ProtectedRoute>
        <CommunicationLibrary />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/communication-library/new-announcement',
    element: (
      <ProtectedRoute>
        <NewAnnouncement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/recruitment',
    element: (
      <ProtectedRoute>
        <Recruitment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/recruitment/new',
    element: (
      <ProtectedRoute>
        <NewRecruitmentRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/alerts-requests',
    element: (
      <ProtectedRoute>
        <AlertsRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/alerts-requests/new',
    element: (
      <ProtectedRoute>
        <NewAlert />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/leaves-attendance',
    element: (
      <ProtectedRoute>
        <LeavesAttendance />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/leaves-attendance/new',
    element: (
      <ProtectedRoute>
        <LeaveRequestForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/remote-work',
    element: (
      <ProtectedRoute>
        <RemoteWork />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards',
    element: (
      <ProtectedRoute>
        <SalariesRewards />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/new',
    element: (
      <ProtectedRoute>
        <NewSalaryPayroll />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/:id',
    element: (
      <ProtectedRoute>
        <SalaryPayrollDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/advance/new',
    element: (
      <ProtectedRoute>
        <NewAdvanceRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/salaries-rewards/promotion/new',
    element: (
      <ProtectedRoute>
        <NewPromotionRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/performance-development',
    element: (
      <ProtectedRoute>
        <PerformanceDevelopment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/performance-development/add-evaluation',
    element: (
      <ProtectedRoute>
        <AddEvaluation />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/communication-library',
    element: (
      <ProtectedRoute>
        <CommunicationLibrary />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/communication-library/new-announcement',
    element: (
      <ProtectedRoute>
        <NewAnnouncement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/recruitment',
    element: (
      <ProtectedRoute>
        <Recruitment />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/recruitment/new',
    element: (
      <ProtectedRoute>
        <NewRecruitmentRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/alerts-requests',
    element: (
      <ProtectedRoute>
        <AlertsRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: '/hr/alerts-requests/new',
    element: (
      <ProtectedRoute>
        <NewAlert />
      </ProtectedRoute>
    ),
  },
  {
    path: '/projects',
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة المشاريع / Projects" />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy',
    element: (
      <ProtectedRoute>
        <Strategy />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/tasks',
    element: (
      <ProtectedRoute>
        <Tasks />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/tasks/add',
    element: (
      <ProtectedRoute>
        <AddTask />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/meetings',
    element: (
      <ProtectedRoute>
        <Meetings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/meetings/new',
    element: (
      <ProtectedRoute>
        <NewMeeting />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/documents',
    element: (
      <ProtectedRoute>
        <Documents />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/documents/new',
    element: (
      <ProtectedRoute>
        <NewDocument />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking',
    element: (
      <ProtectedRoute>
        <PlanTracking />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking/new',
    element: (
      <ProtectedRoute>
        <NewPlanLink />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking/:id',
    element: (
      <ProtectedRoute>
        <PlanLinkDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans',
    element: (
      <ProtectedRoute>
        <StrategicPlans />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans/new',
    element: (
      <ProtectedRoute>
        <NewStrategicPlan />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans/:id',
    element: (
      <ProtectedRoute>
        <StrategicPlanDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/projects',
    element: (
      <ProtectedRoute>
        <Projects />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/projects/new',
    element: (
      <ProtectedRoute>
        <NewProject />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/projects/:id',
    element: (
      <ProtectedRoute>
        <ProjectDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/projects/:id/edit',
    element: (
      <ProtectedRoute>
        <NewProject />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/meetings',
    element: (
      <ProtectedRoute>
        <Meetings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/meetings/new',
    element: (
      <ProtectedRoute>
        <NewMeeting />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/documents',
    element: (
      <ProtectedRoute>
        <Documents />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/documents/new',
    element: (
      <ProtectedRoute>
        <NewDocument />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking',
    element: (
      <ProtectedRoute>
        <PlanTracking />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking/new',
    element: (
      <ProtectedRoute>
        <NewPlanLink />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/plan-tracking/:id',
    element: (
      <ProtectedRoute>
        <PlanLinkDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans',
    element: (
      <ProtectedRoute>
        <StrategicPlans />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans/new',
    element: (
      <ProtectedRoute>
        <NewStrategicPlan />
      </ProtectedRoute>
    ),
  },
  {
    path: '/strategy/strategic-plans/:id',
    element: (
      <ProtectedRoute>
        <StrategicPlanDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine',
    element: (
      <ProtectedRoute>
        <Workflows />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/workflows',
    element: (
      <ProtectedRoute>
        <Workflows />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/workflows/add',
    element: (
      <ProtectedRoute>
        <AddEditWorkflow />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/workflows/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditWorkflow />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/verification-templates',
    element: (
      <ProtectedRoute>
        <VerificationTemplates />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/verification-templates/add',
    element: (
      <ProtectedRoute>
        <AddEditVerificationTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow-engine/verification-templates/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditVerificationTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses',
    element: (
      <ProtectedRoute>
        <Warehouses />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/products-list',
    element: (
      <ProtectedRoute>
        <ProductsList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/products-list/add',
    element: (
      <ProtectedRoute>
        <AddEditProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/products-list/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/products-list/:id',
    element: (
      <ProtectedRoute>
        <ViewProduct />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-movements',
    element: (
      <ProtectedRoute>
        <InventoryMovementsList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-movements/add',
    element: (
      <ProtectedRoute>
        <AddEditInventoryMovement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-movements/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditInventoryMovement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-movements/:id',
    element: (
      <ProtectedRoute>
        <ViewInventoryMovement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement',
    element: (
      <ProtectedRoute>
        <WarehouseMovementList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement/select-type',
    element: (
      <ProtectedRoute>
        <SelectMovementType />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement/transfer/add',
    element: (
      <ProtectedRoute>
        <TransferStock />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement/transfer/edit/:id',
    element: (
      <ProtectedRoute>
        <TransferStock />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement/damage/add',
    element: (
      <ProtectedRoute>
        <DamageStock />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/warehouse-movement/damage/edit/:id',
    element: (
      <ProtectedRoute>
        <DamageStock />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-closing',
    element: (
      <ProtectedRoute>
        <InventoryClosingList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-closing/add',
    element: (
      <ProtectedRoute>
        <AddEditInventoryClosing />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-closing/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditInventoryClosing />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/material-requests',
    element: (
      <ProtectedRoute>
        <MaterialRequestsList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/material-requests/damage/add',
    element: (
      <ProtectedRoute>
        <AddEditMaterialRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/material-requests/transfer/add',
    element: (
      <ProtectedRoute>
        <AddEditMaterialRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/material-requests/damage/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditMaterialRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/material-requests/transfer/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditMaterialRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-materials',
    element: (
      <ProtectedRoute>
        <InventoryMaterials />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-count',
    element: (
      <ProtectedRoute>
        <InventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-count/add',
    element: (
      <ProtectedRoute>
        <AddEditInventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-count/edit/:id',
    element: (
      <ProtectedRoute>
        <AddEditInventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-categories',
    element: (
      <ProtectedRoute>
        <InventoryCategories />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-categories/create',
    element: (
      <ProtectedRoute>
        <InventoryCategoryForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/inventory-categories/edit/:id',
    element: (
      <ProtectedRoute>
        <InventoryCategoryForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/opening-balances',
    element: (
      <ProtectedRoute>
        <OpeningBalances />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/opening-balances/create',
    element: (
      <ProtectedRoute>
        <OpeningBalanceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/opening-balances/edit/:id',
    element: (
      <ProtectedRoute>
        <OpeningBalanceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/price-lists',
    element: (
      <ProtectedRoute>
        <WarehousePriceLists />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/price-lists/create',
    element: (
      <ProtectedRoute>
        <WarehousePriceListForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/price-lists/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehousePriceListForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/batches',
    element: (
      <ProtectedRoute>
        <WarehouseBatches />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/batches/create',
    element: (
      <ProtectedRoute>
        <WarehouseBatchForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/batches/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehouseBatchForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/item-price',
    element: (
      <ProtectedRoute>
        <WarehouseItemPrice />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/item-price/create',
    element: (
      <ProtectedRoute>
        <WarehouseItemPriceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/item-price/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehouseItemPriceForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/serial-number',
    element: (
      <ProtectedRoute>
        <WarehouseSerialNumber />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/serial-number/create',
    element: (
      <ProtectedRoute>
        <WarehouseSerialNumberForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/serial-number/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehouseSerialNumberForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/goods-arrival-cost',
    element: (
      <ProtectedRoute>
        <WarehouseGoodsArrivalCost />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/goods-arrival-cost/create',
    element: (
      <ProtectedRoute>
        <WarehouseGoodsArrivalCostForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/warehouses/goods-arrival-cost/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehouseGoodsArrivalCostForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/workflow',
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة محرك سير الأعمال / Workflow Engine" />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports',
    element: (
      <ProtectedRoute>
        <Reports />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/general-ledger',
    element: (
      <ProtectedRoute>
        <GeneralLedgerReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/financial-position',
    element: (
      <ProtectedRoute>
        <FinancialPositionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/trial-balance',
    element: (
      <ProtectedRoute>
        <TrialBalanceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/income-statement',
    element: (
      <ProtectedRoute>
        <IncomeStatementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/trial-balance-movement',
    element: (
      <ProtectedRoute>
        <TrialBalanceMovementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/warehouses/inventory-status',
    element: (
      <ProtectedRoute>
        <InventoryBalanceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/warehouses/stock-movement',
    element: (
      <ProtectedRoute>
        <ItemMovementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/warehouses/warehouse-balances',
    element: (
      <ProtectedRoute>
        <InventoryVarianceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports/warehouses/inventory-valuation',
    element: (
      <ProtectedRoute>
        <DamagedReturnedReport />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/company',
    element: (
      <ProtectedRoute>
        <CompanySettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/chart-of-accounts',
    element: (
      <ProtectedRoute>
        <ChartOfAccounts />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/account-settings',
    element: (
      <ProtectedRoute>
        <AccountSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/currencies',
    element: (
      <ProtectedRoute>
        <Currencies />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/tax-settings',
    element: (
      <ProtectedRoute>
        <TaxSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/fiscal-year',
    element: (
      <ProtectedRoute>
        <FiscalYear />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/accounting-periods',
    element: (
      <ProtectedRoute>
        <AccountingPeriods />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/payment-methods',
    element: (
      <ProtectedRoute>
        <PaymentMethods />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/terms-conditions',
    element: (
      <ProtectedRoute>
        <TermsConditions />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/cost-centers',
    element: (
      <ProtectedRoute>
        <CostCenters />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-categories',
    element: (
      <ProtectedRoute>
        <AssetCategories />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-categories/create',
    element: (
      <ProtectedRoute>
        <AssetCategoryForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-categories/edit/:id',
    element: (
      <ProtectedRoute>
        <AssetCategoryEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-categories/:id',
    element: (
      <ProtectedRoute>
        <AssetCategoryDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-locations',
    element: (
      <ProtectedRoute>
        <AssetLocations />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-locations/create',
    element: (
      <ProtectedRoute>
        <AssetLocationForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/asset-locations/edit/:id',
    element: (
      <ProtectedRoute>
        <AssetLocationEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/maintenance-team',
    element: (
      <ProtectedRoute>
        <MaintenanceTeam />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/maintenance-team/create',
    element: (
      <ProtectedRoute>
        <MaintenanceTeamForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/maintenance-team/edit/:id',
    element: (
      <ProtectedRoute>
        <MaintenanceTeamEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/assets/maintenance-team/view/:id',
    element: (
      <ProtectedRoute>
        <MaintenanceTeamView />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/general',
    element: (
      <ProtectedRoute>
        <WarehousesGeneralSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/unit-of-measures',
    element: (
      <ProtectedRoute>
        <UnitOfMeasures />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/unit-of-measures/create',
    element: (
      <ProtectedRoute>
        <UnitOfMeasureForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/unit-of-measures/edit/:id',
    element: (
      <ProtectedRoute>
        <UnitOfMeasureEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/item-groups',
    element: (
      <ProtectedRoute>
        <ItemGroups />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/warehouse-management',
    element: (
      <ProtectedRoute>
        <WarehouseManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/warehouse-management/create',
    element: (
      <ProtectedRoute>
        <WarehouseManagementForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/warehouses/warehouse-management/edit/:id',
    element: (
      <ProtectedRoute>
        <WarehouseManagementEdit />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/workflow-engine/department-management',
    element: (
      <ProtectedRoute>
        <DepartmentManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/workflow-engine/user-management',
    element: (
      <ProtectedRoute>
        <UserManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/workflow-engine/branches-locations',
    element: (
      <ProtectedRoute>
        <BranchManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/budget',
    element: (
      <ProtectedRoute>
        <Budget />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/budget/create',
    element: (
      <ProtectedRoute>
        <BudgetForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/accounting/budget/edit/:id',
    element: (
      <ProtectedRoute>
        <BudgetEditForm />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/purchases/purchase-tax-template',
    element: (
      <ProtectedRoute>
        <TaxTemplates />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/purchases/terms-conditions-template',
    element: (
      <ProtectedRoute>
        <TermsConditionsTemplates />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/sales/sales-settings',
    element: (
      <ProtectedRoute>
        <SalesSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/sales/terms-template',
    element: (
      <ProtectedRoute>
        <TermsTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/sales/sales-settings',
    element: (
      <ProtectedRoute>
        <SalesSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/purchase-settings/purchase-settings',
    element: (
      <ProtectedRoute>
        <PurchaseSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings/sales/terms-template',
    element: (
      <ProtectedRoute>
        <TermsTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: '/support',
    element: (
      <ProtectedRoute>
        <SupportPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: (
      <ProtectedRoute>
        <ErrorPage />
      </ProtectedRoute>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
