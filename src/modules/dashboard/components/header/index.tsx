import { useLocation } from "react-router-dom";
import { PageTitle } from "../../../../helper";

const Header = () => {
  const location = useLocation();
  const match = location.pathname.match(/\/app\/([^/]+)/);

  const getTitleEnum = match
    ? match[1]
    : location.pathname.split("/").pop() || "";

  return (
    <>
      <div className="flex justify-between max-2xl:space-x-2 space-x-3 items-center bg-white px-10">
        <div className="flex items-center justify-between mx-auto w-full py-7">
          <div>
            <h6 className="font-medium text-[28px] md:text-2xl whitespace-nowrap">
              {PageTitle[getTitleEnum as keyof typeof PageTitle]}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
