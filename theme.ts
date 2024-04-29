/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-outfit)",
    body: "var(--font-outfit)",
  },
  colors: {
    primary: "rgba(4, 102, 200, 1)",
    primary_100: "rgba(202, 221, 241, 1)",
    primary_light: "rgba(103, 162, 220, 1)",
    secondary: "#3A3B65",
  },
});
