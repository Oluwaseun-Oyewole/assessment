"use client";
import { useBudgetData } from "@/context";
import { theme } from "@/theme";
import { PageTitle } from "@/utils/constants";
import { formatCurrency } from "@/utils/helper";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "../navlink";

const Header = () => {
  const pathname = usePathname();
  const getTitle = pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];
  const [click, setClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLInputElement | null | undefined | any>();
  const { total, amount } = useBudgetData();

  const handleClick = () => {
    setClicked((click) => !click);
  };

  return (
    <Box
      boxShadow="lg"
      bg="white"
      position="sticky"
      top="0"
      left="0"
      zIndex={20}
    >
      <Box maxWidth="90%" margin="auto" height="90px">
        <Flex alignItems="center" justifyContent="space-between" height="100%">
          <Flex
            alignItems="center"
            justifyContent="start"
            height="100%"
            fontSize="20"
            fontWeight="400"
            color={theme.colors?.secondary}
          >
            <Text>{PageTitle[getTitleEnum as keyof typeof PageTitle]}</Text>
          </Flex>
          <Hide above="lg">
            <Box onClick={handleClick}>
              {click ? (
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                  <IoMdClose />
                </Button>
              ) : (
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                  <RxHamburgerMenu />
                </Button>
              )}
            </Box>
          </Hide>
        </Flex>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
          setClicked(false);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box className="block md:hidden">
              <Flex
                height="80vh"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Text
                  color={theme.colors.primary}
                >{`Total spent : ${formatCurrency(total, `\u20A6`)} `}</Text>
                <Text
                  color={theme.colors.primary}
                >{`Available balance : ${formatCurrency(amount, `\u20A6`)} `}</Text>
              </Flex>
            </Box>
            <Box className="hidden md:block lg:hidden">
              <NavLink />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
