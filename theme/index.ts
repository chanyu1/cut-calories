import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "white",
        bg: "black",
      },
    }),
  },
});
