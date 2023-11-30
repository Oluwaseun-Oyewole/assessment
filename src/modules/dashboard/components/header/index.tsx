import { Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { PageTitle } from "../../../../helper/keyConstants";

const Header = () => {
  const location = useLocation();
  const match = location.pathname.match(/\/app\/([^/]+)/);

  const getTitleEnum = match
    ? match[1]
    : location.pathname.split("/").pop() || "";

  return (
    <>
      <Box className="flex justify-between max-2xl:space-x-2 space-x-3 items-center bg-white px-10">
        <Box className="flex items-center justify-between mx-auto w-full py-7">
          <Box>
            <Text className="font-medium text-[28px] md:text-2xl whitespace-nowrap">
              {PageTitle[getTitleEnum as keyof typeof PageTitle]}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
