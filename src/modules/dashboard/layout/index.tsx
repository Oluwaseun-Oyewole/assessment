import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/bottomNav";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen bg-white font-poppins">
        <div className="w-1/5 bg-white shadow-xl hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col">
          <div className="sticky top-0 shadow-md">
            <Header />
          </div>
          <div className="px-10 py-5 lg:py-10 overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <div className="lg:hidden block bg-white">
          <BottomNavigation />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
