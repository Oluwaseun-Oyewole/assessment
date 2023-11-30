import { Box, Text } from "@chakra-ui/react";
import classNames from "classnames";

const Loader = (props: { screen?: boolean }) => {
  return (
    <Box
      className={classNames(
        props?.screen ? "h-screen w-screen" : "min-h-[200px] h-full w-full",
        "grid place-content-center place-items-center bg-transparent"
      )}
    >
      <Text> Loading....</Text>
    </Box>
  );
};

export default Loader;
