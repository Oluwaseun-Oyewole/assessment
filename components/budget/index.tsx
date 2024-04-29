"use client";
import PlusIcon from "@/assets/svg/plusIcon.svg";
import AccountForm from "@/components/account-form";
import LastMonth from "@/components/months/last-month";
import ThisMonth from "@/components/months/this-month";
import TabComponent from "@/components/tabs";
import { useBudgetData } from "@/context";
import { budgetCard } from "@/utils/constants";
import { formatCurrency } from "@/utils/helper";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Budget = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const isModalOpen = searchParams.get("isOpen");
  const { amount } = useBudgetData();
  const { setCategoryData } = useBudgetData();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const categories = localStorage.getItem("categories");
      setCategoryData(JSON.parse(categories!));
    }
  }, []);

  const handleModalOpening = () => {
    const params = new URLSearchParams(searchParams);
    params.set("isOpen", "true");
    onOpen();
    push(`?${params.toString()}`);
  };

  const budgetCards = budgetCard.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card, amount };
      default:
        return card;
    }
  });
  const data = [
    {
      id: 0,
      label: "Last Month",
      content: <LastMonth />,
    },
    {
      id: 1,
      label: "This Month",
      content: <ThisMonth />,
    },
  ];

  return (
    <Box paddingTop="7">
      <AccountForm
        isOpen={isModalOpen === "true" ? true : isOpen}
        onClose={onClose}
      />
      <Box>
        {budgetCards?.map((order) => {
          return (
            <Box key={order.id}>
              <Flex direction="column" gap={5}>
                <Flex alignItems="center" gap={3}>
                  <Image src={order.icon} alt="" width={30} height={30} />
                  <Text>{order.title}</Text>
                </Flex>
                <Box
                  bg="white"
                  boxShadow="lg"
                  paddingX="4"
                  paddingY={["4", "7"]}
                  width={["100%", "60%", "60%", "40%"]}
                  borderRadius="lg"
                >
                  <Flex alignItems="center" justifyContent="space-between">
                    {amount > 0 ? (
                      <Text fontSize={["20", "27"]}>
                        {`${formatCurrency(Number(order?.amount), `\u20A6`)}`}
                      </Text>
                    ) : (
                      <Text fontSize={["16", "20"]}>Create a budget</Text>
                    )}
                    <Button
                      background="transparent"
                      _hover={{ bg: "transparent" }}
                      onClick={handleModalOpening}
                    >
                      <Image src={PlusIcon} alt="plus icon" />
                    </Button>
                  </Flex>
                </Box>
              </Flex>
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
