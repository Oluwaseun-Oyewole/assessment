import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/bottomNav";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#f7f7f4] font-poppins">
        <div className="w-1/5 bg-white hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full flex overflow-y-auto flex-col h-screen">
          <div className="sticky top-0">
            <Header />
          </div>
          <div className="px-10 py-5 lg:py-10 ">
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
