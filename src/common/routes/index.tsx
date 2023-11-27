import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../modules/dashboard/layout";
import { dashboardRoutes } from "../../modules/dashboard/routes";
import ErrorPage from "../components/error";
import { RouteProtection } from "./route-protection";
import { Routes } from "./routes";

export const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.dashboard} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.dashboard,
    element: (
      <RouteProtection validations={[]} redirect={Routes.dashboard}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes],
  },
]);
