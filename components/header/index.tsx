"use client";
import { theme } from "@/theme";
import { PageTitle } from "@/utils/constants";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
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
          <Box onClick={handleClick} className="hidden md:block lg:hidden">
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
            <NavLink />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
