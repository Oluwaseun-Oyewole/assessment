import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "../../../common/routes/routes";
import {
  BudgetPage,
  ChatPage,
  HomePage,
  ProfilePage,
  ReportsPage,
} from "./exports";

export const dashboardRoutes = [
  {
    path: Routes.home,
    element: <HomePage />,
  },

  {
    path: Routes.reports,
    element: <ReportsPage />,
  },

  {
    path: Routes.chat,
    element: <ChatPage />,
  },
  {
    path: Routes.budget,
    element: <BudgetPage />,
  },
  {
    path: Routes.profile,
    element: <ProfilePage />,
  },

  {
    path: Routes.dashboard,
    element: <Navigate to={Routes.home} replace={true} />,
  },
] as RouteObject[];
