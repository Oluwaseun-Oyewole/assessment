"use client";
import { theme } from "@/theme";
import appRoutes from "@/utils/app.routes";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "../navlink";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <Box height="100vh" boxShadow="lg" className="hidden lg:block">
      <Flex
        direction="column"
        justifyContent="space-between"
        maxWidth="75%"
        marginX="auto"
        paddingY="130"
        height="70vh"
      >
        {appRoutes?.map((routes, index) => {
          return (
            <Flex
              key={index}
              color={theme.colors.secondary}
              gap={5}
              alignItems="center"
              fontWeight="400"
            >
              <Box>
                {pathname === routes.path ? (
                  <>{routes?.iconSolid}</>
                ) : (
                  <Image
                    src={routes?.icon}
                    alt="nav image"
                    height={25}
                    width={25}
                  />
                )}
              </Box>
              <Link
                href={routes?.path}
                className={
                  pathname === routes.path
                    ? "text-blue-500"
                    : "text-gray-400 font-medium"
                }
              >
                {routes?.name}
              </Link>
            </Flex>
          );
        })}
      </Flex>
      <NavLink />
    </Box>
  );
};

export default Sidebar;
