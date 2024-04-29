"use client";
import { theme } from "@/theme";
import appRoutes from "@/utils/app.routes";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <Box
      margin="auto"
      position="fixed"
      bottom="0"
      left="0"
      paddingY="4"
      width="100%"
      bg="white"
      boxShadow="dark-lg"
      className="block md:hidden"
    >
      <Flex justifyContent="space-around">
        {appRoutes?.map((routes, index) => {
          return (
            <Flex
              key={index}
              color={theme.colors.secondary}
              gap={3}
              alignItems="center"
              fontWeight="400"
              direction="column"
            >
              <Image
                src={routes?.icon}
                alt="nav image"
                height={20}
                width={20}
              />

              <Link
                href={routes?.path}
                className={
                  pathname === routes.path ? "text-blue-500 text-sm" : ""
                }
              >
                {routes?.name}
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BottomNavigation;
