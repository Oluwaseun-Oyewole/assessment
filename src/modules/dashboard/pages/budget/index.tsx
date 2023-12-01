import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import Tools from "../../../../assets/svg/Tools.svg";
import Books from "../../../../assets/svg/books.svg";
import Calls from "../../../../assets/svg/call.svg";
import EmptyBudget from "../../../../assets/svg/emptyBudget.svg";
import Food from "../../../../assets/svg/food.svg";
import Savings from "../../../../assets/svg/savings.svg";
import Transport from "../../../../assets/svg/transport.svg";
import { formatCurrency } from "../../../../helper";
import { budgetCard } from "../../../../helper/keyConstants";
import { ChartComponent } from "../../components/charts";
import TabComponent from "../../components/tabs";
import { ContextCreator } from "../../context";
import { ContextCreatorType } from "../../context/type";
import { CategoryBreakDown } from "./category";
import AccountForm from "./form";

export const ImageUpload = (title: string) => {
  switch (title) {
    case "Food":
      return <img src={Food} alt="img" className="w-10 h-10" />;
    case "Savings":
      return <img src={Savings} alt="img" className="w-10 h-10" />;
    case "Transport":
      return <img src={Transport} alt="img" className="w-10 h-10" />;
    case "Calls":
      return <img src={Calls} alt="img" className="w-10 h-10" />;
    case "Books":
      return <img src={Books} alt="img" className="w-10 h-10" />;
    default:
      return <img src={Tools} alt="img" className="w-10 h-10" />;
  }
};

const Budget = () => {
  const { amount, categories, total, setCategoryData } = useContext(
    ContextCreator
  ) as ContextCreatorType;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dashboardCards = budgetCard.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card, amount: amount };
      default:
        return card;
    }
  });

  const ThisMonthData = () => {
    const valueArray = categories?.map((element) => {
      return Number(element?.percentage);
    });
    const labelArray = categories?.map((element) => {
      return element?.title;
    });

    return (
      <>
        {amount > 0 ? (
          <Box>
            <Box>
              <ChartComponent
                id="chart"
                type="donut"
                series={valueArray}
                label={labelArray}
              />
            </Box>

            <Text
              className="text-secondary text-center py-6"
              fontSize={"large"}
              fontWeight={"bold"}
            >
              Amount spent so far
            </Text>

            <Box className="flex items-center justify-center ">
              <Text
                className="text-primary text-center"
                fontSize={"large"}
                fontWeight={"bold"}
              >
                {total > amount
                  ? `${formatCurrency(Number(0), `\u20A6`)}`
                  : `${formatCurrency(Number(total), `\u20A6`)}`}
              </Text>
              <span className="text-primaryLight"> /</span>
              <Text
                className=" text-primaryLight text-center"
                fontSize={"large"}
                fontWeight={"bold"}
              >
                {`${formatCurrency(Number(amount), `\u20A6`)}`}
              </Text>
            </Box>
            <CategoryBreakDown />
          </Box>
        ) : (
          <Box>
            <Box className="flex flex-col gap-7 items-center justify-center pt-10 ">
              <img src={EmptyBudget} />
              <Text
                className="text-secondary text-center"
                fontSize={"medium"}
                fontWeight={"medium"}
              >
                You haven't created a <br /> budget for this month yet
              </Text>
            </Box>
          </Box>
        )}
      </>
    );
  };

  const LastMonth = () => {
    return <Box>....</Box>;
  };

  const data = [
    {
      id: 1,
      label: "Last Month",
      content: <LastMonth />,
    },
    {
      id: 2,
      label: "This Month",
      content: <ThisMonthData />,
    },
  ];

  useEffect(() => {
    if (total > amount) {
      setCategoryData([]);
    }
  }, [total, amount]);

  return (
    <Box className="max-h-[calc(100vh-4.75rem)] overflow-y-auto scroll-pt-5">
      <Box className="flex py-1">
        <AccountForm isOpen={isOpen} onClose={onClose} />
        {dashboardCards?.map((order) => {
          return (
            <Box key={order.id} className="px-1 py-5 w-full lg:w-[40%]">
              <Box className="flex gap-2 items-center">
                <img src={`${order.icon}`} alt="" />
                <Text className="text-base font-medium font-clash text-secondary">
                  {order.title}
                </Text>
              </Box>

              <Box>
                <Box className="mt-2 px-5 py-10 rounded-lg font-semibold font-clash text-heroColor bg-white w-full shadow-md">
                  {amount > 0 ? (
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text className="text-[28px]">
                        {`${formatCurrency(Number(order?.amount), `\u20A6`)}`}
                      </Text>

                      <Box
                        className="bg-primary100 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
                        onClick={onOpen}
                      >
                        <IoMdAdd className="text-primary" size={15} />
                      </Box>
                    </Flex>
                  ) : (
                    <Box className="flex items-center justify-between">
                      <Text fontWeight={"medium"}>Create a budget</Text>
                      <Box
                        className="bg-primary100 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
                        onClick={onOpen}
                      >
                        <IoMdAdd className="text-primary" size={15} />
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="mt-8">
        <TabComponent tabs={data} />
      </Box>
    </Box>
  );
};

export default Budget;
