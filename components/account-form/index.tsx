import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import ModalComponent, { ModalProps } from "../modal";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

interface IAccountType extends ModalProps {}

const AccountForm = ({ isOpen, onClose }: IAccountType) => {
  const searchParams = useSearchParams();
  const step = +searchParams.get("step")! ?? 1;
  const { replace } = useRouter();

  const renderForm = () => {
    if (step === 1) {
      return <StepOne />;
    } else if (step === 2) {
      return <StepTwo onClose={onClose} />;
    } else return <StepOne />;
  };

  const displayHeader = () => {
    if (step === 1) {
      return (
        <Flex justifyContent="space-between" alignItems="center">
          <IoArrowForwardSharp
            onClick={() => replace("/budget?step=2&isOpen=true")}
            cursor="pointer"
          />
          <Text>1/2</Text>
        </Flex>
      );
    } else if (step === 2) {
      return (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          onClick={() => {
            return replace("/budget?step=1&isOpen=true");
          }}
        >
          <IoMdArrowRoundBack cursor="pointer" />
          <Text>2/2</Text>
        </Flex>
      );
    } else {
      return (
        <Flex justifyContent="space-between" alignItems="center">
          <IoArrowForwardSharp
            onClick={() => replace("/budget?step=2&isOpen=true")}
            cursor="pointer"
          />
          <Text>1/2</Text>
        </Flex>
      );
    }
  };

  const displaySubHeading = () => {
    if (step === 1) {
      return (
        <Text
          fontWeight="medium"
          fontSize="md"
          paddingY="5"
          className="text-gray-500"
        >
          How much would you like to budget for the month?
        </Text>
      );
    } else if (step === 2) {
      return (
        <Text
          fontWeight="medium"
          fontSize="md"
          marginTop={4}
          className="text-gray-500"
        >
          How much would you like to spend on each category this month?
        </Text>
      );
    } else {
      return (
        <Text
          fontWeight="medium"
          fontSize="md"
          marginTop={4}
          className="text-gray-500"
        >
          How much would you like to budget for the month?
        </Text>
      );
    }
  };

  return (
    <ModalComponent
      children={
        <Box pt="16" px="6">
          {displayHeader()}
          <Text fontWeight="bold" fontSize="2xl" marginTop="6">
            Create new budget
          </Text>
          {displaySubHeading()}
          {renderForm()}
        </Box>
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default AccountForm;
