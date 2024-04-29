import Tools from "@/assets/svg/Tools.svg";
import Books from "@/assets/svg/books.svg";
import Calls from "@/assets/svg/call.svg";
import Food from "@/assets/svg/food.svg";
import Savings from "@/assets/svg/savings.svg";
import Transport from "@/assets/svg/transport.svg";
import { useBudgetData } from "@/context";
import { formatCurrency } from "@/utils/helper";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { IoMdRemove } from "react-icons/io";

export const ImageUpload = (title: string) => {
  switch (title) {
    case "Food":
      return <Image src={Food} alt="Image" className="w-10 h-10" />;
    case "Savings":
      return <Image src={Savings} alt="Image" className="w-10 h-10" />;
    case "Transport":
      return <Image src={Transport} alt="Image" className="w-10 h-10" />;
    case "Calls":
      return <Image src={Calls} alt="Image" className="w-10 h-10" />;
    case "Books":
      return <Image src={Books} alt="Image" className="w-10 h-10" />;
    default:
      return <Image src={Tools} alt="Image" className="w-10 h-10" />;
  }
};

export const CostBreakdown = () => {
  const { removeCategory, categories, setCategoryData } = useBudgetData();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const categories = localStorage.getItem("categories");
      setCategoryData(JSON.parse(categories!));
    }
  }, []);

  return (
    <Box height="350" marginTop={6} overflowY="scroll">
      {categories?.map((category, index) => {
        return (
          <Box key={index} fontSize={["13"]}>
            <Flex justifyContent="space-between" alignItems="center" gap={8}>
              {ImageUpload(category.title)}
              <Text>{category.title}</Text>
              <Text>{formatCurrency(+category.amount, `\u20A6`)}</Text>
              <Text>{Number(category.percentage)?.toFixed(2)} %</Text>
              <Box>
                <IoMdRemove
                  className="bg-gray-200 text-gray-500 rounded-full py-2 text-3xl cursor-pointer"
                  onClick={() => {
                    removeCategory(category?.id);
                  }}
                />
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};
