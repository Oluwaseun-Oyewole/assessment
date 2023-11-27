import appRoutes from "../../routes/app.routes";
import { NavLinkComponent } from "../navLink";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <NavLinkComponent
        dataArray={appRoutes}
        className="flex justify-between items-center py-6 text-sm overflow-x-hidden "
      />
    </div>
  );
};

export default BottomNavigation;
