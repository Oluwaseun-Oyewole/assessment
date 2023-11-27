import {
  Button,
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
} from "@chakra-ui/react";
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
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs variant={"unstyled"} onChange={(index) => setTabIndex(index)}>
        <div className="flex items-center justify-between">
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`text-secondary font-bold text-base flex flex-col relative ${
                  tabIndex === index && " text-primary"
                }`}
              >
                {tab.label}
                {tabIndex === index && (
                  <span className="w-[25px] h-[3px] bg-primary absolute top-10 left-4"></span>
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
              <MenuItem fontSize={"small"}>Expenses Category</MenuItem>
              <MenuItem fontSize={"small"}>Category Overview</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
