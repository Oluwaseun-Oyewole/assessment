import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ImageUpload } from ".";
import { formatCurrency } from "../../../../helper";
import { ContextCreator } from "../../context";
import { ContextCreatorType } from "../../context/type";

export const CategoryBreakDown = () => {
  const { categories } = useContext(ContextCreator) as ContextCreatorType;

  return (
    <Box className="py-4  lg:mb-0">
      <Text fontSize="2xl" fontWeight={"600"} py={6}>
        Category Breakdown
      </Text>

      <Box className="flex flex-col gap-5">
        {categories?.map((category, index) => {
          return (
            <Box key={index} className="flex justify-between">
              <Box className="flex items-center gap-4">
                {ImageUpload(category.title)}
                <Box>
                  <Text className="text-base font-semibold">
                    {category.title}
                  </Text>
                  <Text className="text-sm text-secondary mt-2">
                    {category.percentage} %
                  </Text>
                </Box>
              </Box>
              <Text>
                <span className="font-semibold">
                  {`${formatCurrency(Number(category?.amount), `\u20A6`)}`}
                </span>
                /
                <span className="text-secondary">
                  {`${formatCurrency(Number(category.total), `\u20A6`)}`}
                </span>
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
