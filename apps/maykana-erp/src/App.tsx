import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Accounting } from "./screens/Accounting";
import { AccountingEntries } from "./screens/AccountingEntries";
import { AccountingEntryForm } from "./screens/AccountingEntryForm";
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
import { SettingsPage } from "./screens/SettingsPage";
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
    path: "/settings",
    element: (
      <ProtectedRoute>
        <SettingsPage />
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
