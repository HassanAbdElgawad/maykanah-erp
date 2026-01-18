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
import { Dashboard } from "./screens/Dashboard";
import { Inbox } from "./screens/Inbox";
import { LoginPage } from "./screens/LoginPage";
import { ComingSoon } from "./screens/ComingSoon";
import { ErrorPage } from "./screens/ErrorPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login-page",
    element: <LoginPage />,
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
        <ComingSoon pageName="إدارة الموارد البشرية / Human Resources" />
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
    path: "/warehouses",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة المخازن / Warehouses" />
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
        <ComingSoon pageName="التقارير / Reports" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="الإعدادات / Settings" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="الدعم الفني / Support" />
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
