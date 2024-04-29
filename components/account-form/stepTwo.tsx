"use client";
import { useBudgetData } from "@/context";
import { theme } from "@/theme";
import { categoryValues } from "@/utils/constants";
import { formatCurrency } from "@/utils/helper";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import * as Yup from "yup";
import { CostBreakdown } from "../cost-breakdown";
import FormikController from "../formikController";

const StepTwo = ({ onClose }: { onClose: VoidFunction }) => {
  const { total, categories, createCategory } = useBudgetData();

  const [value, setValue] = useState<{ amount: number }>({ amount: 0 });
  const amount = value?.amount !== undefined ? value?.amount : 0;

  useEffect(() => {
    if (window && typeof window !== "undefined") {
      const amount = JSON.parse(localStorage.getItem("amount")!);
      setValue(amount);
    }
  }, [categories]);

  console.log("amount", amount);
  console.log("total -- ", total);

  const stepTwoValidationSchema = Yup.object({
    individualAmount: Yup.number()
      .required("Enter amount")
      .typeError("Enter a number"),
    budgetType: Yup.string().required("Select a category"),
  });
  const { replace } = useRouter();
  const remaining = amount - total;

  const calculatePercentage = (value: number, total: number) => {
    if (value === 0) return 1 * 100;
    return +((value / total) * 100).toFixed(2);
  };
  const percentageRemaining = 100 - +calculatePercentage(total, amount);

  const handleStepTwo = async (
    data: Record<any, string>,
    { resetForm }: any,
  ) => {
    createCategory({
      id: Math.random(),
      icon: "",
      title: data.budgetType,
      percentage: calculatePercentage(+data.individualAmount, amount),
      amount: data.individualAmount,
      total: amount,
    });
    resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={{ individualAmount: "", budgetType: "" }}
        validationSchema={stepTwoValidationSchema}
        onSubmit={handleStepTwo}
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
                  control="select"
                  placeholder="Select Expense Category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.budgetType}
                  name="budgetType"
                  colorScheme="gray"
                  className="!border-none !outline-none !h-[50px] !shadow-md"
                >
                  {categoryValues?.map(
                    (
                      category: { label: string; value: string },
                      index: number,
                    ) => {
                      return (
                        <option key={index} value={category?.value}>
                          {category?.label}
                        </option>
                      );
                    },
                  )}
                </FormikController>

                <Box marginTop={[3, 0]}>
                  <FormikController
                    control="input"
                    name="individualAmount"
                    placeholder="Amount (in #)"
                    type="text"
                    value={formik.values.individualAmount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>

                {+formik.values.individualAmount > amount && (
                  <Text
                    color="red.500"
                    fontSize={["13"]}
                    textAlign="right"
                    marginTop={4}
                  >{`Amount must be less than ${formatCurrency(
                    +amount,
                    `\u20A6`,
                  )}`}</Text>
                )}

                {+total + +formik.values.individualAmount > +amount && (
                  <Box py="5">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text
                        fontSize={["13"]}
                        color="red"
                      >{`Budget amount exceeded ${formatCurrency(
                        +amount,
                        `\u20A6`,
                      )}`}</Text>
                      <Text fontSize={["13"]} color="red">
                        {` Amount remaining `}
                        {formatCurrency(+remaining, `\u20A6`)}
                      </Text>
                    </Flex>
                  </Box>
                )}

                <Flex justifyContent="flex-end">
                  <Button
                    type="submit"
                    marginTop="5"
                    isDisabled={
                      !formik.isValid ||
                      +formik.values.individualAmount > amount ||
                      +total + +formik.values.individualAmount > +amount ||
                      total > amount
                    }
                    className="disabled:cursor-not-allowed !justify-end !bg-transparent"
                  >
                    <IoIosAdd
                      color={theme.colors.primary}
                      style={{ background: theme.colors.primary_100 }}
                      className="bg-primary100 rounded-full py-2 text-5xl"
                    />
                  </Button>
                </Flex>

                <Box height={170} overflow="scroll">
                  <Text>Category Breakdown</Text>
                  {categories?.length > 0 && (
                    <Box>
                      <CostBreakdown />
                    </Box>
                  )}
                </Box>
                <Box marginTop={30} marginBottom={10}>
                  <Flex justifyContent="space-between" alignItems={"center"}>
                    {total > amount ? (
                      <Text>% of budget remaining:0%</Text>
                    ) : (
                      <Text>
                        % of budget remaining:
                        {total === 0 ? (
                          <>
                            {amount > 0
                              ? calculatePercentage(total, amount)
                              : `0`}
                          </>
                        ) : (
                          percentageRemaining.toFixed(2)
                        )}
                        %
                      </Text>
                    )}

                    <Button
                      onClick={() => {
                        onClose();
                        replace(`/budget/?tab=1`);
                      }}
                    >
                      <Flex alignItems="center" gap="2">
                        <Text color={theme.colors.primary}>Done</Text>
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

export default StepTwo;
