import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { IoIosAdd, IoMdArrowRoundBack, IoMdRemove } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ImageUpload } from ".";
import { FormInput } from "../../../../common/components/form/form-input";
import ModalComponent, {
  ModalProps,
} from "../../../../common/components/modal";
import { formatCurrency } from "../../../../helper";
import { ContextCreator } from "../../context";
import { ContextCreatorType } from "../../context/type";

interface IAccountType extends ModalProps {}

const AccountForm: React.FC<IAccountType> = ({ isOpen, onClose }) => {
  const initialValues = {
    amount: "",
  };
  const {
    amount,
    categories,
    updateAmount,
    createCategory,
    removeCategory,
    total,
  } = useContext(ContextCreator) as ContextCreatorType;

  const categoriesIndividualValues = {
    individualAmount: "",
    budgetType: "",
  };

  const stepOneValidationSchema = Yup.object({
    amount: Yup.string().required("Please enter amount"),
  });

  const stepTwoValidationSchema = Yup.object({
    individualAmount: Yup.string().required("Please enter amount"),
    budgetType: Yup.string().required("Please select a budget"),
  });

  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const currentStep = Number(new URLSearchParams(search).get("step") ?? 1);

  const displayHeader = () => {
    if (currentStep === 1) {
      return (
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <IoMdArrowRoundBack />
          <Text>1/2</Text>
        </Flex>
      );
    } else if (currentStep === 2) {
      return (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          onClick={() => {
            return navigate(".");
          }}
        >
          <IoMdArrowRoundBack />
          <Text>2/2</Text>
        </Flex>
      );
    } else {
      return (
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <IoMdArrowRoundBack />
          <Text>3/3</Text>
        </Flex>
      );
    }
  };

  const displaySubHeading = () => {
    if (currentStep === 1) {
      return (
        <Text
          fontWeight="medium"
          fontSize="sm"
          marginTop={4}
          className="text-secondary"
        >
          How much would you like to budget for the month?
        </Text>
      );
    } else if (currentStep === 2) {
      return (
        <Text
          fontWeight="medium"
          fontSize="sm"
          marginTop={4}
          className="text-secondary"
        >
          How much would you like to spend on each category this month?
        </Text>
      );
    } else {
      return "";
    }
  };

  const handleStepOne = async (
    data: Record<any, string>,
    { resetForm }: any
  ) => {
    updateAmount(parseInt(data.amount));
    navigate(
      {
        pathname,
        search: "?step=2",
      },
      { state: data }
    );
    resetForm();
  };

  const handleStepTwo = async (
    data: Record<any, string>,
    { resetForm }: any
  ) => {
    createCategory({
      id: Math.random(),
      icon: "",
      title: data.budgetType,
      percentage: calculatePercentage(parseInt(data.individualAmount), amount),
      amount: data.individualAmount,
      total: amount,
    });
    resetForm({
      id: "",
      icon: "",
      title: "",
      percentage: "",
      amount: "",
    });
  };

  const costBreakdown = () => {
    return (
      <Box className="mt-14 lg:mb-0">
        <Box>
          {categories?.map((category, index) => {
            return (
              <Box key={index}>
                <Box>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                  >
                    {ImageUpload(category.title)}
                    <Text>{category.title}</Text>
                    <Text>
                      {formatCurrency(Number(category.amount), `\u20A6`)}
                    </Text>
                    <Text>{Number(category.percentage)?.toFixed(2)} %</Text>
                    <Box>
                      <IoMdRemove
                        className="bg-gray-200 text-gray-500 rounded-full py-2 text-5xl cursor-pointer"
                        onClick={() => {
                          removeCategory(category?.id);
                        }}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  };

  const calculatePercentage = (value: number, total: number) => {
    if (value === 0) return 1 * 100;
    return Number((value / total) * 100)?.toFixed(2);
  };

  const renderForm = () => {
    if (currentStep === 1) {
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={stepOneValidationSchema}
          onSubmit={handleStepOne}
          validateOnMount
        >
          {(formik) => (
            <>
              <Form className="w-full ">
                <Flex flexDirection="column" justifyContent="space-between">
                  <FormInput
                    name="amount"
                    placeholder="Amount (in #)"
                    type="text"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="rounded-sm"
                  />
                  <Box className="mt-[200px] mb-10">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text className="text-primary underline opacity-70 cursor-not-allowed text-sm lg:text-md">
                        Create from spending pattern
                      </Text>
                      <Button
                        type="submit"
                        disabled={!formik.isValid}
                        isLoading={formik.isSubmitting}
                        className="disabled:cursor-not-allowed !text-primary !bg-transparent"
                      >
                        <Flex alignItems="center" gap="2">
                          <Text>Next</Text>
                          <IoArrowForwardOutline />
                        </Flex>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </Form>
            </>
          )}
        </Formik>
      );
    } else if (currentStep === 2) {
      return (
        <Formik
          initialValues={categoriesIndividualValues}
          validationSchema={stepTwoValidationSchema}
          onSubmit={handleStepTwo}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
                <Form className="my-5 w-full ">
                  <Select
                    placeholder="Select Expense Category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.budgetType}
                    name="budgetType"
                    colorScheme="gray"
                    className="!border-none !outline-none !h-[50px] !shadow-md"
                    variant="outline"
                  >
                    <option value="Savings">
                      {ImageUpload("Savings")}Savings
                    </option>
                    <option value="Food">Food and Drinks</option>
                    <option value="Calls">Calls</option>
                    <option value="Transport">Transport</option>
                    <option value="Books">Books</option>
                    <option value="Others">Others</option>
                  </Select>

                  <FormInput
                    name="individualAmount"
                    placeholder="Amount (in #)"
                    type="text"
                    value={formik.values.individualAmount}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="rounded-sm"
                  />
                  {parseInt(formik.values.individualAmount) > amount && (
                    <small className="text-red-500">{`Amount must be less than ${amount}`}</small>
                  )}

                  {Number(
                    Number(total) + Number(formik.values.individualAmount)
                  ) >= Number(amount) && (
                    <small className="text-red-500">{`Budget amount exceeded ${amount}`}</small>
                  )}

                  <Box>
                    <Flex justifyContent="flex-end">
                      <Box>
                        <Button
                          type="submit"
                          disabled={
                            !formik.isValid ||
                            parseInt(formik.values.individualAmount) > amount ||
                            Number(
                              Number(total) +
                                Number(formik.values.individualAmount)
                            ) >= Number(amount)
                          }
                          className="disabled:cursor-not-allowed !justify-end !bg-transparent"
                        >
                          <IoIosAdd className="bg-primary100 text-primary rounded-full py-2 text-5xl" />
                        </Button>
                      </Box>
                    </Flex>
                  </Box>

                  {categories.length > 0 && costBreakdown()}

                  <Box className="mt-[100px]">
                    <Flex justifyContent="space-between" alignItems={"center"}>
                      <Text className="block text-sm lg:text-md">
                        % of budget remaining:
                        {total === 0
                          ? calculatePercentage(total, amount)
                          : 100 - Number(calculatePercentage(total, amount))}
                        %
                      </Text>

                      <Box>
                        <Button
                          type="submit"
                          className="!bg-transparent !text-primary disabled:cursor-not-allowed !rounded-sm"
                          onClick={() => {
                            onClose();
                            navigate(".");
                          }}
                        >
                          <Flex alignItems="center" gap="2">
                            <Text>Done</Text>
                            <IoArrowForwardOutline />
                          </Flex>
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                </Form>
              </>
            );
          }}
        </Formik>
      );
    }
  };
  return (
    <div>
      <ModalComponent
        children={
          <Box pt="16" px="6">
            <Text className="text-center !font-bold" variant="displayXs">
              {displayHeader()}
            </Text>

            <Text fontWeight="bold" fontSize="2xl" marginTop={4}>
              Create new budget
            </Text>

            <Text
              className="text-left !text-gray-body tracking-[0.75px]"
              variant="textXs"
            >
              {displaySubHeading()}
            </Text>
            {renderForm()}
          </Box>
        }
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default AccountForm;
