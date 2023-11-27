import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { AppRoutesType } from "../../routes/app.routes";

type MenuProps = {
  dataArray: Array<AppRoutesType>;
  className?: string;
  showLinkName?: boolean;
};

export const NavLinkComponent = ({ dataArray, className }: MenuProps) => {
  const variant = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  const navItemClasses = classNames(
    "links flex flex-col lg:flex-row gap-2 transition duration-200ms ease-in-out items-center py-3 px-4",
    "space-x-[10px] paragraph-2 group font-medium text-sm"
  );

  const location = useLocation();
  const currentRoute = location?.pathname;

  return (
    <>
      <ul className={className ? className : `space-y-4 pl-4`}>
        {dataArray?.map(
          ({ path, id, name, icon, iconSolid }: AppRoutesType) => {
            return (
              <motion.li
                key={`navLink${id}`}
                variants={variant}
                animate="visible"
                initial="hidden"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [
                      classNames(navItemClasses),
                      "transition-all ease-in-out duration-200 hover:bg-blue-50 hover:text-primary text-gray-400",
                      isActive
                        ? "text-primary-25 text-black lg:bg-primary lg:text-white"
                        : "group",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <>
                    <div>
                      {currentRoute === path ? (
                        <> {iconSolid}</>
                      ) : (
                        <img src={`${icon}`} className={`w-[25px]`} />
                      )}
                    </div>
                    <span>{name}</span>
                  </>
                </NavLink>
              </motion.li>
            );
          }
        )}
      </ul>
    </>
  );
};
