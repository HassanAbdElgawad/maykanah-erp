import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Accounting } from "./screens/Accounting";
import { AccountingEntries } from "./screens/AccountingEntries";
import { AccountingEntryForm } from "./screens/AccountingEntryForm";
import { Purchases } from "./screens/Purchases";
import { Suppliers } from "./screens/Suppliers";
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
        <ComingSoon pageName="الرئيسية / Home" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="الرئيسية / Home" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/inbox",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="صندوق الوارد / Inbox" />
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
        <ComingSoon pageName="إدارة المبيعات / Sales" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/competitions",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة المنافسات / Competitions" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/assets",
    element: (
      <ProtectedRoute>
        <ComingSoon pageName="إدارة الأصول / Assets" />
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
        <ComingSoon pageName="إدارة الإستراتيجية / Strategy" />
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
