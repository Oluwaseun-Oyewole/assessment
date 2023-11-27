import { motion } from "framer-motion";
import appRoutes from "../../routes/app.routes";
import { NavLinkComponent } from "../navLink";

const Sidebar = () => {
  return (
    <motion.aside>
      <div className="mt-[88px] relative">
        <NavLinkComponent dataArray={appRoutes} />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
