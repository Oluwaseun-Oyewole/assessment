import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { ErrorMessage } from "formik";
import { FC, ReactNode } from "react";
import FormError from "../form-error";

interface IFormikControlProps {
  control: "input" | "select" | "area" | "password" | "textarea";
  [key: string]: any;
  children?: ReactNode;
}

const FormikController: FC<IFormikControlProps> = (props) => {
  const { control, name, type, children, ...rest } = props;
  switch (control) {
    case "input":
      return (
        <Box>
          <Input
            {...rest}
            name={name}
            type={type ? type : "text"}
            border="0"
            outline="0"
            borderBottom="2px"
            borderBottomColor="#A8AFBF"
            _focus={{
              borderColor: "blue.300",
              borderBottomColor: "blue.300",
            }}
            focusBorderColor="transparent"
            borderRadius="sm"
            marginTop={5}
          />
          <ErrorMessage name={name}>
            {(msg) => <Box>{<FormError error={msg} />}</Box>}
          </ErrorMessage>
        </Box>
      );

    case "select":
      return (
        <Box>
          <Flex alignItems="center">
            <Select
              paddingTop={7}
              name={name}
              {...rest}
              fontWeight="300"
              focusBorderColor="0"
            >
              {children}
            </Select>
          </Flex>
          <ErrorMessage name={name}>
            {(msg) => <Box>{<FormError error={msg} />}</Box>}
          </ErrorMessage>
        </Box>
      );
    default:
      return null;
  }
};

export default FormikController;
