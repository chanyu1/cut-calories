import { extendTheme } from "@chakra-ui/react";
// import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    // props: StyleFunctionProps
    global: () => ({
      // html: {
      //   height: "100%",
      // },
      body: {
        color: "white",
        bg: "black",
        // height: "100%",
        // margin: "0",
      },
    }),
  },
});
