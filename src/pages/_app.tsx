import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { themes } from "themes";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={themes}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
