"use client";
import EmptyBudget from "@/assets/svg/emptyBudget.svg";
import { ChartComponent } from "@/components/charts";
import { CostBreakdown } from "@/components/cost-breakdown";
import { useBudgetData } from "@/context";
import { theme } from "@/theme";
import { formatCurrency } from "@/utils/helper";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThisMonth = () => {
  const { amount, categories, total } = useBudgetData();
  const { replace } = useRouter();
  const valueArray = categories?.map((element) => {
    return +element?.percentage;
  });
  const labelArray = categories?.map((element) => {
    return element?.title;
  });

  return (
    <Box marginTop={10}>
      {amount > 0 ? (
        <Box>
          {categories?.length > 0 && (
            <Box>
              <ChartComponent
                id="chart"
                type="donut"
                series={valueArray}
                label={labelArray}
              />
            </Box>
          )}
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Text
              fontSize={"large"}
              fontWeight={"medium"}
              color={theme.colors.primary}
            >
              Amount spent so far
            </Text>

            <Flex gap={3}>
              <Text
                fontSize="large"
                fontWeight="medium"
                color={theme.colors.primary}
              >
                {total > amount
                  ? `${formatCurrency(0, `\u20A6`)}`
                  : `${formatCurrency(+total, `\u20A6`)}`}
              </Text>
              <Text> /</Text>
              <Text
                fontSize="large"
                fontWeight="medium"
                color={theme.colors.primary}
              >
                {`${formatCurrency(+amount, `\u20A6`)}`}
              </Text>
            </Flex>
          </Flex>
          {categories?.length > 0 ? (
            <>
              <Box marginTop={14}>
                <Text fontSize={["18", "25"]} fontWeight="medium">
                  Category Breakdown
                </Text>
                <CostBreakdown />
              </Box>
            </>
          ) : (
            <>
              <Text>No Category</Text>
              {amount > 0 && (
                <Button
                  onClick={() => replace("budget/?step=2&isOpen=true")}
                  marginTop={5}
                  fontWeight="medium"
                >
                  create category
                </Button>
              )}
            </>
          )}
        </Box>
      ) : (
        <Flex
          alignItems="center"
          justifyContent="center"
          direction="column"
          overflowY="scroll"
        >
          <Image src={EmptyBudget} alt="empty budget" />
          <Text fontSize="medium" fontWeight="medium" paddingTop="8">
            You haven't created a <br /> budget for this month yet
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default ThisMonth;
