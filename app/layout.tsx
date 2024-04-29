import BottomNavigation from "@/components/bottom-nav";
import Navigation from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ContextProvider } from "@/context";
import { Box, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Budget",
  description: "A simple budget application",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.outfit.variable}>
      <body>
        <Providers>
          <main>
            <Flex>
              <Box
                width={{
                  base: "0%",
                  xl: "18%",
                }}
              >
                <Sidebar />
              </Box>
              <Box
                width={{
                  base: "100%",
                  xl: "82%",
                }}
                className="bg-gray-50"
              >
                <Navigation />

                <Box
                  maxWidth="90%"
                  margin="auto"
                  paddingTop="20px"
                  css={{
                    "&::-webkit-scrollbar": {
                      width: "0px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "0px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "transparent",
                      borderRadius: "24px",
                    },
                  }}
                >
                  <ContextProvider>{children}</ContextProvider>
                </Box>
                <BottomNavigation />
              </Box>
            </Flex>
          </main>
        </Providers>
      </body>
    </html>
  );
}
