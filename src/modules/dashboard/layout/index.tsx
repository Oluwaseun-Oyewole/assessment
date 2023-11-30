import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/bottomNav";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Box className="flex font-raleway flex-col lg:flex-row w-full h-screen bg-white">
        <Box className="w-1/5 bg-white shadow-xl hidden lg:block">
          <Sidebar />
        </Box>
        <Box className="w-full flex flex-col">
          <Box className="sticky top-0 shadow-md">
            <Header />
          </Box>
          <Box className="px-10 py-5 lg:py-10 overflow-y-auto">
            <Outlet />
          </Box>
        </Box>
        <Box className="lg:hidden block bg-white">
          <BottomNavigation />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
