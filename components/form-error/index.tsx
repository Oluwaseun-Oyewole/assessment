import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type IFormErrorProps = {
  error?: string;
};

const FormError: FC<IFormErrorProps> = ({ error = "" }) => {
  return (
    <Flex alignItems="center" color="red" justifyContent="end" paddingTop="2">
      <Text fontSize="small" textAlign="right">
        {error}
      </Text>
    </Flex>
  );
};

export default FormError;
