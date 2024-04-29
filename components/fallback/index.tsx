import { Box, Flex, Text } from "@chakra-ui/react";

const Fallback = () => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box>
        <Text>Loading....</Text>
      </Box>
    </Flex>
  );
};

export default Fallback;
