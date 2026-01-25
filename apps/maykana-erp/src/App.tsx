import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Accounting } from "./screens/Accounting";
import { AccountingEntries } from "./screens/AccountingEntries";
import { AccountingEntryForm } from "./screens/AccountingEntryForm";
import { ReceiptVouchers, ReceiptVoucherForm } from "./screens/ReceiptVouchers";
import { PaymentVouchers, PaymentVoucherForm } from "./screens/PaymentVouchers";
import { CashCustody, CashCustodyForm } from "./screens/CashCustody";
import { Purchases } from "./screens/Purchases";
import { Suppliers } from "./screens/Suppliers";
import { Sales } from "./screens/Sales";
import { Customers, AddEditCustomer } from "./screens/Customers";
import { Competitions } from "./screens/Competitions";
import { VendorQualification, AddEditVendorQualification } from "./screens/VendorQualification";
import { Assets } from "./screens/Assets";
import { Maintenance } from "./screens/Maintenance";
import { Strategy } from "./screens/Strategy";
import { Tasks, AddTask } from "./screens/Tasks";
import { WorkflowEngine } from "./screens/WorkflowEngine";
import { Workflows, AddEditWorkflow } from "./screens/Workflows";
import { VerificationTemplates, AddEditVerificationTemplate } from "./screens/VerificationTemplates";
import { Warehouses } from "./screens/Warehouses";
import { InventoryMaterials } from "./screens/InventoryMaterials";
import { InventoryCount, AddEditInventoryCount } from "./screens/InventoryCount";
import { HR } from "./screens/HR";
import { EmployeeCenter, AddEmployee } from "./screens/HR/EmployeeCenter";
import { MyRequests, NewRequest } from "./screens/HR/MyRequests";
import { Dashboard } from "./screens/Dashboard";
import { Inbox } from "./screens/Inbox";
import { LoginPage } from "./screens/LoginPage";
import { ForgotPasswordPage } from "./screens/ForgotPasswordPage";
import { ReportsPage } from "./screens/ReportsPage";
import { GeneralLedgerReport } from "./screens/ReportsPage/GeneralLedgerReport";
import { FinancialPositionReport } from "./screens/ReportsPage/FinancialPositionReport";
import { TrialBalanceReport } from "./screens/ReportsPage/TrialBalanceReport";
import { IncomeStatementReport } from "./screens/ReportsPage/IncomeStatementReport";
import { TrialBalanceMovementReport } from "./screens/ReportsPage/TrialBalanceMovementReport";
import { SettingsPage } from "./screens/SettingsPage";
import { CompanySettings, ChartOfAccounts } from './screens/Settings';
import { SupportPage } from "./screens/SupportPage";
import { ComingSoon } from "./screens/ComingSoon";
import { ErrorPage } from "./screens/ErrorPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/inbox",
    element: (
      <ProtectedRoute>
        <Inbox />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting",
    element: (
      <ProtectedRoute>
        <Accounting />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/entries",
    element: (
      <ProtectedRoute>
        <AccountingEntries />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/entries/create",
    element: (
      <ProtectedRoute>
        <AccountingEntryForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/receipt-vouchers",
    element: (
      <ProtectedRoute>
        <ReceiptVouchers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/receipt-vouchers/create",
    element: (
      <ProtectedRoute>
        <ReceiptVoucherForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/payment-vouchers",
    element: (
      <ProtectedRoute>
        <PaymentVouchers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/payment-vouchers/create",
    element: (
      <ProtectedRoute>
        <PaymentVoucherForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/cash-custody",
    element: (
      <ProtectedRoute>
        <CashCustody />
      </ProtectedRoute>
    ),
  },
  {
    path: "/accounting/cash-custody/create",
    element: (
      <ProtectedRoute>
        <CashCustodyForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/accounting/general-ledger",
    element: (
      <ProtectedRoute>
        <GeneralLedgerReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/accounting/financial-position",
    element: (
      <ProtectedRoute>
        <FinancialPositionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/accounting/trial-balance",
    element: (
      <ProtectedRoute>
        <TrialBalanceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/accounting/income-statement",
    element: (
      <ProtectedRoute>
        <IncomeStatementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/accounting/trial-balance-movement",
    element: (
      <ProtectedRoute>
        <TrialBalanceMovementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/purchases",
    element: (
      <ProtectedRoute>
        <Purchases />
      </ProtectedRoute>
    ),
  },
  {
    path: "/purchases/suppliers",
    element: (
      <ProtectedRoute>
        <Suppliers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sales",
    element: (
      <ProtectedRoute>
        <Sales />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sales/customers",
    element: (
      <ProtectedRoute>
        <Customers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sales/customers/add",
    element: (
      <ProtectedRoute>
        <AddEditCustomer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/sales/customers/edit/:id",
    element: (
      <ProtectedRoute>
        <AddEditCustomer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/competitions",
    element: (
      <ProtectedRoute>
        <Competitions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/competitions/vendor-qualification",
    element: (
      <ProtectedRoute>
        <VendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/competitions/vendor-qualification/add",
    element: (
      <ProtectedRoute>
        <AddEditVendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/competitions/vendor-qualification/edit/:id",
    element: (
      <ProtectedRoute>
        <AddEditVendorQualification />
      </ProtectedRoute>
    ),
  },
  {
    path: "/assets",
    element: (
      <ProtectedRoute>
        <Assets />
      </ProtectedRoute>
    ),
  },
  {
    path: "/assets/maintenance",
    element: (
      <ProtectedRoute>
        <Maintenance />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hr",
    element: (
      <ProtectedRoute>
        <HR />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hr/employee-center",
    element: (
      <ProtectedRoute>
        <EmployeeCenter />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hr/employee-center/add",
    element: (
      <ProtectedRoute>
        <AddEmployee />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hr/my-requests",
    element: (
      <ProtectedRoute>
        <MyRequests />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hr/my-requests/new",
    element: (
      <ProtectedRoute>
        <NewRequest />
      </ProtectedRoute>
    ),
  },
  {
    path: "/projects",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة المشاريع / Projects" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/strategy",
    element: (
      <ProtectedRoute>
        <Strategy />
      </ProtectedRoute>
    ),
  },
  {
    path: "/strategy/tasks",
    element: (
      <ProtectedRoute>
        <Tasks />
      </ProtectedRoute>
    ),
  },
  {
    path: "/strategy/tasks/add",
    element: (
      <ProtectedRoute>
        <AddTask />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine",
    element: (
      <ProtectedRoute>
        <WorkflowEngine />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/workflows",
    element: (
      <ProtectedRoute>
        <Workflows />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/workflows/add",
    element: (
      <ProtectedRoute>
        <AddEditWorkflow />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/workflows/edit/:id",
    element: (
      <ProtectedRoute>
        <AddEditWorkflow />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/verification-templates",
    element: (
      <ProtectedRoute>
        <VerificationTemplates />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/verification-templates/add",
    element: (
      <ProtectedRoute>
        <AddEditVerificationTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow-engine/verification-templates/edit/:id",
    element: (
      <ProtectedRoute>
        <AddEditVerificationTemplate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/warehouses",
    element: (
      <ProtectedRoute>
        <Warehouses />
      </ProtectedRoute>
    ),
  },
  {
    path: "/warehouses/inventory-materials",
    element: (
      <ProtectedRoute>
        <InventoryMaterials />
      </ProtectedRoute>
    ),
  },
  {
    path: "/warehouses/inventory-count",
    element: (
      <ProtectedRoute>
        <InventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: "/warehouses/inventory-count/add",
    element: (
      <ProtectedRoute>
        <AddEditInventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: "/warehouses/inventory-count/edit/:id",
    element: (
      <ProtectedRoute>
        <AddEditInventoryCount />
      </ProtectedRoute>
    ),
  },
  {
    path: "/workflow",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة محرك سير الأعمال / Workflow Engine" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports",
    element: (
      <ProtectedRoute>
        <ReportsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/general-ledger",
    element: (
      <ProtectedRoute>
        <GeneralLedgerReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/financial-position",
    element: (
      <ProtectedRoute>
        <FinancialPositionReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/trial-balance",
    element: (
      <ProtectedRoute>
        <TrialBalanceReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/income-statement",
    element: (
      <ProtectedRoute>
        <IncomeStatementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports/trial-balance-movement",
    element: (
      <ProtectedRoute>
        <TrialBalanceMovementReport />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings/accounting/company",
    element: (
      <ProtectedRoute>
        <CompanySettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings/accounting/chart-of-accounts",
    element: (
      <ProtectedRoute>
        <ChartOfAccounts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <ProtectedRoute>
        <SupportPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
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
