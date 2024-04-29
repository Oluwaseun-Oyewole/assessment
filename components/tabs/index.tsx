"use client";
import Naira from "@/assets/svg/naira.svg";
import { theme } from "@/theme";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

export type TabType = {
  id: number;
  label: string;
  content: ReactNode;
  className?: string;
};
export interface TabProp extends TabProps {
  tabs: TabType[];
}

const TabComponent: React.FC<TabProp> = ({ tabs }) => {
  const searchParams = useSearchParams();
  const tabIdx = +searchParams.get("tab")! ?? 0;
  const [tabIndex, setTabIndex] = useState(tabIdx);
  const { push } = useRouter();

  const onTabChange = (tabIndex: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tabIndex?.toString());
    setTabIndex(tabIndex);
    push(`?${params.toString()}`);
  };

  return (
    <Box>
      <Tabs
        variant={"unstyled"}
        onChange={(index) => onTabChange(index)}
        index={tabIdx}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                color={theme.colors.secondary}
                position="sticky"
                top="0"
                left="0"
                paddingBottom="5"
              >
                {tab.label}
                {tabIndex === index && (
                  <Text
                    position="absolute"
                    height="3px"
                    width="27px"
                    bg={theme.colors.primary}
                    top="10"
                    left="4"
                  ></Text>
                )}
              </Tab>
            ))}
          </TabList>

          <Menu>
            <MenuButton
              as={Button}
              bg="transparent"
              _hover={{ bg: "gray.200" }}
              _focus={{ boxShadow: "outline" }}
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
            >
              ...
            </MenuButton>
            <MenuList>
              <MenuItem fontSize={"small"} className="flex gap-2 items-center">
                <Image src={Naira} alt="naira image" /> Expenses Category
              </MenuItem>
              <MenuItem fontSize={"small"} className="flex gap-2">
                <Image src={Naira} alt="naira" /> Category Overview
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <TabPanels overflowY="scroll" height="50vh" paddingBottom={20}>
          {tabs.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabComponent;
