import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import appRoutes from "../../routes/app.routes";
import { NavLinkComponent } from "../navLink";

const Sidebar = () => {
  return (
    <motion.aside>
      <Box className="mt-[88px] relative">
        <NavLinkComponent dataArray={appRoutes} />
      </Box>
    </motion.aside>
  );
};

export default Sidebar;
