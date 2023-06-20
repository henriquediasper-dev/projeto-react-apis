import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export const Chakra = ({ children }) => (
  <ChakraProvider>
    <CSSReset />
    {children}
  </ChakraProvider>
);
