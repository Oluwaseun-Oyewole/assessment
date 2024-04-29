"use client";
import { useBudgetData } from "@/context";
import { theme } from "@/theme";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { IoArrowForwardOutline } from "react-icons/io5";
import * as Yup from "yup";
import FormikController from "../formikController";

const StepOne = () => {
  const { updateAmount } = useBudgetData();
  const stepOneValidationSchema = Yup.object({
    amount: Yup.number()
      .required("Enter amount")
      .typeError("Enter a number")
      .min(100, `Amount must be at least \u20A6 100`),
  });
  const { replace } = useRouter();

  const handleStepOne = async (data: Record<any, string>) => {
    localStorage.setItem("amount", JSON.stringify(data));
    replace("/budget?step=2&isOpen=true");
    updateAmount(+data.amount);
  };

  const localStorageFormValues =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("amount") || "{}");

  return (
    <Box>
      <Formik
        initialValues={{ amount: localStorageFormValues?.amount ?? "" }}
        validationSchema={stepOneValidationSchema}
        onSubmit={handleStepOne}
        initialTouched={{
          amount: true,
        }}
        validateOnMount
      >
        {(formik) => (
          <>
            <Form className="w-full ">
              <Flex flexDirection="column" justifyContent="space-between">
                <FormikController
                  control="input"
                  name="amount"
                  placeholder="Amount (in #)"
                  type="text"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Box marginTop={60} marginBottom={10}>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text
                      color={theme.colors.primary}
                      cursor="not-allowed"
                      opacity={0.8}
                      textDecoration="underline"
                      fontSize={["13", "16"]}
                    >
                      Create from spending pattern
                    </Text>
                    <Button
                      type="submit"
                      isDisabled={!formik.isValid}
                      isLoading={formik.isSubmitting}
                      fontSize={["13", "16"]}
                    >
                      <Flex alignItems="center" gap="2">
                        <Text color={theme.colors.primary}>Next</Text>
                        <IoArrowForwardOutline color={theme.colors.primary} />
                      </Flex>
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Form>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default StepOne;
