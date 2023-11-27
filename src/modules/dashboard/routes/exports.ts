import { lazy } from "react";

const loadModules = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const HomePage = loadModules("home");
export const ReportsPage = loadModules("reports");
export const ChatPage = loadModules("chat");
export const BudgetPage = loadModules("budget");
export const ProfilePage = loadModules("profile");
