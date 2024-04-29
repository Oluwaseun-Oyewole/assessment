"use client";
import { theme } from "@/theme";
import appRoutes from "@/utils/app.routes";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <Box className="block lg:hidden">
      <Flex
        direction="column"
        justifyContent="space-between"
        maxWidth="90%"
        marginX="auto"
        paddingY="130"
        height="50vh"
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
              <Image
                src={routes?.icon}
                alt="nav image"
                height={25}
                width={25}
              />

              <Link
                href={routes?.path}
                className={pathname === routes.path ? "text-blue-500" : ""}
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

export default NavLink;
